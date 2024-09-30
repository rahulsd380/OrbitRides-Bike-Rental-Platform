import { useRef, useState } from "react";
import searchWhite from "../../../assets/Icons/search-white.svg";
import myProfile from "../../../assets/Icons/my-profile.svg";
import editProfile from "../../../assets/Icons/edit-profile.svg";
import inbox from "../../../assets/Icons/inbox.svg";
import setting from "../../../assets/Icons/setting2.svg";
import help from "../../../assets/Icons/help.svg";
import logoutIcon from "../../../assets/Icons/logout.svg";
import user from "../../../assets/Icons/user.svg";
import downArrow from "../../../assets/Icons/down-arrow-dark.svg";
import { useAppDispatch } from "../../../redux/hooks";
import { logout } from "../../../redux/Features/Auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import DashboardHamburgerMenu from "../../DashboardHamburgerMenu/DashboardHamburgerMenu";
import ThemeSwitcher from "../../ThemeSwitcher/ThemeSwitcher";

const DashboardHeader = () => {
  const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dropDownRef = useRef<HTMLDivElement>(null);
    const items = [
      {
        pathname: "My Profile",
        link: "/dashboard/my-profile",
        icon: myProfile,
      },
      {
        pathname: "Edit Profile",
        link: "/dashboard/my-profile",
        icon: editProfile,
      },
      {
        pathname: "Inbox",
        link: "/dashboard/inbox",
        icon: inbox,
      },
      {
        pathname: "Setting",
        link: "/dashboard/setting",
        icon: setting,
      },
      {
        pathname: "Help",
        link: "/dashboard/help",
        icon: help,
      },
    ];

    const handleLogout = () => {
      dispatch(logout());
      navigate('/login')
    }
  return (
    <div className="flex items-center justify-between w-full border-b border-[#DCDFE5] pb-3">
      <div className="block lg:hidden">
      <DashboardHamburgerMenu/>
      </div>
      <div className="relative hidden lg:block">
        <img
          src={searchWhite}
          alt=""
          className="absolute size-4 right-[10px] top-[13px]"
        />
        <input
          placeholder="Find Bikes"
          type="text"
          className=" rounded-md bg-[#E9ECF2]/10 border text-[#364F53] dark:text-[#D9D9D9]/70 border-[#364F53]/30 py-2 pl-2 pr-8 focus:border-[#85A98D] transition duration-300 focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-7">
      <ThemeSwitcher/>

    <div ref={dropDownRef} className="relative w-fit">
    <div
      onClick={() => setOpen((prev) => !prev)}
      className="flex items-center gap-4 cursor-pointer"
    >
      <div className="bg-teal-50 dark:bg-[#E9ECF2]/10 size-10 rounded-full bg-dark-5/40 border border-dark-10/30 flex justify-center items-center">
        <img src={user} alt="" className="size-8" />
      </div>
      <div className="hidden md:flex items-center gap-2">
        <div>
          <p className="text-neutral-60 font-semibold dark:text-[#D9D9D9]/80 text-[#364F53]">
            Rahul Sutradhar
          </p>
          <p className="text-neutral-60/80 font-semibold text-xs dark:text-[#D9D9D9]/50 text-[#364F53]">
            Manager
          </p>
        </div>

        <img src={downArrow} alt="" className="size-6" />
      </div>
    </div>
    <div
          className={`${
            open
              ? "visible translate-y-0 duration-300"
              : "invisible translate-y-4"
          } absolute top-14 z-50 w-48 bg-white shadow rounded-b-lg py-2 -right-5`}
        >
          {items.map((item, idx) => (
            <Link to={item.link}>
            <div
              key={idx}
              className={`px-4 py-2 ${
                open ? "opacity-100 duration-300" : "opacity-0"
              } hover:text-primary-10 cursor-pointer text-body-text`}
            >
              <div className="flex items-center gap-2">
                <img src={item.icon} alt="" className="size-5" />
                {item.pathname}
              </div>
            </div>
            </Link>
          ))}
  
          <div
            className={`px-4 py-2 ${
              open ? "opacity-100 duration-300" : "opacity-0"
            } hover:text-primary-10 cursor-pointer text-body-text border-t border-neutral-55/20`}
          >
            <div onClick={handleLogout} className="flex items-center gap-2">
              <img src={logoutIcon} alt="" className="size-5" />
              Log Out
            </div>
          </div>
        </div>
  </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
