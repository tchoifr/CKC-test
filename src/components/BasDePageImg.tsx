"use client";
import React, { useState } from "react";

const BasDePageImg = () => {
  const [buttonText, setButtonText] = useState("LOREM IPSUM");

  const handleButtonClick = () => {
    setButtonText("REGISTER NOW");
  };

  const handleButtonMouseEnter = () => {
    setButtonText("REGISTER NOW");
  };

  const handleButtonMouseLeave = () => {
    setButtonText("LOREM IPSUM");
  };
  return (
    <div className=" p-40 bg-white padding-mobile-bas-de-page">
      <div className="flex flex-col justify-center items-center img-Bateau-blanc-et-bleu padding-mobile-bas-de-page">
        <p className="p-3 custom-color">LOREM IPSUM</p>
        <h3 className="p-3 font-medium text-5xl text-mobile text-center text-white">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing.
        </h3>
        <p className="p-5 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <button
          className="text-white bg-custom-color survol-btn"
          style={{ padding: "15px 50px", minWidth: "220px", minHeight: "60px" }}
          onClick={handleButtonClick}
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default BasDePageImg;
