import { useEffect, useState } from "react";
import {
  selectProducts,
  setProducts,
} from "../../../../../../features/product/productSlice";
import { useGetProductsQuery } from "../../../../../../features/product/productApi";
import { useUpdateEntryMutation } from "../../../../../../features/diary/diaryApi";
import { useDispatch, useSelector } from "react-redux";
import { quantityValidation } from "../../../../../../utils/validator";
import { ActionButton } from "../../../../../../components/ActionButton";
import { CustomModal } from "../../../../../../components/CustomModal";
import {
  Box,
  Container,
  Fields,
  Form,
  Title,
} from "./DiaryEditProductForm.styles";
import { CustomAutocomplete } from "../../../../../../components/CustomAutocomplete";
import { CustomTextField } from "../../../../../../components/CustomTextField";
import { useMediaQuery } from "react-responsive";
import { reactBreakpoints } from "../../../../../../styles/breakpoints";
import PropTypes from "prop-types";

export const DiaryEditProductForm = ({ formData }) => {
  const tabletMin = useMediaQuery({ minWidth: reactBreakpoints.tabletMin });

  const [options, setOptions] = useState([]);
  const { data } = useGetProductsQuery();
  const [updateEntry, { isSuccess }] = useUpdateEntryMutation();
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [entry, setEntry] = useState({
    product: null,
    quantity: "",
    id: null,
    date: null,
  });
  const [entryErr, setEntryErr] = useState({
    product: null,
    quantity: null,
  });
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    if (isSuccess) {
      handleClose();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (!entry.id) {
      setOpen(false);
    }
  }, [entry]);

  useEffect(() => {
    if (formData.id) {
      setEntry(formData);
      setOpen(true);
    }
  }, [formData]);

  function handleSubmit(evt) {
    evt.preventDefault();

    const quantityValid = quantityValidation(entry.quantity);

    if (!entry.product) {
      setEntryErr((prev) => ({ ...prev, product: true }));
    } else {
      setEntryErr((prev) => ({ ...prev, product: false }));
    }

    if (!quantityValid) {
      setEntryErr((prev) => ({ ...prev, quantity: true }));
    } else {
      setEntryErr((prev) => ({ ...prev, quantity: false }));
    }

    if (entry.product && quantityValid) {
      updateEntry(entry);
    }
  }

  function handleClose() {
    setEntry({
      product: null,
      quantity: "",
      id: null,
      date: null,
    });
  }

  return (
    <>
      <CustomModal
        modalType="edit-product-form"
        open={open}
        onClose={handleClose}
      >
        <Container>
          <Box>
            {tabletMin && <Title>Edit product</Title>}
            <Form onSubmit={handleSubmit}>
              <Fields>
                <CustomAutocomplete
                  options={options}
                  value={entry.product}
                  onChange={(_, newValue) =>
                    setEntry((prev) => ({
                      ...prev,
                      product: newValue,
                    }))
                  }
                  label="Enter product name"
                  id="product"
                  error={entryErr.product}
                />
                <CustomTextField
                  error={entryErr.quantity}
                  id="quantity"
                  label="Grams"
                  value={entry.quantity}
                  onChange={(evt) =>
                    setEntry((prev) => ({
                      ...prev,
                      quantity: evt.target.value,
                    }))
                  }
                />
              </Fields>
              <ActionButton buttonType="edit-product-form">Edit</ActionButton>
            </Form>
          </Box>
        </Container>
      </CustomModal>
    </>
  );
};

DiaryEditProductForm.propTypes = {
  formData: PropTypes.object,
};
