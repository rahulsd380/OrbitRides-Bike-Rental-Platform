import { useCreateCouponCodeMutation } from "../../../../redux/Features/CouponCode/couponCodeApi";
import { useForm } from "react-hook-form";
import cross from "../../../../assets/Icons/cross.svg";
import Button from "../../../../components/Button/Button";

type TCouponFormData = {
  couponCode: string;
  off: string;
};

const AddCouponForm = ({ setOpenModal1 }) => {
  const [createCouponCode, { isLoading: isCouponAdding }] =
    useCreateCouponCodeMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCouponFormData>();

  const handleAddCoupon = async (data: TCouponFormData) => {
    const couponData = {
      couponCode: data.couponCode,
      off: Number(data.off),
    };

    try {
      const res = await createCouponCode(couponData).unwrap();
      setOpenModal1(false);

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between border-b border-gray-300 pb-2 mb-5">
        <h1 className="text-lg font-medium text-gray-60 capitalize">
          Add A New Coupon
        </h1>

        <img
          onClick={() => setOpenModal1(false)}
          src={cross}
          alt=""
          className="size-7 cursor-pointer"
        />
      </div>

      <form
        onSubmit={handleSubmit(handleAddCoupon)}
        className="flex flex-col gap-4"
      >
        {/* Coupon Code */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-body-text font-medium text-sm">Coupon Code</p>
          <input
            {...register("couponCode", {
              required: "Coupon Code is required",
            })}
            type="text"
            id="couponCode"
            className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
            placeholder="Enter the coupon code"
          />
          {errors.couponCode && (
            <span className="text-rose-600 text-start">
              {errors.couponCode.message as string}
            </span>
          )}
        </div>

        {/* Off */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-body-text font-medium text-sm">Off</p>
          <input
            {...register("off", { required: "% is required" })}
            type="text"
            id="off"
            className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
            placeholder="Enter the percentage off"
          />
          {errors.off && (
            <span className="text-rose-600 text-start">
              {errors.off.message as string}
            </span>
          )}
        </div>

        <button type="submit" className="w-full">
          <Button variant="primary" classNames="w-full">
            {isCouponAdding ? "Loading..." : "Submit"}
          </Button>
        </button>
      </form>
      
    </div>
  );
};

export default AddCouponForm;
