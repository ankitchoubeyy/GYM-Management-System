import React from "react";

const CallToAction = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 md:px-14 lg:px-18 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Life?
        </h2>
        <p className="text-lg text-zinc-700 mb-8">
          Join <span className="uppercase font-semibold">mh fitness</span> today
          and take the first step towards a healthier, stronger, and happier
          you!
        </p>
        <button className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-300">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
