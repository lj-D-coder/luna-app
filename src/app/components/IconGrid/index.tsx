import React from "react";
import { cn } from "@/lib/utils/cn";

import {
  carwash,
  accleaning,
  carservice,
  homecleaning,
  phoneRepair,
  sofaCleaning,
  sidebanner,
  carwashimg,
  sofacleaningimg,
} from "@/app/assets/images";
import Image from "next/image";
import { url } from "inspector";
import HeroSlider from "hero-slider/dist/HeroSlider";
import Hero from "../Hero";
import Search from "../Search";

const icons = [
  {
    title: "Car Wash",
    description: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!",
    url: carwash,
  },
  {
    title: "Car Servicing",
    description: "Book in less than 60 seconds, and even select same-day slots.",
    url: carservice,
  },
  {
    title: "Ac Cleaning",
    description: "Our professionals are equipped with the best tools and our services .",
    url: accleaning,
  },
  {
    title: "Home Cleaning",
    description: "Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!",
    url: homecleaning,
  },
  {
    title: "Sofa Cleaning",
    description: "Our professionals are equipped with the best tools and our services .",
    url: sofaCleaning,
  },
  {
    title: "Phone Repair",
    description: "Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!",
    url: phoneRepair,
  },
];

const heroBanner = [
  {
    title: "Super app.",
    description: "Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!",
    url: sofacleaningimg,
  },
];

const IconGrid = () => {
  return (
    <>
      <div style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11), rgba(14, 165, 233, 0.41), rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4))" }} className="w-full h-screen grid grid-cols-1">
        <Search placeholder="Search for area, street name, landmark..." />
        <div className="flex flex-col md:flex-row items-center md:justify-between px-20 pt-20">
          <div className="w-96 md:w-[450px] mt-40 md:mt-0 h-[300px] self-center">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mx-auto">
              {icons.map((icon, index) => (
                <div key={index} className="col-span-1 md:col-span-1 flex flex-col items-center hover:text-white">
                  <div className={cn("w-[100px] h-[100px] card-hover-effects border-none shadow-none")}>
                    <Image src={icon.url} alt="car wash" layout="fill" />
                  </div>
                  <div className="text-center mt-2">{icon.title}</div> {/* Added text-center class */}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center md:flex mt-10 md:items-start">
            <div className="w-96 md:w-[700px] md:h-auto card-hover-effects border-none shadow-none">
              <Hero />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconGrid;
