import React from "react";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/public/images/facebook.svg";

const Facebook = () => {
  return (
    <div className="item-container">
      <div className="img-container">
        <Link href="https://www.facebook.com/ArinzeMeshachEkene">
          <Image
            src={facebook}
            alt="Event image"
            width={300}
            height={300}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Link>
      </div>

      <div className="body-container">
        <div className="overlay"></div>

        <div className="event-info">
          <div className="additional-info">
            <p className="text-justify text-cyan-400">
              Welcome! to my linkedin profile. Click the link to see my
              achievement
            </p>
          </div>
        </div>
        <button className="action">Facebook</button>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .item-container {
          position: relative;
          margin: 24px;
          width: 320px;
          height: auto;
          overflow: hidden;

          box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }

        .img-container,
        .body-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        }

        .img-container img {
          width: 100%;
        }

        .body-container {
          position: relative;
        }

        .overlay {
          position: relative;
          width: 100%;
          height: 400px;
          background-color: rgba(24, 83, 122, 0.6);
          opacity: 0;
          transition: height linear 0.4s, opacity linear 0.2s;
        }

        .item-container:hover .overlay {
          opacity: 1;
          height: 150px;
        }

        .additional-info {
          border-top: 1px solid #bbb;
          margin-top: 12px;
          padding: 28px;
          padding-bottom: 0;
        }

        .additional-info .info {
          font-size: 0.9em;
          margin-bottom: 20px;
          text-align: center;
        }

        .info i {
          color: #18537a;
          font-size: 1.1em;
          margin-right: 4px;
        }

        .info span {
          color: #18537a;
          font-weight: bolder;
        }

        .action {
          color: #fff;
          border: 3px solid #fff;
          background-color: transparent;
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          outline: none;
          cursor: pointer;
          padding: 12px;
          text-transform: uppercase;
          font-size: 1.3em;
          font-weight: bold;
          letter-spacing: 2px;
          transition: background-color 0.4s, top 0.4s;
        }

        .item-container:hover .action {
          top: 50px;
        }

        .action:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Facebook;
