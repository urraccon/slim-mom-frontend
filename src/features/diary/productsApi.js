import { apiSlice } from "../../api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/diary/products",
      keepUnusedDataFor: 300,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
