"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";

import { carwash, accleaning, carservice, homecleaning, phoneRepair, sofaCleaning } from "@/assets/images";
import Image from "next/image";
import Hero from "../Hero";
import Search from "../Search";
import Link from "next/link";
import { Loader } from "./Loader";
import { json } from "stream/consumers";

export type Category = {
  _id: string;
  categoryName: string;
  categoryLabel: string;
  categoryId: number;
  iconUrl: string;
  subCategory: Array<string>;
};

const IconGrid = () => {
  const API_URL = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/category`;
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [specialIndices] = useState([1]);

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  async function fetchData(url: string) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCategories(data.categoryItem);
        setIsLoading(false);
      } else {
        setError(true);
        setIsLoading(false);
      }
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  }

  if (error) {
    return <h3>An error occurred when fetching data. Please check the API and try again.</h3>;
  }

  if (isLoading) {
    return <Loader />;
  }

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
              <Hero />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconGrid;
