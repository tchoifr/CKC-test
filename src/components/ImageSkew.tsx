import Image from "next/image";
import React from "react";

const ImageSkew = () => {
  return (
    <div className="grid grid-cols-3 responsive-image-skew">
      <div className="flex justify-center items-end img-roche-brune-rivage">
        <div className="flex flex-col p-5">
          <p className="text-red-600">LOREM IPSUM</p>
          <h3 className="text-2xl">
            Lorem ipsum dolor sit amet, <br /> consectetur <br /> adipiscing
            elit.
          </h3>
        </div>
      </div>
      <div className="flex justify-center items-end img-bateau-blanc-ocean">
        <div className="flex flex-col p-5">
          <p className="text-red-600">LOREM IPSUM</p>
          <h3 className="text-2xl">
            Lorem ipsum dolor sit amet, <br /> consectetur <br /> adipiscing
            elit.
          </h3>
        </div>
      </div>
      <div className="flex  items-end justify-center img-plongeur">
        <div className="flex flex-col p-5">
          <p className="text-red-600">LOREM IPSUM</p>
          <h3 className="text-2xl">
            Lorem ipsum dolor sit amet, <br /> consectetur <br /> adipiscing
            elit.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ImageSkew;
