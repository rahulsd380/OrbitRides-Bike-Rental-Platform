import { FaStar } from "react-icons/fa";
import profileImg from "../../assets/Images/dumy-profile-img.avif"

const TestimonialCard = () => {
  return (
    <div className="bg-[#D9D9D9]/20 shadow-lg rounded font-SpaceGrotesk p-4 flex flex-col gap-3 items-center relative">
        
        <div className="size-28 rounded-b-full bg-white flex items-center justify-center absolute -top-5">
        <div className="size-20 rounded-full">
            <img src={profileImg} alt="" className="size-20 rounded-full" />
        </div>
        </div>

      <div>
      <h1 className="text-2xl font-bold text-center text-[#85A98D] mt-20">
        Rahul Sutradhar
      </h1>
      {/* <p className="text-center mt-1 font-Nunito">Cumilla, Bangladesh</p> */}

      <div className="flex items-center justify-center gap-2 mt-2">
      {
        [1,2,3,4,5].map((_,index) => 
            <FaStar key={index} className="text-yellow-500" />
        )
      }
      </div>

      </div>
      <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam, ipsa, quo numquam, vero aliquam debitis ipsum reiciendis nihil nesciunt facere</p>
    </div>
  );
};

export default TestimonialCard;
