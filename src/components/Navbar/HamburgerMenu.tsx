import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  IoChatbubbleOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import search from "../../assets/Icons/search.svg";
import logo from "../../assets/Images/logo.png";
import { FiHome } from "react-icons/fi";
import { FaBookReader } from "react-icons/fa";
import { RiEBikeFill } from "react-icons/ri";
import { BiSolidContact } from "react-icons/bi";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/Features/Auth/authSlice";
import { TUser } from "../DashboardComponent/DashboardSidebar/DashboardSidebar";

const HamburgerMenu = (): JSX.Element => {
  const links = [
    {
      pathName: "Home",
      link: "",
      icon: <FiHome />,
    },
    {
      pathName: "About Us",
      link: "aboutUs",
      icon: <IoInformationCircleOutline />,
    },
    {
      pathName: "Browse Bikes",
      link: "browse-bikes",
      icon: <RiEBikeFill />,
    },
    {
      pathName: "Contact Us",
      link: "contact-us",
      icon: <BiSolidContact />,
    },
    {
      pathName: "Blog",
      link: "blogs",
      icon: <FaBookReader />,
    },
  ];
  // Just for testing puspose now
  const user = useAppSelector(selectCurrentUser) as TUser | null;
  const accountLinks = [
    {
      pathName: "Chat",
      link: "/",
      icon: <IoChatbubbleOutline />,
    },
    {
      pathName: "Setting",
      link: "aboutUs",
      icon: <IoSettingsOutline />,
    },
    {
      pathName: "Dashboard",
      link: "dashboard",
      icon: <MdDashboard />,
    },
  ];
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  const toggleHamburgerMenu = (): void => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const closestDropdown = (event.target as HTMLElement).closest(
        ".hamburgerMenu"
      );
      if (isHamburgerOpen && closestDropdown === null) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburgerOpen]);

  return (
    <div className="relative hamburgerMenu ">
      <AiOutlineMenu
        onClick={toggleHamburgerMenu}
        className="cursor-pointer text-[26px] text-gray-500 hover:text-blue-500 transition duration-300"
      />

      <div
        className={`overflow-y-scroll fixed inset-y-0 right-0 z-50 bg-[#2f3d46] text-white w-64 h-screen transition-all duration-300 transform ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {isHamburgerOpen && (
          <div>
            <div className="flex justify-between items-center p-[9px]">
              {/* Logo */}
              {/* Logo */}
              <Link to={"/"} className="flex items-center gap-2">
                <img className="w-16" src={logo} alt="" />
                <h1 className="font-Roboto font-bold text-[27px] white">
                  OrbitRides
                </h1>
              </Link>

              {/* Hamburger menu close button */}
              <MdKeyboardArrowLeft
                onClick={toggleHamburgerMenu}
                className="text-white text-4xl cursor-pointer"
              />
            </div>

            <div className="w-full h-[1px] bg-gray-500"></div>

            {/* Navigations links */}
            <div className="flex flex-col items-start gap-5 p-4 border-b border-neutral-40/50 pb-3">
              <div className="relative">
                <img
                  src={search}
                  alt=""
                  className="absolute left-[6px] top-3 size-5"
                />
                <input
                  placeholder="Want to learn?"
                  type="text"
                  className="border-[1px] border-neutral-40/50 rounded-lg bg-neutral-60/10 py-2 pl-7 pr-2 focus:border-primary-10 transition duration-300 focus:outline-none text-gray-900"
                />
              </div>

              <h1 className="text-base font-normal font-Roboto text-gray-200">
                Main Menu
              </h1>
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={`${link?.link}`}
                  className="font-Roboto text-gray-300 font-normal hover:text-blue-400 transition duration-300 flex items-center gap-2"
                >
                  {link?.icon}
                  {link?.pathName}
                </Link>
              ))}
            </div>

            {/* Theme toggle and logout */}
            <div className="flex flex-col items-start gap-5 p-4 border-b border-neutral-40/50 pb-3">
              <h1 className="text-base font-normal font-Roboto text-gray-300">
                Account
              </h1>
              {accountLinks.map((link, index) => (
                <Link
                  key={index}
                  to={`${link?.link}`}
                  className="font-Roboto text-gray-300 font-normal hover:text-blue-400 transition duration-300 flex items-center gap-2"
                >
                  {link?.icon}
                  {link?.pathName}
                </Link>
              ))}

              {/* Logout button */}
              {user ? (
                <button className="font-Roboto text-gray-300 font-normal hover:text-blue-400 transition duration-300 flex items-center gap-2 transform hover:-translate-y-0.5">
                  <CiLogout />
                  Logout
                </button>
              ) : (
                <button className="font-Roboto text-gray-300 font-normal hover:text-blue-400 transition duration-300 flex items-center gap-2 transform hover:-translate-y-0.5">
                  <IoLogOutOutline />
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
