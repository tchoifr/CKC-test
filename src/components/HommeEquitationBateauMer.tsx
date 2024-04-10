"use client";
import React, { useState } from "react";

const HommeEquitationBateauMer = () => {
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
    <div
      className="grid grid-cols-3 responsive-homme_equitation-bateau-mer p-10"
      style={{ backgroundColor: "#F5F5FA" }}
    >
      <div className="img-Homme-equitation-bateau-mer flex flex-col justify-end p-5">
        <p className="custom-color">POSTED 10 MARCH 2023</p>
        <h4 className="font-medium text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h4>
      </div>
      <div className="img-Bateaux-blancs-ocean flex flex-col justify-end p-5">
        <p className="custom-color">POSTED 10 MARCH 2023</p>
        <h4 className="font-medium text-white ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h4>
      </div>
      <div className="flex flex-col justify-center items-start rensponsive-text-bloc-equitation-bateau-mer">
        <p className="custom-color p-3">LOREM IPSUM</p>
        <h3
          className="font-bold text-5xl p-3 text-mobile"
          style={{ color: "#022D45" }}
        >
          Lorem ipsum <br /> dolor sit amet
        </h3>
        <button
          className="text-white bg-custom-color survol-btn-black"
          style={{ padding: "15px 50px", minWidth: "220px" }}
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

export default HommeEquitationBateauMer;
