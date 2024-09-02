import { baseApi } from "../../API/baseApi";

const couponCodeApi = baseApi.injectEndpoints({
    // tagTypes: ["blogs"],
    endpoints : (builder) => ({

        createCouponCode: builder.mutation({
            query: (couponData) => {
              return {
                url: "/coupon",
                method: "POST",
                body: couponData,
                headers: {
                  'Content-Type': 'application/json'
                }
              };
            },
            invalidatesTags: ["coupons"],
          }),

          validateCoupon: builder.mutation({
            query: ({ couponCode }) => ({
              url: '/coupon/validateCoupon',
              method: 'POST',
              body: { couponCode },
            }),
          }),


        deleteCoupon: builder.mutation({
            query : (couponId) => ({
                url : `/coupon/deleteCoupon/${couponId}`,
                method : "DELETE",
            }),
            invalidatesTags : ["coupons"]
        }),

        getAllCoupons: builder.query({
            query : () => ({
                url : '/coupon',
                method : "GET",
            }),
            providesTags : ["coupons"]
        }),

    })
})

export const { useCreateCouponCodeMutation, useValidateCouponMutation, useGetAllCouponsQuery, useDeleteCouponMutation  } = couponCodeApi;