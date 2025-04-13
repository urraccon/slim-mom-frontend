import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/product/productSlice";
import loaderReducer from "../features/loader/loaderSlice";
import { loaderMiddleware } from "../middlewares/loaderMiddleware";
import notificationReducer from "../features/notification/notificationSlice";
import { notificationMiddleware } from "../middlewares/notificationMiddleware";
import healthReducer from "../features/health/healthSlice";
import diaryReducer from "../features/diary/diarySlice";
import dateReducer from "../features/date/dateSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    loader: loaderReducer,
    notification: notificationReducer,
    health: healthReducer,
    diary: diaryReducer,
    date: dateReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(loaderMiddleware)
      .concat(notificationMiddleware),
});
