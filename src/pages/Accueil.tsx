import BanniereCruiseShipOcean from "@/components/BanniereCruiseShipOcean";
import BasDePageImg from "@/components/BasDePageImg";
import Carousel from "@/components/Carousel";
import Compteur from "@/components/Compteur";
import DescriptionHeaderText from "@/components/DescriptionHeaderText";
import Footer from "@/components/Footer";
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
      <div className="flex flex-col">
        <Carousel />
        <HommeEquitationBateauMer />
      </div>
      <BasDePageImg />
      <Footer />
    </div>
  );
};

export default accueil;
