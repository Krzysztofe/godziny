import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_USERS_DATA } from "../data/URL";
import { ModelUser } from "../sharedModels/modelUser";

export const usersApiSlice = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_USERS_DATA }),
  tagTypes: ["users"],
  endpoints: builder => ({
    
    // queries

    users: builder.query<ModelUser[], void>({
      query: () => "/users.json",
      providesTags: ["users"],
    }),

    // mutations

    addUser: builder.mutation<void, ModelUser[]>({
      query: user => ({
        url: "/users.json",
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["users"],
    }),

    deleteUser: builder.mutation<void, ModelUser[]>({
      query: users => ({
        url: "/users.json",
        method: "PUT",
        body: users,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useUsersQuery, useAddUserMutation, useDeleteUserMutation } =
  usersApiSlice;
