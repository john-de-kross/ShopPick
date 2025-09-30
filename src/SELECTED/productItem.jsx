import React from "react";
import Navbar from "../NAVBAR";
import SelectedItem from ".";
import TopBar from "../NAVBAR/TopBar";

export const ProductDetail = () => {
  return (
    <div className="w-full h-screen">
      <TopBar />
      <Navbar />
      <SelectedItem />
    </div>
  );
};
