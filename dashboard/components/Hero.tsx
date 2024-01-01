import React from "react";
import Image from "next/image";
import { techs } from "@/data/data";


const Hero = () => {

  return (
    <div
    
      className="w-full h-auto pt-2 text-white"
    >
      <div className=" flex  flex-col mx-auto justify-center w-full h-full ">
        <div className="">
          <p className="text-5xl text-center text-[#4ADE80] font-bold border-b-4 border-[#1E293B]">
            Heros
          </p>
          <p className="py-6 text-xl text-center">
            Technologies I have worked with
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 text-center items-center gap-40 px-10">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className="shadow-md rounded-xl duration-200 hover:scale-105"
            >
              <Image src={src} alt="" className="" />
              <p className="font-bold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
