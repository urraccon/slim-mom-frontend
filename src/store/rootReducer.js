import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/product/productSlice";
import loaderReducer from "../features/loaderSlice";
import notificationReducer from "../features/notificationSlice";
import healthReducer from "../features/health/healthSlice";
import diaryReducer from "../features/diary/diarySlice";
import dateReducer from "../features/dateSlice";
import { apiSlice } from "../api/apiSlice";

const appReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  loader: loaderReducer,
  notification: notificationReducer,
  health: healthReducer,
  diary: diaryReducer,
  date: dateReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === "authentication/logout") {
    return {
      auth: undefined,
      product: undefined,
      loader: state.loader,
      notification: state.notification,
      health: undefined,
      diary: undefined,
      date: undefined,
      api: state.api,
    };
  }
  return appReducer(state, action);
};

export default rootReducer;
