import { useState } from "react";
import Button from "../../components/Button/Button";
import { useLoaderData, useNavigate } from "react-router-dom";
import { TBike } from "../BikeListing/bike.types";
import Modal1 from "../../components/Modal1";
import cross from "../../assets/Icons/cross.svg";
import { useForm } from "react-hook-form";

export type TSubmitRental = {
  bikeId:string;
  startTime:string
}

const BikeDetails = () => {

  const navigate = useNavigate();
  const allBikes = useLoaderData() as { data: TBike };

//   Tab for description & reviews
  const [tab, setTab] = useState("Description");

  const [openModal1, setOpenModal1] = useState(false);

  const {
    _id,
    brand,
    cc,
    description,
    isAvailable,
    model,
    name,
    pricePerHour,
    year,
  } = allBikes?.data || {};


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSubmitRental>();

  const handleSubmitRental =(data:TSubmitRental) => {
    const rentalData = {
      bikeId : _id,
      startTime : data.startTime,
    };
    navigate('/dashboard/payment', { state: { rentalData, bikeData: allBikes?.data } });
  }


  if (!allBikes) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-SpaceGrotesk mt-10 flex flex-col gap-10">

      <div className="flex gap-10 bg-white dark:bg-[#E9ECF2]/10 p-5 rounded-xl shadow-md">
        <div className="size-[400px] rounded-xl p-4 bg-gray-200 dark:bg-[#D9D9D9]/20 flex items-center justify-center">
          <img src={"https://i.ibb.co/nw7jTVy/pngwing-com-11.pngs"} alt="" />
        </div>

        <div className="w-[50%]">
          <p className="text-green-500 text-sm">{isAvailable ? "Available" : "Not Available"}</p>

          <h1 className="font-bold text-3xl dark:text-[#D9D9D9]/80 text-[#364F53] mt-1">
            {name}
          </h1>

          <p className="text-sm text-[#364F53] dark:text-[#D9D9D9]/70 mt-2">
           {description}
          </p>

          <div className="flex items-center gap-3 mt-4">
            <h1 className=" text-3xl text-[#364F53] dark:text-[#D9D9D9]/70">
              Price:{" "}
              <span className="font-bold text-[#85A98D]">
                ${pricePerHour}
                <span className="text-lg">/hr</span>
              </span>
            </h1>
            <p className="text-sm text-yellow-600">-20% off</p>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-20">
              <p className="font-bold text-[#364F53] dark:text-[#D9D9D9]/70">
                CC : <span className="font-normal text-[#364F53] dark:text-[#D9D9D9]/70">{cc}</span>
              </p>
              <p className="font-bold text-[#364F53] dark:text-[#D9D9D9]/70">
                Model :{" "}
                <span className="font-normal text-[#364F53] dark:text-[#D9D9D9]/70">{model}</span>
              </p>
            </div>

            <div className="flex items-center gap-20 mt-4">
              <p className="font-bold text-[#364F53] dark:text-[#D9D9D9]/70">
                Year : <span className="font-normal text-[#364F53] dark:text-[#D9D9D9]/70">{year}</span>
              </p>
              <p className="font-bold text-[#364F53] dark:text-[#D9D9D9]/70">
                Brand :{" "}
                <span className="font-normal text-[#364F53] dark:text-[#D9D9D9]/70">{brand}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-6">
            <Button onClick={() => setOpenModal1(true)} variant="primary">Book Now</Button>
            <Button variant="secondary">Add To Wishlist</Button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#E9ECF2]/10 p-5 rounded-xl shadow-md">
        {/* TAb buttons */}
        <div className="flex items-center gap-7 border-b border-[#364F53]/20 dark:border-[#D9D9D9]/40 pb-3">
          <p
            onClick={() => setTab("Description")}
            className={`${
              tab === "Description"
                ? "text-[#85A98D] font-bold"
                : "text-[#364F53] dark:text-[#D9D9D9]/70 font-medium"
            } cursor-pointer`}
          >
            Description
          </p>
          <p
            onClick={() => setTab("Reviews")}
            className={`${
              tab === "Reviews"
                ? "text-[#85A98D] font-bold"
                : "text-[#364F53] dark:text-[#D9D9D9]/70 font-medium"
            } cursor-pointer`}
          >
            Reviews
          </p>
        </div>

        {/* Content */}
        {tab === "Description" && (
          <div className="mt-5 text-[#364F53] dark:text-[#D9D9D9]/70">
           {description}
          </div>
        )}
        {tab === "Reviews" && (
          <div className="mt-5 text-[#364F53] dark:text-[#D9D9D9]/70">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nihil,
            officiis odit sint ipsam eveniet nobis iste dolorem dolore eius
            provident tempore quo sequi sapiente repellat blanditiis fuga.
            Dolore tempore nihil doloremque autem cupiditate quia saepe repellat
            neque. Error, minus asperiores ab aperiam quo necessitatibus.
            Perferendis blanditiis nostrum autem labore.
          </div>
        )}
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
{/* 
        <div className="hidden">
            <Payment rentalData={rentalData} allBikes={allBikes}/>
        </div> */}
    </div>
  );
};

export default BikeDetails;
