import BanniereCruiseShipOcean from "@/components/BanniereCruiseShipOcean";
import Carousel from "@/components/Carousel";
import Compteur from "@/components/Compteur";
import DescriptionHeaderText from "@/components/DescriptionHeaderText";
import Header from "@/components/Header";
import HommeEquitationBateauMer from "@/components/HommeEquitationBateauMer";
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
      <Carousel />
      <HommeEquitationBateauMer />
    </div>
  );
};

export default accueil;
