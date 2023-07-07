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

    updateMonth: builder.mutation<void, any>({
      query: month => ({
        url: `/${month.year}/month_${month.month}.json`,
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

    deleteDay: builder.mutation<void, any>({
      query: month => ({
        url: `/${month.year}/month_${month.month}/columns/${month.colIdx}/days.json`,
        method: "PUT",
        body: month.daysBody,
      }),
      invalidatesTags: ["months"],
    }),

    // deleteDay: builder.mutation<any, any>({
    //   query: month => ({
    //     url: `/${month?.year}/month_${month?.month}/columns/${month.colIdx}/days/${month.dayIdx}.json`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["months"],
    // }),

    // calc

    calcData: builder.query<any, any>({
      query: month => `/${month.year}/month_${month.month}/calc.json`,
      providesTags: ["months"],
    }),

    addAllHours: builder.mutation<void, any>({
      query: month => ({
        url: `/${month.year}/month_${month.month}/calc/allHours.json`,
        method: "PUT",
        body: month.allHours,
      }),
      invalidatesTags: ["months"],
    }),

    updateCalc: builder.mutation<void, any>({
      query: month => ({
        url: `/${month.year}/month_${month.month}/calc.json`,
        method: "PUT",
        body: month.allHours,
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

    // deleteMonth: builder.mutation<any, string | undefined>({
    //   query: id => ({
    //     url: `/months/${id}.json`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["months"],
    // }),
  }),
});

export const {
  useMonthsDataQuery,
  useMonthDataQuery,
  useFirstColumnDataQuery,
  useAddMonthMutation,
  useAddDayMutation,
  useUpdateMonthMutation,
  useUpdateColumnsMutation,
  useDeleteDayMutation,
  useCalcDataQuery,
  useAddAllHoursMutation,
  useUpdateCalcMutation,
} = monthsApiSlice;
