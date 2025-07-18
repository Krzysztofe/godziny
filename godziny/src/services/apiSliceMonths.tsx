import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_MONTHS_DATA } from "../data/URL";
import { ModelMonth } from "../sharedModels/modelMonth";
import { ModelCalcHours } from "../sharedModels/modelCalcHours";

const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: URL_MONTHS_DATA,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const createUrl = (year: string, month: string, suffix = "") =>
  `/${year}/${month}/${suffix}`;

export const monthsApiSlice = createApi({
  reducerPath: "monthsApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["months"],
  endpoints: (builder) => ({
    // queries

    allMonths: builder.query<
      { _id: string; year: number; month: string }[],
      void
    >({
      query: () => "/",
      providesTags: ["months"],
    }),

    monthData: builder.query<any, { year: string; month: string }>({
      query: ({ year, month }) => createUrl(year, month),
      providesTags: ["months"],
    }),

    calcHours: builder.query<ModelCalcHours, { year: string; month: string }>({
      query: ({ year, month }) => createUrl(year, month, "allHours"),
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


  //   addDay: builder.mutation<
  //   void,
  //   { year: string; month: string; monthBody: ModelMonth }
  // >({
  //   query: ({ year, month, monthBody }) => ({
  //     url: createUrl(year, month),
  //     method: "PUT",
  //     body: monthBody,
  //   }),
  //   invalidatesTags: ["months"],
  // }),

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

    // allHours mutations

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
  useAllMonthsQuery,
  useMonthDataQuery,
  useCalcHoursQuery,
  useAddDayMutation,
  useUpdateMonthMutation,
  useDeleteDayMutation,
  useDeleteMonthMutation,
  useAddAllHoursMutation,
} = monthsApiSlice;
