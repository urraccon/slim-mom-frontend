import { createSlice } from "@reduxjs/toolkit";
import { addProduct } from "./diaryActions";

const initialState = {
  status: "inactive",
  error: null,
  dailyRateCal: null,
  productList: {
    list: [],
    diaryList: [],
    restrictedList: [],
  },
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
        state.error = "null";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productList.diaryList.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const diaryReducer = diarySlice.reducer;
