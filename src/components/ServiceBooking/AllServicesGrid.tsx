import React, { FC, useEffect, useRef, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import Image from "next/image";

export type Service = {
  _id: string;
  title: string;
  price: number;
  rating: string;
  thumbnail: string;
  images: string[];
  description: string;
  subCategory: string;
  supportedModel: string[];
  serviceCapacity: number;
  serviceDetails: string;
  subCategoryId: string;
};

interface ServiceMap {
  [subcategory: string]: Service[];
}

export interface CartProps {
  [serviceId: string]: Service;
}

export const AllServices = () => {

  let categoryId = sessionStorage.getItem('categoryId');
  var API_URL = `api/servicesUnderCategory/${categoryId}`;
  const subCategoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [services, setServices] = useState<ServiceMap[]>([]);
  const [servicesDataMap, setServicesDataMap] = useState<ServiceMap>({});
  const [error, setError] = useState(false);
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceDetails, setSelectedServiceDetails] = useState<string | undefined>();

  const addToCart = (service: Service): void => {
    service.serviceCapacity = 1;
    setCart((prevCart) => ({
      ...prevCart,
      [service._id]: service,
    }));
  };

  const isInCart = (serviceId: string): boolean => Object.keys(cart || {}).includes(serviceId);

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  const toggleModal = (isOpen: boolean, serviceDetails?: string) => {
    setIsModalOpen(isOpen);
    setSelectedServiceDetails(serviceDetails);
  };


  async function fetchData(url: string) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const serviceMap: ServiceMap = {};
        data.services.forEach((service: Service) => {
          const subCategory = service.subCategory;
          if (!serviceMap[subCategory]) {
            serviceMap[subCategory] = [];
          }
          const existingServiceIndex = serviceMap[subCategory].findIndex(
            (existingService) => existingService._id === service._id
          );
          if (existingServiceIndex === -1) {
            serviceMap[subCategory].push(service);
          } else {
            serviceMap[subCategory][existingServiceIndex] = service;
          }
        });
        setServices(data.services);
        setServicesDataMap(serviceMap);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  }

  return (
    <>
      {/* <div className="block p-4 bg-white">
        <div className="bg-white overflow-hidden">
          {Object.keys(servicesDataMap).map((subCategory) => (
            <div key={subCategory} className="mb-4" ref={(el) => { subCategoryRefs.current[subCategory] = el; }}>
              <h2 className="text-2xl font-bold mb-2">
                {subCategory
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicesDataMap[subCategory].map((service) => (
                  <div key={service._id} className="border-2 border-neutral-200 shadow-md rounded-lg overflow-hidden">
                    <div className="flex justify-center items-center h-40">
                      <Image width={500} height={500} className="object-cover w-full h-full" src={service.thumbnail} alt={service.title} />
                    </div>
                    <div className="p-3">
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h2>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-md font-bold text-gray-700">Price at {service.price}</h3>
                          </div>
                          <button
                            onClick={() => addToCart(service)}
                            className={`bg-black h-10 text-white rounded-md px-4 py-1 ${isInCart(service._id) ? "bg-gray-300 cursor-not-allowed" : ""
                              }`}
                            disabled={isInCart(service._id)}
                          >
                            {isInCart(service._id) ? "In Cart" : "Add to Cart"}
                          </button></div>

                        <a
                          onClick={() => toggleModal(true, service.serviceDetails)}
                          href="#"
                          className="text-blue-600 text-sm font-semibold"
                        >
                          View details
                        </a>
                      </div>

                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="block p-6 bg-white">
        <div className="bg-white overflow-hidden">
          {Object.keys(servicesDataMap).map((subCategory) => (
            <div key={subCategory} className="mb-6">
              <h2 className="text-2xl font-bold mb-4">
                {subCategory
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicesDataMap[subCategory].map((service) => (
                  <div key={service._id} className="bg-white border-2 border-neutral-200 shadow-lg rounded-lg overflow-hidden">
                    <div className="relative flex justify-center items-center h-56 bg-white p-3">
                      <Image width={500} height={500} className="object-cover w-full h-full rounded-sm" src={service.thumbnail} alt={service.title} />
                    </div>
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
                      <p className="text-sm text-gray-600 mb-4">
                        {service.description || 'No description available'}
                      </p>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="mb-4">
                            <h3 className="text-lg font-bold text-gray-700">Price at ₹ {service.price}</h3>
                          </div>
                          <button
                            onClick={() => addToCart(service)}
                            className={`bg-black h-10 text-white rounded-full px-6 py-2 ${isInCart(service._id) ? "bg-gray-300 cursor-not-allowed" : ""
                              }`}
                            disabled={isInCart(service._id)}
                          >
                            {isInCart(service._id) ? "In Cart" : "Add to Cart"}
                          </button>
                        </div>
                        <a
                          onClick={() => toggleModal(true, service.serviceDetails)}
                          href="#"
                          className="text-blue-600 text-sm font-semibold"
                        >
                          View details
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75">
          <div
            className="bg-white p-4 rounded-lg shadow-lg relative"
            style={{
              maxHeight: "70vh", // Set max height to 70% of the viewport height
              overflowY: "auto", // Enable vertical scroll if content exceeds the height
              width: "500px",
              animation: "fadeIn 0.5s forwards",
            }}
          >
            <button
              onClick={() => toggleModal(false)}
              className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-white p-6">
              <div className="flex items-center mb-4"></div>
              <h2 className="text-2xl font-bold mb-4">About the service</h2>
              <ul className="list-disc ml-6">
                {selectedServiceDetails &&
                  selectedServiceDetails
                    .split("\n")
                    .map((detail, index) => <li key={index}>{detail!.replace(/\\n/g, "")}</li>)}
              </ul>
              <br />
              <div className="items-center text-center align-middle">
                <h3 className="text-red-600"> NOTE: Water and Electricity should be bear by the customer</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
