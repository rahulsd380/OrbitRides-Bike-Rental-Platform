import { TBike } from "../BikeListing/bike.types";

const BikeTable = ({ bikeData }: { bikeData: TBike }) => {
  return (
    <div className="w-full">
      <div className="overflow-x-auto font-Roboto w-full">
        <table className="min-w-full bg-white dark:bg-[#E9ECF2]/10 rounded-xl">
          <thead className="">
            <tr>
              <th className="rounded-tl-md px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-left text-xs font-semibold text-white uppercase tracking-wider">
                Bike
              </th>

              <th className="px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                Brand
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                CC
              </th>
              <th className="rounded-tr-md px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:dark:bg-[#2f3d46]/10 dark:text-[#D9D9D9]/80 text-[#364F53]">
              <td className="px-6 py-4 whitespace-no-wrap flex items-center">
                <img
                  src={"https://i.ibb.co/nw7jTVy/pngwing-com-11.png"}
                  alt={bikeData.name}
                  className="w-12 h-12 object-cover mr-4"
                />
                <span>{bikeData.name}</span>
              </td>

              <td className="px-6 py-4 whitespace-no-wrap">
                {bikeData.brand}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                {bikeData.cc}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                ৳ {bikeData.pricePerHour}
              </td>
              {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
                  <RxCross2
                    onClick={() => handleDeleteCartItem(cartItem?._id)}
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                  />
                </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BikeTable;
