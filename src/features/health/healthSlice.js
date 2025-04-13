import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const healthSlice = createSlice({
  name: "health",
  initialState,
  reducers: {
    setHealthData: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setHealthData } = healthSlice.actions;
export const selectHealthData = (state) => state.health.data;
export default healthSlice.reducer;
