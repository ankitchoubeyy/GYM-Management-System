import React from "react";
import { FaDumbbell, FaUsers, FaHeartbeat, FaAward } from "react-icons/fa";

const featureData = [
  {
    id: 1,
    icon: FaDumbbell,
    title: "Modern Equipment",
    description: "We provide the latest fitness equipment to help you achieve your goals.",
  },
  {
    id: 2,
    icon: FaUsers,
    title: "Expert Trainers",
    description: "Our certified trainers are here to guide and motivate you.",
  },
  {
    id: 3,
    icon: FaHeartbeat,
    title: "Health Focused",
    description: "We prioritize your health and well-being in every program.",
  },
  {
    id: 4,
    icon: FaAward,
    title: "Award-Winning",
    description: "Recognized as the best gym in the region for 3 years in a row.",
  },
];

const Features = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {featureData.map((feature) => {
        const Icon = feature.icon; // Store the icon component in a variable
        return (
          <div
            key={feature.id}
            className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
          >
            <Icon className="text-4xl text-teal-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-zinc-700">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Features;