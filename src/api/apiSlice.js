import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://slim-mom-api-b3344cba0d98.herokuapp.com/api",
    credentials: "include",
  }),
  endpoints: () => ({}),
});
