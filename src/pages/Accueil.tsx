import DescriptionHeaderText from "@/components/DescriptionHeaderText";
import Header from "@/components/Header";
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
    </div>
  );
};

export default accueil;
