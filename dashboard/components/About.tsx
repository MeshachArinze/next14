import React from "react";

const About = () => {
  return (
    <div className="w-full  text-white">
      <div className="max-w-screen-lg p-6 flex flex-col mx-auto justify-center w-full ">
        <div className="pb-5">
          <p className="text-5xl text-center text-[#4ADE80] font-bold border-b-4 border-[#1E293B]">
            About
          </p>
        </div>

        <p className="text-xl mt-10 hover:scale-110 duration-300">
          Who Am I? I am a Software Developer from Delta, Nigeria. I have spent
          the last 3 years building web design, development and deployment. I
          always had a knack for technology and working with computer programs.
          I also proud myself in knowledge of TypeScript and cloud technologies
          like AWS at advanced levels.
        </p>
        <br />
        <p className="text-xl mt-2 hover:scale-110 duration-300">
          My love for programming dates back to 2019 when I first had my hands
          on C++. This interest was further fired up when I started playing with
          web technologies like HTML, CSS and Javascript. I am now expanding my
          learning of Javascript and building web3 projects with ReactJs, NextJs
          and learning new technologies.
        </p>

        <br />
        <p className="text-xl mt-2 hover:scale-110 duration-300 mb-80">
          Do it get it twisted, I am a certified cloud technologist from
          coursera Aside my core web2 development activities, I sometime carry
          out research activities on cloud technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
