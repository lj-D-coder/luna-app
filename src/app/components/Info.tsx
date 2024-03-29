import React from "react";
import { cn } from "@/lib/utils/cn";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import Image from "next/image";

const infos = [
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


const Info = () => {
  return (
    <>
     {/* <div className="w-full h-[80px] bg-slate-950 -mt-[40px]"></div>   To add a to margin */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 mx-auto gap-20 p-20">
          <div className="col-span-1 md:col-span-4">
            <h1 className="text-5xl text-slate-800 tracking-widest pt-10 text-center">INFO SECTION</h1>
            <p className="text-xl text-slate-500 mt-5 tracking-[.25em] text-center">
              Hi the is the sub heading section of Info
            </p>
          </div>
          {infos.map((info, index) => (
            <div key={index}>
              <Card className={cn("w-[250px] h-[350px] card-hover-effects")}>
                <CardContent className="grid gap-4">
                  <div className=" flex justify-center space-x-4 rounded-md p-4">
                      <Image
                        src={info.url}
                        alt="jordans"
                        height="150"
                        width="150"
                        className="object-contain"
                      />
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-center">{info.title}</CardTitle>
                  <CardDescription className="pt-5 text-center">{info.description}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Info;
