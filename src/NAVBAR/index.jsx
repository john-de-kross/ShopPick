import {
  ChevronDown,
  Menu,
  Search,
  ShoppingCart,
  User,
  UserCircle2,
  X,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileNav from "./mobileNav";
import Dropdown from "./CATEDROP";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  return (
    <nav className="w-full flex justify-between lg:flex-1 px-4 md:px-9 bg-green-900 lg:bg-stone-50 md:bg-stone-50 lg:h-14 h-16 md:h-20">
      <div className="menu flex items-center gap-2">
        {isOpen ? (
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden border-1 absolute right-5 z-50 mt-14 border-gray-200"
          >
            <X className="text-gray-100 w-5 h-5 " />
          </button>
        ) : (
          <button onClick={() => setIsOpen(true)} className="md:hidden">
            <Menu className="text-gray-100" />
          </button>
        )}

        <div className="flex items-center gap-2 font-medium md:text-black md:font-bold text-lg lg:font-semibold lg:text-xl text-white">
          <img
            className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
            src="/assets/shopping-trolley.png"
            alt="cart log"
          />
          <h2 className="md:text-green-500 text-white">ShopPick</h2>
        </div>
      </div>
      <div className=" flex md:px-1">
        <ul className="flex items-center gap-4 w-full lg:gap-6 md:gap-7 md:pl-9 text-base lg:text-lg font-[Ubuntu]">
          <li className="hidden relative md:flex md:items-center group">
            <span className="flex gap-1.5">
              Category
            <ChevronDown className="w-4 h-4 mt-2" />
            </span>
            <Dropdown />
          </li>

          <li className="hidden md:flex">Deals</li>
          <li className="hidden md:flex whitespace-nowrap">What's New</li>
          <li className="hidden md:flex">Delivery</li>
          <li className="hidden relative lg:flex">
            <input
              className="outline-none bg-gray-200 h-8 p-2 w-60 rounded-2xl text-base font-serif"
              type="text"
              placeholder="Search product"
            />
            <Search className="absolute mt-1.5 w-5 h-5 right-1 text-gray-600" />
          </li>
          <li className="lg:hidden">
            <Search className="text-gray-100 w-5 h-5 md:text-gray-950" />
          </li>
          <li className="cart relative text-white md:text-gray-950 flex gap-1.5">
            <ShoppingCart />
            <p className="hidden md:hidden lg:flex">cart</p>
            <span className="bg-red-500 w-4 h-4 text-xs flex justify-center -top-3 mx-2 items-center text-white rounded-full absolute">
              3
            </span>
          </li>
        </ul>
      </div>
      <AnimatePresence>
        <motion.div
          key="menu"
          initial={{ x: -600, opacity: 1 }}
          animate={isOpen ? { x: 0, opacity: 1 } : { x: -600, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute md:hidden z-20 bg-gray-100 w-10/12 h-screen inset-0"
        >
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} menuRef={menuRef} />
        </motion.div>
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
