import React from "react";
import heroImg from "../assets/hero-man-img-min.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MyButton } from "./MyButton";
import StatsSection from "./StatsSection";

const HeroSection = () => {
  return (
    <div className="px-6 sm:px-10 md:px-14 lg:px-18  min-h-[90vh] bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="flex justify-between items-center">
        <div className="w-[40vw]">
          <div>
            <h1 className="font-bold font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-16 my-5">
              <span className="text-primary">Elevate</span> your{" "}
              <span className="text-secondary">FITNESS GAME</span>
            </h1>
            <p className="text-base text-gray-700 mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis
              nihil ipsum sed consectetur atque tenetur voluptatum placeat
            </p>
          </div>
          <div>
            <MyButton title={"Get Started"} route={"register"} width={"30"} />
            <div className="flex gap-4 mt-8">
              <FaFacebook className="text-2xl text-gray-800 hover:cursor-pointer hover:text-primary" />
              <FaInstagram className="text-2xl text-gray-800 hover:cursor-pointer hover:text-primary" />
              <FaTwitter className="text-2xl text-gray-800 hover:cursor-pointer hover:text-primary" />
              <FaYoutube className="text-2xl text-gray-800 hover:cursor-pointer hover:text-primary" />
            </div>
          </div>
        </div>
        <div className="w-[60vw]">
          <img src={heroImg} alt="hero-img" />
        </div>
        
      </div>
      <div><StatsSection /></div>
    </div>
  );
};

export default HeroSection;
