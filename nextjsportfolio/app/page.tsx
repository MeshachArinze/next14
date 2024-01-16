"use client";
import { lazy, Suspense} from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
const Navbar = lazy(() => import("@/components/Navbar"));
import Loading from "@/components/Loading";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {" "}
      <Suspense fallback={<Loading />}>
        <Navbar />

        <div className="container mt-24 mx-auto px-12 py-4">
          <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
              >
                <h1 className="text-cyan-400 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 68,56:  font-bold
                    text-4xl 
                    mt-1 "
                  > Hi!, am Meshach Ekene and am a {" "}
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "Frontend Engineer",
                        500, // wait 1s before replacing "Mice" with "Hamsters"
                        "mobile Frontend",
                        1000,
                        "Backend Engineer",
                        1000,
                        "Fullstack Engineer",
                        500,
                      ]}
                      wrapper="span"
                      speed={40}
                      style={{ fontSize: "3rem", display: "inline-block" }}
                      repeat={Infinity}
                    />
                  </span>
                  <br></br>
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                  Am a software devloper with 4 years experience in building and
                  designing web app,
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                  >
                    Hire Me
                  </Link>
                  <Link
                    href="/images/jobCv.docx"
                    download="jobcv"
                    className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                  >
                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                      Download CV
                    </span>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-4 place-self-center mt-4 lg:mt-0"
              >
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                  <Image
                    src="/images/meshach.jpg"
                    alt="hero image"
                    className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={350}
                    height={350}
                  />
                </div>
              </motion.div>
            </div>
          </section>
          <style jsx>
            {`
             
            `}
          </style>
        </div>
        <Footer />
      </Suspense>
    </main>
  );
}
