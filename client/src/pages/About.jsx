import React from "react";
import AboutImg from "../assets/about.jpg";
import { FaHeartbeat, FaUsers, FaHandshake, FaLightbulb, FaSmile, FaTrophy } from "react-icons/fa"; // Added FaTrophy for Excellence

const About = () => {
  return (
    <div className="min-h-screen px-6 sm:px-10 md:px-14 lg:px-18 bg-gradient-to-r from-rose-100 to-teal-100">
      <h1 className="text-5xl pt-10 pb-4 text-center font-bold">About Us</h1>
      <p className="max-w-4xl text-center mx-auto text-lg text-zinc-700">
        Welcome to <span className="font-semibold">MH FITNESS!</span> We are committed to providing you with the best
        fitness experience possible. Our state-of-the-art facilities and expert
        trainers are here to support you on your fitness journey.
      </p>

      {/* -------------- image ------------  */}
      <img
        className="mx-auto mt-10 h-76 w-full md:max-w-5xl object-cover rounded-lg shadow-md"
        src={AboutImg}
        alt="about img"
      />

      {/* -------------- mission and values ------------  */}
      <div className="mt-12">
        <h2 className="text-4xl pb-4 text-center font-semibold">Our Mission</h2>
        <p className="max-w-3xl text-center mx-auto text-lg text-zinc-700">
          To be the leading fitness destination that inspires and empowers individuals to lead healthier lives. We create a space where people of all fitness levels can achieve their goals and feel supported.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-4xl pb-8 text-center font-semibold">Our Values</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
          {/* Value 1: Health & Wellness */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaHeartbeat className="text-4xl text-teal-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Health & Wellness</h3>
            <p className="text-zinc-700">We prioritize your health and well-being above all else.</p>
          </div>

          {/* Value 2: Community */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaUsers className="text-4xl text-teal-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Community</h3>
            <p className="text-zinc-700">We foster a supportive and inclusive community for all.</p>
          </div>

          {/* Value 3: Integrity */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaHandshake className="text-4xl text-teal-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
            <p className="text-zinc-700">We operate with honesty and transparency in everything we do.</p>
          </div>

          {/* Value 4: Innovation */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaLightbulb className="text-4xl text-teal-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
            <p className="text-zinc-700">We continuously seek new ways to improve your fitness experience.</p>
          </div>

          {/* Value 5: Customer Satisfaction */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaSmile className="text-4xl text-teal-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Customer Satisfaction</h3>
            <p className="text-zinc-700">Your satisfaction is our top priority.</p>
          </div>

          {/* Value 6: Excellence */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <FaTrophy className="text-4xl text-teal-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
            <p className="text-zinc-700">We strive for the highest standards in everything we do.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;