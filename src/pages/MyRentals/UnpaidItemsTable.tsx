import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const UnpaidItemsTable = ({ unPaidBike, isLoading }) => {
  // const navigate = useNavigate();
  // const handleSubmitRental =(data) => {
  //   const rentalData = {
  //     bikeId : _id,
  //     startTime : data.startTime,
  //   };
  //   navigate('/dashboard/payment', { state: { rentalData, bikeData: allBikes?.data } });
  // }


  return (
    <div className="w-full mt-5">
      <div className="overflow-x-auto font-Roboto w-full">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl">
          <thead className="">
            <tr>
              <th className="rounded-tl-md px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-left text-xs font-semibold text-white uppercase tracking-wider">
                Bike
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                Start Time
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                Return Time
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                Total Cost
              </th>
              <th className="rounded-tr-md px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              // Render Skeleton Rows while loading
              [...Array(5)].map((_, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="w-24 h-5 bg-gray-200 animate-pulse rounded"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="w-32 h-5 bg-gray-200 animate-pulse rounded"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="w-32 h-5 bg-gray-200 animate-pulse rounded"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="w-20 h-5 bg-gray-200 animate-pulse rounded"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"></td>
                </tr>
              ))
            ) : unPaidBike?.length === 0 ? (
              // Render "No Data Available" if there's no data
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-4 text-center text-gray-500 border-b border-gray-200"
                >
                  No Data Available
                </td>
              </tr>
            ) : (
              // Render Data Rows once loaded
              unPaidBike?.map((cartItem) => (
                <tr key={cartItem._id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {cartItem.bikeId}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {new Date(cartItem.startTime).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {cartItem.returnTime
                      ? new Date(cartItem.returnTime).toLocaleString()
                      : "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    ৳ {cartItem.totalCost}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <Link to={"/dashboard/payment"}>
                      <Button variant="primary">Pay Now</Button>
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UnpaidItemsTable;
