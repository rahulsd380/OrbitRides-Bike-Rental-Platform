import Button from "../../../../components/Button/Button";
import { useGetAllRentalsQuery } from "../../../../redux/Features/Rentals/rentalsApi";
import ReturnDetailsTable from "./ReturnDetailsTable";


const ReturnBike = () => {

    const {data, isLoading} = useGetAllRentalsQuery({});

    console.log(data?.data);

    if(isLoading){
      return <p>Loading...</p>
    }

    return (
        <div>
             <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#364F53]">All Rentals</h1>

        <div>
          <Button variant="primary">
            Add New Bike
          </Button>
        </div>

      </div>

            <div className="mt-7">
            <ReturnDetailsTable rentalsBikes={data?.data}/> 
            
            </div>
        </div>
    );
};

export default ReturnBike;