"use client";
import { FC, useEffect, useState } from "react";
import { toProperCase } from "@/lib/utils/propercase";
import Image from "next/image";

interface SubCategoryProps {
  categoryUrl: string;
  onIconClick: (subCategory: string) => void;
}

export type SubCategory = {
  _id: string;
  categoryId: String;
  subCategoryName: string;
  subCategoryLabel: string;
  iconUrl: string;
};

export const SubCategory: FC<SubCategoryProps> = ({ categoryUrl, onIconClick }) => {
  console.log(categoryUrl);
  // const API_URL = `api/services/${categoryUrl}`;
  let categoryId = sessionStorage.getItem('categoryId');

  const API_URL = `api/services/${categoryId}`;
  const [isLoading, setIsLoading] = useState(true);
  const [subCategoryList, setSubCategory] = useState<SubCategory[]>([]);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  const toggleModal = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };

  async function fetchData(url: string) {
    try {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setSubCategory(data.subCategoryList);
        console.log(data.subCategoryList[0].subCategoryLabel);
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

  const categoryName = categoryUrl
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="block relative md:fixed w-full md:w-3/12 p-4">
      <h2 className="text-2xl font-bold mb-5 ">{categoryName} Service</h2>
      <div className="w-full h-auto rounded-lg py-4">
        <div className="font-medium mb-4 border-none">Select a service</div>
        <div className="grid grid-cols-3 gap-4 justify-items-stretch justify-content-center pt-4 w-full">
          {subCategoryList.map((subCategory, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => onIconClick(subCategory.subCategoryName)}
                className="w-full h-[100px] text-center rounded-lg shadow-md border border-gray-200 hover:border-gray-400 transition duration-300 flex flex-col justify-center items-center"
              >
                <Image
                  width={500}
                  height={500}
                  src={subCategory.iconUrl}
                  alt={`Placeholder image for ${subCategory.subCategoryName}`}
                  className="object-cover rounded-lg"
                  style={{ width: "100%", height: "100%" }} // Adjust height to fit image and text properly
                />
              </div>
              <span className="block mt-2 text-sm">{toProperCase(subCategory.subCategoryLabel)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
