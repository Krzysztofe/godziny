import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_MONTHS_DATA } from "../data/URL";
import {
  ModelMonthsPatern,
  ModelMonthPattern,
  ModelColumn,
  ModelDay,
} from "../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";

const createUrl = (year: string, month: string, suffix = "") =>
  `/years/${year}/month_${month}${suffix}.json`;


export const monthsApiSlice = createApi({
  reducerPath: "monthsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_MONTHS_DATA }),
  tagTypes: ["months"],
  endpoints: builder => ({
    // queries

    monthData: builder.query<
      ModelMonthPattern,
      { year: string; month: string }
    >({
      query: ({ year, month }) => createUrl(year, month),
      providesTags: ["months"],
    }),

    // mutations

    updateMonth: builder.mutation<
      void,
      { year: string; month: string; monthBody: ModelMonthPattern }
    >({
      query: ({ year, month, monthBody }) => ({
        url: createUrl(year, month),
        method: "PUT",
        body: monthBody,
      }),
      invalidatesTags: ["months"],
    }),

    addDay: builder.mutation<
      void,
      { year: string; month: string; firstColumnBody: ModelColumn }
    >({
      query: ({ year, month, firstColumnBody }) => ({
        url: createUrl(year, month, "/columns/0"),
        method: "PUT",
        body: firstColumnBody,
      }),
      invalidatesTags: ["months"],
    }),

    deleteDay: builder.mutation<
      void,
      { year: string; month: string; colIdx: number; daysBody: ModelDay[] }
    >({
      query: ({ year, month, colIdx, daysBody }) => ({
        url: createUrl(year, month, `/columns/${colIdx}/days`),
        method: "PUT",
        body: daysBody,
      }),
      invalidatesTags: ["months"],
    }),

    deleteMonth: builder.mutation<ModelMonthPattern, any>({
      query: ({ year, month }) => ({
        url: createUrl(year, month),
        method: "DELETE",
      }),
      invalidatesTags: ["months"],
    }),

    // info queries

    monthsInfo: builder.query<ModelMonthsPatern, void>({
      query: () => "info.json",
      providesTags: ["months"],
    }),

    // info mutations
    updateMonthInfo: builder.mutation<void, string[]>({
      query: monthInfo => ({
        url: "/info.json",
        method: "PUT",
        body: monthInfo,
      }),
      invalidatesTags: ["months"],
    }),

    // calc mutations

    addAllHours: builder.mutation<
      void,
      { year: string; month: string; allHours: number }
    >({
      query: ({ year, month, allHours }) => ({
        url: createUrl(year, month, `/calc/allHours`),
        method: "PUT",
        body: allHours,
      }),
      invalidatesTags: ["months"],
    }),
  }),
});

export const {
  useMonthDataQuery,
  useMonthsInfoQuery,
  useUpdateMonthInfoMutation,
  useAddDayMutation,
  useUpdateMonthMutation,
  useDeleteDayMutation,
  useDeleteMonthMutation,
  useAddAllHoursMutation,
} = monthsApiSlice;
