import React from "react";
import Worldleclone from "@/public/wordleclone.png";
import Hoolix from "@/public/magnificent-licorice.png";
import Airbnb from "@/public/airbnbclone-rosy.png";
import Sportify from "@/public/sportify.png";
import Feedback from "@/public/feedback.png";
import Exchange from "@/public/payment.png";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div  className="w-full md:h-screen my-20 py-2 text-white">
      <div className="max-w-screen-lg pb-60 mt-70 flex flex-col mx-auto justify-center w-full ">
        <div className="pb-8">
          <p className="text-5xl text-center text-[#4ADE80] font-bold border-b-4 border-[#1E293B]">
            Project Portfolio
          </p>
          <p className="py-6 text-xl text-center">
            Sample of my projects live on testnets
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 px-14">
          <div className="shadow-2xl shadow-[#1E293B] rounded-xl">
            <a
              href="https://wordleclone-lilac.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={Worldleclone}
                alt=""
                className="rounded-xl duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text">
                  Worldleclone
                </button>
              </div>
            </a>
          </div>

          <div className="shadow-2xl shadow-[#1E293B] rounded-xl">
            <a
              href="https://magnificent-licorice-22858b.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={Hoolix}
                alt=""
                className="rounded-xl duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text">
                  Agency Landing Page
                </button>
              </div>
            </a>
          </div>

          <div className="shadow-2xl shadow-[#1E293B] rounded-xl">
            <a
              href="https://airbnbclone-rosy.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={Airbnb}
                alt=""
                className="rounded-xl duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text">
                  Airbnb Clone
                </button>
              </div>
            </a>
          </div>

          <div className="shadow-2xl shadow-[#1E293B] rounded-xl">
            <a
              href="https://spotifyclone-git-master-meshacharinze.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={Sportify}
                alt=""
                className="rounded-xl duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text">
                  Sportify Clone
                </button>
              </div>
            </a>
          </div>

          <div className="shadow-2xl shadow-[#1E293B] rounded-xl">
            <a
              href="https://react-only.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={Feedback}
                alt=""
                className="rounded-xl duration-200 hover:scale-105"
              />

              <div className="flex justify-center items-center">
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text">
                  Feedback App
                </button>
              </div>
            </a>
          </div>

          <div className="shadow-2xl shadow-[#1E293B] rounded-xl">
            <a
              href="https://651f1d8c64de0300907a6a31--graceful-empanada-d6ae4c.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={Exchange}
                alt=""
                className="rounded-xl duration-200 hover:scale-105"
              />

              <div className="flex justify-center items-center">
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text">
                  payment app
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
