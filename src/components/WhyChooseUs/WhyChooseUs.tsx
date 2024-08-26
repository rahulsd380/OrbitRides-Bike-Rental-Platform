import whyChooseUsImg from "../../assets/Images/why-choose-us.png";
import bgImg from "../../assets/Images/bg-shape.png";
import quality from "../../assets/Icons/quality.svg";
import price from "../../assets/Icons/price.svg";
import booking from "../../assets/Icons/booking.svg";
import support from "../../assets/Icons/support.svg";

const WhyChooseUs = () => {
  const whyChooseUs = [
    {
      title: "Top-Quality Bikes",
      subtitle:
        "We offer a wide range of well-maintained and high-performance bikes to ensure a smooth and safe riding experience.",
    icon : quality
    },
    {
      title: "Affordable Pricing",
      subtitle:
        "Enjoy competitive and transparent pricing with no hidden costs, making your ride both economical and enjoyable.",
        icon : price
    },
    {
      title: "Easy Booking Process",
      subtitle:
        "Our user-friendly online platform makes booking your bike rental quick and convenient, so you can get on the road faster.",
        icon : booking
    },
    {
      title: "24/7 Customer Support",
      subtitle:
        "Our dedicated support team is available around the clock to assist you with any questions or concerns, ensuring peace of mind during your rental.",
        icon : support
    },
  ];

  return (
    <div className="relative font-SpaceGrotesk mt-20 bg-gradient-to-r from-teal-50 to-indigo-50 p-10">
      {/* Background image with reduced opacity */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover opacity-20"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-center">
          Why <span className="text-[#85A98D]">Choose Us</span>
        </h1>
        <p className="max-w-[700px] mx-auto text-center mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae
          culpa libero est fugit. Totam, molestias. Sapiente explicabo sunt{" "}
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-40 mt-10 max-w-[1300px] mx-auto">
          <div className="flex flex-col gap-7">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex gap-5">
                <div className="size-20 rounded-full p-3 flex items-center justify-center bg-teal-600">
                  <img src={item.icon} alt="" className="size-16" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <p className="max-w-[440px] text-sm">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <img src={whyChooseUsImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
