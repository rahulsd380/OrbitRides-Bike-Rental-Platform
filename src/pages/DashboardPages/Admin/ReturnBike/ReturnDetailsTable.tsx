import { useState } from "react";
import Button from "../../../../components/Button/Button";
import { TRental } from "./return.types";
// import cross from "../../../../assets/Icons/cross.svg";
import { useReturnBikeMutation } from "../../../../redux/Features/Rentals/rentalsApi";
import { CustomToast } from "../../../../components/ToastMessage/ToastMessage";
import successIcon from "../../../../assets/Icons/successIcon.svg"

const ReturnDetailsTable = ({
  rentalsBikes = [],
}: {
  rentalsBikes: TRental[];
}) => {

  const [returnBike, {isLoading}] = useReturnBikeMutation();

  const [selectedRentalId, setSelectedRentalId] = useState<string>("");

  console.log(selectedRentalId);

  const handleReturnBike = async () => {
    const id=selectedRentalId
    try {
        const res = await returnBike(id).unwrap();
        console.log(res);
        if(res.success){
          CustomToast({
            title: "Bike returned successfully.",
            icon: successIcon,
          });
        }
    } catch (err) {
        console.log(err);
    }
};

  return (
    <div className="">
      <div className="overflow-x-auto font-Roboto w-full max-w-[1100px]">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl ">
          <thead>
            <tr>
              <th className="rounded-tl-md px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-left text-xs font-semibold text-white uppercase tracking-wider">
                User ID
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                Bike ID
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
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {rentalsBikes?.length > 0 ? (
              rentalsBikes.map((rental: TRental, index: number) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {rental?.userId}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {rental?.bikeId}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {" "}
                    {new Date(rental?.startTime).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {
                      rental?.returnTime === null ? 
                      "N/A" :
                    new Date(rental?.returnTime).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    ৳ {rental?.totalCost?.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {rental?.isReturned ? "Returned" : 
                    <div>
                      <Button onClick={() => {
                            setSelectedRentalId(rental?._id);
                            handleReturnBike();
                          }} variant="primary">
                        {
                          isLoading ? "Loading" : "Calculate"
                        }
                      </Button>
                    </div>
                    }
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                  No rentals found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default ReturnDetailsTable;
