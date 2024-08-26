import { Link } from "react-router-dom";
import bgImg from "../../assets/Images/1.png";

const AboutUsHero = () => {
    return (
        <div className="relative bg-gradient-to-r from-teal-50 to-indigo-50 ">
            <div
        className="absolute inset-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

       {/* Content */}
       <div className="relative z-10 p-10">
        <div className="flex items-center gap-3">
            <Link to={"/"}>Home</Link>
            <p>-</p>
            <p>About Us</p>
        </div>
        <h1 className="text-5xl font-bold">
          About Us
        </h1>
        <p className="max-w-[700px] mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae
          culpa libero est fugit. Totam, molestias. Sapiente explicabo sunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sed, blanditiis harum hic autem sit facilis quam nesciunt ipsa culpa.
        </p>
      </div>
        </div>
    );
};

export default AboutUsHero;