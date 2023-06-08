import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const URL_DATA =
  "https://godziny-3b30f-default-rtdb.europe-west1.firebasedatabase.app";

export const columnsApiSlice = createApi({
  reducerPath: "columnsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_DATA }),
  tagTypes: ["columns"],
  endpoints: builder => ({
    columns: builder.query<any, void>({
      query: () => "/columns.json",
      providesTags: ["columns"],
    }),

    addDays: builder.mutation<void, any>({
      query: reaction => ({
        url: "/columns.json",
        method: "POST",
        body: reaction,
      }),
      invalidatesTags: ["columns"],
    }),

    updateColumns: builder.mutation<void, any>({
      query: ubdateReaction => ({
        url: `/columns/${ubdateReaction.id}.json`,
        method: "PUT",
        body: ubdateReaction.columns,
      }),
      invalidatesTags: ["columns"],
    }),

    deleteAllColumns: builder.mutation<any, string | undefined>({
      query: id => ({
        url: `/columns/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["columns"],
    }),
    deleteDay: builder.mutation<any, any>({
      query: id => ({
        url: `/columns/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["columns"],
    }),
  }),
});

export const {
  useColumnsQuery,
  useAddDaysMutation,
  useDeleteAllColumnsMutation,
  useUpdateColumnsMutation,
  useDeleteDayMutation,
} = columnsApiSlice;
