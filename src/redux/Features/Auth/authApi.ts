import { baseApi } from "../../API/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),

    signup: builder.mutation({
      query: (userInfo) => ({
        method: "POST",
        url: "/user/signup",
        body: userInfo,
      }),
      // invalidatesTags : ["products"]
    }),

    getMe: builder.query({
      query: () => ({
        method: "GET",
        url: "/user/me",
      }),
      // invalidatesTags : ["products"]
    }),

    deleteAccount: builder.mutation({
      query: ({userId, data}) => ({
        method: "PUT",
        url: `/user/${userId}`,
        body : data,
      }),
      // invalidatesTags : ["products"]
    }),

  }),
});

export const { useLoginMutation, useSignupMutation, useGetMeQuery, useDeleteAccountMutation } = authApi;
