import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDate: null,
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setSelectedDate: (state, { payload }) => {
      state.selectedDate = payload;
    },
  },
});

export const { setSelectedDate, clearSelectedDate } = dateSlice.actions;
export const selectSelectedDate = (state) => state.date.selectedDate;
export default dateSlice.reducer;
