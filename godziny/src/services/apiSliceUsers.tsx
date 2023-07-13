import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ModelUser } from "../pages/settings/settingsUserForm/useSettingsUserFormik";

const URL_USERS =
  "https://godziny-users-default-rtdb.europe-west1.firebasedatabase.app";

export const usersApiSlice = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_USERS }),
  tagTypes: ["users"],
  endpoints: builder => ({
    // queries

    users: builder.query<any, void>({
      query: () => "/users.json",
      providesTags: ["users"],
    }),

    // mutations

    addUser: builder.mutation<void, any>({
      query: user => ({
        url: "/users.json",
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useAddUserMutation, useUsersQuery } = usersApiSlice;
