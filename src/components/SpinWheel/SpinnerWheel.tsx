import { useState, useRef } from "react";
import Modal1 from "../Modal1";
import { useGetAllCouponsQuery } from "../../redux/Features/CouponCode/couponCodeApi";

type TCoupon = {
  couponCode:string;
  off:number
}

const SpinnerWheel = () => {
  const { data } = useGetAllCouponsQuery({});
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<{ off: number; couponCode: string } | null>(null);
  const [openModal1, setOpenModal1] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  const generateGradient = (couponsLength: number) => {
    const colors = [
      "#FFEB3B", "#FF9800", "#F44336", "#4CAF50", 
      "#2196F3", "#9C27B0", "#00BCD4", "#795548"
    ];
    const slices = 360 / couponsLength;
    let gradient = couponsLength > 0 ? '' : 'transparent';

    for (let i = 0; i < couponsLength; i++) {
      const start = i * slices;
      const end = start + slices;
      gradient += `${colors[i % colors.length]} ${start}deg ${end}deg,`;
    }

    return `conic-gradient(${gradient.slice(0, -1)})`;
  };

  const startSpin = () => {
    if (!isSpinning && data?.data.length > 0) {
      setIsSpinning(true);

      // Generate a random index based on the length of data?.data array
      const randomValueIndex = Math.floor(Math.random() * data?.data.length);
      const degrees = 3600 + (randomValueIndex * (360 / data?.data.length));

      if (wheelRef.current) {
        // Spin the wheel
        wheelRef.current.style.transition = "transform 4s ease-out";
        wheelRef.current.style.transform = `rotate(${degrees}deg)`;
      }

      // Set the selected coupon and show modal after the spin stops
      setTimeout(() => {
        setSelectedCoupon(data?.data[randomValueIndex]);
        setOpenModal1(true);
        setIsSpinning(false);
      }, 4000); // Spin duration
    }
  };

  const copyToClipboard = () => {
    if (selectedCoupon) {
      navigator.clipboard.writeText(selectedCoupon.couponCode);
      alert("Coupon code copied to clipboard!");
    }
    setOpenModal1(false)
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-center dark:text-[#D9D9D9]/80 text-[#364F53]">
        Spin The <span className="text-[#85A98D]">Fortune Wheel</span>
      </h1>
      <p className="max-w-[700px] mx-auto text-center mt-2 text-[#364F53] dark:text-[#D9D9D9]/70">
      Unlock Exclusive Discounts and Enjoy Big Savings on Your Next Ride
      </p>
      {/* Spinner Wheel */}
      <div className="relative size-80 border-4 border-white rounded-full mt-10">
        <div
          ref={wheelRef}
          className="size-80 rounded-full"
          style={{
            backgroundImage: generateGradient(data?.data.length || 0),
            position: "relative",
          }}
        >
          {/* Text Overlay for each section */}
          {data?.data?.map((coupon:TCoupon, index:number) => {
            const angle = (360 / data?.data.length) * index;
            const rotate = `rotate(${angle}deg)`;
            const reverseRotate = `rotate(-${angle}deg)`;
            return (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: `${rotate}`,
                  transformOrigin: "50% 50%",
                }}
              >
                <span
                  className="block text-center text-white font-bold"
                  style={{
                    position: "absolute",
                    top: "90%",
                    left: "70%",
                    transform: `translate(-50%, -150%) ${reverseRotate}`,
                    width: "50px",
                  }}
                >
                  {coupon.off}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Spin Button */}
      <button
        onClick={startSpin}
        disabled={isSpinning || data?.data.length === 0}
        className={`mt-8 px-6 py-2 bg-[#85A98D] text-white rounded-lg hover:bg-[#517970] ${isSpinning ? "cursor-not-allowed animate-pulse" : ""}`}
      >
        {isSpinning ? "Spinning..." : "Spin the Wheel"}
      </button>

      {/* Modal to Show Coupon Code */}
      <Modal1 openModal1={openModal1} setOpenModal1={setOpenModal1} classNames="w-[300px]">
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold">Congratulations!</h3>
          {selectedCoupon && (
            <>
              <p className="mt-2">
                You won:{" "}
                <span className="text-green-500 font-bold">
                  {selectedCoupon.off}% OFF
                </span>
              </p>
              <p className="mt-2">
                Coupon Code:{" "}
                <span className="text-blue-500 font-bold">
                  {selectedCoupon.couponCode}
                </span>
              </p>
              <button
                onClick={copyToClipboard}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Copy Code
              </button>
            </>
          )}
        </div>
      </Modal1>
    </div>
  );
};

export default SpinnerWheel;
