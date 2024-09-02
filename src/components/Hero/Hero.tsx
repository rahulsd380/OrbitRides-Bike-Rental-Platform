import Button from "../Button/Button";
import bikeImg from "../../assets/Images/pngwing.com.png"
import ride from "../../assets/Icons/ride.svg"

const Hero = () => {
    return (
        <div className="w-full bg-gradient-to-bl from-teal-50/30 to-teal-100/20  font-Nunito mt-5">
           <div className="flex flex-col lg:flex-row items-center gap-10 max-w-[1300px] mx-auto">
           <div className="w-full lg:w-[60%] p-5 flex flex-col">
                <div className="bg-[#85A98D] p-3 rounded-tr-3xl w-fit rounded-bl-3xl flex items-center gap-3">
                <h1 className="text-3xl font-bold text-[#f5f5f5]/70">Go Faster</h1>
                <img src={ride} alt="" className="size-10" />
                </div>
                <h1 className="text-5xl xl:text-7xl font-bold text-[#364F53] leading-[60px] xl:leading-[80px] mt-5">Go Faster <br /> With <span className="text-[#85A98D]">Less Effort</span></h1>

                <p className="text-[#364F53] font-SpaceGrotesk mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, molestiae, vitae inventore adipisci nulla odio est earum consequatur eligendi repudiandae n</p>

                <Button variant="primary" classNames="w-fit mt-8">
                    Rent Now
                </Button>
            </div>

            <div className="w-full lg:w-[40%]">
                <img src={bikeImg} alt="" />
            </div>
           </div>
        </div>
    );
};

export default Hero;