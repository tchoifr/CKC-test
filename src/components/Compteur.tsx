"use client";
import React from "react";
import CountUp from "react-countup";

const Compteur = () => {
  return (
    <div
      id="compteur"
      className="flex flex-col justify-center items-center text-center bg-white p-10"
    >
      <p className="text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </p>
      <div className="flex flex-wrap justify-center">
        <div
          className="flex flex-col justify-center items-center p-10"
          style={{ width: "40vh" }}
        >
          <CountUp
            end={345}
            duration={5}
            className="custom-color font-bold text-6xl"
          />
          <p className="custom-color font-normal">LOREM IPSUM</p>
        </div>
        <div
          className="flex flex-col justify-center items-center p-10"
          style={{ width: "40vh" }}
        >
          <CountUp
            end={1289}
            duration={5}
            className="custom-color font-bold text-6xl"
          />
          <p className="custom-color font-normal">LOREM IPSUM</p>
        </div>
        <div
          className="flex flex-col justify-center items-center p-10"
          style={{ width: "40vh" }}
        >
          <CountUp
            end={387}
            duration={5}
            className="custom-color font-bold text-6xl"
          />
          <p className="custom-color font-normal">LOREM IPSUM</p>
        </div>
        <div
          className="flex flex-col justify-center items-center p-10"
          style={{ width: "40vh" }}
        >
          <CountUp
            end={2137}
            duration={5}
            className="custom-color font-bold text-6xl"
          />
          <p className="custom-color font-normal">LOREM IPSUM</p>
        </div>
      </div>
    </div>
  );
};

export default Compteur;
