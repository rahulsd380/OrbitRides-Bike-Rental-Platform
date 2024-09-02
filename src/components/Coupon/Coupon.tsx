import CouponCard from "./CouponCard";
import bgImg from "../../assets/Images/coupon-bg-image.jpg";
import quality from "../../assets/Icons/quality.svg";
import price from "../../assets/Icons/price.svg";
import { useGetAllCouponsQuery } from "../../redux/Features/CouponCode/couponCodeApi";


const Coupon = () => {
  const { data: coupons } = useGetAllCouponsQuery(undefined);
    const couponsDetails = [
        {
          title: "Step 1: Select Your Ride",
          subtitle:
            "Choose your preferred bike from our top-quality collection. Add it to your cart to begin your booking process.",
        icon : quality
        },
        {
          title: "Step 2: Enter Coupon Code",
          subtitle:
            "At checkout, enter the coupon code 'ORBITR2024' in the discount field to apply the 47% savings to your booking.",
            icon : price
        },
      ];

  return (
    <div className="relative font-SpaceGrotesk mt-20 bg-gradient-to-r from-teal-50 to-indigo-50 p-10">
    {/* Background image with reduced opacity */}
    <div
      className="absolute inset-0 bg-no-repeat bg-cover opacity-10"
      style={{ backgroundImage: `url(${bgImg})` }}
    ></div>

    {/* Content */}
    <div className="relative z-10">
      <h1 className="text-5xl font-bold text-center">
        Apply <span className="text-[#85A98D]">Coupon</span>
      </h1>
      <p className="max-w-[700px] mx-auto text-center mt-2">
      Unlock Exclusive Discounts and Enjoy Big Savings on Your Next Ride
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-40 mt-10 max-w-[1300px] mx-auto">
        <div className="flex flex-col gap-7">
          {couponsDetails.map((item, index) => (
            <div key={index} className="flex gap-5">
              <div className="size-20 rounded-full p-3 flex items-center justify-center bg-teal-600">
                <img src={item.icon} alt="" className="size-16" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <p className="max-w-[440px] text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {
          coupons?.data?.slice(0,1).map(coupon => 

            <CouponCard coupon={coupon}/>
          )
        }
      </div>
    </div>
  </div>
  );
};

export default Coupon;
