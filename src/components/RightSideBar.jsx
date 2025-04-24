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
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectUser } from "../features/auth/authSelectors";
import { selectSelectedDate } from "../features/dateSlice";
import { formatDateToUI, todayDayjs } from "../utils/dateUtils";
import { selectEntries } from "../features/diary/diarySlice";
import { calculateTotalCalories } from "../utils/calorieUtils";

export const RightSideBar = () => {
  const today = todayDayjs();
  const { healthData } = useSelector(selectUser);
  const selectedDate = useSelector(selectSelectedDate);
  const [recommendedCalories, setRecommendedCalories] = useState(0);
  const [restrictedFoods, setRestrictedFoods] = useState([]);
  const [date, setDate] = useState(today);
  const [consumedCalories, setConsumedCalories] = useState(0);
  const entries = useSelector(selectEntries);
  const leftCalories = recommendedCalories - consumedCalories;
  const caloriesIntake = Math.round(
    (consumedCalories / recommendedCalories) * 100
  );
  const formattedDate = formatDateToUI(date);

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
                  <TextWrapper>
                    {Number.isNaN(caloriesIntake) ? "0%" : `${caloriesIntake}%`}
                  </TextWrapper>
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
