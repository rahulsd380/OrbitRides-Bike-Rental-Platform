import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import BikeListing from "../pages/BikeListing/BikeListing";
import BikeDetails from "../pages/BikeDetails/BikeDetails";
import Payment from "../pages/Payment/Payment";
import MyRentals from "../pages/MyRentals/MyRentals";
import ManageBikes from "../pages/DashboardPages/Admin/ManageBikes/ManageBikes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
          path: "/signup",
          element: <Signup/>
      },
      {
          path: "/login",
          element: <Login/>
      },
      {
          path: "/about-us",
          element: <AboutUs/>
      },
    ],
  },

  
  {
    path: "/dashboard",
    element: <DashboardLayout/>,
    errorElement : <ErrorPage/>,
    children : [
      {
          path: "",
          element: <Dashboard/>
      },
      {
          path: "browse-bikes",
          element: <BikeListing/>
      },
      {
          path: "bike-details/:id",
          element: <BikeDetails/>,
          loader : ({params}) => fetch(`http://localhost:5000/api/bikes/${params.id}`)
      },
      {
          path: "payment",
          element: <Payment/>
      },
      {
          path: "my-rentals",
          element: <MyRentals/>
      },
      {
          path: "manage-bikes",
          element: <ManageBikes/>
      },
    ]
  },
]);
