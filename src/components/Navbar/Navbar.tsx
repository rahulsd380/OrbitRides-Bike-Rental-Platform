import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/orbitrides-logo.png";
// import search from "../../assets/Icons/search.svg";
import profileImg from "../../assets/Images/dumy-profile-img.avif";
import Button from "../Button/Button";
import HamburgerMenu from "./HamburgerMenu";
import { selectCurrentUser } from "../../redux/Features/Auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import sun from "../../assets/Icons/sun.svg";
import moon from "../../assets/Icons/moon.svg";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const [mode, setMode] = useState("light");
  const changeTheme = () => {
    const html = document.documentElement;
    if (mode === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  };

  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "light";
    setMode(currentMode);
    const html = document.documentElement;
    html.classList.add(currentMode);
  }, []);

  const location = useLocation();
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
          <Link to={"/"} className="">
            <img src={logo} alt="" className="w-60" />
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

        

            {mode === "dark" ? (
              <img
                onClick={changeTheme}
                src={sun}
                alt="sun-icon"
                className="size-9 cursor-pointer"
              />
            ) : (
              <img
                onClick={changeTheme}
                src={moon}
                alt="sun-icon"
                className="size-8 cursor-pointer"
              />
            )}

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
