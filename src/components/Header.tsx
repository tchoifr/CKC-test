import Image from 'next/image';
import React from 'react';
import Search from './Search';

const Header = () => {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0">
        <Image
          src="/Bateau-sur-plan-deau.webp"
          alt="Vercel Logo"
          className="dark:invert w-full"
          layout="responsive"
          width={2000}
          height={1000}
          priority
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-20">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
