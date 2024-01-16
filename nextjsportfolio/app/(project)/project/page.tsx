"use client";
import React, { Suspense, lazy } from "react";
const App = lazy(() => import("@/pages/src/App"));
const Loading = lazy(() => import("@/components/Loading"));
const Navbar = lazy(() => import("@/components/Navbar"));
const Footer = lazy(() => import("@/components/Footer"));


const ProjectsSection = () => {

  return (
    <Suspense fallback={<Loading />}>

    <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
      <App />
      <Footer />
    </main>
    </Suspense>
  );
};

export default ProjectsSection;
