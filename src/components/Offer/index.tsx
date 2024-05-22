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
      <div className="w-screen mt-10 py-4">
        <div className="pt-4 ml-20">
          <h3 className="text-slate-900 text-xl md:text-4xl font-semibold tracking-wide">NEW SERVICES</h3>
        </div>
        <div className="w-full relative p-4 md:p-10">
          <EmblaCarousel slides={data.offerData} options={OPTIONS} />
        </div>
      </div>
    </>
  );
}
