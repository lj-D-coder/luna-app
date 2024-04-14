"use client";
import React from "react";
import Socials from "./Socials";

const currentYear = new Date().getFullYear();

interface SeoTextData {
  text: string[];
}

interface SeoTextProp {
  textData: SeoTextData[];
}

const Footer: React.FC<SeoTextProp> = ({ textData }) => {
  return (
    <>
      <div className="text-center  bg-black text-neutral-200">
        <Socials />

        <div className="mx-6 pt-8 pb-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-1 mb-4 px-10">
            <div className="flex flex-wrap mb-6">
              {textData.map((data, index) => (
                <React.Fragment key={index}>
                  {data.text.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-white text-black px-3 py-1 m-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between p-10 md:p-6">
          <div className="col-span-3 md:col-span-1 left-2">
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white text-xs md:text-base">Contact Us</a>
              <a href="#" className="text-neutral-400 hover:text-white text-xs md:text-base">About Us</a>
              <a href="#" className="text-neutral-400 hover:text-white text-xs md:text-base">Terms and Conditions</a>
              <a href="#" className="text-neutral-400 hover:text-white text-xs md:text-base">Refund Policy</a>
            </div>
          </div>
          <div className="text-center flex justify-center items-start md:items-center mb-2">
            <span>© {currentYear}</span>
            <a className="font-semibold  text-neutral-400" href="https://lunnananna.com/">
              {"\u00A0"} Lunananna All rights reserved.
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
