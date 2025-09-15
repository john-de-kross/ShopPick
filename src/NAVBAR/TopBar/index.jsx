import { ChevronDown, Phone } from "lucide-react";
import React from "react";

const TopBar = () => {
  return (
    <div className="w-full hidden md:flex gap-4 md:px-2 bg-green-800 h-8">
      <div className="flex md:justify-between  items-center w-full px-4 md:px-8">
        <div className="phone flex gap-2">
          <Phone className="text-gray-100 w-4 h-4" />
          <p className="text-gray-200 text-xs font-medium">+2348133044482</p>
        </div>
        <div className="ad flex gap-2 text-gray-50 text-xs font-medium">
          <p>Get 50% discount on selected </p>
          <span>|</span>
          <p>Shop Now</p>
        </div>
        <div className="signin flex gap-2 text-gray-200 md:text-xs lg:text-xs font-[Ubuntu]">
          <a className="hover:underline hover:opacity-35" href="">
            SIGN IN
          </a>
          <span>OR</span>
          <a className="hover:underline hover:opacity-35" href="">
            CREATE AN ACCOUNT
          </a>
        </div>
        <div className="Geographical flex gap-4">
          <div className="flex cursor-pointer gap-1 text-xs text-gray-100">
            <p>Eng</p>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="location flex gap-1 text-xs text-gray-100">
            <p>Location</p>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
