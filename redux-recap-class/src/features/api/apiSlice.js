import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  // refetchOnFocus: false,
  // refetchOnReconnect: true,
  tagTypes: ["posts"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (limit) => `/posts?_limit=${limit}`,
      providesTags: ["posts"],
    }),
    getPost: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: (result, error, arg) => [{ type: "posts", id: arg }],
    }),
    addPost: builder.mutation({
      query: (data) => ({
        url: `/posts`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["posts"],
    }),
    editPost: builder.mutation({
      query: ({ id, data }) => ({
        url: `/posts/${id}`,
        method: "PATCH",
        body: data,
      }),
      providesTags: (result, error, arg) => [{ type: "posts", id: arg.id}],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation } =
  apiSlice;
