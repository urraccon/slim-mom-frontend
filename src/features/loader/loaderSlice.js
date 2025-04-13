import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading: false };

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, stopLoading } = loaderSlice.actions;
export const selectIsLoading = (state) => state.loader.isLoading;
export default loaderSlice.reducer;
