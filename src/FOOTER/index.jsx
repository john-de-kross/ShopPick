import { Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-5 md:py-0 h-auto md:min-h-9/12 bg-gray-950 px-9 lg:p-0 lg:pr-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-[40%_15%_15%_20%] lg:p-10 lg:pr-10">
        <div className="flex flex-col ">
          <div className="w-full flex px-0 mb-0 lg:px-0 md:px-0 gap-1 items-center h-auto md:mb-3">
            <img
              className="w-10 h-10 lg:w-24 lg:h-24"
              src="/assets/shopping-trolley.png"
              alt="ShopPick logo"
            />
            <h1 className="text-green-700 relative text-lg md:text-xl lg:text-3xl font-black italic">
              {" "}
              <span className="text bg-yellow-600 h-5 w-5 mt-0.5 lg:mt-0 md:w-7 md:h-7 text-white flex justify-center items-center absolute lg:w-9 lg:h-9 rounded-full">
                S
              </span>
              <span className="lg:ml-9 ml-5">hopPick</span>
            </h1>
          </div>
          <div className="text-gray-400 whitespace-nowrap mb-0 text-sm md:text-base lg:text-lg px-2 font-['Montserrat', sans-serif] md:mb-3 md:px-8">
            <p>No. 12 Rumuodumaya Street, Port Harcourt,</p>
            <p>Rivers State, Nigeria.</p>
          </div>
          <div className="contact px-2 text-gray-400 text-sm md:text-base md:mb-0 lg:text-lg whitespace-nowrap font-['Montserrat', sans-serif] md:mb-3 md:px-8">
            <p className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              +234 8133044482
            </p>
            <p className="flex gap-1 items-center">
              <Phone className="w-4 h-4" />
              +234 8059025799
            </p>
            <button className="w-28 h-10 md:w-36 lg:w-40  bg-green-600 mt-4 transition mb-2 hover:bg-gray-50 hover:border hover:border-orange-400">
              <a
                className="text-gray-50 flex items-center justify-center gap-2 text-base md:text-lg lg:text-xl font-[Ubuntu] hover:text-red-500"
                href="https://api.whatsapp.com/send?phone=2348133044482"
              >
                <Phone className="w-4 h-4" />
                Whatsapp
              </a>
            </button>
            <p className="cursor-pointer text-sm md:text-base hover:opacity-30 hover:text-gray-50">
              ShopPick_sales@info.com
            </p>
          </div>
        </div>
        <div className="contact px-2 md:px-0 mt-2 md:mt-8">
          <h3 className="text-gray-300 text-base mb-0 md:text-xl md:mb-4">COMPANY</h3>
          <ul className="text-gray-400 text-sm md:text-base flex gap-2 font-[Ubuntu] flex-col">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Customer Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="contact px-2 md:px-0 mt-2 md:mt-8">
          <h3 className="text-gray-300 text-base md:text-xl mb-4">QUICK LINKS</h3>
          <ul className="text-gray-400 flex gap-2 text-sm md:text-base font-[Ubuntu] flex-col">
            <li>Documentation</li>
            <li>Search Terms</li>
            <li>Site Maps</li>
            <li>Book Dispatch Rider</li>
            <li>International Tickets</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 px-2 md:px-0 text-gray-100 mt-2 md:mt-8">
          <h3 className="flex whitespace-nowrap text-base mb-2 text-gray-300 md:text-xl md:mb-4">
            LET'S STAY IN TOUCH
          </h3>
          <div className="flex gap-2">
            <input
              className="w-32 h-9 md:w-36 md:h-10 text-gray-950 p-2 text-sm md:text-base font-[Ubuntu] bg-gray-100 outline-none"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="flex justify-center w-14 h-9 text-sm md:text-lg mb-4 bg-green-500 md:w-20 font-medium md:h-10 hover:bg-green-200 hover:border hover:border-yellow-600 hover:opacity-45 hover:text-orange-300 items-center">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full text-center pb-4">
        <p className="text-gray-300 text-xs md:text-base font-[Montserrat]">(c) 2025 ShopPick Nigeria. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
