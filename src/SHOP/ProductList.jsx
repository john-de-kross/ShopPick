import React, { useEffect, useRef, useState } from "react";
import { products } from "../PRODUCTS";
import { Star } from "lucide-react";

const ProductList = () => {
  const allProducts = products;
  const [productVisibility, setProductVisibility] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const items_per_page = 4;

  const loadProduct = (page) => {
    const start = (page - 1) * items_per_page;
    const end = start + items_per_page;
    const newBatch = allProducts.slice(start, end);
    setProductVisibility((prev) => [...prev, ...newBatch]);
  };

  useEffect(() => {
    loadProduct(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (productVisibility.length < allProducts.length) {
            setPage((prev) => prev + 1);
          }
        }
      },
      { threshold: 1 }
    );

    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.unobserve(loader.current);
      observer.disconnect()
    };

    
  }, [productVisibility]);

  return (
    <div className="h-screen w-full mt-8 md:px-16">
      <div className="product-header flex font-bold mb-4">
        <h2 className="text-lg md:text-xl px-2 md:px-0 lg:text-2xl font-bold">
          Items for you
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 px-2 md:px-0 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-6">
        {productVisibility.map((item) => (
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
                <p className="font-[400] text-sm md:text-base text-gray-600">
                  ({item.reviews})
                </p>
              </div>
            </div>
          </div>
        ))}
        <div ref={loader}>
          {productVisibility.length < allProducts.length ? "Loading more" : ""}

        </div>
      </div>
    </div>
  );
};

export default ProductList;
