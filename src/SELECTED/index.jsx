import { CircleAlert, Heart, HeartPlus, Send, Star } from "lucide-react";
import React, { useEffect, useState } from "react";

const SelectedItem = () => {
  const [isMobile, setIsMobile] = useState(false);
  const productFrames = ["s24.png", "s24-1.png", "s24-2.png", "s24-3.png"];
  const [frame, setFrame] = useState("s24.png");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px");

    setIsMobile(mediaQuery.matches);
    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="w-full">
      <div className="grid md:p-4 w-full grid-cols-1 md:grid-cols-[5%_30%_65%] gap-">
        <div className="hidden md:flex flex-col ">
          {productFrames.map((frame, index) => (
            <div
              key={index}
              onMouseEnter={!isMobile ? () => setFrame(frame) : null}
              onClick={isMobile ? () => setFrame(frame) : null}
              onMouseLeave={() => setFrame("s24.png")}
              className="flex justify-center items-center w-14 h-14 border hover:border-blue-700 transition duration-300 hover:scale-110 border-gray-300 rounded-md mb-3 cursor-pointer"
            >
              <img
                className="w-full h-full"
                src={`assets/${frame}`}
                alt="product frame"
              />
            </div>
          ))}
        </div>
        <div className="relative product-img w-full md:max-w-96 md:rounded-md md:h-[70vh] bg-gray-100 h-96 flex justify-center items-center">
          <img
            className="w-full h-full bg-center object-cover"
            src={`/assets/${frame}`}
            alt="product"
          />
          <div className="absolute right-4 top-14 flex flex-col gap-4">
            <button className="love flex justify-center items-center w-9 h-9 md:w-12 md:h-12 md:rounded-full bg-white shadow-md rounded-md">
              {isMobile ? (
                <HeartPlus className="h-7 w-7" />
              ) : (
                <Heart className="h-9 w-9 fill-gray-300 stroke-gray-300" />
              )}
            </button>
            <button className="love flex md:hidden justify-center items-center w-9 h-9 bg-white shadow-md rounded-md">
              <Send className="w-7 h-7" />
            </button>
          </div>
          <div className="rating absolute flex gap-2 md:hidden justify-center backdrop-blur-md opacity-80 items-center mt-80 left-4 bg-white w-34 h-10 rounded-2xl">
            <p className="font-semibold flex items-center gap-1.5 text-base">
              4.2
              <span>
                <Star className="w-4 h-4 stroke-green-500 fill-green-500" />
              </span>
            </p>
            <span className="text-gray-300">|</span>
            <span className="font-light text-sm ">2.3k +</span>
          </div>
        </div>
        <div className="details hidden md:flex flex-col gap-3">
          <h2 className="product-name font-bold text-lg">
            Samsung Galaxy Series Ultra 24
          </h2>
          <div className="des">
            <p className="text-gray-600 font-[500] text-sm">
              The Samsung Galaxy S24 Ultra is a premium smartphone that offers a
            </p>
            <p className="text-gray-600 font-[500] text-sm">
              stunning display, powerful performance, and an advanced camera
              system.
            </p>
          </div>
          <p className="text-green-600 font-medium">Special price</p>
          <div className="flex items-center gap-2.5">
            <p className="font-medium">₦721,000</p>
            <p className="line-through font-light text-sm">₦955,750</p>
            <span className="text-green-500 font-medium">74% off</span>
            <button className="relative info-btn group">
              <CircleAlert className="w-5 h-5 stroke-gray-500" />
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-2 h-3 bg-white rotate-45 hidden group-hover:block"></div>
              <div className="absolute left-1/2 p-3 -translate-x-1/2 top-full mt-1.5 w-72 overflow-x-hidden bg-white shadow-md hidden group-hover:block z-50">
                <h3 className="flex justify-start font-medium mb-4 text-sm">
                  Price details
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="flex place-items-start flex-col">
                      <p className="text-gray-500 font-[500] text-xs">
                        Maximum Retail Price
                      </p>
                      <p className="text-xs font-[400] text-gray-500">
                        (Incl. of all taxes)
                      </p>
                    </span>
                    <p className="text-xs line-through text-gray-500 font-[500]">
                      ₦1,478,000
                    </p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-gray-500 font-[500] text-xs">
                      Selling price
                    </p>
                    <p className="text-xs line-through font-[500] text-gray-500">
                      ₦900,000
                    </p>
                  </div>
                  <div className="border border-dashed border-gray-300"></div>
                  <div className="flex border-b border-gray-300 py-3 items-center justify-between">
                    <p className="text-gray-500 font-[500] text-xs">
                      Special price
                    </p>
                    <p className="text-xs font-[500] text-gray-500">₦721,000</p>
                  </div>
                  <div className="text-green-500 text-xs font-medium">
                    <p>Overall you save ₦179,000 (74%) on this product</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="color-choice flex flex-col gap-2">
            <h3 className="text-lg font-medium">Choose color</h3>
            <div className="flex gap-3 mt-2 items-center">
              <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-800 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-blue-800 border-2 border-blue-800 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-green-800 border-2 border-green-800 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-red-800 border-2 border-red-800 cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto md:hidden flex flex-wrap sm:gap-x-0 gap-x-2 gap-y-2 justify-between px-2">
        {productFrames.map((framer, index) => (
          <div
            key={index}
            onMouseEnter={!isMobile ? () => setFrame(framer) : null}
            onClick={isMobile ? () => setFrame(framer) : null}
            onMouseLeave={() => setFrame("s24.png")}
            className={`flex justify-center items-center sm:w-36 sm:h-36 w-20 h-20 ${isMobile && framer === frame ? 'border border-blue-500' : ''} border hover:border-blue-700 transition duration-300 hover:scale-110 border-gray-300 rounded-md mb-3 cursor-pointer`}
          >
            <img
              className="w-full h-full"
              src={`assets/${framer}`}
              alt="product frame"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedItem;
