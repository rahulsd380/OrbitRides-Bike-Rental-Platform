import filterIcon from "../../assets/Icons/filter.svg";
import Button from "../../components/Button/Button";
import { useGetAllBikesQuery } from "../../redux/Features/Bikes/bikeApi";
import { TBike } from "./bike.types";
import BikeCard from "./BikeCard";

const BikeListing = () => {

  const {data} = useGetAllBikesQuery({});
  console.log(data?.data);

  return (
    <div className="bg-white rounded-xl p-5 font-SpaceGrotesk">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#85A98D]">Available Bikes</h1>

        <Button
          variant="secondary"
          classNames="flex items-center gap-2 justify-center"
        >
          <img src={filterIcon} alt="" className="size-4" />
          <p className="">Filter</p>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
        {data?.data.map((bike : TBike) => (
          <BikeCard key={bike?._id} {...bike} />
        ))}
      </div>
    </div>
  );
};

export default BikeListing;
