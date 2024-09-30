import Lottie from "lottie-react";
import errorAnimation from "../../assets/404-error.json";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="max-w-[500px] mx-auto">
            <Lottie animationData={errorAnimation} loop={true} />
          </div>

          <div className="flex items-center justify-center">
            <Link to={"/"} className="hover:underline font-SpaceGrotesk font-semibold text-[#364F53]">
            Back To Home
            </Link>
          </div>
          <Footer/>
        </div>
    );
};

export default ErrorPage;