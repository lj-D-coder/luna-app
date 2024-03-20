"use client";
import React, { Component } from "react";
import { useState, useEffect } from "react";
import "./style.css";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./swipers.css";
import { Navigation } from "swiper/modules";
import { PlayIcon } from "@heroicons/react/24/outline";

const maxWidthForNavigation = 768;


const Testimonies = [
  {
    title: "Top rated professionals",
    description: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75"
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
    title: "Super app.",
    description: "Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!",
    url: "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75",
  },
];







export default function Testimony() {
  const [navigation, setNavigation] = useState(false);

  useEffect(() => {
    setNavigation(window.innerWidth > maxWidthForNavigation);
  }, []);

  return (
    <>
      <div className="h-[800px]">
        <Swiper navigation={navigation} modules={[Navigation]} className="mySwiper">
          map.
          <SwiperSlide>
            <div className="container mx-auto">
              <div className="grid grid-cols-12 md:gap-2">
                <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center">
                  <div className="w-32 md:w-52">
                    <div className="mb-6">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                        className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                      />
                    </div>
                    <h5 className="mb-2 text-lg font-bold">Lisa Cudrow</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">Graphic Designer</h6>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur.
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                        <path
                          fill="currentColor"
                          d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                        />
                      </svg>
                    </p>

                    <ul className="mb-0 flex justify-center">
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                          <path
                            fill="currentColor"
                            d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-8 md:mr-12 md:p-5">
                  <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
                    <a className="gallery-item" data-src="https://www.youtube.com/watch?v=8LSt8_11wbQ?autoplay=1&rel=0" key="4">
                      <div className="relative">
                        <img
                          className="img-responsive"
                          alt="Testimony thumbnail"
                          src="https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
                        />
                        <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white rounded-full" />
                      </div>
                    </a>
                  </LightGallery>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
