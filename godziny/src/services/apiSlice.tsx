import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL_DATA =
  "https://godziny-3b30f-default-rtdb.europe-west1.firebasedatabase.app";

export const monthsApiSlice = createApi({
  reducerPath: "monthsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_DATA }),
  tagTypes: ["months"],
  endpoints: builder => ({
    monthsData: builder.query<any, void>({
      query: () => ".json",
      providesTags: ["months"],
    }),

    monthData: builder.query<any, any>({
      query: month => `/${month.year}/month_${month.month}.json`,
      providesTags: ["months"],
    }),

    firstColumnData: builder.query<any, any>({
      query: month => `/${month.year}/month_${month.month}/columns/0.json`,
      providesTags: ["months"],
    }),

    addMonth: builder.mutation<void, any>({
      query: month => ({
        url: `/${month.year}/month_${month.month}.json`,
        method: "PUT",
        body: month.monthBody,
      }),
      invalidatesTags: ["months"],
    }),

    addDay: builder.mutation<void, any>({
      query: month => ({
        url: `/${month.year}/month_${month.month}/columns/0.json`,
        method: "PUT",
        body: month.monthBody,
      }),
      invalidatesTags: ["months"],
    }),

    updateColumns: builder.mutation<void, any>({
      query: month => ({
        url: `/${month.year}/month_${month.month}/columns.json`,
        method: "PUT",
        body: month.columnsBody,
      }),
      invalidatesTags: ["months"],
    }),

    updateMonth: builder.mutation<void, any>({
      query: updatedMonth => ({
        url: `/months/${updatedMonth.id}.json`,
        method: "PUT",
        body: updatedMonth.month,
      }),
      invalidatesTags: ["months"],
    }),

    // PATCHupdateMonth: builder.mutation<void, any>({
    //   query: ({ id, columns }) => ({
    //     url: `/months/${id}.json`,
    //     method: "PATCH",
    //     body: columns,
    //   }),
    //   invalidatesTags: ["months"],
    // }),

    // updateDay: builder.mutation<void, any>({
    //   query: updateDay => ({
    //     url: `/months/${updateDay.id}.json`,
    //     method: "PUT",
    //     body: updateDay.columns,
    //   }),
    //   invalidatesTags: ["columns"],
    // }),

    deleteMonth: builder.mutation<any, string | undefined>({
      query: id => ({
        url: `/months/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["months"],
    }),
  }),
});

export const {
  useMonthsDataQuery,
  useMonthDataQuery,
  useFirstColumnDataQuery,
  useAddMonthMutation,
  useAddDayMutation,
  useUpdateColumnsMutation,
  useDeleteMonthMutation,
  useUpdateMonthMutation,
  // usePATCHupdateMonth,
  // useUpdateDayMutation,
} = monthsApiSlice;
