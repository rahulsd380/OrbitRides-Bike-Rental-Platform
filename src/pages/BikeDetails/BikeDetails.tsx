import { useState } from "react";
import Button from "../../components/Button/Button";
import { useLoaderData } from "react-router-dom";
import { TBike } from "../BikeListing/bike.types";

const BikeDetails = () => {
  const allBikes = useLoaderData();
  console.log(allBikes);
  const [tab, setTab] = useState("Description");

  const {
    brand,
    cc,
    description,
    isAvailable,
    model,
    name,
    pricePerHour,
    year,
  } = allBikes?.data as TBike;

  if (!allBikes) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-SpaceGrotesk mt-10 flex flex-col gap-10">
      <div className="flex gap-10 bg-white p-5 rounded-xl shadow-md">
        <div className="size-[400px] rounded-xl p-4 bg-gray-200 flex items-center justify-center">
          <img src={"https://i.ibb.co/nw7jTVy/pngwing-com-11.pngs"} alt="" />
        </div>

        <div className="w-[50%]">
          <p className="text-green-500 text-sm">{isAvailable ? "Available" : "Not Available"}</p>

          <h1 className="font-bold text-3xl text-[#364F53] mt-1">
            {name}
          </h1>

          <p className="text-sm text-[#364F53] mt-2">
           {description}
          </p>

          <div className="flex items-center gap-3 mt-4">
            <h1 className=" text-3xl text-[#364F53]">
              Price:{" "}
              <span className="font-bold text-[#85A98D]">
                ${pricePerHour}
                <span className="text-lg">/hr</span>
              </span>
            </h1>
            <p className="text-sm text-yellow-600">-20% off</p>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-20">
              <p className="font-bold text-[#364F53]">
                CC : <span className="font-normal text-gray-700">{cc}</span>
              </p>
              <p className="font-bold text-[#364F53]">
                Model :{" "}
                <span className="font-normal text-gray-700">{model}</span>
              </p>
            </div>

            <div className="flex items-center gap-20 mt-4">
              <p className="font-bold text-[#364F53]">
                Year : <span className="font-normal text-gray-700">{year}</span>
              </p>
              <p className="font-bold text-[#364F53]">
                Brand :{" "}
                <span className="font-normal text-gray-700">{brand}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-6">
            <Button variant="primary">Book Now</Button>
            <Button variant="secondary">Add To Wishlist</Button>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-md">
        {/* TAb buttons */}
        <div className="flex items-center gap-7 border-b border-[#364F53]/20 pb-3">
          <p
            onClick={() => setTab("Description")}
            className={`${
              tab === "Description"
                ? "text-[#85A98D] font-bold"
                : "text-[#364F53] font-medium"
            } text-lg cursor-pointer`}
          >
            Description
          </p>
          <p
            onClick={() => setTab("Reviews")}
            className={`${
              tab === "Reviews"
                ? "text-[#85A98D] font-bold"
                : "text-[#364F53] font-medium"
            } text-lg cursor-pointer`}
          >
            Reviews
          </p>
        </div>

        {/* Content */}
        {tab === "Description" && (
          <div className="mt-5">
           {description}
          </div>
        )}
        {tab === "Reviews" && (
          <div className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nihil,
            officiis odit sint ipsam eveniet nobis iste dolorem dolore eius
            provident tempore quo sequi sapiente repellat blanditiis fuga.
            Dolore tempore nihil doloremque autem cupiditate quia saepe repellat
            neque. Error, minus asperiores ab aperiam quo necessitatibus.
            Perferendis blanditiis nostrum autem labore.
          </div>
        )}
      </div>
    </div>
  );
};

export default BikeDetails;
