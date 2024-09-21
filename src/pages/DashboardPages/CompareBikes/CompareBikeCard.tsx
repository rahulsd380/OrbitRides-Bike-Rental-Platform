import Button from "../../../components/Button/Button";
import { TBike } from "../../BikeListing/bike.types";

interface CompareBikeCardProps {
  bike: TBike;
  handleSelectBike: (bike: TBike) => void; // Callback function for selecting bikes
  isSelected: boolean; // Indicate if the bike is selected
}

const CompareBikeCard = ({
  bike,
  handleSelectBike,
  isSelected
}: CompareBikeCardProps) => {
  return (
    <div className={`bg-white dark:bg-[#E9ECF2]/10 p-4 rounded-xl font-SpaceGrotesk shadow-lg w-[320px] ${isSelected ? 'border-2 border-[#20B486]' : ''}`}>
      <div className="bg-gray-200 dark:bg-[#D9D9D9]/20 p-3 rounded-xl relative">
        {/* Brand */}
        <div className="absolute right-3 top-3 px-2 py-[3px] rounded-3xl bg-white dark:bg-[#2f3d46] border border-[#85A98D]/40">
          <p className="text-xs text-[#85A98D]">{bike.brand}</p>
        </div>

        {/* Img */}
        <img
          src={"https://i.ibb.co/nw7jTVy/pngwing-com-11.png"}
          alt=""
          className="h-44"
        />
      </div>

      {/* Bike name */}
      <h1 className="font-bold text-lg dark:text-white text-[#364F53] mt-2">{bike.name}</h1>

      <Button onClick={() => handleSelectBike(bike)} variant="primary" classNames="w-full mt-2">
        {isSelected ? "Deselect" : "Select"} {/* Toggle button text */}
      </Button>
    </div>
  );
};

export default CompareBikeCard;
