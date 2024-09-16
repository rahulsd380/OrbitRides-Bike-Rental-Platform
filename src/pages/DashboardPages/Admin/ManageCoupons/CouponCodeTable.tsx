import { CustomToast } from '../../../../components/ToastMessage/ToastMessage';
import { useDeleteCouponMutation, useGetAllCouponsQuery } from '../../../../redux/Features/CouponCode/couponCodeApi';
import { TCouponData } from './ManageCoupons';
import successIcon from "../../../../assets/Icons/successIcon.svg";
import errorIcon from "../../../../assets/Icons/error.svg";
import deleteIcon from "../../../../assets/Icons/delete.svg";

const CouponCodeTable = () => {
  const { data: coupons } = useGetAllCouponsQuery(undefined);
  const [deleteCoupon, { isLoading: isCouponDeleting }] = useDeleteCouponMutation();

  const handleDeleteCoupon = async (couponId: string) => {
    console.log(couponId);
    try {
      const res = await deleteCoupon(couponId).unwrap();
      if (res.success) {
        CustomToast({
          title: "Coupon Code deleted successfully.",
          icon: successIcon,
        });
      }
    } catch (err) {
      CustomToast({
        title: "Couldn't delete coupon.",
        icon: errorIcon,
      });
    }
  };

  return (
    <div className="w-full mt-10">
      <div className="overflow-x-auto font-Roboto w-full">
        <table className="min-w-full bg-white dark:bg-[#E9ECF2]/10 rounded-xl overflow-x-auto">
          <thead className="">
            <tr className=''>
              <th className="rounded-tl-md px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-left text-xs font-semibold text-white uppercase tracking-wider">
                Coupon Code
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                Off
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                Created At
              </th>
              <th className="rounded-tr-md px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="w-full overflow-x-auto">
            {coupons?.data && coupons.data.length > 0 ? (
              coupons.data.map((coupon: TCouponData) => (
                <tr className="bg-white dark:dark:bg-[#2f3d46]/10 dark:text-[#D9D9D9]/80 text-[#364F53]" key={coupon._id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-500">
                    {coupon?.couponCode}
                  </td>
                 
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-500">
                    {coupon?.off}%
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-500">
                    {coupon?.createdAt}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-500">
                    <div className="flex items-center gap-5 mt-4">
                      <button
                        onClick={() => handleDeleteCoupon(coupon?._id)}
                        className="flex items-center gap-2"
                      >
                        <img src={deleteIcon} alt="Delete Icon" className="size-5" />
                        {isCouponDeleting ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                  No Coupons Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CouponCodeTable;
