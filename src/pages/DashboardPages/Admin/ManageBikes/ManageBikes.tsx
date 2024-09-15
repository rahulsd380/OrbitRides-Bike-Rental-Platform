import { useForm } from "react-hook-form";
import Button from "../../../../components/Button/Button";
import Modal1 from "../../../../components/Modal1";
import ManageBikeCard from "./ManageBikeCard";
import { useState } from "react";
import cross from "../../../../assets/Icons/cross.svg";
import { useCreateBikeMutation, useGetAllBikesQuery } from "../../../../redux/Features/Bikes/bikeApi";
import { TBike } from "../../../BikeListing/bike.types";
import { CustomToast } from "../../../../components/ToastMessage/ToastMessage";
import successIcon from "../../../../assets/Icons/successIcon.svg";
import errorIcon from "../../../../assets/Icons/error.svg";

const ManageBikes = () => {
  const {data} = useGetAllBikesQuery({});
  const [createBike, {isLoading:isBikeAdding}] = useCreateBikeMutation({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [openModal1, setOpenModal1] = useState(false);

  const handleAddNewBike = async (data) => {
    const bikeData = {
      name: data.name,
      description: data.description,
      brand: data.brand,
      model: data.model,
      pricePerHour: data.pricePerHour,
      cc: Number(data.cc),
      image: data.image,
      year: Number(data.year),
    };

    try{
      const response = await createBike(bikeData).unwrap();
      console.log(response);
    if(response.success) {
      setOpenModal1(false);
      CustomToast({
        title: "Bike created successfully.",
        icon: successIcon,
      });
    }
    }catch(err){
      setOpenModal1(false);(false);
      CustomToast({
        title: "Something went wrong.",
        icon: errorIcon,
      });
      return;
    }
  };


  return (
    <div className="font-SpaceGrotesk">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-3xl font-bold text-[#364F53]">Manage All Bikes</h1>

        <div>
          <Button onClick={() => setOpenModal1(true)} variant="primary">
            Add New Bike
          </Button>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-7">
        {data?.data.map((bike : TBike) => (
          <ManageBikeCard key={bike?._id} {...bike}/>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-10 mt-5">
        
      </div>

      {/* Add bike modal */}
      <Modal1
        openModal1={openModal1}
        setOpenModal1={setOpenModal1}
        classNames={"w-full max-w-[500px] h-[500px] p-4"}
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

        <form
          onSubmit={handleSubmit(handleAddNewBike)}
          className="flex flex-col gap-4"
        >
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

          {/* Bike Image URL */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Bike Image URL</p>
            <input
              {...register("image", { required: "Image is required" })}
              type="text"
              id="image"
              className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter the bike image url"
            />
            {errors.image && (
              <span className="text-rose-600 text-start">
                {errors.image.message as string}
              </span>
            )}
          </div>

          {/* Price */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Price</p>
            <input
              {...register("pricePerHour", { required: "Price is required" })}
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

          {/* Description */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Description</p>
            <textarea
              {...register("description", { required: "Description is required" })}
              rows={5}
              id="Description"
              className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter the bike Description"
            />
            {errors.description && (
              <span className="text-rose-600 text-start">
                {errors.description.message as string}
              </span>
            )}
          </div>
          <button type="submit" className="w-full">
            <Button variant="primary" classNames="w-full">
              {
                isBikeAdding? "Loading..." : "Add Bike"
              }
            </Button>
          </button>
        </form>
      </Modal1>


    </div>
  );
};

export default ManageBikes;

