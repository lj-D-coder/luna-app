import React from "react";
import { cn } from "@/lib/utils/cn";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import Image from "next/image";

const icons = [
  {
    title: "Top rated professionals",
    description: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!",
    url: "",
  },
  {
    title: "Same-day availability",
    description: "Book in less than 60 seconds, and even select same-day slots.",
    url: "",
  },
  {
    title: "value for money services",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "",
  },
  {
    title: "Super app.",
    description: "Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!",
    url: "",
  },
  {
    title: "value for money services",
    description: "Our professionals are equipped with the best tools and our services .",
    url: "",
  },
  {
    title: "Super app.",
    description: "Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!",
    url: "",
  },
];

const heroBanner = [
  {
    title: "Super app.",
    description: "Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!",
    url: "",
  },
];

const IconGrid = () => {
  return (
    <>
      {/* <div className="w-full h-screen absolute flex items-center justify-center z-10"> */}
      {/* <div className="space-x-80"> */}
      <div className="w-25%  h-auto left-20 absolute mt-[18%] z-10 flex-wrap opacity-60 bg-black rounded">
        <div className="flex flex-wrap">
          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-10 p-5">
            {icons.map((icon, index) => (
              <div key={index} className="col-span-1 md:col-span-1 flex gap-5">
                <Card className={cn("w-[120px] h-[120px] card-hover-effects")}>
                  <CardContent className="grid gap-3">
                    <div className="rounded-md p-2">
                      {/* <Image src={icon.url} alt="jordans" height="100" width="100" className="object-contain" /> */}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-25% h-auto absolute z-10 mt-[16%] float-right flex-wrap right-20 opacity-80 rounded">
        <div className="flex ">
          <div className="grid grid-cols-1 md:grid-cols-1">
            {heroBanner.map((banner, index) => (
              <div key={index} className="col-span-1 md:col-span-1">
                <Card className={cn("w-[650px] h-[370px] card-hover-effects")}>
                  <CardContent className="grid gap-3">
                    <div className="rounded-xl p-2">
                      {/* <Image src={banner.url} alt="jordans" height="100" width="100" className="object-contain" /> */}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default IconGrid;
