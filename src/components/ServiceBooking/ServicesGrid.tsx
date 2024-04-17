"use client"
import React, { FC, useEffect, useRef, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

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
  serviceDetails?: string;
};

interface ServiceMap {
  [subcategory: string]: Service[];
}

export interface CartProps {
  [serviceId: string]: Service;
}

interface ServiceBookingProps {
  categoryUrl: string;
}

export const ServicesGrid: FC<ServiceBookingProps & { selectedSubcategory: string }> = ({
  categoryUrl,
  selectedSubcategory,
}) => {
  const subCategoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const API_URL = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/servicesUnderCategory/${categoryUrl}`;
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState<ServiceMap[]>([]);
  const [servicesDataMap, setServicesDataMap] = useState<ServiceMap>({});
  const [error, setError] = useState(false);
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceDetails, setSelectedServiceDetails] = useState<string | undefined>();
  const [scrollPosition, setScrollPosition] = useState<number>(0); // State to store scroll position

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

    // Save scroll position when modal opens
    if (isOpen) {
      setScrollPosition(window.scrollY);
    }
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

  useEffect(() => {
    // Restore scroll position when modal closes
    if (!isModalOpen) {
      window.scrollTo(0, scrollPosition);
    }
  }, [isModalOpen, scrollPosition]);

  useEffect(() => {
    // Scroll to the selected subcategory when it changes
    if (selectedSubcategory && subCategoryRefs.current[selectedSubcategory]) {
      subCategoryRefs.current[selectedSubcategory]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedSubcategory]);

  return (
    <>
      <div className="col-span-12 md:col-span-8">
        <div className="col-span-12 md:col-span-8">
          <div className="bg-white shadow-md rounded-md overflow-hidden p-5">
            {Object.keys(servicesDataMap).map((subCategory) => (
              <div key={subCategory} className="mb-8" ref={(el) => (subCategoryRefs.current[subCategory] = el)}>
                <h2 className="text-2xl font-bold mb-4">
                  {subCategory
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {servicesDataMap[subCategory].map((service) => (
                    <div key={service._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                      <div className="flex justify-center items-center h-60">
                        <img className="object-cover w-full h-full" src={service.thumbnail} alt={service.title} />
                      </div>
                      <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-bold text-gray-700 md:text-xl">Price at {service.price}</h3>
                        </div>
                        <div className="mb-2 h-10">
                          <p className="text-xs text-gray-600">{service.description}</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <a
                            onClick={() => toggleModal(true, service.serviceDetails)}
                            href="#"
                            className="text-blue-600 text-sm font-semibold"
                          >
                            View details
                          </a>
                          <button
                            onClick={() => addToCart(service)}
                            className={`bg-black text-white rounded-md px-6 py-2 ${isInCart(service._id) ? "bg-gray-300 cursor-not-allowed" : ""
                              }`}
                            disabled={isInCart(service._id)}
                          >
                            {isInCart(service._id) ? "In Cart" : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
                  selectedServiceDetails.split("\n").map((detail, index) => (
                    <li key={index}>{detail!.replace(/\\n/g, "")}</li>
                  ))}
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
