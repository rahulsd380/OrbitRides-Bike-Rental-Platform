import { Link } from "react-router-dom";
import { FeaturedBike } from "./featuredBikes.types";

const FeaturedBikesCard: React.FC<FeaturedBike> = ({ _id, image, brand }) => {
  return (
    <div className="w-full max-w-[320px] space-y-3 rounded-xl bg-white p-4 shadow-xl">
      
      <div className="bg-gray-200 p-3 rounded-xl">
        <img src={image} alt="" className="h-44" />
      </div>
      <h6 className="text-sm md:text-base lg:text-lg mb-3">{brand}</h6>

      <Link to={`/dashboard/bike-details/${_id}`} className="">
      <button className="w-full px-5 py-2 rounded bg-[#2f3d46] text-white">
        
          View Details
        
      </button>
      </Link>
    </div>
  );
};

export default FeaturedBikesCard;
