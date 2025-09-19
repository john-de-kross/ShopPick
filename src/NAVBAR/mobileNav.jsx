import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";

function MobileNav({ isOpen, setIsOpen, menuRef }) {
  const shopFeatures = [
    {
      name: "CATEGORIES",
      feat: [
        "PHONES & TABLETS",
        "COMPUTING",
        "ELECTRONICS",
        "HOME & KITCHEN",
        "POWER SUPPLIES",
        "BOOKS",
      ],
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="w-full py-4">
      {isOpen && (
        <ul className="flex flex-col p-2 space-y-3 font-[Monserrat]">
          <li className="acct flex text-green-600 text-lg font-[Ubuntu] gap-8 mb-6">
            <h3 className="text-red-500">Menu</h3>
            <h3>Account</h3>
          </li>
          {shopFeatures.map((item, index) => (
            <li
              key={index}
              className="text-base w-full border border-x-0 border-gray-400 py-2 font-[Ubuntu]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between w-full items-center"
              >
                {item.name}
                {openIndex == index ? (
                  <ChevronDown className="text-gray-500" />
                ) : (
                    <ChevronRight className="text-gray-500" />
                )}
              </button>
              <div
                className={` bg-gray-100 flex flex-col gap-4 transition-all duration-200 ${
                  openIndex === index ? "border-t border-gray-400 mt-4" : ""
                } overflow-hidden ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                {item.feat.map((feature, index) => (
                  <a key={index} className="block text-gray-900" href="#">
                    {feature}
                  </a>
                ))}
              </div>
            </li>
          ))}
          <li className="flex justify-between border-b border-y-gray-400 py-2 border-x-0">
            <p>DEALS</p>
          </li>
          <li className="flex justify-between border-b border-y-gray-400 py-2 border-x-0">
            <p>NEW DEALS</p>
          </li>
          <li className="flex justify-between border-b border-y-gray-400 py-2 border-x-0">
            <p>DELIVERY</p>
          </li>
        </ul>
      )}
    </div>
  );
}

export default MobileNav;
