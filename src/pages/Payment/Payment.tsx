import { useLocation } from "react-router-dom";
import BikeTable from "./BikeTable";
import Total from "./Total";


const Payment = () => {
    const location = useLocation();
  const { rentalData, bikeData } = location.state || {};

  if (!rentalData || !bikeData) {
    return <div>No data available</div>;
  }
    return (
        <div className="flex flex-col md:flex-row gap-10 mt-2">
            <BikeTable bikeData={bikeData}/>
            <Total bikeData={bikeData} rentalData={rentalData}/>
        </div>
    );
};

export default Payment;