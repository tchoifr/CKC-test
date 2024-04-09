"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-around items-center w-full h-20 px-4 text-white absolute top-0 bg-transparent z-10">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/logo-ckc-net.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={200}
              height={30}
              priority
            />
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex text-white">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium duration-200 link-underline"
          >
            <Link href={link} className="text-white hover:custom-color active:custom-color">{link}</Link>
          </li>
        ))}
      </ul>

      {/* Boutons d'action */}
      <div className="flex">
        <button className="text-white w-57 h-57 bg-white bg-opacity-50 mr-4 "style={{ padding: '10px 15px' }}>EN</button>
        <button className="text-white w-182 h-57 bg-custom-color" style={{ padding: '10px 20px' }}>Login</button>

      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
