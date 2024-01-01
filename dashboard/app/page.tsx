"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";


import { techs } from "@/data/data";
import Header from "@/components/Header";
import Hero from "@/components/Hero";


export default function Home() {
  const [nav, setNav] = useState(true);

  useEffect(() => {
    setNav(false);
  }, []);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex flex-col gap-20">
      {" "}
      <Header />
      <Hero />
      <About />
      {/* <Hero />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer /> */}
    </div>
  );
}
