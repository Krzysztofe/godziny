import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_USERS_DATA } from "../data/URL";
import { ModelUser } from "../sharedModels/modelUser";


const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: URL_USERS_DATA,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});


export const usersApiSlice = createApi({
  reducerPath: "usersApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["users"],
  endpoints: (builder) => ({
    
    // queries
    users: builder.query<ModelUser[], void>({
      query: () => "/users",
      providesTags: ["users"],
    }),

    // mutations
    addUser: builder.mutation<void, Omit<ModelUser, "_id">>({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["users"],
    }),

    deleteUser: builder.mutation<void, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useUsersQuery, useAddUserMutation, useDeleteUserMutation } =
  usersApiSlice;
