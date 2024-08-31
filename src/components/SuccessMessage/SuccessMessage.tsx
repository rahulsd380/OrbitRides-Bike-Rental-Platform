import Confetti from "react-confetti";
import success from "../../assets/Icons/success.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const SuccessMessage = () => {
  return (
    <div className="font-SpaceGrotesk overflow-hidden flex items-center justify-center">
      <Confetti width={500} height={400} />

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center">
          <img src={success} alt="" className="size-[200px]" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-neutral-55 text-center">
            Booked Successfull!!
          </h1>
          <p className="text-sm max-w-[345px] text-gray-800 mx-auto text-center mt-1">
            Explore & ride new bike!!
          </p>
        </div>

        <Button variant="secondary">
       <Link to={"/dashboard/my-rentals"}>
       My Rentals
       </Link>
        </Button>
      </div>
    </div>
  );
};

export default SuccessMessage;
