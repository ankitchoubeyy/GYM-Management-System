import React from "react";

const stats = [
  { id: 1, title: "Years of Service", value: "7+" },
  { id: 2, title: "Certified Trainers", value: "5+" },
  { id: 3, title: "Happy Members", value: "786+" },
  { id: 4, title: "Customer Satisfaction", value: "95%" },
];

const StatsSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 mt-10">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="text-center bg-white p-4 rounded-lg shadow-md w-[45%] sm:w-[30%] md:w-auto md:flex-1"
        >
          <h1 className="text-xl md:text-3xl font-bold mb-1">{stat.value}</h1>
          <p className="text-sm md:text-lg text-gray-600">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;