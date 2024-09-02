import { RiMotorbikeFill } from "react-icons/ri";
import Button from "../Button/Button";
import FeaturedBikesCard from "./FeaturedBikesCard";
import { useGetAllBikesQuery } from "../../redux/Features/Bikes/bikeApi";
import { FeaturedBike } from "./featuredBikes.types";
import FeaturedBikeCardLoader from "../Loaders/FeaturedBikeCardLoader";
import { Link } from "react-router-dom";

const FeaturedBikes = () => {
  const { data: featuredBikes, isLoading: isFeaturedBikesLoading } =
    useGetAllBikesQuery({});

  return (
    <div className="font-SpaceGrotesk max-w-[1300px] mx-auto mt-14 p-7 xl:p-0">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
            Our <span className="text-[#85A98D]">Featured Bikes</span>
          </h1>
          <p>Checkout our latest bikes and enjoy your ride.</p>
        </div>

        <Link to={"/dashboard/browse-bikes"} className="hidden justify-center md:block">
        <Button variant="secondary" classNames="flex items-center gap-3">
          View All Bikes
          <RiMotorbikeFill className="text-xl" />
        </Button>
        </Link>
      </div>
      <hr className="border border-[#85A98D] mt-2" />
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {isFeaturedBikesLoading ? (
          <FeaturedBikeCardLoader />
        ) : (
          featuredBikes?.data?.map((bike: FeaturedBike) => (
            <FeaturedBikesCard key={bike?._id} {...bike} />
          ))
        )}
      </div>

      <Link to={"/dashboard/browse-bikes"} className="flex justify-center md:hidden mt-10">
        <Button variant="secondary" classNames="flex items-center gap-3">
          View All Bikes
          <RiMotorbikeFill className="text-xl" />
        </Button>
        </Link>
    </div>
  );
};

export default FeaturedBikes;
