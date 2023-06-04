import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { URL_DATA } from "../data/apiKeys";


const URL_DATA = "https://godziny-3b30f-default-rtdb.europe-west1.firebasedatabase.app"

 export const reactionsApiSlice = createApi({
  reducerPath: "reactionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_DATA }),
  tagTypes: ["reactions"],
  endpoints: builder => ({
    reactions: builder.query<any, void>({
      query: () => "/reactions.json",
      providesTags: ["reactions"],
    }),
    addReaction: builder.mutation<void, any>({
      query: reaction => ({
        url: "/days.json",
        method: "POST",
        body: reaction,
      }),
      invalidatesTags: ["reactions"],
    }),

    updateReaction: builder.mutation<void, any>({
      query: ubdateReaction => ({
        url: `/reactions/${ubdateReaction.id}.json`,
        method: "PUT",
        body: ubdateReaction,
      }),
      invalidatesTags: ["reactions"],
    }),

    deleteReaction: builder.mutation<any, string | undefined>({
      query: id => ({
        url: `/reactions/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["reactions"],
    }),
  }),
});

export const {
  useReactionsQuery,
  useAddReactionMutation,
  useDeleteReactionMutation,
  useUpdateReactionMutation,
} = reactionsApiSlice;
