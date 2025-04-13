import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export const selectProducts = (state) => state.product.items;
export default productSlice.reducer;
