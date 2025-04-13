import PropTypes from "prop-types";
import {
  Calories,
  Container,
  Item,
  Kcal,
  Name,
  Quantity,
} from "./DiaryProductListItem.styles";
import { ControlButton } from "../../../../../components/ControlButton";
import { useDeleteEntryMutation } from "../../../../../features/diary/diaryApi";
import { useSelector } from "react-redux";
import { selectEntries } from "../../../../../features/diary/diarySlice";

export const DiaryProductListItem = ({ name, calories, quantity, id }) => {
  const entries = useSelector(selectEntries);
  const [deleteEntry] = useDeleteEntryMutation();

  function handleClick(evt) {
    evt.preventDefault();

    const id = evt.currentTarget.id;
    const { date } = entries.find((entrie) => entrie._id === id);

    deleteEntry({ id, date });
  }

  return (
    <Item>
      <Container>
        <Name>{name}</Name>
        <Quantity>{quantity} g</Quantity>
        <Calories>
          {calories}
          <Kcal> kcal</Kcal>
        </Calories>
        <ControlButton
          id={id}
          buttonContext="product-list"
          iconName="close"
          iconContext="product-list"
          onClick={handleClick}
        />
      </Container>
    </Item>
  );
};

DiaryProductListItem.propTypes = {
  name: PropTypes.string,
  calories: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
};
