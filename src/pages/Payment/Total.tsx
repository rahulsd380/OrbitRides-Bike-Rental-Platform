import { useState } from 'react';
import Button from '../../components/Button/Button';
import Modal1 from '../../components/Modal1';
import SuccessMessage from '../../components/SuccessMessage/SuccessMessage';
import { useMakeRentalMutation } from '../../redux/Features/Rentals/rentalsApi';
import { CustomToast } from '../../components/ToastMessage/ToastMessage';
import errorIcon from "../../assets/Icons/error.svg";

const Total = ({ rentalData, bikeData }) => {
  const [makeRental, { isLoading }] = useMakeRentalMutation({});
  const [openModal1, setOpenModal1] = useState(false);

  const handleMakeRental = async () => {
    const startTime = rentalData?.startTime;
  
    // Check if startTime is valid
    if (!startTime || isNaN(new Date(startTime).getTime())) {
      console.error('Invalid startTime:', startTime);
      CustomToast({
        title: "Invalid start time. Please check the date.",
        icon: errorIcon,
      });
      return;
    }
  
    // Ensure bikeId is a string and format startTime to ISO 8601 string
    const rentalPostData = {
      bikeId: rentalData?.bikeId.toString(),
      startTime: new Date(startTime).toISOString(), // Format to ISO string
    };
  
    console.log(rentalPostData);
  
    try {
      const response = await makeRental(rentalPostData).unwrap();
      console.log('Rental Response:', response);
  
      if (response?.success) {
        setOpenModal1(true);
      } else {
        // Handle cases where success isn't true
        CustomToast({
          title: "Rental failed. Please try again.",
          icon: errorIcon,
        });
      }
    } catch (err) {
      console.error('Rental Error:', err);
      CustomToast({
        title: "Couldn't rent the bike!! Please try again.",
        icon: errorIcon,
      });
    }
  };
  
  

  return (
    <div className="border border-[#85A98D] p-6 rounded-md font-SpaceGrotesk w-full md:max-w-xs">
      <h2 className="text-lg font-semibold mb-4">TOTAL COST</h2>
      <div>
        <div className="flex justify-between mb-3">
          <span className="text-gray-700 font-medium">Subtotal</span>
          <span>৳ {bikeData?.pricePerHour}</span>
        </div>

        <hr className="border mb-3" />

        <div className="flex justify-between mb-3">
          <span className="text-gray-700 font-medium">Advance (100 ৳)</span>
          <span>৳ 100</span>
        </div>
        <hr className="border" />
        <div className="flex justify-between mb-4 mt-3 font-bold">
          <span className="font-semibold text-[#85A98D]">Due</span>
          <span>৳ {bikeData?.pricePerHour - 100}</span>
        </div>

        <Button onClick={handleMakeRental} variant="primary" classNames="w-full">
          {isLoading ? "Loading..." : "PAY"}
        </Button>
      </div>

      <Modal1
        openModal1={openModal1}
        setOpenModal1={setOpenModal1}
        classNames={"w-[500px] h-[450px] h-fit p-4 overflow-hidden"}
      >
        <SuccessMessage />
      </Modal1>
    </div>
  );
};

export default Total;
