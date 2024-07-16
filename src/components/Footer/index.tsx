"use client";
import React from "react";
import Socials from "./Socials";
import { CommonFetcher } from "@/lib/uiDataFetcher/commonFetcher";

interface seoTextArray {
  text: string[];
}

const currentYear = new Date().getFullYear();
const Footer = () => {
  const { data, error } = CommonFetcher("/api/seotext");
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data.seoTextData);

  return (
    <>
      <div className="text-center  bg-black text-neutral-200 mt-10">
        <Socials />

        <div className="mx-6 pt-8 pb-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-1 mb-4 px-10">
            <div className="flex flex-wrap mb-6">
              {data.seoTextData.map((seoTextArray: seoTextArray, index: string) => (
                <React.Fragment key={index}>
                  {seoTextArray.text.map((item: string, idx: number) => (
                    <span
                      key={idx}
                      className="inline-block text-xs bg-white text-black px-1 md:px-3 py-1 m-1 rounded-full"
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
            <a href="/" className="text-neutral-400 hover:text-white text-xs md:text-base">
                Home
              </a>
              <a href="/contact" className="text-neutral-400 hover:text-white text-xs md:text-base">
                Contact Us
              </a>
              <a href="/about" className="text-neutral-400 hover:text-white text-xs md:text-base">
                About Us
              </a>
              <a href="terms-conditions" className="text-neutral-400 hover:text-white text-xs md:text-base">
                Terms and Conditions
              </a>
              <a href="privacy-policy" className="text-neutral-400 hover:text-white text-xs md:text-base">
                Privacy Policy
              </a>
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
