"use client";
import { FC, useEffect, useState } from "react";
import { Loader } from "./Loader";
import { toProperCase } from "@/lib/utils/propercase";

interface SubCategoryProps {
  categoryUrl: string;
  onIconClick: (subCategory: string) => void;
}

export type SubCategory = {
  _id: string;
  parentCategoryName: String;
  parentCategoryId: String;
  subCategoryId: Number;
  subCategoryName: string;
  subcategoryLabel: string;
  iconUrl: string;
};

export const SubCategory: FC<SubCategoryProps> = ({ categoryUrl, onIconClick }) => {
  console.log(categoryUrl);
  const API_URL = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/services/${categoryUrl}`;
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
        console.log(data);
        setSubCategory(data.subCategoryList);
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
    <div className="col-span-12 md:col-span-4 ">
      <h2 className="text-2xl font-bold mb-5 md:fixed">{categoryName} Service</h2>
      <div className="w-[350px] h-[400px] md:fixed md:top-[130px]">
        <div className="h-auto bg-white shadow rounded-lg p-4">
          <div className="font-medium mb-4">Select a service</div>
          <div className="grid grid-cols-3 gap-4">
            {subCategoryList.map((subCategory, index) => (
              <div className="items-center text-center">
                <div
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => onIconClick(subCategory.subCategoryName)}
                  className="w-[100px] h-[100px] text-center px-2 py-5 rounded-lg shadow-md border border-gray-200 hover:border-gray-400 transition duration-300 flex flex-col justify-center items-center"
                >
                  <img
                    src={subCategory.iconUrl}
                    alt={`Placeholder image for ${subCategory.subCategoryName}`}
                    className="object-cover mt-2 rounded-lg"
                    style={{ width: "100%", height: "80%" }} // Adjust height to fit image and text properly
                  />
                </div>
                <span className="block mt-2 text-sm">{toProperCase(subCategory.subCategoryName)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
