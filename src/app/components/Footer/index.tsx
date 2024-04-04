"use client";
import { useAnimation, useMotionValue } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function GoogleGeminiEffectDemo() {
  const controls = useAnimation();
  const footerRef = useRef(null);
  const pathLengthFirst = useMotionValue(0);
  const pathLengthSecond = useMotionValue(0);
  const pathLengthThird = useMotionValue(0);
  const pathLengthFourth = useMotionValue(0);
  const pathLengthFifth = useMotionValue(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({
            pathLengthFirst: [0, 1],
            pathLengthSecond: [0, 1],
            pathLengthThird: [0, 1],
            pathLengthFourth: [0, 1],
            pathLengthFifth: [0, 1],
            transition: { duration: 2, yoyo: Infinity },
          });
        }
      });
    });

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [controls]);

const infos = [
  {
    title: "Doorstep carwash",
    description: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75"
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

  return (
    <div>
      <div  className="w-full bg-black p-[20px]">
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
          {infos.map((info, index) => (
            <span
              key={index}
              style={{
                backgroundColor: "#000000",
                color: "white",
                padding: "5px 10px",
                borderRadius: "20px",
                margin: "5px",
                border: "1px solid white" 
              }}
            >
              {info.title}
            </span>
          ))}
        </div>
        <p className="mt-20[px] text-white">© {currentYear} Lunananna All rights reserved.</p>
      </div>
    </div>
  );
}