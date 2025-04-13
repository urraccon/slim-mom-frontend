import { apiSlice } from "../../api/apiSlice";
import { store } from "../../store/store";
import { healthApi } from "../health/healthApi";
import { clearUser, setUser } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (formData) => ({
        url: "/auth/register",
        method: "POST",
        body: formData,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.user));

          const state = store.getState();
          const { height, age, currentWeight, desiredWeight, bloodType } =
            state.health.healthData;

          if (height && age && currentWeight && desiredWeight && bloodType) {
            dispatch(
              healthApi.endpoints.saveHealthData.initiate({
                height,
                age,
                currentWeight,
                desiredWeight,
                bloodType,
              })
            );
          }
        } catch {}
      },
    }),
    login: builder.mutation({
      query: (formData) => ({
        url: "/auth/login",
        method: "POST",
        body: formData,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.user));

          const state = store.getState();
          const { height, age, currentWeight, desiredWeight, bloodType } =
            state.health.healthData;

          if (height && age && currentWeight && desiredWeight && bloodType) {
            dispatch(
              healthApi.endpoints.saveHealthData.initiate({
                height,
                age,
                currentWeight,
                desiredWeight,
                bloodType,
              })
            );
          }
        } catch {}
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(clearUser());
        } catch {}
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  authApi;
