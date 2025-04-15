import {
  Container,
  Value,
  Item,
  List,
  Kcal,
  Space,
  Text,
  Content,
  Wrapper,
  RestrictedFoods,
  RestrictedFoodsTitle,
  RecommendedCalories,
  RecommendedCaloriesTitle,
} from "./DailyCaloriesIntake.styles";
import { NavLink } from "react-router-dom";
import { ActionButton } from "../../../../components/ActionButton";
import { StyledDivider } from "../../../../styles/components/CustomDivider.styles";
import { useSelector } from "react-redux";
import { selectHealthData } from "../../../../features/health/healthSlice";
import { useEffect, useState } from "react";

export const DailyCaloriesIntake = () => {
  const healthData = useSelector(selectHealthData);
  const [recommendedCalories, setRecommendedCalories] = useState(0);
  const [restrictedFoods, setRestrictedFoods] = useState([]);

  useEffect(() => {
    if (healthData) {
      setRecommendedCalories(healthData.recommendedCalories);
      setRestrictedFoods(healthData.restrictedFoods);
    }
  }, [healthData]);

  return (
    <Container>
      <Wrapper>
        <Content>
          <RecommendedCalories>
            <RecommendedCaloriesTitle>
              Your recommended daily calorie intake is
            </RecommendedCaloriesTitle>
            <Value>
              {recommendedCalories}
              <Space> </Space>
              <Kcal>kcal</Kcal>
            </Value>
          </RecommendedCalories>
          <StyledDivider dividerType="daily-calories-modal" />
          <RestrictedFoods>
            <RestrictedFoodsTitle>
              Foods you should not eat
            </RestrictedFoodsTitle>
            <List>
              {restrictedFoods.length === 0 ? (
                <Text>Your diet will be displayed here</Text>
              ) : (
                restrictedFoods.map((restrictedFood) => (
                  <Item key={restrictedFood._id}>
                    {`${restrictedFoods.indexOf(restrictedFood) + 1}. ${
                      restrictedFood.title
                    }`}
                  </Item>
                ))
              )}
            </List>
          </RestrictedFoods>
          <NavLink to="login">
            <ActionButton buttonType="daily-calories-modal">
              Start losing weight
            </ActionButton>
          </NavLink>
        </Content>
      </Wrapper>
    </Container>
  );
};
