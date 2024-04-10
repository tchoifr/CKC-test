import React from "react";

const ImageSkew = () => {
  return (
    <div className="w-100 responsive-image-skew flex relative justify-between">
      <div
        className="flex justify-center items-end img-roche-brune-rivage"
        style={{ width: "40%" }}
      >
        <div className="flex flex-col p-5">
          <p className="custom-color">LOREM IPSUM</p>
          <h3 className="text-2xl text-white">
            Lorem ipsum dolor sit amet, <br /> consectetur <br /> adipiscing
            elit.
          </h3>
        </div>
      </div>
      <div
        className="flex justify-center items-end img-bateau-blanc-ocean"
        style={{
          transform: "skew(-15deg) translate(-50%, 0px)",
          position: "absolute",
          left: "50%",
          width: "27%",
        }}
      >
        <div className="flex flex-col p-5">
          <p className="custom-color">LOREM IPSUM</p>
          <h3 className="text-2xl text-white">
            Lorem ipsum dolor sit amet, <br /> consectetur <br /> adipiscing
            elit.
          </h3>
        </div>
      </div>
      <div
        className="flex items-end justify-center img-plongeur"
        style={{ width: "40%" }}
      >
        <div className="flex flex-col p-5">
          <p className="custom-color">LOREM IPSUM</p>
          <h3 className="text-2xl text-white">
            Lorem ipsum dolor sit amet, <br /> consectetur <br /> adipiscing
            elit.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ImageSkew;
