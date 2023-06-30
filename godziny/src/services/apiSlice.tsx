import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL_DATA =
  "https://godziny-3b30f-default-rtdb.europe-west1.firebasedatabase.app";

export const monthsApiSlice = createApi({
  reducerPath: "monthsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_DATA }),
  tagTypes: ["months"],
  endpoints: builder => ({
    monthsData: builder.query<any, void>({
      query: () => "/months.json",
      providesTags: ["months"],
    }),

    addMonth: builder.mutation<void, any>({
      query: body => ({
        url: "/months.json",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["months"],
    }),

    updateMonth: builder.mutation<void, any>({
      query: updateColumns => ({
        url: `/months/${updateColumns.id}.json`,
        method: "PUT",
        body: updateColumns.columns,
      }),
      invalidatesTags: ["months"],
    }),

    PATCHupdateMonth: builder.mutation<void, any>({
      query: ({ id, columns }) => ({
        url: `/months/${id}.json`,
        method: "PATCH",
        body: columns,
      }),
      invalidatesTags: ["months"],
    }),

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
  useAddMonthMutation,
  useDeleteMonthMutation,
  useUpdateMonthMutation,
  // usePATCHupdateMonth,
  // useUpdateDayMutation,
} = monthsApiSlice;
