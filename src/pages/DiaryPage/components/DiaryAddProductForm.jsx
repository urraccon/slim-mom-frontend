import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Box, Container, Fields, Form } from "./DiaryAddProductForm.styles";
// import dayjs from "dayjs";
// import { useDispatch } from "react-redux";
import { quantityValidation } from "../../../utils/validator";
// import { addProduct } from "../../../store/diary/diaryActions";
import { reactBreakpoints } from "../../../styles/breakpoints";

import { CustomAutocomplete } from "../../../components/CustomAutocomplete";
import { CustomTextField } from "../../../components/CustomTextField";
import { ActionButton } from "../../../components/ActionButton";
import { CustomModal } from "../../../components/CustomModal";
import { useGetProductsQuery } from "../../../features/diary/productsApi";

export const DiaryAddProductForm = () => {
  const largeMobileMax = useMediaQuery({
    maxWidth: reactBreakpoints.largeMobileMax,
  });

  const [open, setOpen] = useState(false);
  const [productErr, setProductErr] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [quantityErr, setQuantityErr] = useState(null);
  const [product, setProduct] = useState(null);
  const { data: options } = useGetProductsQuery();

  function handleSubmit(evt) {
    evt.preventDefault();

    const quantityValid = quantityValidation(quantity);

    if (!product) {
      setProductErr(true);
    } else {
      setProductErr(false);
    }

    if (!quantityValid) {
      setQuantityErr(true);
    } else {
      setQuantityErr(false);
    }

    // if (prodNameValid && quantityValid) {
    //   const now = dayjs();

    //   const productData = {
    //     productName,
    //     quantity,
    //     date: now,
    //   };

    //   dispatch(addProduct(productData));
    // }
  }

  return (
    <>
      {largeMobileMax ? (
        <>
          <ActionButton
            onClick={() => setOpen(true)}
            buttonContext="product-form-icon-button"
            iconName="add-icon"
          />
          <CustomModal
            modalType="add-product"
            open={open}
            onClose={() => setOpen(false)}
          >
            <Container>
              <Box>
                <Form onSubmit={handleSubmit}>
                  <Fields>
                    <CustomAutocomplete
                      options={options}
                      value={product}
                      onChange={(_, newValue) => setProduct(newValue)}
                      label="Enter product name"
                      id="product"
                      error={productErr}
                      textFieldContext="product-form-product-field"
                    />
                    <CustomTextField
                      error={quantityErr}
                      id="quantity"
                      label="Grams"
                      value={quantity}
                      onChange={(evt) => setQuantity(evt.target.value)}
                      textFieldContext="product-form-quantity-field"
                    />
                  </Fields>
                  <ActionButton buttonContext="product-form-text-button">
                    Add
                  </ActionButton>
                </Form>
              </Box>
            </Container>
          </CustomModal>
        </>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Fields>
            <CustomAutocomplete
              options={options}
              value={product}
              onChange={(_, newValue) => setProduct(newValue)}
              label="Enter product name"
              id="product"
              error={productErr}
              textFieldContext="product-form-product-field"
            />
            <CustomTextField
              error={quantityErr}
              id="quantity"
              label="Grams"
              value={quantity}
              onChange={(evt) => setQuantity(evt.target.value)}
              textFieldContext="product-form-quantity-field"
            />
          </Fields>
          <ActionButton
            buttonContext="product-form-icon-button"
            iconName="add-icon"
          />
        </Form>
      )}
    </>
  );
};
