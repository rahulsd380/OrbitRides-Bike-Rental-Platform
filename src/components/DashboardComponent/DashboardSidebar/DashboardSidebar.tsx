import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/Images/logo.png"
import icon from "../../../assets/Icons/bikes.svg"

const DashboardSidebar = () => {
  const location = useLocation();
    const dashboardSidebarLinks = [
        {
            label : "Home",
            path : "",
            icon : icon
        },
        {
            label : "Dashboard",
            path : "dashboard",
            icon : icon
        },
        {
            label : "Bikes",
            path : "dashboard/browse-bikes",
            icon : icon
        },
        {
            label : "My Rentals",
            path : "my-rentals",
            icon : icon
        },
        {
            label : "Profile",
            path : "profile",
            icon : icon
        },
    ]
    return (
        <div className="w-[300px] bg-[#2f3d46] h-screen sticky top-0 left-0 font-SpaceGrotesk">
            <div className="p-4">
{/* Logo */}
<Link to={"/"} className="flex items-center gap-2">
          <img className="w-16" src={logo} alt="" />
          <h1 className="text-[#f5f5f5]/90 font-bold text-[27px] white">
            OrbitRides
          </h1>
        </Link>
            </div>


        <div className="flex flex-col mt-10">
          {
            dashboardSidebarLinks.map((item, index) => 
              <Link to={`/${item.path}`} 
            className={`${
              location.pathname.replace("/", "") === item.path
                ? "text-[#85A98D] h-[45px] bg-[#364F53] border-l-2 px-3 py-6 flex items-center gap-3 text-[15px] font-roboto font-normal cursor-pointer"
                : "dark:text-[#ABAEB2] text-[#F1EDFF] h-[45px] px-3 py-6 flex items-center gap-3 text-[15px] font-roboto font-normalcursor-pointer w-full"
            } `}
              >
                <img src={item.icon} alt="" className="size-6" />
              <p>{item.label}</p>
              </Link>
            )
          }
        </div>
        </div>
    );
};

export default DashboardSidebar;