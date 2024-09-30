import { baseApi } from "../../API/baseApi";


const rentalsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    makeRental: builder.mutation({
        query: (rentalPostData) => {
          console.log(rentalPostData);
          return {
            url: "/rentals",
            method: "POST",
            body: rentalPostData,
            headers: {
              'Content-Type': 'application/json'
            }
          };
        },
        invalidatesTags: ["rentals"],
      }),
      
      

    returnBike: builder.mutation({
      query: (id) => ({
        url: `/rentals/${id}/return`,
        method: "POST",
      }),
      invalidatesTags: ["rentals"],
    }),

    getAllRentals: builder.query({
      query: () => ({
        url: "rentals/all-rentals",
        method: "GET",
      }),
      providesTags: ["rentals"],
    }),

    getMyRentals: builder.query({
      query: () => ({
        url: "rentals",
        method: "GET",
      }),
      providesTags: ["rentals"],
    }),

  }),
});

export const {
  useMakeRentalMutation,
  useGetAllRentalsQuery,
  useReturnBikeMutation,
  useGetMyRentalsQuery,
} = rentalsApi;
