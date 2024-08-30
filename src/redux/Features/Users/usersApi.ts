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
    })
})

export const { useGetAllUsersQuery, useDeleteUserMutation } = usersApi;