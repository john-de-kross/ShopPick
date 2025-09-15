import React from "react";

const Banner = () => {
  return (
    <div
      className="w-full h-80 md:h-96 flex items-center justify-center relative bg-center bg-cover md:w-full"
      style={{ backgroundImage: "url('/assets/banner-1.png')" }}
    >
      {/* Overlay for better text/button visibility */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center md:pl-[50%] md:top-15  w-full text-center">
        <h1 className="text-white md:hidden text-lg sm:text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          Welcome to Shopcart
        </h1>
        <button className="bg-green-700 hover:bg-green-800 md:w-52 lg:w-56 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition w-6/12 max-w-xs text-base md:text-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
