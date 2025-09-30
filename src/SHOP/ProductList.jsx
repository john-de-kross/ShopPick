import React, { useEffect, useRef, useState } from "react";
import { products } from "../PRODUCTS";
import { HeartPlus, Star } from "lucide-react";
import Footer from "../FOOTER";

const ProductList = () => {
  const allProducts = products;
  const [productVisibility, setProductVisibility] = useState([]);
  const [page, setPage] = useState(1);
  const [productPage, setProductPage] = useState(1);
  const [windowView, setWindowView] = useState(window.innerWidth);
  const loader = useRef(null);

  const items_per_page = 4;
  const num_per_page = 16;
  const totalPages = 1 + Math.floor((allProducts.length - 1) / num_per_page)

  const handlePrev = () => {
    setProductPage((prev) => prev <= 1 ? prev : prev - 1)
  }

  const handleNextBtn = () => {
    setProductPage((prev) => prev >= totalPages ? prev : prev + 1)
  }

  const loadProduct = (page) => {
    if (windowView > 768) return;
    const start = (page - 1) * items_per_page;
    const end = start + items_per_page;
    const newBatch = allProducts.slice(start, end);
    setProductVisibility((prev) => [...prev, ...newBatch]);
  };

  useEffect(() => {
    const handleWindowSize = () => {
      setWindowView(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSize);

    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

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
      observer.disconnect();
    };
  }, [productVisibility]);

  // targeted number of items on page
  useEffect(() => {
    if (windowView <= 768) {
      setProductVisibility(allProducts);
      return;
    }
    const start = (productPage - 1) * num_per_page;
    const end = start + num_per_page;
    const batch = allProducts.slice(start, end);

    setProductVisibility(batch);
  }, [windowView, productPage]);

  const handleNextPage = (e) => {
    const num = Number(e.target.innerText);
    setProductPage(num);
  };

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
              className="relative hover:shadow-lg bg-gray-100 p-4 shadow-md rounded-lg transition"
            >
              <button className="absolute bg-white w-6 h-6 p-1 right-4 rounded">
                <HeartPlus className="w-4 h-4" />
              </button>
              <img
                className="w-full object-contain h-32 md:h-40 mb-3"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="flex flex-col gap-1.5 mt-2">
              <div className="flex justify-between">
                <p className="text-base font-medium">{item.name}</p>
                <p className="md:text-base text-sm font-[300] whitespace-nowrap md:font-medium">
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
          {productVisibility.length < allProducts.length && windowView <= 768
            ? "Loading more"
            : ""}
        </div>
      </div>
      <div className="pages hidden md:flex justify-start mt-5 gap-8 items-center">
        <div className="page-count">
          <p className="text-base font-normal">
            Page {productPage} of {totalPages}
          </p>
        </div>
        <div className="page flex gap-9 pl-6">
          <p
            onClick={handlePrev}
            className={`text-green-700 cursor-pointer transition-colors duration-200 hover:text-green-200 text-lg font-[500] ${
              productPage < 2 ? "opacity-25  text-gray-400" : ""
            }`}
          >
            Previous
          </p>
          <p className="flex gap-7 font-medium leading-loose items-center">
            {Array.from({length: totalPages}, (_, i) => i + 1).map((num, idx) => (
              <p
                key={idx}
                onClick={handleNextPage}
                className={`cursor-pointer ${
                  productPage === num
                    ? "bg-green-600 flex justify-center items-center w-6 h-6 rounded-full text-gray-100"
                    : ""
                }`}
              >
                {num}
              </p>
            ))}
          </p>
          <p onClick={handleNextBtn} className={`text-green-700 cursor-pointer ${productPage === totalPages ? 'opacity-50' : ''} transition-colors duration-200 hover:text-green-300 text-lg font-[500] `}>Next</p>
        </div>
      </div>
      
    </div>
  );
};

export default ProductList;
