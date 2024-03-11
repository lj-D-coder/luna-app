"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

export default function ServicesCard() {
  return (
    <BackgroundGradient className="rounded-[22px] cursor-pointer max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <Image
        src="https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75"
        alt="jordans"
        height="150"
        width="150"
        className="object-contain"
      />
      {/* <p className="text-base sm:text-sm text-black mt-4 mb-2 dark:text-neutral-200">Air Jordan</p>

      <p className="text-sm text-neutral-600 dark:text-neutral-400">Re-imagined</p> */}
      <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
        <span>Buy now </span>
        <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">$100</span>
      </button>
    </BackgroundGradient>
  );
}
