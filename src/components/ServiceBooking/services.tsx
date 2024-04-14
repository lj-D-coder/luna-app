"use client"
import { FC, SetStateAction, useEffect, useState } from "react";
import { SubCategory } from "./SubCategoryGrid";
import { ServicesGrid } from "./ServicesGrid";



interface ServiceBookingProps {
  categoryUrl: string;
}

export const Services: FC<ServiceBookingProps> = ({ categoryUrl }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const handleIconClick = (subCategory: string) => {
    console.log(subCategory);
    setSelectedSubcategory(subCategory);
  };

  return (

    <div className="grid grid-cols-12">
      <SubCategory onIconClick={handleIconClick} categoryUrl={categoryUrl} />
      <ServicesGrid selectedSubcategory={selectedSubcategory} categoryUrl={categoryUrl} />
      {/* Modal */}
    </div>
  );
};
