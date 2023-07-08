import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_MONTHS_DATA } from "../data/URL";


const createUrl = (year: number, month: number, suffix = "") =>
  `/${year}/month_${month}${suffix}.json`;

const mutationBody = (url: any, method: string, body: any) => {
  return { url, method, body };
};


export const monthsApiSlice = createApi({
  reducerPath: "monthsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_MONTHS_DATA }),
  tagTypes: ["months"],
  endpoints: builder => ({

    // queries

    monthsData: builder.query<any, void>({
      query: () => ".json",
      providesTags: ["months"],
    }),

    monthData: builder.query<any, any>({
      query: ({ year, month }) => createUrl(year, month),
      providesTags: ["months"],
    }),

    firstColumnData: builder.query<any, any>({
      query: ({ year, month }) => createUrl(year, month, "/columns/0"),
      providesTags: ["months"],
    }),

    // mutations

    addMonth: builder.mutation<void, any>({
      query: ({ year, month, monthBody }) =>
        mutationBody(createUrl(year, month), "PUT", monthBody),
      invalidatesTags: ["months"],
    }),

    addDay: builder.mutation<void, any>({
      query: ({ year, month, monthBody }) =>
        mutationBody(createUrl(year, month, "/columns/0"), "PUT", monthBody),
      invalidatesTags: ["months"],
    }),

    updateMonth: builder.mutation<void, any>({
      query: ({ year, month, monthBody }) =>
        mutationBody(createUrl(year, month), "PUT", monthBody),
      invalidatesTags: ["months"],
    }),

    updateColumns: builder.mutation<void, any>({
      query: ({ year, month, columnsBody }) =>
        mutationBody(createUrl(year, month, "/columns"), "PUT", columnsBody),
      invalidatesTags: ["months"],
    }),

    deleteDay: builder.mutation<void, any>({
      query: ({ year, month, colIdx, daysBody }) =>
        mutationBody(
          createUrl(year, month, `/columns/${colIdx}/days`),
          "PUT",
          daysBody
        ),
      invalidatesTags: ["months"],
    }),

    // calc queries

    calcData: builder.query<any, any>({
      query: ({ year, month }) => createUrl(year, month, "/calc"),
      providesTags: ["months"],
    }),

    // calc mutations

    addAllHours: builder.mutation<void, any>({
      query: ({ year, month, allHours }) =>
        mutationBody(createUrl(year, month, `/calc/allHours`), "PUT", allHours),
      invalidatesTags: ["months"],
    }),

    updateCalc: builder.mutation<void, any>({
      query: ({ year, month, allHours }) =>
        mutationBody(createUrl(year, month, `/calc`), "PUT", allHours),
      invalidatesTags: ["months"],
    }),

    // deleteDay: builder.mutation<any, any>({
    //   query: month => ({
    //     url: `/${month?.year}/month_${month?.month}/columns/${month.colIdx}/days/${month.dayIdx}.json`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["months"],
    // }),

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
