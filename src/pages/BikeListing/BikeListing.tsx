import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { useGetAllBikesQuery } from "../../redux/Features/Bikes/bikeApi";
import { TBike } from "./bike.types";
import BikeCard from "./BikeCard";
import BikeCardLoader from "../../components/Loaders/BikeCardLoader";

const BikeListing = () => {
  const { data, isLoading: isBikeLoading } = useGetAllBikesQuery({});
  const [filteredBikes, setFilteredBikes] = useState<TBike[]>([]);

  const modelItems: string[] = [...new Set(data?.data?.map((item) => item.model))];
  const brandItems: string[] = [...new Set(data?.data?.map((item) => item.brand))];

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    if (data?.data) {
      setFilteredBikes(data.data);
    }
  }, [data]);

  // Filter bikes by selected brand and model
  const filterBikes = () => {
    let newItems = data?.data || [];

    if (selectedBrand) {
      newItems = newItems.filter((item) => item.brand === selectedBrand);
    }

    if (selectedModel) {
      newItems = newItems.filter((item) => item.model === selectedModel);
    }

    setFilteredBikes(newItems);
  };

  // Handle brand selection
  const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(event.target.value);
    filterBikes();
  };

  // Handle model selection
  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(event.target.value);
    filterBikes();
  };

  return (
    <div className="bg-white rounded-xl p-5 font-SpaceGrotesk">
      <div className="w-full flex flex-col xl:flex-row gap-5 xl:gap-0 items-start xl:items-center justify-between">
        <h1 className="text-3xl font-bold text-[#85A98D]">Available Bikes</h1>

        <div className="flex flex-col md:flex-row items-center gap-5 xl:w-auto w-full">
          {/* Brand filtering */}
          <select
            className="bg-[#E9ECF2]/20 border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
            value={selectedBrand}
            onChange={handleBrandChange}
          >
            <option value="" disabled>
              Select brand
            </option>
            {brandItems.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          {/* Model filtering */}
          <select
            className="bg-[#E9ECF2]/20 border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
            value={selectedModel}
            onChange={handleModelChange}
          >
            <option value="" disabled>
              Select model
            </option>
            {modelItems.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </select>

          <Button variant="primary" classNames="w-full">
            <p className="text-center">Available Bikes</p>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-7">
        {isBikeLoading ? (
          // loaders
          <>
            <BikeCardLoader />
            <BikeCardLoader />
            <BikeCardLoader />
            <BikeCardLoader />
            <BikeCardLoader />
            <BikeCardLoader />
          </>
        ) : filteredBikes.length === 0 ? (
          // not available message
          <p className="text-center text-xl font-semibold text-gray-500">
            No Bike Available
          </p>
        ) : (
          filteredBikes.map((bike: TBike) => <BikeCard key={bike?._id} {...bike} />)
        )}
      </div>
    </div>
  );
};

export default BikeListing;
