import { isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { startLoading, stopLoading } from "../features/loader/loaderSlice";

export const loaderMiddleware = () => (next) => (action) => {
  if (isPending(action)) {
    next(startLoading());
  }

  if (isFulfilled(action) || isRejected(action)) {
    next(stopLoading());
  }

  return next(action);
};
