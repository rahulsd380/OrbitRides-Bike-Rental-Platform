import BikeTable from "./BikeTable";
import Total from "./Total";


const Payment = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 mt-2">
            <BikeTable/>
            <Total/>
        </div>
    );
};

export default Payment;