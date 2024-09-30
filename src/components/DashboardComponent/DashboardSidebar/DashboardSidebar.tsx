import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/Images/logo.png";
import { selectCurrentUser } from "../../../redux/Features/Auth/authSlice";
import { useAppSelector } from "../../../redux/hooks";
import { adminSidebarLinks, userSidebarLinks } from "./sidebar.constants";

export type TUser = {
  email: string;
  exp: number;
  iat: number;
  role: string;
  userId: string;
};

const DashboardSidebar = () => {

  const user = useAppSelector(selectCurrentUser) as TUser | null;
  console.log(user);
  const location = useLocation();

  const sidebarLinks = user?.role === "admin" ? adminSidebarLinks : userSidebarLinks;
  return (
    <div className="w-[300px] bg-[#2f3d46] border-r border-gray-600/50 h-screen sticky top-0 left-0 font-SpaceGrotesk hidden lg:block">
      <div className="p-4">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img className="w-16" src={logo} alt="" />
          <h1 className="text-[#f5f5f5]/90 font-bold text-[27px] white">
            OrbitRides
          </h1>
        </Link>
      </div>

      <div className="flex flex-col gap-[10px] mt-10">
        {
        sidebarLinks.map((item) => (
          <Link
            key={item.label}
            to={`/${item.path}`}
            className={`${
              location.pathname.replace("/", "") === item.path
                ? "text-[#85A98D] h-[45px] bg-[#364F53] border-l-2 px-3 py-6 flex items-center gap-3 text-[15px] font-roboto font-normal cursor-pointer"
                : "dark:text-[#ABAEB2] text-[#F1EDFF] h-[45px] px-3 py-6 flex items-center gap-3 text-[15px] font-roboto font-normalcursor-pointer w-full"
            } `}
          >
            <img src={item.icon} alt="" className="size-6" />
            <p>{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
