import { ChevronDown, ContrastIcon, ListFilterPlus } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";


const Product = () => {


  return (
    <div className="w-full">
      <section className="hero-section">
        <div className="lg:w-11/12 w-full bg-gradient-to-r mx-0 z-30 from-gray-50 to-60% to-blue-500 h-80 lg:mx-auto mb-6">
          <div className="flex justify-between px-2 h-full md:px-20 items-center">
            <div className="flex flex-col">
              <h3 className="lg:text-2xl text-lg md:text-xl font-bold  text-green-950">
                Grab Upto 50% discount of
              </h3>
              <h3 className="lg:text-2xl text-lg md:text-xl font-bold text-green-950 mb-4">
                Selected Headphone
              </h3>
              <button className="lg:w-32 lg:h-10 md:w-28 h-9 md:h-9 w-24 rounded-2xl shadow-md transition-colors duration-300 hover:bg-green-100 bg-green-500">
                Buy Now
              </button>
            </div>
            <div className="lg:h-44 h-32 w-32 md:w-36 md:h-36 lg:w-44 md:mb-4 lg:mb-7">
              <img
                className="bg-blue-500"
                src="/assets/heroimg.png"
                alt="hero image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="filter mt-4">
        <div className="w-full lg:w-11/12 mx-0 px-2 lg:px-0 lg:mx-auto flex items-center justify-between">
          <div className="flex md:hidden">
            <button className="flex text-bas font-medium gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
              Filter
            </button>
          </div>
          <div className="hidden md:flex gap-3 overflow-x-auto md:gap-4 lg:gap-5 ">
            <button className="flex text-sm w-auto font-[Ubuntu] p-2 rounded-4xl bg-gray-300 h-8 gap-1 items-center justify-center">
              Headphone type
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex text-sm w-auto font-[Ubuntu] p-2 rounded-4xl bg-gray-300 h-8 gap-1 items-center justify-center">
              Price
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex text-sm w-auto font-[Ubuntu] p-2 rounded-4xl bg-gray-300 h-8 gap-1 items-center justify-center">
              Review
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex text-sm w-auto font-[Ubuntu] p-2 rounded-4xl bg-gray-300 h-8 gap-1 items-center justify-center">
              Color
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex text-sm w-auto font-[Ubuntu] p-2 rounded-4xl bg-gray-300 h-8 gap-1 items-center justify-center">
              Material
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex text-sm w-auto font-[Ubuntu] p-2 rounded-4xl bg-gray-300 h-8 gap-1 items-center justify-center">
              Offer
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex text-sm w-auto font-[Ubuntu] p-2 rounded-4xl bg-gray-300 h-8 gap-1 items-center justify-center">
              All filters
              <ListFilterPlus className="w-4 h-4" />
            </button>
          </div>
          <div className="">
            <button className="bg-transparent border border-gray-300 w-auto flex gap-1 justify-center p-2 items-center rounded-4xl h-8 text-sm font-[Ubuntu]">
              Sort by
              <ChevronDown className="lg:w-4 lg:h-4 w-3 h-3" />
            </button>
          </div>
        </div>
      </section>
      <ProductList />
    </div>
  );
};

export default Product;
