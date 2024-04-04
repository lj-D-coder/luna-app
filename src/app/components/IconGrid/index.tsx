import React from "react";
import { cn } from "@/lib/utils/cn";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { carwash, accleaning, carservice, homecleaning, phoneRepair, sofaCleaning, sidebanner } from "@/app/assets/images";
import Image from "next/image";
import { url } from "inspector";


const icons = [
  {
    title: "Car Wash",
    description: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!",
    url: carwash
  },
  {
    title: "Car Servicing",
    description: "Book in less than 60 seconds, and even select same-day slots.",
    url: carservice
  },
  {
    title: "Ac Cleaning",
    description: "Our professionals are equipped with the best tools and our services .",
    url: accleaning
  },
  {
    title: "Home Cleaning",
    description: "Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!",
    url: homecleaning
  },
  {
    title: "Sofa Cleaning",
    description: "Our professionals are equipped with the best tools and our services .",
    url: sofaCleaning
  },
  {
    title: "Phone Repair",
    description: "Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!",
    url: phoneRepair
  },
];

const heroBanner = [
  {
    title: "Super app.",
    description: "Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!",
    url: sidebanner,
  },
];

const IconGrid = () => {
  return (
    <>
      {/* <div className="w-full h-screen absolute flex items-center justify-center z-10"> */}
      {/* <div className="space-x-80"> */}
      <div className="w-30% h-auto left-20 absolute mt-[15%] z-10 flex-wrap bg-white opacity-90 rounded">
        <div className="flex flex-wrap">
          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-10 p-10">
            {icons.map((icon, index) => (
              <div key={index} className="col-span-1 md:col-span-1 flex-col">
                <div className={cn("w-[100px] h-[100px] card-hover-effects border-none shadow-none")}>
                  <Image
                    src={icon.url}
                    alt="car wash"
                    layout="fill"
                  />
                </div>
                <div className="text-center mt-2">{icon.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-25% h-auto absolute z-10 mt-[13%] float-right flex-wrap right-20 opacity-80 rounded">
        <div className="flex ">
          <div className="grid grid-cols-1 md:grid-cols-1">
            {heroBanner.map((banner, index) => (
              <div key={index} className="col-span-1 md:col-span-1">
                <div className={cn("w-[700px] h-[450px] card-hover-effects")}>
                  <Image src={banner.url} alt="jordans" layout="fill" className="object-cover rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default IconGrid;
