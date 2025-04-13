import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: null,
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    setEntries: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { setEntries } = diarySlice.actions;
export const selectEntries = (state) => state.diary.items;
export default diarySlice.reducer;
