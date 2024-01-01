import dynamic from "next/dynamic";
import Image from "next/image";

const About = dynamic(() => import("@/components/About"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const Portfolio = dynamic(() => import("@/components/Portfolio"), {
  ssr: false,
});

import { techs } from "@/data/data";

export default function Home() {
  return (
    <div>
      {" "}
      <div className="w-full h-screen pt-2 py-10 mt-40 text-white">
        <div className="max-w-screen-lg py-10 flex mb-40 flex-col mx-auto justify-center w-full h-full ">
          <div className="pb-5 mt-60">
            <p className="text-5xl text-center text-[#4ADE80] font-bold border-b-4 border-[#1E293B]">
              Experiences
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
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}
