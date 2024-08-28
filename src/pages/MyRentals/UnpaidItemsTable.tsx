import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";


const UnpaidItemsTable = () => {
    const data = [
        {
            name : "Bike name",
            startTime : "10:30",
            returnTime : "12:30",
            totalCost : "100"
        },
        {
            name : "Bike name",
            startTime : "10:30",
            returnTime : "12:30",
            totalCost : "100"
        },
    ]

    return (
        <div className="w-full  mt-5">
        <div className="overflow-x-auto font-Roboto w-full">
          <table className="min-w-full bg-white border border-gray-200 rounded-xl">
            <thead className="">
              <tr >
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
              {data.map((cartItem) => (
                <tr>
                  
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {cartItem.name}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {cartItem.startTime}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {cartItem.returnTime}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  ৳ {cartItem.totalCost}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <Link to={"/dashboard/payment"}><Button variant="primary">Pay Now</Button></Link>
                  </td>
                  {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
                    <RxCross2
                      onClick={() => handleDeleteCartItem(cartItem?._id)}
                      className="text-red-600 hover:text-red-800 cursor-pointer"
                    />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default UnpaidItemsTable;