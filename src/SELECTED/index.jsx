import {
  CircleAlert,
  Heart,
  HeartPlus,
  Send,
  ShoppingCart,
  Star,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const SelectedItem = () => {
  const [isMobile, setIsMobile] = useState(false);
  const productFrames = [
    "s24.png",
    "s24-1.png",
    "s24-2.png",
    "s24-3.png",
    "s24-3.png",
    "s24-2.png",
  ];
  const [frame, setFrame] = useState("s24.png");
  const [numItems, setNumItems] = useState(1)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    setIsMobile(mediaQuery.matches);
    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const handleIncrement = () => {
    setNumItems(prev => prev + 1)
  }

  const handleDecrement = () => {
    setNumItems(prev => prev <= 1 ? prev : prev - 1)
  }

  return (
    <div className="w-full">
      <div className="grid md:p-4 w-full grid-cols-1 md:grid-cols-[10%_40%_50%] lg:grid-cols-[5%_30%_65%] md:min-h-[32rem] md:gap-2">
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
        <div className="flex flex-col items-center">
          <div className="relative product-img w-full md:w-11/12 lg:w-full md:max-w-96 md:rounded-md aspect-[4/3]  bg-gray-100 h-96 flex justify-center items-center">
            <img
              className="w-full h-full bg-center object-contain"
              src={`/assets/${frame}`}
              alt="product"
            />
            <div className="absolute right-4 top-14 flex flex-col gap-4">
              <button className="love flex justify-center cursor-pointer transition duration-150 hover:scale-110 items-center w-9 h-9 md:w-12 md:h-12 md:rounded-full bg-white shadow-md rounded-md">
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
          <div className="btns hidden md:flex text-white justify-between mt-4 md:px-2 lg:pr-4 gap-2 items-center">
            <button className="lg:w-44 md:w-32 bg-green-500 flex justify-center items-center transition-all lg:text-xl duration-200 hover:bg-green-300 font-medium rounded-md shadow-sm cursor-pointer lg:h-14">
              <ShoppingCart className="inline w-6 h-6 mr-2" />
              ADD TO CART
            </button>
            <button className="lg:w-44 lg:h-14 md:w-32 bg-orange-700 font-medium lg:text-xl shadow-md rounded-sm cursor-pointer transition-all duration-200 hover:bg-orange-300">
              <HeartPlus className="inline w-6 h-6 mr-2" />
              BUY NOW
            </button>
          </div>
        </div>
         <div className="w-full overflow-x-auto mb-4 md:hidden flex sm:gap-x-0 gap-x-2 gap-y-2 justify-between px-2">
        {productFrames.map((framer, index) => (
          <div
            key={index}
            onMouseEnter={!isMobile ? () => setFrame(framer) : null}
            onClick={isMobile ? () => setFrame(framer) : null}
            onMouseLeave={() => setFrame("s24.png")}
            className={`flex justify-center items-center border sm:w-36 sm:h-36 w-20 h-20 ${
              framer === frame ? "border-2 border-sky-600" : ""
            }  border-gray-300 rounded-md`}
          >
            <img
              className="w-full h-full"
              src={`assets/${framer}`}
              alt="product frame"
            />
          </div>
        ))}
      </div>
        <div className="details overflow-y-auto  max-h-[32rem] md:flex flex-col gap-3">
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
            <button className="relative hidden md:block info-btn group">
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
          <div className="add-item flex gap-4 flex-wrap items-center mt-4">
            <div className="add-sub-btn flex justify-between items-center px-7 w-44 h-10 rounded-4xl opacity-80 backdrop-blur-md bg-gray-100">
              <button onClick={handleDecrement} className="text-lg font-medium cursor-pointer">-</button>
              <button className="text-lg font-medium">{numItems}</button>
              <button onClick={handleIncrement} className="text-lg font-medium cursor-pointer">+</button>
            </div>
            <div className="flex flex-col text-base font-normal whitespace-break-spaces flex-wrap">
              <p>
                Only <span className="text-green-500">8 items left!</span>
              </p>
              <p className="">Don't miss it</p>
            </div>
          </div>
          <div className="product Description w-11/12 mt-4 h-96">
            <div className="title flex px-4 border h-14 items-center border-gray-100">
              <h2 className="text-lg font-semibold">PRODUCT DESCRIPTION</h2>
            </div>
            <div className="des flex flex-col border border-gray-100 px-4 py-3 md:flex-row gap-4 items-center md:items-start">
              {/* Image on the left */}
              <img
                src={`/assets/${frame}`}
                alt="product"
                className="w-32 h-32 object-contain rounded-md bg-gray-100"
              />
              {/* Description on the right */}
              <div className="flex-1 text-gray-700 text-sm md:text-base">
                <p className="mb-2">
                  The Samsung Galaxy S24 Ultra is a premium flagship smartphone
                  designed for performance, style, and innovation. Featuring a
                  stunning 6.8-inch Dynamic AMOLED 2X display with ultra-smooth
                  120Hz refresh rate, it delivers vibrant colors and incredible
                  clarity.
                </p>
                <p className="mb-2">
                  Powered by the latest Snapdragon 8 Gen 3 processor, it ensures
                  lightning-fast performance, smooth multitasking, and
                  console-level gaming. Its quad-camera system includes a
                  high-resolution 200MP main lens, enhanced zoom capabilities,
                  and advanced AI image processing for professional-grade
                  photography in any light.
                </p>
                <p>
                  With a massive 5000mAh battery, fast charging, and all-day
                  endurance, the S24 Ultra keeps up with your lifestyle. Built
                  with a durable Armor Aluminum frame and Gorilla Glass Victus
                  protection, it combines strength with elegance.
                </p>
                {/* Add more details as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div className="fixed bottom-2 w-full px-9 flex justify-between md:hidden">
        <button className="h-9 w-28 bg-green-500 rounded-sm text-white font-medium">
          Add to Cart
        </button>
        <button className="h-9 w-28 bg-orange-500 rounded-sm text-white font-medium">
          Buy Now
        </button>

      </div>
    </div>
  );
};

export default SelectedItem;
