import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="font-SpaceGrotesk max-w-[1300px] mx-auto mt-20 p-7 xl:p-0">
      <h1 className="text-5xl font-bold text-center dark:text-[#D9D9D9]/80 text-[#364F53]">
        What <span className="text-[#85A98D]">The Client</span> Says
      </h1>
      <p className="max-w-[700px] mx-auto text-center mt-2 text-[#364F53] dark:text-[#D9D9D9]/70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae culpa
        libero est fugit. Totam, molestias. Sapiente explicabo sunt{" "}
      </p>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 mt-10">
     {
        [1,2,3].map((_, index) => 
            <TestimonialCard key={index}/>
          )
      }
     </div>
    </div>
  );
};

export default Testimonials;
