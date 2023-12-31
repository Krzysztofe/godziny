import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_MONTHS_DATA } from "../data/URL";
import { ModelMonth } from "../sharedModels/modelMonth";
import { ModelCalcHours } from "../sharedModels/modelCalcHours";
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const createUrl = (year: string, month: string, suffix = "") =>
  `/${year}/month_${month}${suffix}.json`;

export const monthsApiSlice = createApi({
  reducerPath: "monthsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL_MONTHS_DATA,
    prepareHeaders: (headers, { getState }) => {
      // Access the Redux state to get the user's UID

      // const state = getState();
      // const user = state?.firebase?.auth;

      // If the user is authenticated, include the Firebase Authentication token in the headers
      // if (user && user.uid) {
      //   headers.set("Authorization", `Bearer ${user.uid}`);
      // }
//  headers.set("Authorization", `Bearer O10NKxvgyJVMbWDu8uFfbKmdyFv1`);
      return headers;
    },
  }),
  tagTypes: ["months"],
  endpoints: builder => ({
    // queries

    monthData: builder.query<ModelMonth, { year: string; month: string }>({
      query: ({ year, month }) => createUrl(year, month),
      providesTags: ["months"],
    }),
    allHours: builder.query<ModelCalcHours, { year: string; month: string }>({
      query: ({ year, month }) => createUrl(year, month, "/calcHours"),
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
  useMonthDataQuery,
  useAllHoursQuery,
  useAddDayMutation,
  useUpdateMonthMutation,
  useDeleteDayMutation,
  useDeleteMonthMutation,
  useAddAllHoursMutation,
} = monthsApiSlice;
