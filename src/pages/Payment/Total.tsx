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

type TTotalProps = {
  rentalData: {
    bikeId:string;
    startTime:string
  },
  bikeData:{
    brand:string;
    description:string;
    name:string;
    image:string;
    pricePerHour:string | number;
    _id:string;
  }
}
type TCouponInputData = {
  couponCode:string;
}

const Total = ({ rentalData, bikeData }:TTotalProps) => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<TCouponInputData>();
  const [makeRental, { isLoading }] = useMakeRentalMutation({});
  const [validateCoupon, { isLoading: isCouponValidating }] = useValidateCouponMutation({});
  const [openModal1, setOpenModal1] = useState(false);

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

    // Default total calculation
    const pricePerHour = Number(bikeData?.pricePerHour )|| 0;
    const [defaultTotal, setDefaultTotal] = useState(pricePerHour - 100)

    const handleValidateCouponCode = async (data:TCouponInputData) => {
      const couponCode = data.couponCode;
      try {
        clearErrors('couponCode');
        const res = await validateCoupon({ couponCode }).unwrap();
    
        const discountValue = Number(res?.data?.off) || 0;
    
        // Calculate the new total based on the discount and set the state
        setDefaultTotal(() => {
          const newTotal = pricePerHour - (pricePerHour * discountValue / 100) - 100;
          return newTotal;
        });
    
      } catch (err) {
        setError('couponCode', { type: 'manual', message: 'Invalid coupon code!' });
      }
    };
    



  return (
    <div className="border border-[#85A98D] p-6 rounded-md font-SpaceGrotesk w-full md:max-w-xs">
      <h2 className="text-lg font-semibold mb-4 dark:text-[#D9D9D9]/80 text-[#364F53]">TOTAL COST</h2>
      <div>
        <div className="flex justify-between mb-3">
          <span className=" font-medium dark:text-[#D9D9D9]/80 text-[#364F53]">Subtotal</span>
          <span className='dark:text-[#D9D9D9]/80 text-[#364F53]'>৳ {pricePerHour}</span>
        </div>

        <hr className="border mb-3" />

        <div className="flex justify-between mb-3">
          <span className="font-medium dark:text-[#D9D9D9]/80 text-[#364F53]">Advance (100 ৳)</span>
          <span className='dark:text-[#D9D9D9]/80 text-[#364F53]'>৳ 100</span>
        </div>
        <hr className="border" />
        <div className="flex justify-between mb-4 mt-3 font-bold">
          <span className="font-semibold text-[#85A98D]">Due</span>
          <span className='dark:text-[#D9D9D9]/80 text-[#364F53]'>৳ {defaultTotal.toFixed(2)}</span>
        </div>

        <form onSubmit={handleSubmit(handleValidateCouponCode)}>
          <div className='mb-5'>
            <span className="font-semibold text-[#85A98D]">Coupon Code</span>
            <div className='flex items-center gap-2 mt-1'>
              <input
                {...register("couponCode")}
                type="text"
                id="couponCode"
                className="bg-[#E9ECF2]/20 dark:bg-[#E9ECF2]/10  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full text-[#364F53] dark:text-[#D9D9D9]/70"
                placeholder="Enter coupon code"
              />
              <button
                type="submit"
                disabled={isCouponValidating}
                className='p-2 rounded border border-[#364F53]/30 dark:border-[#D9D9D9]/30 hover:shadow'
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
        classNames={"w-[500px] h-[451px] h-fit p-4 overflow-hidden"}
      >
        <SuccessMessage />
      </Modal1>
    </div>
  );
};

export default Total;
