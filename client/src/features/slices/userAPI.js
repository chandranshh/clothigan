import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    userData: builder.query({
      query: (_id) => `user/${_id}`,
    }),
  }),
});

export const { useUserDataQuery } = userApi;
