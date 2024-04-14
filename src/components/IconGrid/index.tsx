"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import Hero from "../Hero";
import Search from "../Search";
import Link from "next/link";
import { Loader } from "./Loader";

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
  const [specialIndices] = useState([1]);
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11), rgba(14, 165, 233, 0.41), rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4))",
        }}
        className="w-full h-screen grid grid-cols-1"
      >
        <Search placeholder="Search for area, street name, landmark..." />
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
                    <Link href={`/${data.categoryName}`}>
                      <Image src={data.iconUrl} alt={data.categoryLabel} fill />
                    </Link>
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
