import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100 p-4">
      <div className="text-center bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 transform transition-all hover:scale-105 duration-300">
        {/* Animated 404 Text */}
        <h1 className="text-9xl font-bold text-teal-500 mb-4 animate-bounce">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Homepage Button */}
        <a
          href="/"
          className="inline-block px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300 transform hover:scale-105"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;