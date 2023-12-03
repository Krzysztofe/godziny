import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_MONTHS_DATA } from "../data/URL";
import { ModelMonth } from "../sharedModels/modelMonth";
import { ModelCalcHours } from "../sharedModels/modelCalcHours";


const createUrl = (year: string, month: string, suffix = "") =>
  `/years/${year}/month_${month}${suffix}.json`;

export const monthsApiSlice = createApi({
  reducerPath: "monthsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_MONTHS_DATA }),
  tagTypes: ["months"],
  endpoints: builder => ({
    // queries

    monthData: builder.query<ModelMonth, { year: string; month: string }>({
      query: ({ year, month }) => createUrl(year, month),
      providesTags: ["months"],
    }),

    // mutations

    updateMonth: builder.mutation<
      void,
      { year: string; month: string; monthBody: ModelMonth }
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
      { year: string; month: string; monthBody: ModelMonth }
    >({
      query: ({ year, month, monthBody }) => ({
        url: createUrl(year, month),
        method: "PUT",
        body: monthBody,
      }),
      invalidatesTags: ["months"],
    }),

    deleteDay: builder.mutation<
      void,
      { year: string; month: string; colIdx: number; monthBody: ModelMonth }
    >({
      query: ({ year, month, monthBody }) => ({
        url: createUrl(year, month),
        method: "PUT",
        body: monthBody,
      }),
      invalidatesTags: ["months"],
    }),

    deleteMonth: builder.mutation<ModelMonth, { year: string; month: string }>({
      query: ({ year, month }) => ({
        url: createUrl(year, month),
        method: "DELETE",
      }),
      invalidatesTags: ["months"],
    }),

    // monthsList queries

    monthsList: builder.query<string[], void>({
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
      { year: string; month: string; calcHours: ModelCalcHours }
    >({
      query: ({ year, month, calcHours }) => ({
        url: createUrl(year, month, `/calcHours`),
        method: "PUT",
        body: calcHours,
      }),
      invalidatesTags: ["months"],
    }),
  }),
});

export const {
  useMonthDataQuery,
  useMonthsListQuery,
  useUpdateMonthInfoMutation,
  useAddDayMutation,
  useUpdateMonthMutation,
  useDeleteDayMutation,
  useDeleteMonthMutation,
  useAddAllHoursMutation,
} = monthsApiSlice;
