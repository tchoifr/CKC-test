"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [buttonText, setButtonText] = useState("LOREM IPSUM");

  const handleButtonClick = () => {
    setButtonText("REGISTER NOW");
  };

  const handleButtonMouseEnter = () => {
    setButtonText("REGISTER NOW");
  };

  const handleButtonMouseLeave = () => {
    setButtonText("LOREM IPSUM");
  };

  const links = [
    {
      id: 1,
      link: "Accueil",
    },
    {
      id: 2,
      link: "Recherche",
    },
    {
      id: 3,
      link: "Annonces",
    },
    {
      id: 4,
      link: "Details",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-around items-center w-full h-20 px-4 text-white absolute top-0 bg-transparent z-10">
      <div>
        <h1 className="text-5xl font-signature ml-2">
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
              className="logo-mobile"
            />
          </a>
        </h1>
      </div>

      <ul className="hidden lg:flex text-white items-center space-x-8">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links cursor-pointer capitalize font-medium duration-200 link-underline"
          >
            <Link
              href="#"
              className="text-white hover:custom-color active:custom-color"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <li className="hidden lg:block">
        <div className="flex items-center space-x-8">
          <button
            className="text-white w-57 h-57 color-btn-en "
            style={{ padding: "15px 20px" }}
          >
            EN
          </button>
          <button
            className="text-white bg-custom-color survol-btn"
            style={{ padding: "15px 50px", minWidth: "220px" }}
            onClick={handleButtonClick}
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
          >
            {buttonText}
          </button>
        </div>
      </li>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 lg:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full bg-gradient-to-b from-black to-gray-800 text-gray-500"
          style={{ height: "150vh" }}
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl"
            >
              <Link onClick={() => setNav(!nav)} href="#">
                {link}
              </Link>
            </li>
          ))}

          {/* Boutons d'action */}
          <div className="flex items-center space-x-8">
            <button
              className="text-white w-57 h-57 color-btn-en"
              style={{ padding: "15px 20px" }}
            >
              EN
            </button>
            <button
              className="text-white bg-custom-color survol-btn"
              style={{ padding: "15px 50px", minWidth: "220px" }}
              onClick={handleButtonClick}
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
            >
              {buttonText}
            </button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
