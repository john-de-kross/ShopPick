import React from "react";
import { products } from "../PRODUCTS";
import { Star } from "lucide-react";

const ProductList = () => {
  return (
    <div className="h-screen w-full mt-8 md:px-16">
      <div className="product-header flex font-bold mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Items for you</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-6">
        {products.map((item) => (
          <div className="">
            <div
              key={item.id}
              className="hover:shadow-lg bg-gray-100 p-4 shadow-md rounded-lg transition"
            >
              <img
                className="w-full object-contain h-32 md:h-40 mb-3"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="flex flex-col gap-1.5 mt-2">
              <div className="flex justify-between">
                <p className="text-base font-medium">{item.name}</p>
                <p className="text-base font-medium">
                  <sup>$</sup>
                  {item.price} <sup className="text-xs">00</sup>
                </p>
              </div>
              <div className="des">
                <p className="text-xs md:text-sm font-[300]">
                  {item.description}
                </p>
              </div>
              <div className="rating-star text-xs flex gap-2 items-center">
                <div className="flex text-gray-100 text-sm md:text-base md:font-medium bg-green-700 w-10 h-4 md:w-12 md:h-6 items-center justify-center rounded-sm gap-1">
                  {item.rating}
                  <Star className="md:w-3 md:h-3 w-2 h-2 fill-gray-100" />
                </div>
                <p className="font-[400] text-sm md:text-base text-gray-600">({item.reviews})</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
