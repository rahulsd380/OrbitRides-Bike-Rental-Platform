import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";

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
  // {
  //   path: "/dashboard",
  //   element: <DashboardLayout/>,
  //   errorElement : <ErrorPage/>,
  //   children : [
  //     {
  //         path: "",
  //         element: <Dashboard/>
  //     },
  //     {
  //         path: "add-product",
  //         element: <AddProduct/>
  //     },
  //     {
  //         path: "products",
  //         element: <DashboardProducts/>
  //     },
  //   ]
  // },
]);
