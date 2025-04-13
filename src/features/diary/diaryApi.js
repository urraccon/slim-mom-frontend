import { apiSlice } from "../../api/apiSlice";
import { formatDateToISO } from "../../utils/dateUtils";

export const diaryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEntriesByDate: builder.query({
      query: (date) => `/diary?date=${date}`,
    }),
    addEntry: builder.mutation({
      query: (newEntry) => ({
        url: "/diary",
        method: "POST",
        body: newEntry,
      }),
      onQueryStarted: async ({ date }, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          const createdEntry = data.entry;
          const isoDate = formatDateToISO(date);

          dispatch(
            diaryApi.util.updateQueryData(
              "getEntriesByDate",
              isoDate,
              (draft) => {
                draft.push(createdEntry);
              }
            )
          );
        } catch {}
      },
    }),
    updateEntry: builder.mutation({
      query: ({ id, ...updatedFields }) => ({
        url: `/diary/${id}`,
        method: "PUT",
        body: updatedFields,
      }),
      onQueryStarted: async ({ id, date }, { dispatch, queryFulfilled }) => {
        try {
          const { data: updatedEntry } = await queryFulfilled;
          const isoDate = formatDateToISO(date);

          dispatch(
            diaryApi.util.updateQueryData(
              "getEntriesByDate",
              isoDate,
              (draft) => {
                const index = draft.findIndex((entry) => entry._id === id);
                if (index !== -1) {
                  draft[index] = updatedEntry;
                }
              }
            )
          );
        } catch {}
      },
    }),
    deleteEntry: builder.mutation({
      query: ({ id }) => ({ url: `/diary/${id}`, method: "DELETE" }),
      onQueryStarted: async ({ id, date }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          const isoDate = formatDateToISO(date);

          dispatch(
            diaryApi.util.updateQueryData(
              "getEntriesByDate",
              isoDate,
              (draft) => {
                return draft.filter((entry) => entry._id !== id);
              }
            )
          );
        } catch {}
      },
    }),
  }),
});

export const {
  useGetEntriesByDateQuery,
  useAddEntryMutation,
  useUpdateEntryMutation,
  useDeleteEntryMutation,
} = diaryApi;
