"use client";
import { FC, SetStateAction, useEffect, useState } from "react";
import { SubCategory } from "./SubCategoryGrid";
import { ServicesGrid } from "./ServicesGrid";

interface ServiceBookingProps {
  categoryUrl: string;
}

export const Services: FC<ServiceBookingProps> = ({ categoryUrl }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleIconClick = (subCategory: string) => {
    setSelectedSubcategory(subCategory);
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-4">
        <SubCategory onIconClick={handleIconClick} categoryUrl={categoryUrl} />
      </div>
      <div className="col-span-12 md:col-span-8">
        <ServicesGrid selectedSubcategory={selectedSubcategory} categoryUrl={categoryUrl} />
      </div>
    </div>
  );
};
