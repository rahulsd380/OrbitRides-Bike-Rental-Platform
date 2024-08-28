import { useForm } from "react-hook-form";
import Button from "../../../../components/Button/Button";
import Modal1 from "../../../../components/Modal1";
import ManageBikeCard from "./ManageBikeCard";
import { useState } from "react";
import cross from "../../../../assets/Icons/cross.svg";

const ManageBikes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [openModal1, setOpenModal1] = useState(false);

  const handleAddNewBike = (data) => {

  }

  return (
    <div className="font-SpaceGrotesk">
      <h1 className="text-3xl font-bold text-[#364F53]">Manage All Bikes</h1>

      <Button onClick={() => setOpenModal1(true)} variant="primary">
        Add New Bike
      </Button>

      <div className="grid grid-cols-3 gap-10 mt-5">
        <ManageBikeCard />
      </div>

      <Modal1
        openModal1={openModal1}
        setOpenModal1={setOpenModal1}
        classNames={"w-[500px] h-[500px] p-4"}
      >
        <div className="flex items-center justify-between border-b border-gray-300 pb-2 mb-5">
          <h1 className="text-lg font-medium text-gray-60 capitalize">
            Add A New Bike
          </h1>

          <img
            onClick={() => setOpenModal1(false)}
            src={cross}
            alt=""
            className="size-7 cursor-pointer"
          />
        </div>

        <form onSubmit={handleSubmit(handleAddNewBike)} className="flex flex-col gap-4">
            
          {/* Name */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Name</p>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              id="name"
              className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter the bike name"
            />
            {errors.name && (
              <span className="text-rose-600 text-start">
                {errors.name.message as string}
              </span>
            )}
          </div>

          {/* Price */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Price</p>
            <input
              {...register("price", { required: "Price is required" })}
              type="text"
              id="price"
              className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter the bike Price"
            />
            {errors.price && (
              <span className="text-rose-600 text-start">
                {errors.price.message as string}
              </span>
            )}
          </div>

          {/* Year */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Year</p>
            <input
              {...register("year", { required: "Year is required" })}
              type="text"
              id="year"
              className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter the bike year"
            />
            {errors.year && (
              <span className="text-rose-600 text-start">
                {errors.year.message as string}
              </span>
            )}
          </div>

          {/* CC */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">CC</p>
            <input
              {...register("cc", { required: "CC is required" })}
              type="text"
              id="cc"
              className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter the bike cc"
            />
            {errors.cc && (
              <span className="text-rose-600 text-start">
                {errors.cc.message as string}
              </span>
            )}
          </div>

          {/* Model */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Model</p>
            <input
              {...register("model", { required: "Model is required" })}
              type="text"
              id="model"
              className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter the bike model"
            />
            {errors.model && (
              <span className="text-rose-600 text-start">
                {errors.model.message as string}
              </span>
            )}
          </div>

          {/* Brand */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Brand</p>
            <input
              {...register("brand", { required: "Brand is required" })}
              type="text"
              id="brand"
              className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter the bike brand"
            />
            {errors.brand && (
              <span className="text-rose-600 text-start">
                {errors.brand.message as string}
              </span>
            )}
          </div>

          <button type="submit" className="w-full">
          <Button variant="primary" classNames="w-full">Submit</Button>
          </button>
        </form>
      </Modal1>
    </div>
  );
};

export default ManageBikes;
