import BanniereCruiseShipOcean from "@/components/BanniereCruiseShipOcean";
import Compteur from "@/components/Compteur";
import DescriptionHeaderText from "@/components/DescriptionHeaderText";
import Header from "@/components/Header";
import ImageSkew from "@/components/ImageSkew";
import NavBar from "@/components/NavBar";
import React from "react";

const accueil = () => {
  return (
    <div>
      <div>
        <NavBar />
        <Header />
      </div>
      <DescriptionHeaderText />
      <ImageSkew />
      <Compteur />
      <BanniereCruiseShipOcean />
    </div>
  );
};

export default accueil;
