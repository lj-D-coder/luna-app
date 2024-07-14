"use client";
import { FC, useState } from "react";
import { SubCategory } from "./SubCategoryGrid";
import { ServicesGrid } from "./ServicesGrid";
import { AllServices } from "./AllServicesGrid";

interface ServiceBookingProps {
  categoryUrl: string;
}

export const Services: FC<ServiceBookingProps> = ({ categoryUrl }) => {

  const [subCategoryId, setSubCategoryId] = useState<string | null>("");

  const handleIconClick = (newSubCategoryId: string) => {
  setSubCategoryId(null);
  setTimeout(() => setSubCategoryId(newSubCategoryId), 0);
};

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-4">
        <SubCategory onIconClick={handleIconClick} categoryUrl={categoryUrl} />
      </div>
      <div className="col-span-12 md:col-span-8">
      {subCategoryId ? <ServicesGrid subCategoryId={subCategoryId} /> : <AllServices categoryUrl={categoryUrl}/>}
      </div>
    </div>
  );
};
