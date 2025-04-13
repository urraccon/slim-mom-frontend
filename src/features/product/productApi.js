import { apiSlice } from "../../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/product",
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
