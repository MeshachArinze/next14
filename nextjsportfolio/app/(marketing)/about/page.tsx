"use client";
import React, { useTransition, useState, lazy } from "react";
import Image from "next/image";
const TabButton =  lazy(() => import("@/ui/TabButton"));
const Navbar =  lazy(() => import("@/components/Navbar"));
const Footer =  lazy(() => import("@/components/Footer"));

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>React/Next.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>FUPRE</li>
        <li>Federal University of Petroleum Resources</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Meta Frontend </li>
        <li>Meta Backend</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image
            src="/images/meshach.jpg"
            width={400}
            height={400}
            alt={""}
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I am a software developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Redux, Node.js, Express,
              PostgreSQL, MongoDb, HTML, CSS, and Git. I am a quick learner
              and I am always looking to expand my knowledge and skill set. I am
              a team player and I am excited to work with others to create
              amazing applications.
            </p>
            <div className="flex flex-row space-x-4 justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;