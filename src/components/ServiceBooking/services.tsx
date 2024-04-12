"use client";
import { FunctionComponent, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { CurrencyFormatter } from "./CurrencyFormatter";
import { Loader } from "./Loader";
import { FC } from 'react';

export type Service = {
  _id: string;
  title: string;
  price: number;
  thumbnail: string;
  image: string;
  serviceCapacity: number;
};

export interface CartProps {
  [serviceId: string]: Service;
}


interface ServiceBookingProps {
  categoryUrl: string;
}

export const Services: FC<ServiceBookingProps> = ({ categoryUrl }) => {

  console.log("asasadsadasd")
  console.log(categoryUrl)
  const API_URL = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/services/${categoryUrl}`;
  // console.log(test_URL);
  // const API_URL = "https://dummyjson.com/services";
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState<Service[]>([]);
  const [error, setError] = useState(false);
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  async function fetchData(url: string) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setServices(data.services);
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

  const addToCart = (service: Service): void => {
    service.serviceCapacity = 1;

    setCart((prevCart) => ({
      ...prevCart,
      [service._id]: service,
    }));
  };

  const isInCart = (serviceId: number): boolean => Object.keys(cart || {}).includes(serviceId.toString());

  if (error) {
    return <h3>An error occurred when fetching data. Please check the API and try again.</h3>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="container mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-48 object-cover" src={service.thumbnail} alt={service.title} />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 truncate">{service.title}</h3>
              <p className="text-gray-600 mb-4">
                Price: <CurrencyFormatter amount={service.price} />
              </p>
              {/* <button
                className={`w-full py-2 px-4 bg-black text-white rounded ${
                  isInCart(service._id) ? "bg-gray-300 cursor-not-allowed" : ""
                } hover:bg-gray-700 transition duration-300`}
                disabled={isInCart(service._id)}
                onClick={() => addToCart(service)}
              >
                {isInCart(service._id) ? "In Cart" : "Add to Cart"}
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
