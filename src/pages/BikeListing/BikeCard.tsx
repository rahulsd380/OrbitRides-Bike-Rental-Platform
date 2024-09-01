import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { TBike } from "./bike.types";
import { useState } from "react";
import Modal1 from "../../components/Modal1";
import { useForm } from "react-hook-form";
import cross from "../../assets/Icons/cross.svg";

const BikeCard: React.FC<TBike> = ({
  _id, name, image, pricePerHour, description, brand
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [openModal1, setOpenModal1] = useState(false);
  const navigate = useNavigate();

  // For payment page
  const allBikes= {
    _id,
    brand,
    description,
    name,
    image,
    pricePerHour,
  };

  const handleSubmitRental =(data) => {
    const rentalData = {
      bikeId : _id,
      startTime : data.startTime,
    };
    navigate('/dashboard/payment', { state: { rentalData, bikeData: allBikes} });
  }


  // const { bikeName, img, brand, description, price, cc, year, availability } = bike;
  const descriptionWords = description.split(" ");
  const shortDescription =
    descriptionWords.length > 10
      ? descriptionWords.slice(0, 10).join(" ") + "..."
      : description;
  return (
    <div className="bg-white p-4 rounded-xl font-SpaceGrotesk shadow-lg left-">
      <div className="bg-gray-200 p-3 rounded-t-xl">
        <img src={"https://i.ibb.co/nw7jTVy/pngwing-com-11.png"} alt="" className="h-44" />
      </div>
      <div className="flex items-center justify-between mt-5">
        <h1 className="font-bold text-lg">{name}</h1>
        <div className="px-2 py-[3px] rounded-3xl bg-white border border-[#85A98D]/40">
          <p className="text-xs text-[#85A98D]">{brand}</p>
        </div>
      </div>
      <p className="font-Nunito text-sm mt-1">{shortDescription}</p>

      <div className="flex items-center gap-5 mt-4">
      <Button onClick={() => setOpenModal1(true)} variant="primary">Book Now</Button>
        <Link to={`/dashboard/bike-details/${_id}`}>
        <Button variant="secondary">View Details</Button>
        </Link>
      </div>

      <Modal1
        openModal1={openModal1}
        setOpenModal1={setOpenModal1}
        classNames={"w-[400px] p-4"} >

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


       <form onSubmit={handleSubmit(handleSubmitRental)} className="flex flex-col gap-4">
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
              <span className="text-warning-10 text-start">
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
