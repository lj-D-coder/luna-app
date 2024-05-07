"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import Hero from "../Hero";
import Search from "../Search";
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
    sessionStorage.setItem('categoryId', id.toString());
    router.push(`/${categoryName}`);
  }

  return (
    <>
      <div className="w-full block h-auto md:h-screen bg-white">
      <Search propClassName="hidden md:block relative" placeholder="what services are you looking for ?" />
        <div className="flex flex-col lg:flex-row items-center lg:justify-between px-2 md:px-10">
        <Search propClassName="inline-block md:hidden relative mt-10" placeholder="what services are you looking for ?" />
          <div className="w-96 md:w-[600px] self-center">
            <h1 className="text-center text-6xl mb-4">Hassle-free!</h1>
            <h1 className="text-center text-3xl font-semibold tracking-widest mb-12">Doorstep professional services.</h1>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mx-auto">
              {categories.map((data, index) => (
                <div key={index} className="col-span-1 md:col-span-1 cursor-pointer flex flex-col items-center hover:text-sky-500">
                  <div
                    className={cn(
                      "w-[120px] h-[120px] card-hover-effects border-none shadow-none",
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
                  <div className="text-center font-medium mt-2">{data.categoryLabel}</div> {/* Added text-center class */}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center py-16 lg:flex lg:items-start">
            <div className="w-96 md:w-[600px] lg:w-[700px] 2xl:w-[800px] h-auto md:h-auto card-hover-effects border-none shadow-none">
              <Hero sliderData={sliderData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconGrid;
