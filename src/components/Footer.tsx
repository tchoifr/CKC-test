import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white text-black p-10 responsive-footer flex justify-around ">
      <div className="flex flex-col items-center justify-center responsive-align-center">
        <a
          className="link-underline link-underline-black"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/assets/images/logo-ckc-net.svg"
            alt="Vercel Logo"
            width={250}
            height={30}
            priority
            style={{ height: "auto" }}
            className="logo-mobile "
          />
        </a>
        <p className="pb-5 pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <a href="tel:+33 1 01 02 03 04">
          <p className=" custom-color text-3xl size-number">
            +33 1 01 02 03 04
          </p>
        </a>
      </div>
      <div className="flex flex-col items-start responsive-footer-bloc">
        <p className=" custom-color pb-3">LOREM IPSUM</p>
        <p>Lorem ipsum 1 </p>
        <p>Lorem ipsum 2</p>
        <p className="">Lorem ipsum 3</p>
        <p className=" custom-color pt-5">JOIN US ON SOCIAL MEDIA</p>
        <div className="flex">
          <div className="p-2">
            <a href="https://www.facebook.com/">
              <FaFacebook className="w-8 h-8 text-gray-500" />
            </a>
          </div>
          <div className="p-2">
            <a href="https://www.instagram.com/">
              <FaInstagram className="w-8 h-8 text-gray-500" />
            </a>
          </div>
          <div className="p-2">
            <a href="https://www.youtube.com/">
              <FaYoutube className="w-8 h-8 text-gray-500" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start responsive-footer-bloc">
        <p className=" custom-color pb-3">LOREM IPSUM</p>
        <p>Lorem ipsum 1 </p>
        <p>Lorem ipsum 2</p>
        <p>Lorem ipsum 3</p>
        <p>Lorem ipsum 4 </p>
        <p>Lorem ipsum 5</p>
        <p>Lorem ipsum 6</p>
      </div>
      <div className="flex flex-col items-start responsive-footer-bloc">
        <p className="custom-color pb-3">LOREM IPSUM</p>
        <p className="pb-4 responsive-align-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <a style={{ width: "100%" }} href="mailto:contact-us@gmail.com">
          <button
            className="text-white h-57 bg-custom-color survol-btn-footer-contact"
            style={{ padding: "20px", width: "100%" }}
          >
            CONTACT US
          </button>
        </a>
        <p
          className=" pt-16 responsive-align-center"
          style={{ color: "#022D45", fontSize: "15px" }}
        >
          © Copyright 2024, crafted by ckc-net.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
