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
      <div className="w-full text-lg md:text-xl lg:pl-10 lg:text-2xl font-[Inter] mb-4 md:mb-6">
        <h2>Shop Our Top Categories</h2>
      </div>
      <div className="grid md:px-3 lg:pl-10 grid-cols-3 gap-4 md:gap-0 lg:gap-0 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6">
        {product_sample.map((pro, i) => (
          <div
            key={i}
            className="w-24 relative transition md:hover:scale-110 h-24 md:h-38 md:w-38 lg:h-40 lg:w-40"
          >
            <img
              className="w-full h-full md:w-full md:h-full lg:w-full lg:h-full rounded-lg"
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
