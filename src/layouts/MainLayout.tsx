import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/signup" && location.pathname !== "/login" && <Navbar />}
      <Outlet></Outlet>
      {location.pathname !== "/signup" && location.pathname !== "/login" && <Footer />}
    </div>
  );
};

export default MainLayout;
