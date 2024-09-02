import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/orbitrides-logo.png";
import search from "../../assets/Icons/search.svg";
import profileImg from "../../assets/Images/dumy-profile-img.avif";
import Button from "../Button/Button";
import HamburgerMenu from "./HamburgerMenu";
import { selectCurrentUser } from "../../redux/Features/Auth/authSlice";
import { useAppSelector } from "../../redux/hooks";

const Navbar = () => {
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
        <Link to={"/"} className="">
          <img src={logo} alt="" className="w-60" />
        </Link>
        <li className="hidden lg:flex items-center gap-5">
          {navlinks.map((navlink, index) => (
            <Link
              key={index}
              to={`/${navlink.path}`}
              className="text-[#364F53] hover:text-[#85A98D] transition duration-300"
            >
              {navlink.label}
            </Link>
          ))}
        </li>
      </div>

      <div className="flex items-center gap-6">


      <div className="flex items-center gap-6">
        <div className="relative hidden xl:block">
          <img
            src={search}
            alt=""
            className="absolute size-6 right-[10px] top-2"
          />
          <input
            placeholder="Find Bikes"
            type="text"
            className=" rounded-md bg-[#E9ECF2]/20 border border-[#364F53]/30 py-2 pl-2 pr-8 focus:border-[#85A98D] transition duration-300 focus:outline-none"
          />
        </div>

        <div className="hidden md:block">
        {
            user ?
            <div className="size-11 rounded-full">
            <img src={profileImg} alt="" className="size-11 rounded-full" />
          </div>
          :
          <div className="flex items-start gap-3">
            <Link to={"/login"}><Button variant="secondary">Login</Button></Link>
            <Link to={"/signup"}>
            <Button variant="primary">Signup</Button>
            </Link>
          </div>
        }
        </div>

        
      </div>
      <div className="block xl:hidden">

        <HamburgerMenu/>
      </div>
        </div>

     
    </div>
    </div>
  );
};

export default Navbar;
