"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ShowOfferModal } from "./offerModal";
import { getOffers } from "@/lib/uiDataProvider/fetch-offer";

import EmblaCarousel from './cardSlider'
import { EmblaOptionsType } from 'embla-carousel'


const OPTIONS: EmblaOptionsType = {
  align: 'start',
  loop: true,
  dragFree: true,
}

const sliderData = [
  {
    id: 1,
    title: 'Serene Nature Scene with Sunlight Streaming Through Trees',
    url: 'https://res.cloudinary.com/urbanclap/image/upload/images/growth/luminosity/1651040419628-022a2b.jpeg'
  },
  {
    id: 2,
    title: 'Tranquil Beach with Gentle Waves and Clear Blue Sky',
    url: 'https://res.cloudinary.com/urbanclap/image/upload/images/growth/luminosity/1685362825553-834c0d.jpeg'
  },
  {
    id: 3,
    title: 'Lush Forest Scene with Rays of Sunlight Peeking Through',
    url: 'https://res.cloudinary.com/urbanclap/image/upload/images/growth/luminosity/1651040419628-022a2b.jpeg'
  },
  {
    id: 4,
    title: 'Elegant Woman in City Setting with a Chic Attitude',
    url: 'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg'
  },
  {
    id: 5,
    title: 'Majestic Tree in Vibrant Autumn Colors',
    url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
  }
]


export default function Info() {
  const offers = getOffers();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="w-screen bg-white">
      
      <div className="text-center pt-10">
          <h3 className="text-base md:text-4xl font-sans font-normal tracking-widest">TOP SERVICES OFFERED</h3>
          <div className="border-t w-1/3 mx-auto border-gray-900 mt-4"></div>
        </div>
      <div className="w-full relative p-4 md:p-16">
        <EmblaCarousel slides={sliderData} options={OPTIONS} />
      </div>
      </div>
      

      <ShowOfferModal isOpen={isOpen} setOpen={setIsOpen} />
    </>
  );
}


