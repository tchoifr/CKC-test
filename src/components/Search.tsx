"use client";
import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 1300000]); // Plage de prix initiale
  const [yearRange, setYearRange] = useState<number[]>([1900, 2022]); // Plage d'années initiale
  const [areaRange, setAreaRange] = useState<number[]>([0, 1000]); // Plage de superficie initiale
  const [selectedBtn, setSelectedBtn] = useState(0);
  const handleSearch = () => {
    // Logique de recherche ici en utilisant searchTerm, priceRange, yearRange, et areaRange
  };

  const handlePriceChange = (value: number[] | number) => {
    if (Array.isArray(value)) {
      setPriceRange(value);
    }
  };

  const handleYearChange = (value: number[] | number) => {
    if (Array.isArray(value)) {
      setYearRange(value);
    }
  };

  const handleAreaChange = (value: number[] | number) => {
    if (Array.isArray(value)) {
      setAreaRange(value);
    }
  };
  const handleButtonClick = (index: any) => {
    setSelectedBtn(index);
  };
  return (
    <div className="section-search">
      <h1 className="search-h1 text-white p-2 text-medium text-3xl md:text-4xl lg:text-5xl pb-14 font-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing.{" "}
      </h1>
      <div className="flex flex-wrap">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            className={`text-black w-182 h-57 bg-white border-custom-color hover:bg-custom-color ${
              selectedBtn === index ? "bg-custom-color text-white" : ""
            }`}
            style={{ padding: "10px 40px" }}
            onClick={() => handleButtonClick(index)}
          >
            LOREM IPSUM
          </button>
        ))}
      </div>

      <div className="flex bg-white responsive-container-search justify-around">
        <div className="p-4 col-span-1">
          <p className="text-black font-bold">Lorem ipsum</p>
          <input
            type="text"
            placeholder=""
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" bg-gray-100 px-3 py-2 rounded-md input-text"
          />
        </div>
        <div className="p-4 flex flex-col w-full">
          <p className="text-black font-bold">Années</p>
          <Slider
            min={1900}
            max={2022}
            range
            value={yearRange}
            onChange={handleYearChange}
            trackStyle={{ backgroundColor: "#EA516F" }}
            handleStyle={{
              border: "solid 2px #EA516F",
              backgroundColor: "#EA516F",
              opacity: 1,
            }}
          />
          <div className="flex justify-between">
            <span className="pr-4 text-black">{yearRange[0]}</span>
            <span className="pl-4 text-black">{yearRange[1]}</span>
          </div>
        </div>
        <div className="p-4 flex flex-col w-full">
          <p className="text-black font-bold">Tarifs</p>
          <Slider
            min={0}
            max={1300000}
            range
            value={priceRange}
            onChange={handlePriceChange}
            trackStyle={{ backgroundColor: "#EA516F" }}
            handleStyle={{
              border: "solid 2px #EA516F",
              backgroundColor: "#EA516F",
              opacity: 1,
            }}
          />
          <div className="flex justify-between">
            <span className="pr-4 text-black">{priceRange[0]}€</span>
            <span className="pl-4 text-black">{priceRange[1]}€</span>
          </div>
        </div>

        <div className="p-4 flex flex-col w-full">
          <p className="text-black font-bold">Superficie</p>
          <Slider
            min={0}
            max={1000}
            range
            value={areaRange}
            onChange={handleAreaChange}
            trackStyle={{ backgroundColor: "#EA516F" }}
            handleStyle={{
              border: "solid 2px #EA516F",
              backgroundColor: "#EA516F",
              opacity: 1,
            }}
          />
          <div className="flex justify-between">
            <span className="pr-4 text-black">{areaRange[0]}m²</span>
            <span className="pl-4 text-black">{areaRange[1]}m²</span>
          </div>
        </div>
        <div className="p-4 flex justify-center items-center">
          <button
            className="text-white w-182 bg-custom-color flex items-center justify-center "
            style={{ padding: "20px 40px 20px 40px" }}
            onClick={handleSearch}
          >
            <FaSearch style={{ fontSize: "1.2em" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
