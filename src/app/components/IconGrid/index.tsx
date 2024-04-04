import React from "react";
import { cn } from "@/lib/utils/cn";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import Image from "next/image";

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
    title: "Super app.",
    description: "Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!",
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

const Info = () => {
  return (
    <>
      <div className="w-25% mx-auto absolute mt-[250px] flex-wrap ml-20 z-10 opacity-80 bg-slate-400 rounded">
        <div className="flex flex-wrap">
          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-10 p-5">
            {infos.map((info, index) => (
              <div key={index} className="col-span-1 md:col-span-1 flex gap-5">
                <Card className={cn("w-[100px] h-[100px] card-hover-effects")}>
                  <CardContent className="grid gap-3">
                    <div className="rounded-md p-2">
                      <Image src={info.url} alt="jordans" height="100" width="100" className="object-contain" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="w-full h-[80px] bg-slate-950 "></div>   To add a to margin */}
    </>
  );
};

export default Info;
