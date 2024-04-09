import Image from "next/image";
import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="img-header flex justify-center items-center">
      <Search />
    </div>
  );
};

export default Header;
