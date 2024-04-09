import React from "react";

const HommeEquitationBateauMer = () => {
  return (
    <div
      className="grid grid-cols-3 responsive-homme_equitation-bateau-mer"
      style={{ backgroundColor: "#F5F5FA" }}
    >
      <div className="img-Homme-equitation-bateau-mer flex flex-col justify-end p-5">
        <p className="custom-color">POSTED 10 MARCH 2023</p>
        <h4 className="font-bold ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h4>
      </div>
      <div className="img-Bateaux-blancs-ocean flex flex-col justify-end p-5">
        <p className="custom-color">POSTED 10 MARCH 2023</p>
        <h4 className="font-bold ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h4>
      </div>
      <div className="flex flex-col justify-center items-start">
        <p className="custom-color p-3">LOREM IPSUM</p>
        <h3
          className="font-bold text-5xl p-3 text-mobile"
          style={{ color: "#022D45" }}
        >
          Lorem ipsum dolor sit amet
        </h3>
        <button
          className="text-white w-182 h-57 bg-custom-color p-3"
          style={{ padding: "10px 20px", marginLeft: "10px" }}
        >
          LOREM IPSUM
        </button>
      </div>
    </div>
  );
};

export default HommeEquitationBateauMer;
