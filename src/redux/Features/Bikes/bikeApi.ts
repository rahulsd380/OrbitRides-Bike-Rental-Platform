import { baseApi } from "../../API/baseApi";

const bikeApi = baseApi.injectEndpoints({
    // tagTypes: ["blogs"],
    endpoints : (builder) => ({
    
        getAllBikes: builder.query({
            query : () => ({
                url : '/bikes',
                method : "GET",
            }),
            providesTags : ["bikes"]
        }),

        deleteBike: builder.mutation({
            query : (bikeId) => ({
                url : `/bikes/${bikeId}`,
                method : "DELETE",
            }),
            invalidatesTags : ["bikes"]
        }),

        updateBikeInfo: builder.mutation({
            query: ({id, bikeUpdatedData}) => ({
              method: "PUT",
              url: `/bikes/${id}`,
              body: bikeUpdatedData,
            }),
            invalidatesTags: ["bikes"]
          }),
    })
})

export const { useGetAllBikesQuery, useDeleteBikeMutation, useUpdateBikeInfoMutation } = bikeApi;