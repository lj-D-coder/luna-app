"use client"
import { FC, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Loader } from "./Loader";
import { SubCategory } from "./SubCategoryGrid";
import { ServicesGrid } from "./ServicesGrid";

export type Service = {
  _id: string;
  title: string;
  price: number;
  thumbnail: string;
  image: string;
  description: String,
  serviceCapacity: number;
};

export interface CartProps {
  [serviceId: string]: Service;
}

interface ServiceBookingProps {
  categoryUrl: string;
}

export const Services: FC<ServiceBookingProps> = ({ categoryUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };



  return (
    <div className="grid grid-cols-12">
      <SubCategory categoryUrl={categoryUrl} />
      <ServicesGrid categoryUrl={categoryUrl} />
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-4 rounded-lg shadow-lg relative" style={{ height: '700px', width: '500px', animation: 'fadeIn 0.5s forwards' }}>
            <button onClick={() => toggleModal(false)} className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-white p-6">
              <h1 className="text-3xl font-bold mb-2">Power Saver AC service</h1>
              <div className="flex items-center mb-4"></div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border p-4 rounded-lg">
                  <h2 className="text-xl font-semibold">Split AC</h2>
                  <div className="flex items-center my-2">
                    <span className="text-yellow-400 mr-2">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-gray-600">4.85 (204K)</span>
                  </div>
                  <p className="text-gray-800 font-semibold">₹669</p>
                  <p className="text-gray-600 mb-4">45 mins</p>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg">Add</button>
                </div>
                <div className="border p-4 rounded-lg">
                  <h2 className="text-xl font-semibold">Window AC</h2>
                  <div className="flex items-center my-2">
                    <span className="text-yellow-400 mr-2">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-gray-600">4.83 (44.4K)</span>
                  </div>
                  <p className="text-gray-800 font-semibold">₹599</p>
                  <p className="text-gray-600 mb-4">45 mins</p>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg">Add</button>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">About the service</h2>
              <ul className="list-none">
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>Advanced Foam-jet cleaning of indoor unit</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>Thorough cleaning of outdoor unit</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>Final checks & clean-up</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      )}
    </div>
  );
};
