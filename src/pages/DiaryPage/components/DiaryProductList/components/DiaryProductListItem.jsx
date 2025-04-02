import PropTypes from "prop-types";
import {
  Box,
  Calories,
  Container,
  Flex,
  Item,
  Kcal,
  Name,
  Quantity,
} from "./DiaryProductListItem.styles";
import { ControlButton } from "../../../../../components/ControlButton";

export const DiaryProductListItem = ({ name, calories, quantity }) => {
  return (
    <Item>
      <Container>
        <Box>
          <Flex>
            <Name>{name}</Name>
            <Quantity>{quantity} g</Quantity>
          </Flex>
          <Calories>
            {calories}
            <Kcal> kcal</Kcal>
          </Calories>
        </Box>
        <ControlButton
          buttonContext="product-list"
          iconName="close"
          iconContext="product-list"
        />
      </Container>
    </Item>
  );
};

DiaryProductListItem.propTypes = {
  name: PropTypes.string,
  calories: PropTypes.number,
  quantity: PropTypes.number,
};
