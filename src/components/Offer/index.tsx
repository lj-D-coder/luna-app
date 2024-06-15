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
      <div className="w-screen mt-20 mb-15 md:mt-20 md:mb-15">
        <div className="pt-0 md:pt-4 ml-4 md:ml-12">
          <h3 className="text-slate-900 text-lg md:text-3xl font-semibold tracking-normal">NEW SERVICES</h3>
        </div>
        <div className="w-full relative pl-4 pr-4 pb-4 md:p-10">
          <EmblaCarousel slides={data.offerData} options={OPTIONS} />
        </div>
      </div>
    </>
  );
}