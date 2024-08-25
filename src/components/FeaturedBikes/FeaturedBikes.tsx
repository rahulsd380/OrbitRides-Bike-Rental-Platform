import { RiMotorbikeFill } from "react-icons/ri";
import Button from "../Button/Button";
import FeaturedBikesCard from "./FeaturedBikesCard";


const FeaturedBikes = () => {
    const featuredBikes = [
        {
          _id: "1",
          img: "https://i.ibb.co/nw7jTVy/pngwing-com-11.png",
          brand: "Yamaha",
        },
        {
          _id: "2",
          img: "https://i.ibb.co/SsxVSKZ/pngwing-com-4.png",
          brand: "Ducati",
        },
        {
          _id: "3",
          img: "https://i.ibb.co/MsKdy7J/pngwing-com-6.png",
          brand: "Kawasaki",
        },
        {
          _id: "4",
          img: "https://i.ibb.co/HhPbZhd/pngwing-com-2.png",
          brand: "BMW",
        },
        {
          _id: "5",
          img: "https://i.ibb.co/6J13ZBJ/pngwing-com-1.png",
          brand: "Harley-Davidson",
        },
        {
          _id: "6",
          img: "https://i.ibb.co/gDPH0Q1/pngwing-com.png",
          brand: "Honda",
        },
      ];
      
    return (
      <div className="font-SpaceGrotesk max-w-[1300px] mx-auto mt-14">

        {/* Heading */}
        <div className="flex items-center justify-between">
        <div className="">
            <h1 className="text-4xl font-bold">Our <span className="text-[#85A98D]">Featured Bikes</span></h1>
            <p>Checkout our latest bikes and enjoy your ride.</p>
            
        </div>
        
        <Button variant="secondary" classNames="flex items-center gap-3">
            View All Bikes
            <RiMotorbikeFill className="text-xl" />
        </Button>
        </div>
        <hr  className="border border-[#85A98D] mt-2"/>
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {
            featuredBikes.map(bike => 
                <FeaturedBikesCard key={bike?._id} {...bike}/>
            )
        }
        </div>
      </div>
    );
};

export default FeaturedBikes;