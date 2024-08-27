import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/DashboardComponent/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../components/DashboardComponent/DashboardSidebar/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex w-full h-full">
      <DashboardSidebar />
      <div className="bg-gradient-to-r from-gray-50 to-green-50 w-full px-5 md:px-10 py-5 flex flex-col gap-5">
        <DashboardHeader />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
