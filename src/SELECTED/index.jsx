import { HeartPlus, Send } from "lucide-react";
import React from "react";

const SelectedItem = () => {
  return (
    <div className="w-full">
      <div className="relative product-img w-full bg-gray-100 h-96 flex justify-center items-center">
        <img
          className="w-full h-full bg-center object-cover"
          src="/assets/s24.png"
          alt="product"
        />
              <div className="absolute right-4 top-14 flex flex-col gap-3">
                  <button className="love flex justify-center items-center w-9 h-9 bg-white shadow-md rounded-md">
                      <HeartPlus className="h-7 w-7"/> 
                  </button>
                  <button className="love flex justify-center items-center w-9 h-9 bg-white shadow-md rounded-md">
                      <Send className="w-7 h-7"/> 
                  </button>
                  
        </div>
      </div>
    </div>
  );
};

export default SelectedItem;
