import React from "react";

const BasDePageImg = () => {
  return (
    <div className=" p-40 bg-white padding-mobile-bas-de-page">
      <div className="flex flex-col justify-center items-center img-Bateau-blanc-et-bleu padding-mobile-bas-de-page">
        <p className="p-3 custom-color">LOREM IPSUM</p>
        <h3 className="p-3 font-bold text-5xl text-mobile text-center">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing.
        </h3>
        <p className="p-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <button
          className="text-white w-182 h-57 bg-custom-color"
          style={{ padding: "10px 20px", marginLeft: "10px" }}
        >
          LOREM IPSUM
        </button>
      </div>
    </div>
  );
};

export default BasDePageImg;
