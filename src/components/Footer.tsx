import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white grid grid-cols-4  text-black p-10 responsive-footer ">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/logo-ckc-net.svg"
          alt="Vercel Logo"
          width={250}
          height={30}
          priority
          style={{ height: "auto" }}
          className="logo-mobile pb-3"
        />
        <p className="pb-5 pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <p className=" custom-color text-3xl">+33 1 01 02 03 04</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="pb-3 custom-color">LOREM IPSUM</p>
        <p>Lorem ipsum 1 </p>
        <p>Lorem ipsum 2</p>
        <p className="pb-3">Lorem ipsum 3</p>
        <p className="pb-3 custom-color">JOIN US ON SOCIAL MEDIA</p>
        <div className="flex">
          <div className="p-3">
            <FaFacebook className="w-8 h-8 text-gray-500" />
          </div>
          <div className="p-3">
            <FaInstagram className="w-8 h-8 text-gray-500" />
          </div>
          <div className="p-3">
            <FaYoutube className="w-8 h-8 text-gray-500" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="pb-3 custom-color">LOREM IPSUM</p>
        <p>Lorem ipsum 1 </p>
        <p>Lorem ipsum 2</p>
        <p>Lorem ipsum 3</p>
        <p>Lorem ipsum 4 </p>
        <p>Lorem ipsum 5</p>
        <p>Lorem ipsum 6</p>
      </div>
      <div className="flex flex-col justify-center items-start">
        <p className="pb-4 custom-color">LOREM IPSUM</p>
        <p className="pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <button
          className="text-white w-182 h-57 bg-custom-color"
          style={{ padding: "10px 20px" }}
        >
          LOREM IPSUM
        </button>
        <p className="pt-5">© Copyright 2024, crafted by ckc-net.com</p>
      </div>
    </div>
  );
};

export default Footer;
