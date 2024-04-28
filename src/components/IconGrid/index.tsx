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
      <div className="w-full h-screen grid grid-cols-1 bg-white">
        <Search placeholder="what services are you looking for ?" />
        <div className="flex flex-col md:flex-row items-center md:justify-between px-10 pt-20">
          <div className="w-96 md:w-[600px] mt-40 md:mt-0 h-[300px] self-center">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mx-auto">
              {categories.map((data, index) => (
                <div key={index} className="col-span-1 md:col-span-1 flex flex-col items-center hover:text-white">
                  <div
                    className={cn(
                      "w-[100px] h-[100px] card-hover-effects border-none shadow-none",
                      specialIndices.includes(index) && "w-24 h-24"
                    )}
                  >
                    <Image
                      src={data.iconUrl}
                      alt={data.categoryLabel}
                      fill
                      onClick={() => handleClick(data._id, data.categoryName)}
                    />
                  </div>
                  <div className="text-center mt-2">{data.categoryLabel}</div> {/* Added text-center class */}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center md:flex mt-10 md:items-start">
            <div className="w-96 md:w-[800px] md:h-auto card-hover-effects border-none shadow-none">
              <Hero sliderData={sliderData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconGrid;
