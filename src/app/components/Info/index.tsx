"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import Image from "next/image";

const infos = [
  {
    title: "Top rated professionals",
    description: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!",
    url: "",
  },
  {
    title: "Same-day availability",
    description: "Book in less than 60 seconds, and even select same-day slots.",
    url: "",
  },
  {
    title: "value for money services",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "",
  },
];

export default function Info() {
  
  const swiperRef = useRef<SwiperClass | null>(null);

  
  return (
    <>
 <div className="w-full mx-auto p-10 bg-white">
    <div className="flex flex-row justify-center items-center">
        {infos.map((info, index) => (
            <div className="w-[25%] h-[200px] card-hover-effects border-2 rounded-lg border-black m-3">
              <Image src={info.url} alt="car wash" layout="fill" />
            </div>
        ))}
     
    </div>
  </div>
</>

  );
}
