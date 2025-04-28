"use client";

import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = React.useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`bg-gradient-to-r from-green-900 via-blue-900 to-blue-950 shadow-md
 ${
   navBg
     ? "bg-gradient-to-r from-green-900 via-blue-900 to-blue-90 shadow-md"
     : "fixed"
 } transition-all duration-200 h-[10vh] z-[1000] fixed w-full`}
    >
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="w-10 bg-green-500 h-10 rounded-full flex items-center justify-center flex-col">
              <FaPlaneDeparture className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-widest">
              Cric<span className="text-green-500">HUB</span>
            </h1>
          </div>
        </Link>
        {/* navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p
                  className='relative text-white text-base font-medium w-fit block
                    after:block after:content-[""] after:absolute after:h-[3px] after:bg-yellow-300 
                    after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition 
                    duration-300 after:origin-right'
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/* button */}
        <div className="flex items-center space-x-4">
          <Link href="/live">
            <button
                  className="md:px-12 md:py-2.5 px-8 py-2 text-black bg-gradient-to-r from-gray-200 via-white-600 to-gray-300 
                  hover:bg-gradient-to-r hover:from-rose-400 hover:via-red-400 hover:to-orange-400 
                  transition-all duration-500 rounded-lg hover:cursor-pointer"
                  >
              Watch Live
            </button>
          </Link>
          {/* burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 text-white cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
