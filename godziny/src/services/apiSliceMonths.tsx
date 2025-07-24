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

    postMonth: builder.mutation<
      void,
      { year: string; month: string; monthBody: any }
    >({
      query: ({ year, month, monthBody }) => ({
        url: "/",
        method: "POST",
        body: monthBody,
      }),
      invalidatesTags: ["months"],
    }),

    updateMonth: builder.mutation<
      void,
      { year: string; month: string; monthBody: any }
    >({
      query: ({ year, month, monthBody }) => ({
        url: `month${createUrl(year, month)}`,
        method: "PATCH",
        body: monthBody,
      }),
      invalidatesTags: ["months"],
    }),

    addDay: builder.mutation<
      void,
      { year: string; month: string; monthBody: any }
    >({
      query: ({ year, month, monthBody }) => ({
        url: createUrl(year, month),
        method: "PATCH",
        body: monthBody,
      }),
      invalidatesTags: ["months"],
    }),

    deleteDay: builder.mutation<
      void,
      { year: string; month: string;  monthBody: any }
    >({
      query: ({ year, month, monthBody }) => ({
        url: createUrl(year, month),
        method: "DELETE",
        body: monthBody,
      }),
      invalidatesTags: ["months"],
    }),

    deleteMonth: builder.mutation<void, string>({
      query: (monthId) => ({
        url: `/${monthId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["months"],
    }),

    // allHours mutations

    patchAllHours: builder.mutation<void, { id: string; body: any  }>({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PATCH",
        body:  body ,
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
  usePostMonthMutation,
  useUpdateMonthMutation,
  useDeleteDayMutation,
  useDeleteMonthMutation,
  usePatchAllHoursMutation,
} = monthsApiSlice;
