import React from "react";
import { CommonFetcher } from "@/lib/uiDataFetcher/commonFetcher";

import EmblaCarousel from "./cardSlider";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {
  align: "start",
  loop: true,
  dragFree: true,
};

export default function TopServices() {

  const { data, error } = CommonFetcher("/api/services/top-services");

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  if (data.topServiceList && data.topServiceList.length === 0) return null;

  return (
    <>
      <div className="w-screen bg-white">
        <div className="ml-20 pt-10">
          <h3 className="text-xl md:text-4xl font-sans font-semibold tracking-widest">OUR TOP SERVICES</h3>
          <div className="border-t w-1/3 border-gray-900 mt-4"></div>
        </div>
        <div className="w-full relative p-4 md:p-16">
          <EmblaCarousel slides={data.topServiceList} options={OPTIONS} />
        </div>
      </div>
    </>
  );
}
