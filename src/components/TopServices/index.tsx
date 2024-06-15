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
      <div className="w-screen  mt-15 mb-20 md:mt-15 md:mb-20">
        <div className="pt-0 md:pt-4 ml-4 md:ml-12">
          <h3 className="text-lg md:text-3xl font-sans font-semibold tracking-normal">OUR TOP SERVICES</h3>
        </div>
        <div className="w-full relative p-4 md:p-10">
          <EmblaCarousel slides={data.topServiceList} options={OPTIONS} />
        </div>
      </div>
    </>
  );
}
