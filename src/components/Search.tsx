"use client"
import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<number[]>([0, 1300000]); // Plage de prix initiale
  const [yearRange, setYearRange] = useState<number[]>([1900, 2022]); // Plage d'années initiale
  const [areaRange, setAreaRange] = useState<number[]>([0, 1000]); // Plage de superficie initiale

  const handleSearch = () => {
    // Logique de recherche ici en utilisant searchTerm, priceRange, yearRange, et areaRange
    console.log('Recherche effectuée', searchTerm, priceRange, yearRange, areaRange);
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
    <div>
      <h1 className="text-5xl text-white">Explorez et trouvez le logement parfait pour votre prochain voyage.</h1>
      <div className="flex mt-5 bg-white">
        <div className="p-4">
          <p>Recherche</p>
          <input
            type="text"
            placeholder="Rechercher par nom"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md"
          />
        </div>
        <div className="p-4 flex flex-col">
          <p>Tarifs</p>
          <Slider
            min={0}
            max={1300000}
            range
            value={priceRange}
            onChange={handlePriceChange}
          />
          <div className="flex justify-between">
            <span className="pr-4">{priceRange[0]}€</span>
            <span className="pl-4">{priceRange[1]}€</span>
          </div>
        </div>
        <div className="p-4 flex flex-col">
          <p>Années</p>
          <Slider
            min={1900}
            max={2022}
            range
            value={yearRange}
            onChange={handleYearChange}
          />
          <div className="flex justify-between">
            <span className="pr-4">{yearRange[0]}</span>
            <span className="pl-4">{yearRange[1]}</span>
          </div>
        </div>
        <div className="p-4 flex flex-col">
          <p>Superficie</p>
          <Slider
            min={0}
            max={1000}
            range
            value={areaRange}
            onChange={handleAreaChange}
          />
          <div className="flex justify-between">
            <span className="pr-4">{areaRange[0]}m²</span>
            <span className="pl-4">{areaRange[1]}m²</span>
          </div>
        </div>
        <div className="p-4 flex">
          <button className="text-white w-182 bg-custom-color py-2 px-4" onClick={handleSearch}>
            Recherche
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
