import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://slimmom-api-2psx.onrender.com/api",
    credentials: "include",
  }),
  endpoints: () => ({}),
});
