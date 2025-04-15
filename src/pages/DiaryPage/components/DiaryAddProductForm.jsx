import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Box, Container, Fields, Form } from "./DiaryAddProductForm.styles";
import { quantityValidation } from "../../../utils/validator";
import { reactBreakpoints } from "../../../styles/breakpoints";
import { CustomAutocomplete } from "../../../components/CustomAutocomplete";
import { CustomTextField } from "../../../components/CustomTextField";
import { ActionButton } from "../../../components/ActionButton";
import { CustomModal } from "../../../components/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  setProducts,
} from "../../../features/product/productSlice";
import { useGetProductsQuery } from "../../../features/product/productApi";
import { todayDayjs } from "../../../utils/dateUtils";
import { useAddEntryMutation } from "../../../features/diary/diaryApi";

export const DiaryAddProductForm = () => {
  const largeMobileMax = useMediaQuery({
    maxWidth: reactBreakpoints.largeMobileMax,
  });

  const [open, setOpen] = useState(false);
  const [productErr, setProductErr] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [quantityErr, setQuantityErr] = useState(null);
  const [product, setProduct] = useState(null);
  const [options, setOptions] = useState([]);
  const products = useSelector(selectProducts);
  const { data } = useGetProductsQuery();
  const dispatch = useDispatch();
  const [addEntry, { isSuccess }] = useAddEntryMutation();

  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
      setProduct(null);
      setQuantity("");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (products) {
      setOptions(products);
    }
  }, [products]);

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

    if (product && quantityValid) {
      const today = todayDayjs();
      const newEntry = {
        product,
        quantity,
        date: today,
      };

      addEntry(newEntry);
    }
  }

  return (
    <>
      {largeMobileMax ? (
        <>
          <ActionButton
            onClick={() => setOpen(true)}
            buttonType="add-product-form-icon-button"
            iconName="add-icon"
          />
          <CustomModal
            modalType="add-product-form"
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
                      textFieldType="add-product-form-product-field"
                    />
                    <CustomTextField
                      error={quantityErr}
                      id="quantity"
                      label="Grams"
                      value={quantity}
                      onChange={(evt) => setQuantity(evt.target.value)}
                      textFieldType="add-product-form-quantity-field"
                    />
                  </Fields>
                  <ActionButton buttonType="add-product-form-text-button">
                    Add
                  </ActionButton>
                </Form>
              </Box>
            </Container>
          </CustomModal>
        </>
      ) : (
        <Form onSubmit={handleSubmit}>
          <CustomAutocomplete
            options={options}
            value={product}
            onChange={(_, newValue) => setProduct(newValue)}
            label="Enter product name"
            id="product"
            error={productErr}
            textFieldType="add-product-form-product-field"
            autocompleteType="add-product-form"
          />
          <CustomTextField
            error={quantityErr}
            id="quantity"
            label="Grams"
            value={quantity}
            onChange={(evt) => setQuantity(evt.target.value)}
            textFieldType="add-product-form-quantity-field"
          />
          <ActionButton
            buttonType="add-product-form-icon-button"
            iconName="add-icon"
          />
        </Form>
      )}
    </>
  );
};
