import { Link } from "react-router-dom";

interface FeaturedBikesCardProps {
    img: string;
    brand: string;
    _id: string;
  }

const FeaturedBikesCard: React.FC<FeaturedBikesCardProps> = ({_id, img, brand}) => {
  return (
    <div className="w-full max-w-[320px] space-y-3 rounded-xl bg-white p-4 shadow-xl">
      <div className="relative flex h-48 w-full justify-center lg:h-[260px] bg-none">
        {/* <div className="absolute left-4 right-4 top-4 flex items-center justify-between"></div> */}
        <img
          width={400}
          height={400}
          className="rounded-lg bg-black/40 object-cover"
          src={img}
          alt=""
        />
      </div>
      <h6 className="text-sm md:text-base lg:text-lg mb-3">{brand}</h6>

      <button  className="w-full px-5 py-2 rounded bg-[#2f3d46] text-white">
      <Link to={`/${_id}`} className="">
        View Details
      </Link>
      </button>
    </div>
  );
};

export default FeaturedBikesCard;
