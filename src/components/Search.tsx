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

  const handleSearch = () => {
    // Logique de recherche ici en utilisant searchTerm, priceRange, yearRange, et areaRange
    console.log(
      "Recherche effectuée",
      searchTerm,
      priceRange,
      yearRange,
      areaRange
    );
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

  return (
    <div className="section-search">
      <h1 className="search-h1 text-white p-2 font-normal text-medium text-3xl md:text-4xl lg:text-5xl leading-60 font-poppins tracking-wide">
        Lorem ipsum dolor sit amet, consectetur adipiscing.{" "}
      </h1>
      <div className="flex flex-wrap">
        <button
          className="text-black w-182 h-57 bg-white border border-custom-color hover:bg-custom-color active:bg-custom-color"
          style={{ padding: "5px 20px" }}
        >
          LOREM IPSUM
        </button>
        <button
          className="text-black w-182 h-57 bg-white border border-custom-color hover:bg-custom-color active:bg-custom-color"
          style={{ padding: "5px 20px" }}
        >
          LOREM IPSUM
        </button>
        <button
          className="text-black w-182 h-57 bg-white border border-custom-color hover:bg-custom-color active:bg-custom-color"
          style={{ padding: "5px 20px" }}
        >
          LOREM IPSUM
        </button>
      </div>

      <div className="flex bg-white responsive-container-search justify-around">
        <div className="p-4 col-span-1">
          <p className="text-black font-bold">Recherche</p>
          <input
            type="text"
            placeholder="Rechercher par nom"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md"
          />
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
            className="text-white w-182 bg-custom-color flex items-center justify-center p-5"
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
