import {useState } from 'react';
import Button from '../../components/Button/Button';
import Modal1 from '../../components/Modal1';
import SuccessMessage from '../../components/SuccessMessage/SuccessMessage';
import { useMakeRentalMutation } from '../../redux/Features/Rentals/rentalsApi';
import { CustomToast } from '../../components/ToastMessage/ToastMessage';
import errorIcon from "../../assets/Icons/error.svg";
import { useForm } from 'react-hook-form';
import tickMark from "../../assets/Icons/tick.svg";
import { useValidateCouponMutation } from '../../redux/Features/CouponCode/couponCodeApi';


const Total = ({ rentalData, bikeData }) => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [makeRental, { isLoading }] = useMakeRentalMutation({});
  const [validateCoupon, { isLoading: isCouponValidating }] = useValidateCouponMutation({});
  const [openModal1, setOpenModal1] = useState(false);
  const [discount, setDiscount] = useState(0);

  const handleMakeRental = async () => {
    const startTime = rentalData?.startTime;
  
    if (!startTime || isNaN(new Date(startTime).getTime())) {
      CustomToast({
        title: "Invalid start time. Please check the date.",
        icon: errorIcon,
      });
      return;
    }
  
    const rentalPostData = {
      bikeId: rentalData?.bikeId.toString(),
      startTime: new Date(startTime).toISOString(),
    };
  
    try {
      const response = await makeRental(rentalPostData).unwrap();
  
      if (response?.success) {
        setOpenModal1(true);
      } else {
        CustomToast({
          title: "Rental failed. Please try again.",
          icon: errorIcon,
        });
      }
    } catch (err) {
      CustomToast({
        title: "Couldn't rent the bike!! Please try another.",
        icon: errorIcon,
      });
    }
  };

  const handleValidateCouponCode = async (data) => {
    const couponCode = data.couponCode;
    try {
      clearErrors('couponCode');
      const res = await validateCoupon({ couponCode }).unwrap();

      const discountValue = Number(res?.data?.off) || 0;
      setDiscount(discountValue);
    } catch (err) {
      setError('couponCode', { type: 'manual', message: 'Invalid coupon code!' });
    }
  }

  // Default total calculation
  const pricePerHour = bikeData?.pricePerHour || 0;
  const defaultTotal = pricePerHour - 100;
  const discountedTotal = defaultTotal * discount/100;

  return (
    <div className="border border-[#85A98D] p-6 rounded-md font-SpaceGrotesk w-full md:max-w-xs">
      <h2 className="text-lg font-semibold mb-4">TOTAL COST</h2>
      <div>
        <div className="flex justify-between mb-3">
          <span className="text-gray-700 font-medium">Subtotal</span>
          <span>৳ {pricePerHour}</span>
        </div>

        <hr className="border mb-3" />

        <div className="flex justify-between mb-3">
          <span className="text-gray-700 font-medium">Advance (100 ৳)</span>
          <span>৳ 100</span>
        </div>
        <hr className="border" />
        <div className="flex justify-between mb-4 mt-3 font-bold">
          <span className="font-semibold text-[#85A98D]">Due</span>
          <span>৳ {discountedTotal.toFixed(2)}</span>
        </div>

        <form onSubmit={handleSubmit(handleValidateCouponCode)}>
          <div className='mb-5'>
            <span className="font-semibold text-[#85A98D]">Coupon Code</span>
            <div className='flex items-center gap-2 mt-1'>
              <input
                {...register("couponCode")}
                type="text"
                id="couponCode"
                className="bg-[#E9ECF2]/20 border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
                placeholder="Enter coupon code"
              />
              <button
                type="submit"
                disabled={isCouponValidating}
                className='p-2 rounded border border-[#364F53]/30 hover:shadow'
              >
                {isCouponValidating ? "Validating..." : <img src={tickMark} alt="" className='size-6' />}
              </button>
            </div>
            {errors.couponCode && <p className="text-red-500">{errors.couponCode.message as string}</p>}
          </div>
        </form>

        <Button onClick={handleMakeRental} variant="primary" classNames="w-full">
          {isLoading ? "Loading..." : "PAY"}
        </Button>
      </div>

      <Modal1
        openModal1={openModal1}
        setOpenModal1={setOpenModal1}
        classNames={"w-[500px] h-[450px] h-fit p-4 overflow-hidden"}
      >
        <SuccessMessage />
      </Modal1>
    </div>
  );
};

export default Total;
