import React from "react";

const Sample = () => {
  const product_sample = [
    { name: "Tech", img: "/assets/tech.jpg" },
      { name: "Sneakers", img: "/assets/sneakers.jpg" },
      { name: "Travel", img: "/assets/travel-bag.jpg" },
      { name: "Books", img: "/assets/books.jpg" },
      { name: "Fashion", img: "/assets/fashion.jpg" },
      { name: "Hand Bag", img: "/assets/handbag.jpg" },
    
  ];
  return (
    <div className="w-full p-4 md:p-6">
      <div className="w-full text-lg md:text-xl lg:text-2xl font-[Inter] mb-4 md:mb-6">
        <h2>Shop Our Top Categories</h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {product_sample.map((pro, i) => (
          <div
            key={i}
            className="relative transition md:hover:scale-110"
          >
            <img
              className="w-full lg:h-40 md:h-36 h-28 rounded-lg" 
              src={pro.img}
              alt="product"
            />
            <span className="absolute hidden whitespace-nowrap md:block top-1 px-4 md:px-14 py-1 text-lg text-white font-medium">
              {pro.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sample;
