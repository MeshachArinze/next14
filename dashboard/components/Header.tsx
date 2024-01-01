import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";

import logo from "@/public/logo.svg";
import { Links, social } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const [boundingClientRect, setBoundingClientRect] =
    React.useState<DOMRect | null>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const updateBoundingClientRect = () => {
      if (linksRef.current) {
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

    // const linksHeight = linksRef?.current?.getBoundingClientRect().height;
    // if (showLinks) {
    //   linksContainerRef.current.style.height = `${linksHeight}px`;
    // } else {
    //   linksContainerRef.current.style.height = "0px";
    // }
  }, []);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h3>Meshach</h3>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className={`links-container ${showLinks ? 'show-container': ''}`} ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {Links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link href={url}>{text}</Link>
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

export default Header;
