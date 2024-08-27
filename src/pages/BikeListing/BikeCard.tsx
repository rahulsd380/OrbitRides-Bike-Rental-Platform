import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { TBike } from "./bike.types";

const BikeCard: React.FC<TBike> = ({
  _id, name, description, pricePerHour, isAvailable, cc, year, model, brand
}) => {
  // const { bikeName, img, brand, description, price, cc, year, availability } = bike;
  const descriptionWords = description.split(" ");
  const shortDescription =
    descriptionWords.length > 10
      ? descriptionWords.slice(0, 10).join(" ") + "..."
      : description;
  return (
    <div className="bg-white p-4 rounded-xl font-SpaceGrotesk shadow-lg left-">
      <div className="bg-gray-200 p-3 rounded-t-xl">
        <img src={"https://i.ibb.co/nw7jTVy/pngwing-com-11.png"} alt="" className="h-44" />
      </div>
      <div className="flex items-center justify-between mt-5">
        <h1 className="font-bold text-lg">{name}</h1>
        <div className="px-2 py-[3px] rounded-3xl bg-white border border-[#85A98D]/40">
          <p className="text-xs text-[#85A98D]">{brand}</p>
        </div>
      </div>
      <p className="font-Nunito text-sm mt-1">{shortDescription}</p>

      <div className="flex items-center gap-5 mt-4">
        <Button variant="primary">Book Now</Button>
        <Link to={`/dashboard/bike-details/${_id}`}>
        <Button variant="secondary">View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default BikeCard;
