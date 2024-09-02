import home from "../../../assets/Icons/home.svg";
import dashboard from "../../../assets/Icons/dashboard.svg";
import bikes from "../../../assets/Icons/bikes.svg";
import myRentals from "../../../assets/Icons/my-rentals.svg";
import profile from "../../../assets/Icons/profile.svg";
import manageBikes from "../../../assets/Icons/manage-bikes.svg";
import manageUsers from "../../../assets/Icons/manage-users.svg";
import manageCoupons from "../../../assets/Icons/manage-coupons.svg";

export const adminSidebarLinks = [
  {
    label: "Home",
    path: "",
    icon: home,
  },
  {
    label: "Dashboard",
    path: "dashboard",
    icon: dashboard,
  },
  {
    label: "My Profile",
    path: "dashboard/my-profile",
    icon: profile,
  },
  {
    label: "Manage Bikes",
    path: "dashboard/manage-bikes",
    icon: manageBikes,
  },
  {
    label: "Manage Users",
    path: "dashboard/manage-users",
    icon: manageUsers,
  },
  {
    label: "Return Bike",
    path: "dashboard/return-bike",
    icon: manageBikes,
  },
  {
    label: "Manage Coupons",
    path: "dashboard/manage-coupons",
    icon: manageCoupons,
  },
];

export const userSidebarLinks = [
  {
    label: "Home",
    path: "",
    icon: home,
  },
  {
    label: "Dashboard",
    path: "dashboard",
    icon: dashboard,
  },
  {
    label: "Bikes",
    path: "dashboard/browse-bikes",
    icon: bikes,
  },
  {
    label: "My Rentals",
    path: "dashboard/my-rentals",
    icon: myRentals,
  },
  {
    label: "My Profile",
    path: "dashboard/my-profile",
    icon: profile,
  },
];
