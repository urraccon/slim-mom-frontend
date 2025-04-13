import { isFulfilled, isRejectedWithValue } from "@reduxjs/toolkit";
import { setNotification } from "../features/notification/notificationSlice";

export const notificationMiddleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const errorMessage =
      action.payload?.message || action.error?.message || "An error occurred";
    next(setNotification({ message: errorMessage, type: "error" }));
  }

  if (isFulfilled(action)) {
    const successMessage =
      action.payload?.message || "Operation was successful!";
    next(setNotification({ message: successMessage, type: "success" }));
  }

  return next(action);
};
