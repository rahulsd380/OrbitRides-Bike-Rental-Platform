import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
// import search from "../../assets/Icons/search.svg";
import Button from "../Button/Button";
import HamburgerMenu from "./HamburgerMenu";
import { selectCurrentUser } from "../../redux/Features/Auth/authSlice";
import { useAppSelector } from "../../redux/hooks";

import UserDropdown from "./UserDropdown";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Navbar = () => {
  

  const user = useAppSelector(selectCurrentUser);

  console.log(user);

  const navlinks = [
    {
      label: "Home",
      path: "",
    },
    {
      label: "About Us",
      path: "about-us",
    },
    {
      label: "Browse Bikes",
      path: "dashboard/browse-bikes",
    },
    {
      label: "Contact Us",
      path: "contact-us",
    },
    {
      label: "Blogs",
      path: "blogs",
    },
    {
      label: "Dashboard",
      path: "dashboard",
    },
  ];

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between max-w-[1300px] mx-auto  font-SpaceGrotesk px-4 md:px-7 xl:px-0">
        <div className="flex items-center gap-10">
          {/* <button onClick={changeTheme}>Change theme</button> */}
          <Link to={"/"} className="flex items-center gap-2">
            <img src={logo} alt="" className="w-16" />
            <h1 className="text-2xl font-bold text-[#364F53] dark:text-[#D9D9D9]">Orbit <span className="text-[#85A98D]">Rides</span></h1>
          </Link>
          <li className="hidden lg:flex items-center gap-5">
            {navlinks.map((navlink, index) => (
              <Link
                key={index}
                to={`/${navlink.path}`}
                className="text-[#364F53] dark:text-[#D9D9D9] hover:text-[#85A98D] transition duration-300"
              >
                {navlink.label}
              </Link>
            ))}
          </li>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-6">
            {/* Search bar */}
            {/* <div className="relative hidden xl:block">
          <img
            src={search}
            alt=""
            className="absolute size-6 right-[10px] top-2"
          />
          <input
            placeholder="Find Bikes"
            type="text"
            className=" rounded-md bg-[#E9ECF2]/20 dark:bg-[#E9ECF2]/10 border dark:border-[#517970]/50 border-[#364F53]/30 py-2 pl-2 pr-8 focus:border-[#85A98D] transition duration-300 focus:outline-none"
          />
        </div> */}

        
              <ThemeSwitcher/>
            

            <div className="hidden md:block">
              {user ? (
                <UserDropdown/>
              ) : (
                <div className="flex items-start gap-3">
                  <Link to={"/login"}>
                    <Button
                      variant="secondary"
                      classNames="bg-[#E9ECF2]/20 dark:bg-[#E9ECF2]/10 border dark:border-[#517970]/50 border-[#364F53]/30"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to={"/signup"}>
                    <Button variant="primary">Signup</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="block xl:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
