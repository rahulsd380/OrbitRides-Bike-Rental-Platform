import { useState } from "react";
import PaidItemsTable from "./PaidItemsTable";
import RentalTab from "./RentalTab";
import UnpaidItemsTable from "./UnpaidItemsTable";
import { useGetMyRentalsQuery } from "../../redux/Features/Rentals/rentalsApi";

type TRental ={
  bikeId: string;
  isPaid: boolean;
  isReturned: boolean;
  returnTime: string;
  startTime: string;
  totalCost: number;
  userId: string;
  __v: number;
  _id: string;
}


const MyRentals = () => {
  const [rentalTab, setRentalTab] = useState<"Paid" | "Unpaid">("Unpaid");

  const { data, isLoading } = useGetMyRentalsQuery({});
  console.log(data);

  const paidBike = data?.data?.filter((bike:TRental) => bike?.totalCost > 0);
  const unPaidBike = data?.data?.filter((bike:TRental) => bike?.totalCost === 0);

  console.log(paidBike);
  console.log(data);

  if(isLoading){
    return <p>Loading</p>
  }

  return (
    <div>
      <RentalTab rentalTab={rentalTab} setRentalTab={setRentalTab} />

      {(rentalTab === "Paid" && (
        <PaidItemsTable paidBike={paidBike} isLoading={isLoading} />
      )) ||
        (rentalTab === "Unpaid" && (
          <UnpaidItemsTable unPaidBike={unPaidBike} isLoading={isLoading} />
        ))}
    </div>
  );
};

export default MyRentals;
