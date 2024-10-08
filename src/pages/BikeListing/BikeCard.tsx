import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { TBike } from "./bike.types";
import { useState } from "react";
import Modal1 from "../../components/Modal1";
import { useForm } from "react-hook-form";
import cross from "../../assets/Icons/cross.svg";
import { TSubmitRental } from "../BikeDetails/BikeDetails";

const BikeCard: React.FC<TBike> = ({
  _id,
  name,
  image,
  pricePerHour,
  description,
  brand,
  isAvailable,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSubmitRental>();

  const [openModal1, setOpenModal1] = useState(false);
  const navigate = useNavigate();

  // For payment page
  const allBikes = {
    _id,
    brand,
    description,
    name,
    image,
    pricePerHour,
  };

  const handleSubmitRental = (data:TSubmitRental) => {
    const rentalData = {
      bikeId: _id,
      startTime: data.startTime,
    };
    navigate("/dashboard/payment", {
      state: { rentalData, bikeData: allBikes },
    });
  };

  // const { bikeName, img, brand, description, price, cc, year, availability } = bike;
  const descriptionWords = description.split(" ");
  const shortDescription =
    descriptionWords.length > 10
      ? descriptionWords.slice(0, 10).join(" ") + "..."
      : description;
  return (
    <div className="bg-white dark:bg-[#E9ECF2]/10 p-4 rounded-xl font-SpaceGrotesk shadow-lg w-[320px]">
      <div className="bg-gray-200 dark:bg-[#D9D9D9]/20 p-3 rounded-t-xl relative">
        {/* Brand */}
        <div className="absolute right-3 top-3 px-2 py-[3px] rounded-3xl bg-white dark:bg-[#2f3d46]  border border-[#85A98D]/40">
          <p className="text-xs text-[#85A98D]">{brand}</p>
        </div>

        {/* Img */}
        <img
          src={"https://i.ibb.co/nw7jTVy/pngwing-com-11.png"}
          alt=""
          className="h-44"
        />
      </div>

      <div className="flex items-center justify-between mt-2">
        {/* Bike name */}
        <h1 className="font-bold text-lg dark:text-white text-[#364F53]">{name}</h1>

        {/* Available status */}
        <div
          className={`${
            isAvailable
              ? "border-[#85A98D]/40 text-[#85A98D]"
              : "border-rose-600 text-rose-600"
          } bg-white dark:bg-[#2f3d46]  px-2 py-[3px] rounded-3xl border w-fit`}
        >
          <p className="text-xs">
            {isAvailable ? "Available" : "Not Available"}
          </p>
        </div>
      </div>

      {/* Bike description */}
      <p className="font-Nunito text-sm mt-1 w-[280px] dark:text-[#D9D9D9]/80 text-[#364F53]">{shortDescription}</p>

      <div className="flex items-center gap-5 mt-4 w-full">
        <Button onClick={() => setOpenModal1(true)} variant="primary" classNames="">
          Book Now
        </Button>
        <Link to={`/dashboard/bike-details/${_id}`} className="">
          <Button variant="secondary">View Details</Button>
        </Link>
      </div>

      <Modal1
        openModal1={openModal1}
        setOpenModal1={setOpenModal1}
        classNames={"w-[400px] p-4"}
      >
        <div className="flex items-center justify-between border-b border-gray-300 pb-2 mb-5">
          <h1 className="text-lg font-medium text-gray-60">
            Select Your Starting Time
          </h1>

          <img
            onClick={() => setOpenModal1(false)}
            src={cross}
            alt=""
            className="size-7 cursor-pointer"
          />
        </div>

        <form
          onSubmit={handleSubmit(handleSubmitRental)}
          className="flex flex-col gap-4"
        >
          {/* Start Time */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Start Time</p>
            <input
              {...register("startTime", { required: "startTime is required" })}
              type="date"
              id="startTime"
              className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter your full startTime"
            />
            {errors.startTime && (
              <span className="text-rose-500 text-start">
                {errors.startTime.message as string}
              </span>
            )}
          </div>

          <button type="submit" className="w-fit">
            <Button variant="primary">Pay</Button>
          </button>
        </form>
      </Modal1>
    </div>
  );
};

export default BikeCard;
