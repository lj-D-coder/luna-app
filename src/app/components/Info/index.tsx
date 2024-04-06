"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import Image from "next/image";

const infos = [
  {
    title: "Top rated professionals",
    description: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!",
    url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1711428213587-b4f7dd.jpeg",
  },
  {
    title: "Same-day availability",
    description: "Book in less than 60 seconds, and even select same-day slots.",
    url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1708087047512-f7035f.jpeg",
  },
  {
    title: "value for money services",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1711433813875-bf7579.jpeg",
  },
];

export default function Info() {

  const swiperRef = useRef<SwiperClass | null>(null);
  return (
    <>
      <div className="w-full mx-auto p-5 md:p-10 bg-white">
        <div className="text-center mb-4">
          <h3 className="text-4xl font-bold">Offers on top service</h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {infos.map((info, index) => (
            <div className="w-[98%] md:w-[28%] h-[200px] card-hover-effects m-5">
              <Image src={info.url} alt="car wash" layout="fill" style={{ objectFit: "cover", borderRadius: 20 }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}