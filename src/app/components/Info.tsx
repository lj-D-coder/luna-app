"use client"
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils/cn";
import "swiper/css";
// import "./css/swipers.css";
import {Parallax, Navigation, Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import Image from "next/image";


const maxWidthForNavigation = 768;


const infos = [
  {
    title: "Top rated professionals",
    description: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "Same-day availability",
    description: "Book in less than 60 seconds, and even select same-day slots.",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "value for money services",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "Top rated professionals",
    description: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "Same-day availability",
    description: "Book in less than 60 seconds, and even select same-day slots.",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
  {
    title: "value for money services",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
];

export default function Info() {
  const [navigation, setNavigation] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    setNavigation(window.innerWidth > maxWidthForNavigation);
  }, []);
  
  return (
    <>
      <div className="w-full h-auto mx-auto md:p-24 bg-slate-100">
        <div className="grid grid-cols-12 md:gap-2">
          <div className="col-span-12 md:col-span-11 p-0 md:p-9">
            <div className="h-auto pb-10 md:pb-0">
              <Swiper
                initialSlide={1}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                autoplay={{
                  delay: 20000,
                  disableOnInteraction: false,
                }}
                loop={false}
                // navigation={navigation}
                parallax={true}
                rewind={true}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                pagination={{
                  clickable: false,
                }}
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {infos.map((info, index) => (
                  <SwiperSlide key={index} onClick={() => swiperRef.current && swiperRef.current.slideTo(index)}>
                    <div className="w-full mx-auto">
                      <div className="grid grid-cols-12 md:gap-2">
                        <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto"> {/* Added gap-4 for spacing */}
              {infos.map((info, index) => (
                <div key={index} className="col-span-1 md:col-span-1 flex flex-col items-center hover:text-blue-400"> {/* Added items-center */}
                  <div className={cn("w-[100px] h-[100px] card-hover-effects border-none shadow-none")}>
                    <Image
                      src={info.url}
                      alt="car wash"
                      layout="fill"
                    />
                  </div>
                  <div className="text-center mt-2">{info.title}</div> {/* Added text-center class */}
                </div>
              ))}
            </div>
                        </div>

                        {/* <div className="col-span-12 md:col-span-8 p-0 md:p-8">
                        <h1>KAJkjkjkajkjkajK</h1>
                        </div> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}









