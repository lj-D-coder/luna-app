"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import Hero from "../Hero";
import { useRouter } from "next/navigation";


export type Category = {
  _id: string;
  categoryName: string;
  categoryLabel: string;
  categoryId: number;
  iconUrl: string;
  subCategory: Array<string>;
};

interface CategoryProps {
  categories: Category[];
  sliderData: [];
}

const IconGrid: React.FC<CategoryProps> = ({ categories, sliderData }) => {
  const router = useRouter();
  const [specialIndices] = useState([1]);
  const [categoryId, setCategoryId] = useState<string | null>(null);

  const handleClick = (id: string, categoryName: string) => {
    setCategoryId(id);
    sessionStorage.setItem("categoryId", id.toString());
    router.push(`/${categoryName}`);
  };


  return (
    <>
      <div className="w-screen block h-auto my-4 md:mt-20">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="w-96 md:w-[600px] self-center relative z-20 md:absolute p-4 md:p-0 md:pl-20">
            <h1 className="text-slate-900 text-center text-5xl mb-4">Hassle-free!</h1>
            <h1 className="box text-slate-700 text-center text-3xl mb-12">
              Doorstep professional services.
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mx-auto align-bottom">
              {categories.map((data, index) => (
                <div
                  key={index}
                  className="col-span-1 md:col-span-1 cursor-pointer flex flex-col items-center text-slate-900 hover:text-sky-400"
                >
                  <div
                    className={cn(
                      "w-[100px] h-[100px] md:w-[120px] md:h-[120px] card-hover-effects border-none shadow-none",
                      specialIndices.includes(index)
                    )}
                  >
                    <Image
                      src={data.iconUrl}
                      alt={data.categoryLabel}
                      fill
                      onClick={() => handleClick(data._id, data.categoryName)}
                    />
                  </div>
                  <div className="text-center mt-2 text-xs font-semibold">{data.categoryLabel}</div>{" "}
                  {/* Added text-center class */}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex flex-col">
            <div className="w-96 md:w-screen h-auto border-none shadow-none cursor-pointer">
              <Hero sliderData={sliderData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconGrid;
