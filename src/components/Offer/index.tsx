import React from "react";
import { CommonFetcher } from "@/lib/uiDataFetcher/commonFetcher";

import EmblaCarousel from "./cardSlider";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {
  align: "start",
  loop: true,
  dragFree: true,
};

export default function Offer() {

  const { data, error } = CommonFetcher("/api/offers");

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  if (data.offerData && data.offerData.length === 0) return null;

  return (
    <>
      <div className="w-screen bg-white">
        <div className="pt-4 ml-20">
          <h3 className="text-xl md:text-4xl font-sans font-semibold tracking-widest">NEW SERVICES</h3>
          <div className="border-t w-1/4 border-gray-900 mt-4"></div>
        </div>
        <div className="w-full relative p-4 md:p-16">
          <EmblaCarousel slides={data.offerData} options={OPTIONS} />
        </div>
      </div>
    </>
  );
}
