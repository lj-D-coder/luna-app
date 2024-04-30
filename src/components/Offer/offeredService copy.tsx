"use client";
import { FunctionComponent, useEffect, useRef, useState } from "react";
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

export const OfferedServices: FunctionComponent = () => {

    
  const subCategoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const API_URL = `api/servicesUnderCategory/car-wash`;
    
    console.log("ashdkahsjkdhajshdhasjhdjagshjdgashjbdhjbsajd");
 
  const [services, setServices] = useState<ServiceMap[]>([]);
  const [servicesDataMap, setServicesDataMap] = useState<ServiceMap>({});
  const [error, setError] = useState(false);
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});
 
  


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
      <div className="block p-4 bg-white">
        <div className="bg-white overflow-hidden">
          {Object.keys(servicesDataMap).map((subCategory) => (
            <div key={subCategory} className="mb-8" ref={(el) => { subCategoryRefs.current[subCategory] = el; }}>
              <h2 className="text-2xl font-bold mb-4">
                {subCategory
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicesDataMap[subCategory].map((service) => (
                  <div key={service._id} className="border-2 border-neutral-200 shadow-md rounded-lg overflow-hidden">
                    <div className="flex justify-center items-center h-60">
                      <img className="object-cover w-full h-full" src={service.thumbnail} alt={service.title} />
                    </div>
                    <div className="p-2">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-bold text-gray-700 md:text-xl">Price at {service.price}</h3>
                      </div>
                      <div className="mb-2 h-10">
                        <p className="text-xs text-gray-600">{service.description}</p>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <a className="text-blue-600 text-sm font-semibold">
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
    </>
  );
};
