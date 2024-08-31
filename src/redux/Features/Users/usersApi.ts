import { baseApi } from "../../API/baseApi";

const usersApi = baseApi.injectEndpoints({
    // tagTypes: ["blogs"],
    endpoints : (builder) => ({
        deleteUser: builder.mutation({
            query : (userId) => ({
                url : `/users/delete-user/${userId}`,
                method : "DELETE",
            }),
            invalidatesTags : ["users"]
        }),

        getAllUsers: builder.query({
            query : () => ({
                url : '/users',
                method : "GET",
            }),
            providesTags : ["users"]
        }),

        changeUserRoleToAdmin: builder.mutation({
            query: (userId) => ({
              url: `/users/change-role/${userId}`,
              method: 'PUT',
            }),
            invalidatesTags : ["users"]
          }),

        changeUserRoleToUser: builder.mutation({
            query: (userId) => ({
              url: `/users/make-user/${userId}`,
              method: 'PUT',
            }),
            invalidatesTags : ["users"]
          }),
    })
})

export const { useGetAllUsersQuery, useDeleteUserMutation, useChangeUserRoleToAdminMutation, useChangeUserRoleToUserMutation } = usersApi;