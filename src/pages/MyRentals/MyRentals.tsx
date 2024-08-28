import { useState } from "react";
import PaidItemsTable from "./PaidItemsTable";
import RentalTab from "./RentalTab";
import UnpaidItemsTable from "./UnpaidItemsTable";



const MyRentals = () => {
    const [rentalTab, setRentalTab] = useState<"Paid" | "Unpaid">("Unpaid");
    
    
    return (
        <div>
            <RentalTab rentalTab={rentalTab} setRentalTab={setRentalTab}/>

            {
                rentalTab === "Paid" &&
                <PaidItemsTable/> ||
                rentalTab === "Unpaid" &&
                <UnpaidItemsTable/>
            }
            
        </div>
    );
};

export default MyRentals;