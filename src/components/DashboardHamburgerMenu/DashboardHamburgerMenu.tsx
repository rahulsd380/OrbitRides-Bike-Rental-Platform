import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { adminSidebarLinks, userSidebarLinks } from '../DashboardComponent/DashboardSidebar/sidebar.constants';
import { selectCurrentUser } from '../../redux/Features/Auth/authSlice';
import { useAppSelector } from '../../redux/hooks';
import logo from "../../assets/Images/logo.png";
import { TUser } from '../DashboardComponent/DashboardSidebar/DashboardSidebar';

const DashboardHamburgerMenu = () => {
  const user = useAppSelector(selectCurrentUser) as TUser | null;
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

  const sidebarLinks = user?.role === "admin" ? adminSidebarLinks : userSidebarLinks;

  return (
    <div className="relative hamburgerMenu">
      <AiOutlineMenu
        onClick={toggleHamburgerMenu}
        className="cursor-pointer text-[26px] text-gray-500 hover:text-blue-500 transition duration-300"
      />

      <div
        className={`overflow-y-scroll fixed inset-y-0 left-0 z-50 bg-[#2f3d46] text-white w-64 h-screen transition-all duration-300 transform ${
          isHamburgerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {isHamburgerOpen && (
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

            <div className="flex flex-col gap-[10px] mt-10">
              {sidebarLinks.map((item) => (
                <Link
                  key={item.label}
                  to={`/${item.path}`}
                  className={`${
                    location.pathname.replace("/", "") === item.path
                      ? "text-[#85A98D] h-[45px] bg-[#364F53] border-l-2 px-3 py-6 flex items-center gap-3 text-[15px] font-roboto font-normal cursor-pointer"
                      : "dark:text-[#ABAEB2] text-[#F1EDFF] h-[45px] px-3 py-6 flex items-center gap-3 text-[15px] font-roboto font-normal cursor-pointer w-full"
                  }`}
                >
                  <img src={item.icon} alt="" className="size-6" />
                  <p>{item.label}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHamburgerMenu;
