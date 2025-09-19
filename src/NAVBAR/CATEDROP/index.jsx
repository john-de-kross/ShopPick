import { ChevronRight } from "lucide-react";
import React from "react";

const Dropdown = () => {
  return (
    <div className="absolute group-hover:block -left-6 w-56 top-full z-50 bg-white hidden rounded shadow-lg">
      <li className="relative block group/submenu px-4 py-2 font-[Ubuntu] hover:bg-gray-100">
        <span className="flex justify-between items-center">
          <a href="#" className="block">
            Phones & Tablets
          </a>
          <button>
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </button>
        </span>
        <div className="absolute hidden group-hover/submenu:block top-0 left-full w-56 bg-white rounded-lg shadow-lg z-50 font-sans font-medium py-2">
          {[
            "Gionee Phones",
            "iPhones",
            "HTC Phones",
            "Lenovo Mobile",
            "Infinix Phones",
            "Nokia Phones",
            "Samsung Galaxy",
            "LG Phones",
            "Huawei Phones",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </li>
      <li className="flex justify-between group/submenu px-4 py-2 font-[Ubuntu] hover:bg-gray-100">
        <a href="#" className="block">
          Electronics
        </a>
        <button>
          <ChevronRight className="w-5 h-5 text-gray-500" />
        </button>
        <div className="absolute hidden group-hover/submenu:block top-0 left-full w-56 bg-white rounded-lg shadow-lg z-50">
          {[
            "Television",
            "Gadgets",
            "Home Theaters",
            "Audio System",
            "Video System",
            "Accessories",
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </li>
      <li className="flex  relative justify-between group/submenu px-4 py-2 font-[Ubuntu] hover:bg-gray-100">
        <a href="#" className="block">
          Power Supplies
        </a>
        <button>
          <ChevronRight className="w-5 h-5 text-gray-500" />
        </button>
        <div className="absolute hidden group-hover/submenu:block right-full z-50 bg-white shadow-lg rounded top-0 w-56">
          {[
            "Power Systems",
            "Surge Protectors",
            "Inverters",
            "Voltage Stabilizer",
            "Solar",
            "APC Power",
            "Lightning Products",
            "Generators",
          ].map((item) => (
            <a  className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200" href="">{item}</a>
          ))}
        </div>
      </li>
      <li className="flex justify-between px-4 py-2 font-[Ubuntu] hover:bg-gray-100">
        <a href="#" className="block">
          Fashion
        </a>
        <button>
          <ChevronRight className="w-5 h-5 text-gray-500" />
        </button>
      </li>
      <li className="flex justify-between px-4 py-2 font-[Ubuntu] hover:bg-gray-100">
        <a href="#" className="block">
          Home & Kitchen
        </a>
        <button>
          <ChevronRight className="w-5 h-5 text-gray-500" />
        </button>
      </li>
      <li className="flex justify-between px-4 py-2 font-[Ubuntu] hover:bg-gray-100">
        <a href="#" className="block">
          Sports
        </a>
        <button>
          <ChevronRight className="w-5 h-5 text-gray-500" />
        </button>
      </li>
      <li className="flex justify-between px-4 py-2 font-[Ubuntu] hover:bg-gray-100">
        <a href="#" className="block">
          Books
        </a>
        <button>
          <ChevronRight className="w-5 h-5 text-gray-500" />
        </button>
      </li>
    </div>
  );
};

export default Dropdown;
