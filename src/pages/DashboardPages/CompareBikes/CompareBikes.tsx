import { useState } from "react";
import BikeCardLoader from "../../../components/Loaders/BikeCardLoader";
import { useGetAllBikesQuery } from "../../../redux/Features/Bikes/bikeApi";
import { TBike } from "../../BikeListing/bike.types";
import CompareBikeCard from "./CompareBikeCard";
import { CustomToast } from "../../../components/ToastMessage/ToastMessage";
import errorIcon from "../../../assets/Icons/error.svg";
import SelectedBikeCard from "./SelectedBikeCard";
import Lottie from "lottie-react";
import noBikeFoundAnimation from "../../../assets/no-bike.json";

const CompareBikes = () => {
  const { data, isLoading: isBikeLoading } = useGetAllBikesQuery({});
  const [selectedBikes, setSelectedBikes] = useState<TBike[]>([]); // Array to store selected bikes
  const maxSelectedBikes = 2; // Set the maximum number of bikes allowed for comparison

  const handleSelectBike = (bike: TBike) => {
    // Check if the bike is already selected
    const isAlreadySelected = selectedBikes.find(
      (selected) => selected._id === bike._id
    );

    if (isAlreadySelected) {
      // Deselect the bike by removing it from the array
      setSelectedBikes(
        selectedBikes.filter((selected) => selected._id !== bike._id)
      );
    } else if (selectedBikes.length < maxSelectedBikes) {
      // Allow adding the bike if the current selection is less than the limit
      setSelectedBikes([...selectedBikes, bike]);
    } else {
      // Optional: Provide user feedback if they attempt to select more than the allowed number of bikes
      CustomToast({
        title: `You can only select up to ${maxSelectedBikes} bikes for comparison.`,
        icon: errorIcon,
      });
    }
  };

  console.log(selectedBikes); // This will log the array of selected bikes

  return (
    <div className="bg-white dark:bg-[#E9ECF2]/10 rounded-xl p-5 font-SpaceGrotesk">
      <div>
        <h1 className="text-xl font-bold dark:text-[#D9D9D9]/80 text-[#85A98D] text-center capitalize">
          {selectedBikes.length === 0
            ? "No bike selected"
            : "Your Selected Bikes"}
        </h1>
        {selectedBikes.length === 0 && (
          <div className="max-w-[300px] mx-auto">
            <Lottie animationData={noBikeFoundAnimation} loop={true} />
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-5 xl:gap-10 mt-5">
          {selectedBikes.length > 0 &&
            selectedBikes.map((bike) => (
              <SelectedBikeCard key={bike._id} bike={bike} />
            ))}
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-3xl font-bold dark:text-[#D9D9D9]/80 text-[#364F53]">
          All Available Bikes
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-7">
          {isBikeLoading ? (
            <>
              <BikeCardLoader />
              <BikeCardLoader />
              <BikeCardLoader />
              <BikeCardLoader />
              <BikeCardLoader />
              <BikeCardLoader />
            </>
          ) : data?.data?.length === 0 ? (
            <p className="text-center text-xl font-semibold text-gray-500">
              No Bike Available
            </p>
          ) : (
            data?.data?.map((bike: TBike) => (
              <CompareBikeCard
                key={bike?._id}
                bike={bike}
                handleSelectBike={handleSelectBike} // Pass the handler function
                isSelected={selectedBikes.some(
                  (selected) => selected._id === bike._id
                )} // Pass the selected state
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CompareBikes;
