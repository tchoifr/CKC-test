"use client";
import React, { useState } from "react";

const BanniereCruiseShipOcean = () => {
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
    <div className="grid grid-cols-3 responsive-banniere-cruise-ship-ocean">
      <div className="flex flex-col justify-center items-start col-span-2 img-cruise-ship-ocean p-20">
        <p className="p-3 custom-color">LOREM IPSUM</p>
        <h3 className="p-3 font-medium text-5xl text-mobile text-white">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing.
        </h3>
        <p className="p-3 pb-10 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <button
          className="text-white bg-custom-color survol-btn"
          style={{ padding: "15px 50px", minWidth: "220px" }}
          onClick={handleButtonClick}
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
        >
          {buttonText}
        </button>
      </div>
      <div className="img-yacht-blanc-eau-calme"></div>
    </div>
  );
};

export default BanniereCruiseShipOcean;
