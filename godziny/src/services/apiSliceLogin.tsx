import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_LOGIN_DATA } from "../data/URL";
import { ModelUser } from "../sharedModels/modelUser";

type ModelAdmin = {
  adminPassword: string;
  adminEmail: string;
};
type LoginResponse = {
  token: string;
  adminId: string;
};

export const loginApiSlice = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_LOGIN_DATA }),
  tagTypes: ["login"],
  endpoints: (builder) => ({
    // queries

    users: builder.query<ModelUser[], void>({
      query: () => "/login",
      providesTags: ["login"],
    }),

    // mutations

    loginAdmin: builder.mutation<LoginResponse, ModelAdmin>({
      query: (admin) => ({
        url: "/login",
        method: "POST",
        body: admin,
      }),
      invalidatesTags: ["login"],
    }),
  }),
});

export const { useUsersQuery, useLoginAdminMutation } = loginApiSlice;
