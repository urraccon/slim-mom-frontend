import { apiSlice } from "../../api/apiSlice";
import { setUser } from "../auth/authSlice";
import { setHealthData } from "./healthSlice";

export const healthApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    calculateHealthData: builder.mutation({
      query: (formData) => ({
        url: "/health/calculate",
        method: "POST",
        body: formData,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setHealthData(data.healthData));
        } catch {}
      },
    }),
    saveHealthData: builder.mutation({
      query: (storeData) => ({
        url: "/health/save",
        method: "POST",
        body: storeData,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.user));
        } catch {}
      },
    }),
  }),
});

export const { useCalculateHealthDataMutation, useSaveHealthDataMutation } =
  healthApi;
