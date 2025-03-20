import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Fields, Form } from "./DiaryAddProductForm.style";
import AddIcon from "@mui/icons-material/Add";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { ButtonComp } from "../../../components/Button";
import { ModalComp } from "../../../components/Modal";
import { Field } from "../../../components/Field";
import {
  prodNameValidation,
  quantityValidation,
} from "../../../utils/validator";
import { addProduct } from "../../../redux/diary/diaryActions";

const btnStyle = {
  minWidth: 0,
  padding: "12.5px",
  alignSelf: "center",
};

const iconStyle = {
  fontSize: 23,
  color: "white",
};

const mobileAddBtnStyle = {
  width: 176,
  padding: 0,
  lineHeight: 1.3,
  height: 44,
};

const mobileFieldStyle = {
  width: "100%",
};

const lgQtyFieldStyle = (tablet) => ({
  width: tablet ? "30.16%" : "30.15%",
});

const lgProdNameFieldSty = (tablet) => ({
  width: tablet ? "68.3%" : "67.64%",
});

const lgQtyFieldInputSty = {
  direction: "rtl",
  textAlign: "right",
};

const lgQtyFieldLabelSty = {
  right: 0,
  left: "auto",
};

export const DiaryAddProductForm = () => {
  const mobile = useMediaQuery({ maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });

  const [open, setOpen] = useState(false);
  const [productName, setProdName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [prodNameErr, setProdNameErr] = useState(null);
  const [quantityErr, setQuantityErr] = useState(null);
  const dispatch = useDispatch();

  function handleSubmit(evt) {
    evt.preventDefault();

    const prodNameValid = prodNameValidation(productName);
    const quantityValid = quantityValidation(quantity);

    if (!prodNameValid) {
      setProdNameErr(true);
    } else {
      setProdNameErr(false);
    }

    if (!quantityValid) {
      setQuantityErr(true);
    } else {
      setQuantityErr(false);
    }

    if (prodNameValid && quantityValid) {
      const now = dayjs();

      const productData = {
        productName,
        quantity,
        date: now,
      };

      dispatch(addProduct(productData));
    }
  }

  return (
    <>
      {mobile ? (
        <>
          <ButtonComp onClick={() => setOpen(true)} style={btnStyle}>
            <AddIcon sx={iconStyle} />
          </ButtonComp>
          <ModalComp
            type="add-product"
            open={open}
            onClose={() => setOpen(false)}
          >
            <Container>
              <Form onSubmit={handleSubmit}>
                <Fields>
                  <Field
                    error={prodNameErr}
                    id="product"
                    label="Enter product name"
                    value={productName}
                    onChange={(evt) => setProdName(evt.target.value)}
                    style={mobileFieldStyle}
                  />
                  <Field
                    error={quantityErr}
                    id="quantity"
                    label="Grams"
                    value={quantity}
                    onChange={(evt) => setQuantity(evt.target.value)}
                    style={mobileFieldStyle}
                  />
                </Fields>
                <ButtonComp type="submit" style={mobileAddBtnStyle}>
                  Add
                </ButtonComp>
              </Form>
            </Container>
          </ModalComp>
        </>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Fields>
            <Field
              error={prodNameErr}
              id="product"
              label="Enter product name"
              value={productName}
              onChange={(evt) => setProdName(evt.target.value)}
              style={lgProdNameFieldSty(tablet)}
            />
            <Field
              error={quantityErr}
              id="quantity"
              label="Grams"
              value={quantity}
              onChange={(evt) => setQuantity(evt.target.value)}
              style={lgQtyFieldStyle(tablet)}
              inputStyle={lgQtyFieldInputSty}
              labelStyle={lgQtyFieldLabelSty}
            />
          </Fields>
          <ButtonComp type="submit" style={btnStyle}>
            <AddIcon sx={iconStyle} />
          </ButtonComp>
        </Form>
      )}
    </>
  );
};
