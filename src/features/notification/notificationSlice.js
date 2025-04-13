import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification: (state, { payload }) => {
      state.data = payload;
    },
    clearNotification: (state) => {
      state.data = null;
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;
export const selectNotification = (state) => state.notification.data;
export default notificationSlice.reducer;
