import { baseApi } from "../../API/baseApi";

const bikeApi = baseApi.injectEndpoints({
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

        getAllBikes: builder.query({
            query : () => ({
                url : '/bikes',
                method : "GET",
            })
        }),

        // getBlogById: builder.query({
        //     query : (id) => ({
        //         url : `/blogs/${id}`,
        //         method : "GET",
        //     })
        // }),

        // getBlogByCategory: builder.query({
        //     query : (category) => ({
        //         url : `/blogs/category/${category}`,
        //         method : "GET",
        //     })
        // }),
    })
})

export const { useGetAllBikesQuery } = bikeApi;