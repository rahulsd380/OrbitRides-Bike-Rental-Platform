import img1 from "../../assets/Images/about-us-img1.jpg";
import icon from "../../assets/Icons/price.svg";

const OurMission = () => {
    const ourMission = [
        {
          title: "Empower Riders",
          subtitle:
            "Our goal is to provide affordable bike rentals that empower riders to explore new destinations, enjoy adventures, and embrace the freedom of biking.",
        },
        {
          title: "Sustainable Rides",
          subtitle:
            "We are dedicated to promoting eco-friendly transportation by offering bikes that help reduce carbon emissions, contributing to a cleaner, greener planet for everyone.",
        },
        {
          title: "Ride Safely",
          subtitle:
            "We prioritize safety by ensuring all our bikes are well-maintained and providing essential protective gear, allowing riders to enjoy their journey with confidence.",
        },
        {
          title: "Ride Together",
          subtitle:
            "We strive to build a welcoming and inclusive community where riders can connect, share their biking experiences, and enjoy the thrill of riding together.",
        },
      ];
      
      
      
      
    return (
        <div className='font-SpaceGrotesk max-w-[1300px] mx-auto mt-20'>
            <div className="flex gap-16">

            <div className="flex flex-col gap-7 w-1/2">
                <div>
                <h1 className='text-3xl font-bold'>Our Mission</h1>
                <div className="bg-orange-700 h-1 w-44 mt-1"></div>
                </div>

                <div>
                <p className="text-[#2f3d46]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequuntur placeat, totam eligendi tempore at vitae deleniti quas a quia, enim, commodi numquam. Quisquam cumque vitae at. Saepe, aliquid exercitationem.</p>
                
                <p className="text-[#2f3d46] mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequuntur placeat, totam eligendi tempore at vitae deleniti quas a quia, enim, commodi numquam. Quisquam cumque vitae at. Saepe, aliquid exercitationem.</p>
                </div>

                <img src={img1} alt="" />

            </div>

            <div className="grid grid-cols-2 gap-7 w-1/2">
                {
                    ourMission.map((item, index) =>
                        <div key={index} className="rounded-lg p-3 max-w-[350px] shadow-lg">
                    <div className="size-16 rounded-full flex items-center justify-center p-3 bg-[#D9D9D9]/30 border border-[#ABAEB2]/30">
                        <img src={icon} alt="" className="" />
                    </div>
                    <h1 className='text-2xl font-bold mt-3'>{item.title}</h1>
                    <p className="text-[#2f3d46] mt-2">{item.subtitle}</p>
                </div>
                    )
                }
            </div>

            </div>
        </div>
    );
};

export default OurMission;