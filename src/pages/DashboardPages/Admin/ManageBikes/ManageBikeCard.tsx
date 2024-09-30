import { useState } from "react";
import Button from "../../../../components/Button/Button";
import Modal1 from "../../../../components/Modal1";
import { useForm } from "react-hook-form";
import cross from "../../../../assets/Icons/cross.svg";
import { TBike } from "../../../BikeListing/bike.types";
import { useDeleteBikeMutation, useUpdateBikeInfoMutation } from "../../../../redux/Features/Bikes/bikeApi";
import { CustomToast } from "../../../../components/ToastMessage/ToastMessage";
import successIcon from "../../../../assets/Icons/successIcon.svg";
import errorIcon from "../../../../assets/Icons/error.svg";

type BikeData = {
  name: string;
  image: string;
  pricePerHour: number;
  cc: number;
  year: number;
  model: string;
  brand: string;
  description: string;
};

const ManageBikeCard:React.FC<TBike> = ({ _id, name,image, description, brand, pricePerHour, year, cc, model}) => {

  const [deleteBike, {isLoading:isBikeDeleting}] = useDeleteBikeMutation();
  const [updateBikeInfo, {isLoading:isUpdating}] = useUpdateBikeInfoMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BikeData>();

  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);

  const handleUpdateBike = async (data :BikeData) => {
    
    
    const bikeUpdatedData = {
      name : data.name,
      image : data.image,
      pricePerHour : data.pricePerHour,
      cc : data.cc,
      year : data.year,
      model : data.model,
      brand : data.brand,
      description : data.description,
  };

  console.log(_id, bikeUpdatedData);

  try{
      const response = await updateBikeInfo({id:_id, bikeUpdatedData}).unwrap();
      console.log(response);
    if(response.success) {
      setOpenUpdateModal(false);
      CustomToast({
        title: "Updated successfully.",
        icon: successIcon,
      });
    }
    }catch(err){
      setOpenUpdateModal(false);
      CustomToast({
        title: "Something went wrong.",
        icon: errorIcon,
      });
      return;
    }
  };

  const handleDeleteBike = async () =>  {
    
    try{
      const res = await deleteBike(_id).unwrap();
      setOpenDeleteConfirmation(false);
      console.log(res);
      CustomToast({
        title: "Bike Deleted Successfully",
        icon: successIcon,
      });
    }catch(err){
      console.log(err);
    }
  };



  const descriptionWords = description.split(" ");
  const shortDescription =
    descriptionWords.length > 10
      ? descriptionWords.slice(0, 10).join(" ") + "..."
      : description;

    return (
        <div className="bg-white dark:bg-[#E9ECF2]/10 p-4 rounded-xl font-SpaceGrotesk shadow-lg left-">
      <div className="bg-gray-200 dark:bg-[#D9D9D9]/20 p-3 rounded-t-xl flex justify-center items-center">
        <img src={image} alt="" className="h-44" />
      </div>
      <div className="flex items-center justify-between mt-5">
        <h1 className="font-bold text-lg dark:text-[#D9D9D9]/80 text-[#364F53]">{name}</h1>
        <div className="px-2 py-[3px] rounded-3xl bg-white dark:bg-[#2f3d46] border border-[#85A98D]/40">
          <p className="text-xs text-[#85A98D]">{brand}</p>
        </div>
      </div>
      <p className="font-Nunito text-sm mt-1 dark:text-[#D9D9D9]/50 text-[#364F53]">{shortDescription}</p>

      <div className="flex items-center gap-5 mt-4">
        <Button onClick={() => setOpenDeleteConfirmation(true)} variant="warning" classNames="bg-rose-500">Delete</Button>
        <Button onClick={() => setOpenUpdateModal(true)} variant="secondary">Update Details</Button>
      </div>

      <Modal1
        openModal1={openDeleteConfirmation}
        setOpenModal1={setOpenDeleteConfirmation}
        classNames={"w-[400px] p-4"}
      >
        <div className="flex items-center justify-between border-b border-gray-300 pb-2 mb-5">
          <h1 className="text-lg font-medium text-gray-60 capitalize">
            Are you sure you want to delete this?
          </h1>

          <img
            onClick={() => setOpenDeleteConfirmation(false)}
            src={cross}
            alt=""
            className="size-7 cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-end gap-5 mt-5">
          <Button onClick={() => setOpenDeleteConfirmation(false)} variant="secondary">
            Cancel
          </Button>

          <button onClick={handleDeleteBike}>
          <Button variant="warning">
            {
              isBikeDeleting ? "Deleting..." : "Delete"
            }
          </Button>
          </button>
        </div>
        </Modal1>

      
      {/* Update bike modal */}
      <Modal1
        openModal1={openUpdateModal}
        setOpenModal1={setOpenUpdateModal}
        classNames={"w-[500px] h-[500px] p-4"}
      >
        <div className="flex items-center justify-between border-b border-gray-300 pb-2 mb-5">
          <h1 className="text-lg font-medium text-gray-60 capitalize">
            Update bike details
          </h1>

          <img
            onClick={() => setOpenUpdateModal(false)}
            src={cross}
            alt=""
            className="size-7 cursor-pointer"
          />
        </div>

        <form
          onSubmit={handleSubmit(handleUpdateBike)}
          className="flex flex-col gap-4"
        >
          {/* Name */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Bike Name</p>
            <input
              {...register("name", { required: "Name is required" })}
              defaultValue={name}
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

          {/* Image */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Image</p>
            <input
              {...register("image", { required: "Image link is required" })}
              defaultValue={image}
              type="text"
              id="image"
              className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter the bike name"
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
              defaultValue={`${pricePerHour}`}
              type="text"
              id="pricePerHour"
              className="bg-[#E9ECF2]/20  border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter the bike pricePerHour"
            />
            {errors.pricePerHour && (
              <span className="text-rose-600 text-start">
                {errors.pricePerHour.message as string}
              </span>
            )}
          </div>

          {/* Year */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Year</p>
            <input
              {...register("year", { required: "Year is required" })}
              defaultValue={year}
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
              defaultValue={cc}
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
              defaultValue={model}
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
              defaultValue={brand}
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
             defaultValue={description}
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
                isUpdating ? "Updating..." : "Update"
              }
            </Button>
          </button>
        </form>
      </Modal1>


    </div>
    );
};

export default ManageBikeCard;