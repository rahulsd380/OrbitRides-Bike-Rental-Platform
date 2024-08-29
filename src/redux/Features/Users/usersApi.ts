import { baseApi } from "../../API/baseApi";

const usersApi = baseApi.injectEndpoints({
    // tagTypes: ["blogs"],
    endpoints : (builder) => ({
        // createBlog: builder.mutation({
        //     query : (data) => ({
        //         url : '/blogs/create-blog',
        //         method : "POST",
        //         body : data
        //     }),
        //     // invalidatesTags : ["blogs"]
        // }),

        getAllUsers: builder.query({
            query : () => ({
                url : '/users',
                method : "GET",
            })
        }),
    })
})

export const { useGetAllUsersQuery } = usersApi;