import React from "react";
import { cn } from "@/lib/utils/cn";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import Image from "next/image";

const banner = [
  {
    title: "Top rated professionals",
    description: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!",
    url: ""
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
          <div className="row-span-3 md:row-span-3 flex gap-5">
          {banner.map((file, index) => (
            <div key={index} >
              <Card className={cn("w-[80%] h-[200px] card-hover-effects")}>
                <CardContent className="grid gap-4">
                  <div className="flex justify-center space-x-4 rounded-md p-4">
                      {/* <Image
                        src={file.url}
                        alt="jordans"
                        height="150"
                        width="150"
                        className="object-contain"
                      /> */}
                  </div>
                </CardContent>
                {/* <CardHeader>
                  <CardTitle className="text-center">{file.title}</CardTitle>
                  <CardDescription className="pt-5 text-center">{file.description}</CardDescription>
                </CardHeader> */}
              </Card>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
