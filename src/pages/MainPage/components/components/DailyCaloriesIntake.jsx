import {
  Container,
  DailyRateCal,
  DailyRateCalTitle,
  Value,
  Item,
  List,
  Kcal,
  RestrictedProd,
  RestrictedProdTitle,
  Space,
  Text,
  Content,
  Wrapper,
} from "./DailyCaloriesIntake.styles";
import { NavLink } from "react-router-dom";
import { ActionButton } from "../../../../components/ActionButton";
import { StyledDivider } from "../../../../styles/components/CustomDivider.styles";
// import { useSelector } from 'react-redux';
// import {
//   selectDailyRateCal,
//   selectRestrictedProdList,
// } from 'components/redux/diary/selectors';

export const DailyCaloriesIntake = () => {
  // const restrictedProdList = useSelector(selectRestrictedProdList);
  // const dailyRateCal = useSelector(selectDailyRateCal);

  const restrictedProdList = [
    "flour products",
    "milk",
    "read meat",
    "smoked meats",
  ];
  const dailyRateCal = 2800;

  return (
    <Container>
      <Wrapper>
        <Content>
          <DailyRateCal>
            <DailyRateCalTitle>
              Your recommended daily calorie intake is
            </DailyRateCalTitle>
            <Value>
              {dailyRateCal === null ? "0" : dailyRateCal}
              <Space> </Space>
              <Kcal>kcal</Kcal>
            </Value>
          </DailyRateCal>
          <StyledDivider dividerContext="daily-calories-modal" />
          <RestrictedProd>
            <RestrictedProdTitle>Foods you should not eat</RestrictedProdTitle>
            <List>
              {restrictedProdList.length === 0 ? (
                <Text>Your diet will be displayed here</Text>
              ) : (
                restrictedProdList?.map((restrictedProduct) => (
                  <Item key={restrictedProdList.indexOf(restrictedProduct)}>
                    {`${
                      restrictedProdList.indexOf(restrictedProduct) + 1
                    }. ${restrictedProduct}`}
                  </Item>
                ))
              )}
            </List>
          </RestrictedProd>
          <NavLink to="login">
            <ActionButton buttonContext="daily-calories-modal">
              Start losing weight
            </ActionButton>
          </NavLink>
        </Content>
      </Wrapper>
    </Container>
  );
};
