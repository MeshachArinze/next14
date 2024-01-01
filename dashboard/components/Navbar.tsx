"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function Navbar() {
  const [nav, setNav] = useState(true);

  useEffect(() => {
    setNav(false);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px]  p-4">
      <h1 className="w-full text-4xl font-bold text-[#4ADE80]">MESHACH.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer hover:scale-105 duration-200 capitalize font-medium">
          <Link href="Hero">Home</Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-105 duration-200 capitalize font-medium">
          <Link href="About">About</Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-105 duration-200 capitalize font-medium">
          <Link href="Portfolio">Portfolio</Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-105 duration-200 capitalize font-medium">
          <Link href="Experience">Experience</Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-105 duration-200 capitalize font-medium">
          <Link href="Contact">Contact</Link>
        </li>
      </ul>
      <div onClick={handleNav} className=" cursor-pointer md:hidden">
        {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          !nav
            ? " left-0 href p-0 w-[100%] h-full border-r border-r-gray-900 bg-[#0f172a] ease-in-out duration-500"
            : " left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#4ADE80] m-8">
          MESHACH.
        </h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-b-gray-600">
            <Link href="Hero">Home</Link>
          </li>
          <li className="p-4 border-b border-b-gray-600">
            <Link href="About">About</Link>
          </li>
          <li className="p-4 border-b border-b-gray-600">
            <Link href="Portfolio">Portfolio</Link>
          </li>
          <li className="p-4 border-b border-b-gray-600">
            <Link href="Experience">Experience</Link>
          </li>
          <li className="p-4">
            <Link href="Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
