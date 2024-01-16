/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useRef, useEffect, lazy } from "react";
import type { NextPage } from "next";
import { FaBars } from "react-icons/fa";
import { Links, social } from "@/data/data";
import Link from "next/link";
const NavLink = lazy(() => import("@/ui/NavLink"));


const Navbar: NextPage = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const [boundingClientRect, setBoundingClientRect] = useState<DOMRect | null>(
    null
  );
  const linksRef = useRef<HTMLUListElement>(null);

  // const {showLinks, setShowLinks, openLink}  = useGlobalContext();

  useEffect(() => {
    const updateBoundingClientRect = () => {
      if (linksRef.current && showLinks === false) {
        const rect = linksRef.current.getBoundingClientRect();
        setBoundingClientRect(rect);
      }
    };

    // Call the function initially
    updateBoundingClientRect();

    // Attach a resize event listener to update the bounding client rect on resize
    window.addEventListener("resize", updateBoundingClientRect);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateBoundingClientRect);
    };
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h3 className="text-cyan-400">Meshach</h3>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`links-container ${!showLinks ? "show-container" : ""}`}
          ref={linksContainerRef}
        >
          <ul className="links" ref={linksRef}>
            {Links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <NavLink href={url} text={text} />
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <Link href={url}>{icon}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
