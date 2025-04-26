import {
  Container,
  Item,
  List,
  Title,
  Message,
  Box,
  TextWrapper,
  Content,
  Block,
  Wrapper,
} from "../styles/components/RightSideBar.styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectUser } from "../features/auth/authSelectors";
import { selectSelectedDate } from "../features/dateSlice";
import {
  formatDateToISO,
  formatDateToUI,
  todayDayjs,
} from "../utils/dateUtils";
import { selectEntries, setEntries } from "../features/diary/diarySlice";
import { calculateTotalCalories } from "../utils/calorieUtils";
import { useGetEntriesByDateQuery } from "../features/diary/diaryApi";

export const RightSideBar = () => {
  const today = todayDayjs();
  const { healthData } = useSelector(selectUser);
  const selectedDate = useSelector(selectSelectedDate);
  const [recommendedCalories, setRecommendedCalories] = useState(0);
  const [restrictedFoods, setRestrictedFoods] = useState([]);
  const [date, setDate] = useState(today);
  const [consumedCalories, setConsumedCalories] = useState(0);
  const entries = useSelector(selectEntries);
  const [leftCalories, setLeftCalories] = useState(0);
  const [caloriesIntake, setCaloriesIntake] = useState(0);
  const formattedDate = formatDateToUI(date);
  const isoDate = formatDateToISO(date);
  const { data } = useGetEntriesByDateQuery(isoDate);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setEntries(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (entries) {
      const caloriesSum = calculateTotalCalories(entries);
      setConsumedCalories(caloriesSum);
    }
  }, [entries]);

  useEffect(() => {
    if (healthData) {
      setRecommendedCalories(healthData.recommendedCalories);
      setRestrictedFoods(healthData.restrictedFoods);
    }
  }, [healthData]);

  useEffect(() => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (recommendedCalories !== 0 && consumedCalories !== 0) {
      setLeftCalories(recommendedCalories - consumedCalories);
      setCaloriesIntake(
        Math.round((consumedCalories / recommendedCalories) * 100)
      );
    } else {
      setLeftCalories(0);
      setCaloriesIntake(0);
    }
  }, [recommendedCalories, consumedCalories]);

  return (
    <Container>
      <Content>
        <Wrapper>
          <Block>
            <Title>Summary for {formattedDate}</Title>
            <List>
              <Item>
                <Box>
                  <TextWrapper>Left</TextWrapper>
                  <TextWrapper>{Math.round(leftCalories)} kcal</TextWrapper>
                </Box>
              </Item>
              <Item>
                <Box>
                  <TextWrapper>Consumed</TextWrapper>
                  <TextWrapper>{Math.round(consumedCalories)} kcal</TextWrapper>
                </Box>
              </Item>
              <Item>
                <Box>
                  <TextWrapper>Daily rate</TextWrapper>
                  <TextWrapper>{recommendedCalories} kcal</TextWrapper>
                </Box>
              </Item>
              <Item>
                <Box>
                  <TextWrapper>n% of normal</TextWrapper>
                  <TextWrapper>{`${caloriesIntake}%`}</TextWrapper>
                </Box>
              </Item>
            </List>
          </Block>
          <Block>
            <Title>Food not recommended</Title>
            <List listType="restricted-foods">
              {restrictedFoods?.length === 0 ? (
                <Message>Your diet will be displayed here</Message>
              ) : (
                restrictedFoods?.map((restrictedFood) => (
                  <Item key={restrictedFood._id} itemType="restricted-foods">
                    <TextWrapper textType="restricted-foods">
                      {restrictedFood.title}
                    </TextWrapper>
                  </Item>
                ))
              )}
            </List>
          </Block>
        </Wrapper>
      </Content>
    </Container>
  );
};
