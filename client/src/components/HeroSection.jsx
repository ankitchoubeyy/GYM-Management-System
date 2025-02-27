import React from "react";
import heroImg from "../assets/hero-man-img-min.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MyButton } from "./MyButton";
import StatsSection from "./StatsSection";

const HeroSection = () => {
  return (
    <div className="px-6 sm:px-10 md:px-14 lg:px-18 min-h-[90vh] bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* ------------- Left side box ------------- */}
        <div className="w-full md:w-[40vw] text-center md:text-left">
          <div>
            <h1 className="font-bold font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight my-5">
              <span className="text-primary">Elevate</span> your{" "}
              <span className="text-teal-500">FITNESS GAME</span>
            </h1>
            <p className="text-base text-gray-700 mb-10">
              Get ready to sweat it out and achieve your fitness goals with our
              high-energy fitness classes!
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <MyButton title={"Get Started"} route={"register"} width={"30"} />
            <div className="flex gap-4 mt-8">
              <FaFacebook className="text-2xl text-gray-800 hover:cursor-pointer hover:text-primary" />
              <FaInstagram className="text-2xl text-gray-800 hover:cursor-pointer hover:text-primary" />
              <FaTwitter className="text-2xl text-gray-800 hover:cursor-pointer hover:text-primary" />
              <FaYoutube className="text-2xl text-gray-800 hover:cursor-pointer hover:text-primary" />
            </div>
          </div>
        </div>
        {/* ------------- Right side box ------------- */}
        <div className="w-full md:w-[60vw] hidden md:block">
          <img src={heroImg} alt="hero-img" className="w-full h-auto" />
        </div>
      </div>
      {/* ------------- Stats ------------- */}
      <div className="pb-10">
        <StatsSection />
      </div>
    </div>
  );
};

export default HeroSection;