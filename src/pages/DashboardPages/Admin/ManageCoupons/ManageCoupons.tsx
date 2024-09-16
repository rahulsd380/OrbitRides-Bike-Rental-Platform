import { useState } from "react";
import Modal1 from "../../../../components/Modal1";
import Button from "../../../../components/Button/Button";
import AddCouponForm from "./AddCouponForm";
import CouponCodeTable from "./CouponCodeTable";

export type TCouponData = {
  _id: string;
  couponCode: string;
  createdAt : string;
  off: string;
};

const ManageCoupons = () => {
  const [openModal1, setOpenModal1] = useState(false);

  return (
    <div className="bg-white dark:bg-[#E9ECF2]/10 rounded-xl p-5 font-SpaceGrotesk">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-3xl font-bold text-[#85A98D]">Manage Coupons</h1>

        <Button onClick={() => setOpenModal1(true)} variant="primary">
          Add New Coupon
        </Button>
      </div>

      <CouponCodeTable />

      {/* Add coupon code modal */}
      <Modal1
        openModal1={openModal1}
        setOpenModal1={setOpenModal1}
        classNames={"w-[500px] h-fit p-4"}
      >
        <AddCouponForm setOpenModal1={setOpenModal1} />
      </Modal1>
    </div>
  );
};

export default ManageCoupons;
