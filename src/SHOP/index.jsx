import React from "react";
import TopBar from "../NAVBAR/TopBar";
import Navbar from "../NAVBAR";
import Product from "./product";
import Footer from "../FOOTER";


const Shop = () => {
    return (
        <div className="w-full h-screen">
            <TopBar />
            <Navbar />
            <Product />
    
        </div>
    )
}

export default Shop