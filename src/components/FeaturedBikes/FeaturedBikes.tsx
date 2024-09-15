import { RiMotorbikeFill } from "react-icons/ri";
import Button from "../Button/Button";
import FeaturedBikesCard from "./FeaturedBikesCard";
import { useGetAllBikesQuery } from "../../redux/Features/Bikes/bikeApi";
import { FeaturedBike } from "./featuredBikes.types";
import FeaturedBikeCardLoader from "../Loaders/FeaturedBikeCardLoader";
import { Link } from "react-router-dom";
import { TBike } from "../../pages/BikeListing/bike.types";

const FeaturedBikes = () => {
  const { data, isLoading: isFeaturedBikesLoading } =
    useGetAllBikesQuery({});

    console.log(data?.data);

    const featuredBikes = data?.data?.filter((bike :TBike) => bike.isAvailable == true);
    console.log(featuredBikes);

  return (
    <div className="font-SpaceGrotesk max-w-[1300px] mx-auto mt-14 p-7 xl:p-0">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-[#D9D9D9]/80 text-[#364F53]">
            Our <span className="text-[#85A98D]">Featured Bikes</span>
          </h1>
          <p className="text-[#364F53] dark:text-[#D9D9D9]/70">Checkout our latest bikes and enjoy your ride.</p>
        </div>

        <Link to={"/dashboard/browse-bikes"} className="hidden justify-center md:block">
        <Button variant="secondary" classNames="flex items-center gap-3 dark:bg-[#E9ECF2]/10 border dark:border-[#517970]/50">
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
          featuredBikes?.map((bike: FeaturedBike) => (
            <FeaturedBikesCard key={bike?._id} {...bike} />
          ))
        )}
      </div>

      <Link to={"/dashboard/browse-bikes"} className="flex justify-center md:hidden mt-10">
        <Button variant="secondary" classNames="flex items-center gap-3 bg-[#E9ECF2]/20 dark:bg-[#E9ECF2]/10 border dark:border-[#517970]/50 border-[#364F53]/30">
          View All Bikes
          <RiMotorbikeFill className="text-xl" />
        </Button>
        </Link>
    </div>
  );
};

export default FeaturedBikes;
