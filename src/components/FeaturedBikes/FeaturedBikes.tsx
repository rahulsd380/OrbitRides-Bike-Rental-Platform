import { RiMotorbikeFill } from "react-icons/ri";
import Button from "../Button/Button";
import FeaturedBikesCard from "./FeaturedBikesCard";
import { useGetAllBikesQuery } from "../../redux/Features/Bikes/bikeApi";
import { FeaturedBike } from "./featuredBikes.types";
import FeaturedBikeCardLoader from "../Loaders/FeaturedBikeCardLoader";

const FeaturedBikes = () => {
  const { data: featuredBikes, isLoading: isFeaturedBikesLoading } =
    useGetAllBikesQuery({});

  return (
    <div className="font-SpaceGrotesk max-w-[1300px] mx-auto mt-14">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-4xl font-bold">
            Our <span className="text-[#85A98D]">Featured Bikes</span>
          </h1>
          <p>Checkout our latest bikes and enjoy your ride.</p>
        </div>

        <Button variant="secondary" classNames="flex items-center gap-3">
          View All Bikes
          <RiMotorbikeFill className="text-xl" />
        </Button>
      </div>
      <hr className="border border-[#85A98D] mt-2" />
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {isFeaturedBikesLoading ? (
          <FeaturedBikeCardLoader />
        ) : (
          featuredBikes?.data?.map((bike: FeaturedBike) => (
            <FeaturedBikesCard key={bike?._id} {...bike} />
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedBikes;
