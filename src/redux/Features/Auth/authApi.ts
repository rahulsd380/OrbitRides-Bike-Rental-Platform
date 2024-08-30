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
        url: "/auth/signup",
        body: userInfo,
      }),
      // invalidatesTags : ["products"]
    }),

    getMe: builder.query({
      query: () => ({
        method: "GET",
        url: "/users/me",
      }),
      // invalidatesTags : ["products"]
    }),

    updateProfile: builder.mutation({
      query: (profileUpdatedData) => ({
        method: "PUT",
        url: `/users/me`,
        body: profileUpdatedData,
      }),
      invalidatesTags: ["users"]
    }),
    

  }),
});

export const { useLoginMutation, useSignupMutation, useGetMeQuery, useUpdateProfileMutation } = authApi;
