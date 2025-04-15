import PropTypes from "prop-types";
import {
  Calories,
  Container,
  Item,
  Kcal,
  Name,
  Quantity,
} from "./DiaryProductListItem.styles";
import { useDeleteEntryMutation } from "../../../../../features/diary/diaryApi";
import { useSelector } from "react-redux";
import { selectEntries } from "../../../../../features/diary/diarySlice";
import ActionMenu from "../../../../../components/ActionMenu";
import { DiaryEditProductForm } from "./components/DiaryEditProductForm";
import { useState } from "react";
import CustomMenuItem from "../../../../../components/CustomMenuItem";

export const DiaryProductListItem = ({ name, calories, quantity, id }) => {
  const entries = useSelector(selectEntries);
  const [deleteEntry] = useDeleteEntryMutation();
  const [editProductModalData, setEditProductModalData] = useState({
    product: null,
    quantity: "",
    id: null,
    date: null,
  });
  const [anchorEl, setAnchorEl] = useState(null);

  function handleDelete(evt) {
    evt.preventDefault();
    setAnchorEl(null);

    const id = evt.currentTarget.id;
    const { date } = entries.find((entrie) => entrie._id === id);

    deleteEntry({ id, date });
  }

  function handleEdit(evt) {
    evt.preventDefault();
    setAnchorEl(null);

    const id = evt.currentTarget.id;
    const { product, quantity, date } = entries.find(
      (entrie) => entrie._id === id
    );

    setEditProductModalData({
      product,
      quantity: String(quantity),
      id,
      date,
    });
  }

  return (
    <>
      <Item>
        <Container>
          <Name>{name}</Name>
          <Quantity>{quantity} g</Quantity>
          <Calories>
            {calories}
            <Kcal> kcal</Kcal>
          </Calories>
          <ActionMenu
            onClick={(evt) => setAnchorEl(evt.currentTarget)}
            onClose={() => setAnchorEl(null)}
            anchorEl={anchorEl}
          >
            <CustomMenuItem
              id={id}
              label="Delete"
              iconName="delete"
              onClick={handleDelete}
            />
            <CustomMenuItem
              id={id}
              label="Edit"
              iconName="edit"
              onClick={handleEdit}
            />
          </ActionMenu>
        </Container>
      </Item>
      <DiaryEditProductForm formData={editProductModalData} />
    </>
  );
};

DiaryProductListItem.propTypes = {
  name: PropTypes.string,
  calories: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
};
