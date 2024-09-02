import gift from "../../assets/Icons/gift.svg";
import { TCouponData } from "../../pages/DashboardPages/Admin/ManageCoupons/ManageCoupons";

const CouponCard:React.FC<TCouponData> = ({couponCode, off}) => {
    return (
        <div className="bg-[#85A98D] w-[35%] rounded-2xl p-8">
        <h1 className="font-SpaceGrotesk italic text-xl font-bold text-[#364F53]">
          Apply Coupon
        </h1>

        <div className="flex items-center justify-between border-b border-[#364F53]/40 pb-5 mt-2">
          <div>
            <h1 className="font-Nunito italic text-5xl font-bold text-[#364F53]">
              Save {off}%
            </h1>
            <p className="font-Nunito text-[#E9ECF2] font-medium mt-1">
              CODE: <span className="font-bold">{couponCode}</span>
            </p>
          </div>

          <img src={gift} alt="" className="size-20 animate-bounce" />
        </div>

        <div className="flex items-center justify-between mt-5">
          <p className="font-Nunito text-[#364F53] font-medium mt-1">
            Get 47% off for all bikes!
          </p>
          <h1 className="font-Nunito italic text-3xl font-bold text-[#364F53]">
            Save {off}%
          </h1>
        </div>
      </div>
    );
};

export default CouponCard;