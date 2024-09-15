import { useState } from 'react';
import bgImg from "../../assets/Images/1.png";

// https://i.ibb.co/7G9g2ZL/men1.jpg
// https://i.ibb.co/tJC3HcH/men2.jpg
// https://i.ibb.co/rF1kZw6/men3.jpg
// https://i.ibb.co/XxSBMjk/men4.jpg

const Team = () => {
    const [isOpen, setIsOpen] = useState(null);
    const toggle = ({ currentIdx }) => setIsOpen((prevIdx) => (prevIdx == currentIdx ? null : currentIdx));
    const sliders = [
            {
                img: 'https://i.ibb.co/7G9g2ZL/men1.jpg',
                title: 'Rahul Sutradhar',
                jobTitle : "CEO"
            },
            {
                img: 'https://i.ibb.co/tJC3HcH/men2.jpg',
                title: 'Rahul Sutradhar',
                jobTitle : "CEO"
            },
            {
                img: 'https://i.ibb.co/rF1kZw6/men3.jpg',
                title: 'Rahul Sutradhar',
                jobTitle : "CEO"
            },
            {
                img: 'https://i.ibb.co/XxSBMjk/men4.jpg',
                title: 'Rahul Sutradhar',
                jobTitle : "CEO"
            }
        ]; 
    return (
        <div className='font-SpaceGrotesk mt-20 relative p-5 md:p-10 dark:bg-[#2f3d46] bg-teal-50'>
            <div
        className="absolute inset-0 bg-no-repeat bg-cover opacity-50 dark:opacity-20"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className='max-w-[1300px] mx-auto'>

      

            <h1 className="text-5xl font-bold text-center dark:text-[#D9D9D9]/80 text-[#364F53]">
          Meet Our<span className="text-[#85A98D]"> {" "}Talented Team</span>
        </h1>
        <p className="max-w-[700px] mx-auto text-center mt-2 text-[#364F53] dark:text-[#D9D9D9]/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae
          culpa libero est fugit. Totam, molestias. Sapiente explicabo sunt{" "}
        </p>

            <div className="flex justify-center gap-1 md:gap-4 mt-10">
            {sliders.map((slide, idx) => (
                <div onClick={() => toggle({ currentIdx: idx })}
                    className={`relative h-[400px] rounded-3xl bg-gray-300 duration-500 ease-in-out ${isOpen == idx ? ' w-[150px] md:w-[300px] lg:w-[400px] ' : 'w-[70px] md:w-[100px] lg:w-[200px]'}`}
                    key={idx}
                    >
                    <img width={640} height={540} className="h-full rounded-3xl object-cover" src={slide.img} alt="accordion navigate ui" />
                    <img width={64} height={64}
                        className={`absolute bottom-5 border border-white transition-all duration-500 md:border-2 ${isOpen === idx ? 'left-4' : 'left-1/2 -translate-x-1/2 duration-700'} h-10 w-10 rounded-full object-cover md:h-[50px] md:w-[50px]`}
                        src={slide.img}
                        alt="accordion navigate ui"/>
                    <div className={`absolute bottom-5 left-[45%] text-white transition-all duration-300 md:left-[100px] ${isOpen === idx ? 'opacity-100' : 'opacity-0 '}`}>
                        <h3 className="text-lg font-semibold md:text-3xl">{slide.title}</h3>
                        <p className="text-sm md:text-xl">{slide.jobTitle}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
        </div>
    );
};

export default Team;