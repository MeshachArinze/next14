
"use client";
import React, { Suspense, lazy, useState } from "react";
const Navbar = lazy(() => import('@/components/Navbar'));
const Footer = lazy(() => import('@/components/Footer'));
const Facebook = lazy(() => import('@/ui/Facebook'));
const Linkedin = lazy(() => import('@/ui/Linkedin'));
const TabButon = lazy(() => import('@/ui/TabButon'));
const Twitter = lazy(() => import('@/ui/Twitter'));
const Loading = lazy(() => import("@/components/Loading"));



const Profile = () => {
  const [tab, setTab] = useState("facebook");
  return (
    <main className="bg-[#121212]">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <div className="flex justify-center space-x-4 text-cyan-400">
          <TabButon
            isActive={tab === "facebook"}
            onClick={() => setTab("facebook")}
          >
            facebook
          </TabButon>
          <TabButon
            isActive={tab === "linkedin"}
            onClick={() => setTab("linkedin")}
          >
            Linkedin
          </TabButon>
          <TabButon
            isActive={tab === "twitter"}
            onClick={() => setTab("twitter")}
          >
            Twitter
          </TabButon>
        </div>
        <div className="flex justify-center">
          {tab === "facebook" && <Facebook />}
          {tab === "linkedin" && <Linkedin />}
          {tab === "twitter" && <Twitter />}
        </div>
      </Suspense>
      <Footer />
    </main>
  );
}

export default Profile;