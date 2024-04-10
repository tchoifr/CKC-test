"use client";
import React, { useState } from "react";

const Carousel = () => {
  const [position, setPosition] = useState(0);

  const handlePrevious = () => {
    setPosition((prevPosition) => (prevPosition === 0 ? 1 : 0));
  };

  const handleNext = () => {
    setPosition((prevPosition) => (prevPosition === 1 ? 0 : 1));
  };

  return (
    <div className="bg-gray-100 flex responsive-carousel">
      <div className="flex justify-center items-start flex-col responsive-carousel-bloc-text pl-20">
        <p className="pb-3 custom-color">LOREM IPSUM</p>
        <h3
          className=" font-medium text-5xl text-mobile"
          style={{ color: "#022D45" }}
        >
          Lorem ipsum dolor sit amet
        </h3>
        <div className="flex">
          <div className="bg-white p-3 mt-8 mr-6 shadow-carousel">
            <button className="text-3xl text-gray-500" onClick={handlePrevious}>
              &#8592;
            </button>
          </div>
          <div className="bg-white p-3 mt-8 ml-6 shadow-carousel">
            <button className="text-3xl text-gray-500" onClick={handleNext}>
              &#8594;
            </button>
          </div>
        </div>
      </div>
      <div className="container flex">
        <div
          className={`flex justify-end items-start flex-col img-yacht-noir-blanc m-5 p-10 ${
            position === 0 ? "order-1" : "order-2"
          }`}
        >
          <div className="text-container">
            <h3 className="font-medium text-3xl text-white">Lorem ipsum</h3>
            <p className="text-white">Lorem ipsum | Lorem ipsum | 2018</p>
            <div className="flex">
              <p className="p-1 text-white">From</p>
              <p className="p-1 custom-color">29.000.000 €</p>
              <p className="p-1 text-white">per week</p>
            </div>
          </div>
        </div>

        <div
          className={`flex justify-end items-start flex-col img-bateau-croisiere-mer m-5 p-10 ${
            position === 1 ? "order-1" : "order-2"
          }`}
        >
          <div className="text-container">
            <h3 className="font-medium text-3xl text-white">Lorem ipsum</h3>
            <p className="text-white">Lorem ipsum | Lorem ipsum | 2018</p>
            <div className="flex">
              <p className="p-1 text-white">From</p>
              <p className="p-1 custom-color">29.000.000 €</p>
              <p className="p-1 text-white">per week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
