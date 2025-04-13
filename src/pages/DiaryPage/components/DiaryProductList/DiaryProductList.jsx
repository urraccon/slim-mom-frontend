import { useSelector } from "react-redux";
import { Container, List, Message } from "./DiaryProductList.styles";
import { DiaryProductListItem } from "./components/DiaryProductListItem";
import { useEffect, useState } from "react";
import { selectEntries } from "../../../../features/diary/diarySlice";

export const DiaryProductList = () => {
  const entries = useSelector(selectEntries);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (entries) {
      setItems(entries);
    }
  }, [entries]);

  return (
    <>
      <Container>
        <List>
          {items.length === 0 ? (
            <Message>Your diary will be displayed here</Message>
          ) : (
            items.map((item) => {
              const name = item.product.title;
              const calories = item.product.calories;
              const quantity = item.quantity;
              const key = item._id;
              const id = item._id;

              return (
                <DiaryProductListItem
                  name={name}
                  calories={calories}
                  quantity={quantity}
                  key={key}
                  id={id}
                />
              );
            })
          )}
        </List>
      </Container>
    </>
  );
};
