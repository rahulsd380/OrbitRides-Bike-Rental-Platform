import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import facebook from "../../assets/Icons/Social Icons/facebook.svg";
import linkedin from "../../assets/Icons/Social Icons/linkedin.svg";
import twitter from "../../assets/Icons/Social Icons/twitter.svg";
import instagram from "../../assets/Icons/Social Icons/instagram.svg";
import whatsapp from "../../assets/Icons/Social Icons/whatsapp.svg";

const Footer = () => {
    const socialMediaIcons = [
        {
          icon: facebook,
          href: "https://www.facebook.com",
          bgColor: "#3b5998",
        },
        {
          icon: linkedin,
          href: "https://www.linkedin.com",
          bgColor: "#0077b5",
        },
        {
          icon: instagram,
          href: "https://www.instagram.com",
          bgColor: "#e1306c",
        },
        {
          icon: twitter,
          href: "https://www.twitter.com",
          bgColor: "#1da1f2",
        },
        {
          icon: whatsapp,
          href: "https://www.whatsapp.com",
          bgColor: "#25d366",
        },
      ];

      const footerItems = [
        {
          title: "Important Links",
          items: [
            {
              label: "About Us",
              path: "about-us",
            },
            {
              label: "Bikes",
              path: "dashboard/browse-bikes",
            },
            {
              label: "Blogs",
              path: "blog",
            },
            {
              label: "Dashboard",
              path: "admin",
            },
          ],
        },
        {
          title: "Important Links",
          items: [
            {
              label: "My Rentals",
              path: "dashboard/my-rentals",
            },
            {
              label: "Terms & Conditions",
              path: "terms-conditions",
            },
            {
              label: "Privacy Policy",
              path: "privacy-policy",
            },
            {
              label: "Returns & Exchanges",
              path: "returns-exchanges",
            },
          ],
        },
        {
          title: "Quick Menus",
          items: [
            {
              label: "Unpaid Bikes",
              path: "dashboard/my-rentals",
            },
            {
              label: "Paid Bikes",
              path: "dashboard/my-rentals",
            },
            {
              label: "Edit Profile",
              path: "dashboard/my-profile",
            },
            {
              label: "Login",
              path: "login",
            },
          ],
        },
      ];

  return (
    <div className="bg-[#2f3d46] p-10 font-SpaceGrotesk mt-14">
      <footer className="max-w-[1300px] mx-auto">

      <div className="flex flex-col xl:flex-row justify-between gap-10 xl:gap-0">
        <div className="flex flex-col gap-4">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img className="w-16" src={logo} alt="" />
          <h1 className="text-[#f5f5f5]/90 font-bold text-[27px] white">
            OrbitRides
          </h1>
        </Link>
        <p className="text-[#ABAEB2] max-w-[600px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi id nihil praesentium reiciendis dolorem aspernatur, alias accusantium distinctio laboriosam. Ullam?</p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
            {socialMediaIcons.map((icon, index) => (
              <a
                href={icon.href}
                target="blank"
                key={index}
                style={{ backgroundColor: icon.bgColor }}
                className={`size-7 xl:size-10 rounded-full flex justify-center items-center`}
              >
                <img src={icon.icon} alt="" className="size-3 xl:size-6" />
              </a>
            ))}
          </div>
          </div>


          {/* Navlinks */}
          <div className="flex flex-col md:flex-row gap-7 md:gap-20">
          {footerItems.map((item, index) => (
            <ul key={index} className="flex flex-col gap-4 md:gap-8">
              <h1 className="font-Roboto text-[18px] font-bold text-[#f5f5f5]/90">
                {item.title}
              </h1>
              <li className="flex flex-col gap-4 text-[#ABAEB2] text-sm">
                {item.items.map(({ label, path }) => (
                  <Link key={label} to={`/${path}`} className="hover:underline">
                    {label}
                  </Link>
                ))}
              </li>
            </ul>
          ))}
        </div>
        

        </div>

        <div className="border-t border-[#ABAEB2] pt-3 mt-10">
            <p className="text-[#ABAEB2] text-center">All Copyrights reserved by OrbitRidess @ 2024</p>
        </div>
       
      </footer>
    </div>
  );
};

export default Footer;
