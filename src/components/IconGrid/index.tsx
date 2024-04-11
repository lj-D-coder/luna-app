"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils/cn";

import {
  carwash,
  accleaning,
  carservice,
  homecleaning,
  phoneRepair,
  sofaCleaning,
} from "@/assets/images";
import Image from "next/image";
import Hero from "../Hero";
import Search from "../Search";
import Link from "next/link";

const gridData = [
  {
    title: "Car Wash",
    description: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!",
    icon: carwash,
    categoryUrl: "car-wash",
  },
  {
    title: "Car Servicing",
    description: "Book in less than 60 seconds, and even select same-day slots.",
    icon: carservice,
    categoryUrl: "car-servicing",
  },
  {
    title: "Ac Cleaning",
    description: "Our professionals are equipped with the best tools and our services .",
    icon: accleaning,
    category: "ac-cleaning",
  },
  {
    title: "Home Cleaning",
    description: "Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!",
    icon: homecleaning,
    category: "home-cleaning",
  },
  {
    title: "Sofa Cleaning",
    description: "Our professionals are equipped with the best tools and our services .",
    icon: sofaCleaning,
    category: "sofa-cleaning",
  },
  {
    title: "Phone Repair",
    description: "Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!",
    icon: phoneRepair,
    category: "phone-repair",
  },
];

const IconGrid = () => {
  const [specialIndices] = useState([1]);

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11), rgba(14, 165, 233, 0.41), rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4))",
        }}
        className="w-full h-screen grid grid-cols-1"
      >
        <Search placeholder="Search for area, street name, landmark..." />
        <div className="flex flex-col md:flex-row items-center md:justify-between px-10 pt-20">
          <div className="w-96 md:w-[600px] mt-40 md:mt-0 h-[300px] self-center">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mx-auto">
              {gridData.map((data, index) => (
                <div key={index} className="col-span-1 md:col-span-1 flex flex-col items-center hover:text-white">
                  <div
                    className={cn(
                      "w-[100px] h-[100px] card-hover-effects border-none shadow-none",
                      specialIndices.includes(index) && "w-24 h-24"
                    )}
                  >
                    <Link href={`/${data.category}`}>
                      <Image src={data.icon} alt="car wash" fill />
                    </Link>
                  </div>
                  <div className="text-center mt-2">{data.title}</div> {/* Added text-center class */}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center md:flex mt-10 md:items-start">
            <div className="w-96 md:w-[800px] md:h-auto card-hover-effects border-none shadow-none">
              <Hero />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconGrid;
