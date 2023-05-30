import React from "react";
import banner from "../assets/images/banner1.jpg";

const Hero = () => {
  return (
    <section id="hero" className="bg-bgColor w-full">
      {/* Conatainer */}
      <div className="max-w-[130rem] mx-auto px-10">
        <div className="flex flex-row justify-center items-start w-full h-[100vh] relative md:justify-start md:items-center">
            {/* Left panel */}
            <div className="flex flex-col items-center text-center lg:pt-32 mt-[10rem] md:mt-[16rem] px-6 md:text-left md:items-start md:px-0 lg:max-w-[40%]">
              <h4 className="font-rubik text-primary text-base font-semibold sm:text-[1.4rem] mb-4">
                Kurdish Trainer
              </h4>
              <h1 className="capitalize font-poppins font-bold text-[2.4rem] md:text-[3.2rem] leading-[1.5] mt-[0.6rem] mb-[1.5rem] max-w-full px-2 md:px-0 md:max-w-[50%] lg:max-w-full">
              discipline, consistency and motivation
              </h1>
              <p className="font-rubik text-secondary font-normal text-[0.87rem] md:text-[1rem] leading-[1.6] mb-[2.5rem] md:max-w-[46%] lg:max-w-full">
                Check out the most effective exercises personalized to you
              </p>
              <a href="#categories" className="font-poppins font-bold text-[0.8rem] md:text-[1rem] text-white no-underline bg-primary border-2 border-primary rounded shadow-lg shadow-[#FF5330]/50 ease-in-out py-4 px-20 md:py-[1.1rem] md:px-[1.8rem]">
                  Explore Exercises
              </a>
              <h4 className="font-poppins font-bold text-[4rem]  sm:text-[8rem] lg:text-[12rem] tracking-[0.020rem] text-rose-100">
                  Exercise
            </h4>
            </div>
            <img src={banner} alt="banner" className="hidden md:block absolute right-12 top-0 w-[43%] h-[97%] z-[5] rounded-bl-[2rem]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
