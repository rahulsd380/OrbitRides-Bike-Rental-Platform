import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import { useGetAllBikesQuery } from "../../redux/Features/Bikes/bikeApi";
import { TBike } from "./bike.types";
import BikeCard from "./BikeCard";
import BikeCardLoader from "../../components/Loaders/BikeCardLoader";

const BikeListing = () => {
  const { data, isLoading: isBikeLoading } = useGetAllBikesQuery({});
  const [filteredBikes, setFilteredBikes] = useState<TBike[]>([]);
  
  // Filters state
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [isAvailableFilter, setIsAvailableFilter] = useState<string>("");

  // Unique brand and model items
  const modelItems: string[] = [...new Set(data?.data?.map((item) => item.model))];
  const brandItems: string[] = [...new Set(data?.data?.map((item) => item.brand))];
  const availabilityItems = ["Available", "Unavailable"];

  // Apply filters whenever data or filters change
  useEffect(() => {
    if (!data?.data) return;

    let filtered = data.data;

    if (selectedBrand) {
      filtered = filtered.filter((bike) => bike.brand === selectedBrand);
    }

    if (selectedModel) {
      filtered = filtered.filter((bike) => bike.model === selectedModel);
    }

    if (isAvailableFilter) {
      const isAvailableBool = isAvailableFilter === "Available";
      filtered = filtered.filter((bike) => bike.isAvailable === isAvailableBool);
    }

    setFilteredBikes(filtered);
  }, [data, selectedBrand, selectedModel, isAvailableFilter]);

  return (
    <div className="bg-white dark:bg-[#E9ECF2]/10  rounded-xl p-5 font-SpaceGrotesk">
      <div className="w-full flex flex-col xl:flex-row gap-5 xl:gap-0 items-start xl:items-center justify-between">
        <h1 className="text-3xl font-bold dark:text-[#D9D9D9]/80 text-[#364F53]">Available Bikes</h1>

        <div className="flex flex-col md:flex-row items-center gap-5 xl:w-auto w-full">
          {/* Brand filtering */}
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="bg-[#E9ECF2]/20 border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full dark:text-[#D9D9D9] text-[#364F53]"
          >
            <option value="">Select Brand</option>
            {brandItems.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          {/* Model filtering */}
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="bg-[#E9ECF2]/20 border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full dark:text-[#D9D9D9] text-[#364F53]"
          >
            <option value="">Select Model</option>
            {modelItems.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </select>

          {/* Availability filtering */}
          <select
            value={isAvailableFilter}
            onChange={(e) => setIsAvailableFilter(e.target.value)}
            className="bg-[#E9ECF2]/20 border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full dark:text-[#D9D9D9] text-[#364F53]"
          >
            <option value="">Select Availability</option>
            {availabilityItems.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

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
        ) : filteredBikes.length === 0 ? (
          <p className="text-center text-xl font-semibold text-gray-500">No Bike Available</p>
        ) : (
          filteredBikes.map((bike: TBike) => <BikeCard key={bike?._id} {...bike} />)
        )}
      </div>
    </div>
  );
};

export default BikeListing;
