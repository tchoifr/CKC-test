import React from "react";

const Carousel = () => {
  return (
    <div
      className=" bg-gray-100 flex"
      style={{ height: "450px", overflow: "visible" }}
    >
      <div className=" flex justify-center items-center flex-col w-1/3">
        <p className="pb-3 custom-color">LOREM IPSUM</p>
        <h3
          className="p-3 font-medium text-5xl text-mobile text-center"
          style={{ color: "#022D45" }}
        >
          Lorem ipsum dolor sit amet
        </h3>
        <div className="flex">
          <div className=" bg-white p-3 m-3 mr-6">
            <button className="text-3xl text-gray-500">&#8592;</button>
          </div>
          <div className=" bg-white p-3 m-3 ml-6">
            {" "}
            <button className="text-3xl text-gray-500">&#8594;</button>
          </div>
        </div>
      </div>
      {/* img centre */}
      <div className="flex justify-end items-start flex-col w-1/3 img-yacht-noir-blanc m-5  p-10">
        <h3 className="font-bold text-3xl">Lorem ipsum</h3>
        <p>Lorem ipsum | Lorem ipsum | 2018</p>
        <div className="flex">
          <p className="p-1">From</p>
          <p className="p-1 custom-color">29.000.000 €</p>
          <p className="p-1">per week</p>
        </div>
      </div>

      {/* img droite */}
      <div className="flex justify-end items-start flex-col w-1/3 img-bateau-croisiere-mer m-5  p-10">
        <h3 className="font-bold text-3xl">Lorem ipsum</h3>
        <p>Lorem ipsum | Lorem ipsum | 2018</p>
        <div className="flex">
          <p className="p-1">From</p>
          <p className="p-1 custom-color">29.000.000 €</p>
          <p className="p-1">per week</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
