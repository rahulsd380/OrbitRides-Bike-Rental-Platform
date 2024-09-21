import Button from "../../../components/Button/Button";


const SelectedBikeCard = ({bike}) => {
    return (
        <div className="font-SpaceGrotesk flex flex-col gap-10 w-full lg:w-[50%]">

      <div className="flex flex-col gap-5 bg-white dark:bg-[#E9ECF2]/10 p-3 xl:p-5 rounded-xl shadow-md">
        <div className="w-full h-[300px] rounded-xl p-4 bg-gray-200 dark:bg-[#D9D9D9]/20 flex items-center justify-center">
          <img src={"https://i.ibb.co/nw7jTVy/pngwing-com-11.pngs"} alt="" className="w-full h-[200px]" />
        </div>

        <div className="">
          <p className={`${bike.isAvailable ? "text-green-500" : "text-rose-500"}   text-sm`}>{bike.isAvailable ? "Available" : "Not Available"}</p>

          <h1 className="font-bold text-3xl dark:text-[#D9D9D9]/80 text-[#364F53] mt-1">
            {bike.name}
          </h1>

          <p className="text-sm text-[#364F53] dark:text-[#D9D9D9]/70 mt-2">
           {bike.description}
          </p>

          <div className="flex items-center gap-3 mt-4">
            <h1 className=" text-3xl text-[#364F53] dark:text-[#D9D9D9]/70">
              Price:{" "}
              <span className="font-bold text-[#85A98D]">
                ${bike.pricePerHour}
                <span className="text-lg">/hr</span>
              </span>
            </h1>
            <p className="text-sm text-yellow-600">-20% off</p>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-20">
              <p className="font-bold dark:text-[#D9D9D9]/70 px-4 py-1 bg-[#FF885B] text-white rounded-md">
                CC : <span className="font-normal dark:text-[#D9D9D9]/70">{bike.cc}</span>
              </p>
              <p className="font-bold dark:text-[#D9D9D9]/70 px-4 py-1 bg-[#D91656] text-white rounded-md">
                Model :{" "}
                <span className="font-normal dark:text-[#D9D9D9]/70">{bike.model}</span>
              </p>
            </div>

            <div className="flex items-center gap-[58px] mt-4">
              <p className="font-bold dark:text-[#D9D9D9]/70 px-4 py-1 bg-[#FFE5CF] text-[#364F53] rounded-md">
                Year : <span className="font-normal dark:text-[#D9D9D9]/70">{bike.year}</span>
              </p>
              <p className="font-bold dark:text-[#D9D9D9]/70 px-4 py-1 bg-[#557C56] text-white rounded-md">
                Brand :{" "}
                <span className="font-normal dark:text-[#D9D9D9]/70">{bike.brand}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-6">
            <Button variant="primary">Book Now</Button>
            <Button variant="secondary">Add To Wishlist</Button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SelectedBikeCard;