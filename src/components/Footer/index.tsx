"use client";
import React from "react";
import Socials from "./Socials";

const currentYear = new Date().getFullYear();

const infos = [
  {
    title: "Doorstep carwash",
    description: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "Car wash at home",
    description: "Book in less than 60 seconds, and even select same-day slots.",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "Imphal car wash",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "Manipur car wash",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "Home car servicing",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "Car maintainance",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "Sofa Cleaning",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "Carpet Cleaning",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "Home ac service at Imphal",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "Ac cleaning at Imphal",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "Cleaning services at Imphal",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "Furniture cleaning doorstep",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "Disinfection Service",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "Deep Cleaning",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "House Cleaning",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
];

const Footer = () => {
  return (
    <>
      <div className="text-center  bg-neutral-800 text-neutral-200">
        <Socials />

        <div className="mx-6 pt-8 pb-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-1 mb-4 px-10">
            <div className="flex flex-wrap mb-6">
              {infos.map((info, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: "#ffffff",
                    color: "black",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    margin: "5px",
                    border: "1px solid white",
                  }}
                >
                  {info.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* <!-- Copyright --> */}
        <div className="flex flex-row justify-between  p-6">
          <div className="col-span-3 md:col-span-1 left-2">
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white">Contact Us</a>
              <a href="#" className="text-neutral-400 hover:text-white">About Us</a>
              <a href="#" className="text-neutral-400 hover:text-white">Terms and Conditions</a>
              <a href="#" className="text-neutral-400 hover:text-white">Refund Policy</a>
            </div>
          </div>
          <div className="text-center flex justify-center items-center">
            <span>© {currentYear}</span>
            <a className="font-semibold  text-neutral-400" href="https://lunnananna.com/">
              {"\u00A0"} Lunananna All rights reserved.
            </a>
          </div>
        </div>

      </div>

      {/* <div className="h-full flex justify-center items-center">
        <div className=" bg-black">
          <div className="flex flex-wrap mt-2">
            {infos.map((info, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#000000",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  margin: "5px",
                  border: "1px solid white",
                }}
              >
                {info.title}
              </span>
            ))}
          </div>
          <p className="mt-20 text-white">© {currentYear} Lunananna All rights reserved.</p>
        </div>
      </div> */}
    </>
  );
};

export default Footer;
