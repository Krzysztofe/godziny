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

    addMonth: builder.mutation<void, any>({
      query: body => ({
        url: "/columns.json",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["columns"],
    }),

    updateColumns: builder.mutation<void, any>({
      query: updateColumns => ({
        url: `/columns/${updateColumns.id}.json`,
        method: "PUT",
        body: updateColumns.columns,
      }),
      invalidatesTags: ["columns"],
    }),
    updateDay: builder.mutation<void, any>({
      query: updateDay => ({
        url: `/columns/${updateDay.id}.json`,
        method: "PUT",
        body: updateDay.columns,
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
  }),
});

export const {
  useColumnsQuery,
  useAddMonthMutation,
  useDeleteAllColumnsMutation,
  useUpdateColumnsMutation,
  useUpdateDayMutation,
} = columnsApiSlice;
