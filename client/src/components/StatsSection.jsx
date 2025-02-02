import React from "react";

const stats = [
  { id: 1, title: "Years of Service", value: "7+" },
  { id: 2, title: "Certified Trainers", value: "5+" },
  { id: 3, title: "Happy Members", value: "786+" },
  { id: 4, title: "Customer Satisfaction", value: "95%" },
];

const StatsSection = () => {
  return (
    <div className="flex justify-between items-center mt-10">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <h1 className="text-3xl font-bold mb-1">{stat.value}</h1>
          <p className="text-lg ">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
