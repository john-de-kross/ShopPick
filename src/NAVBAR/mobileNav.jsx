import { ChevronDown } from "lucide-react";
import React, { useRef } from "react";

function MobileNav({ isOpen, setIsOpen, menuRef }) {
  return (
    <div className="w-full py-4">
      {isOpen && (
        <ul className="flex flex-col p-2 space-y-3 font-[Monserrat]">
          <li className="acct flex text-green-600 text-lg font-[Ubuntu] gap-8 mb-6">
            <h3 className="text-red-500">Menu</h3>
            <h3>Account</h3>
          </li>
          <li className="flex justify-between border border-y-gray-400 py-2 border-x-0">
            <p>Categories</p>
            <ChevronDown />
          </li>
          <li className="flex justify-between border-b border-y-gray-400 py-2 border-x-0">
            <p>Deals</p>
            <ChevronDown />
          </li>
          <li className="flex justify-between border-b border-y-gray-400 py-2 border-x-0">
            <p>New Deal</p>
            <ChevronDown />
          </li>
          <li className="flex justify-between border-b border-y-gray-400 py-2 border-x-0">
            <p>Delivery</p>
            <ChevronDown />
          </li>

        </ul>
      )}

    </div>

  )
}


export default MobileNav;
