import { baseApi } from "../../API/baseApi";

const rentalsApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        returnBike: builder.mutation({
            query: (id) => ({
                url: `/rentals/${id}/return`,
                method: "POST"
            }),
            invalidatesTags: ["rentals"],
        }),

        getAllRentals: builder.query({
            query : () => ({
                url : 'rentals/all-rentals',
                method : "GET",
            }),
            providesTags : ["rentals"]
        }),
    })
})

export const { useGetAllRentalsQuery, useReturnBikeMutation } = rentalsApi;