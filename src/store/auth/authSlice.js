import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "./authThunks.js";

const handlePending = (state) => {
  state.status = "loading";
  state.error = null;
};

const handleFulfilled = (state, action) => {
  state.status = "succeeded";
  state.user = action.payload.user;
  state.isAuthenticated = true;
};

const handleRejected = (state, action) => {
  state.status = "failed";
  state.error = action.payload;
};

const initialState = {
  user: null,
  isAuthenticated: false,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => handlePending(state))
      .addCase(register.fulfilled, (state, action) =>
        handleFulfilled(state, action)
      )
      .addCase(register.rejected, (state, action) =>
        handleRejected(state, action)
      )

      .addCase(login.pending, (state) => handlePending(state))
      .addCase(login.fulfilled, (state, action) =>
        handleFulfilled(state, action)
      )
      .addCase(login.rejected, (state, action) => handleRejected(state, action))

      .addCase(logout.pending, (state) => handlePending(state))
      .addCase(logout.fulfilled, (state) => {
        state.status = "succeeded";
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logout.rejected, (state, action) =>
        handleRejected(state, action)
      );
  },
});

export default authSlice.reducer;
