import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { loaderMiddleware } from "../middlewares/loaderMiddleware";
import { notificationMiddleware } from "../middlewares/notificationMiddleware";
import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(loaderMiddleware)
      .concat(notificationMiddleware),
});
