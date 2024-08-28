

const RentalTab = ({rentalTab, setRentalTab}) => {
    
    return (
        <ul className="flex items-center w-fit rounded-full p-1 relative">
        <div
          className={`${
            (rentalTab === "Paid" && "-translate-x-[8px]") ||
            (rentalTab === "Unpaid" && "translate-x-[80px]")
          } !bg-[#85A98D] absolute !text-[#fff] h-[85%] w-[95px] transition duration-700 rounded-full border-transparent cursor-pointer`}
        ></div>
        <li
          className={`${
            rentalTab === "Paid" && " !text-[#fff]"
          } px-6 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
          onClick={() => setRentalTab("Paid")}
        >
          Paid
        </li>
        <li
          className={`${
            rentalTab === "Unpaid" && " !text-[#fff]"
          } px-6 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
          onClick={() => setRentalTab("Unpaid")}
        >
          Unpaid
        </li>
      </ul>
    );
};

export default RentalTab;