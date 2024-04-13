
"use client"
import { FC, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Loader } from "./Loader";
import Service from "@/app/(models)/Service";

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


export const ServicesGrid: FC<ServiceBookingProps> = ({ categoryUrl }) => {

    console.log(categoryUrl);
    const API_URL = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/servicesUnderCategory/${categoryUrl}`;
    const [isLoading, setIsLoading] = useState(true);
    const [services, setServices] = useState<Service[]>([]);
    const [error, setError] = useState(false);
    const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addToCart = (service: Service): void => {
        service.serviceCapacity = 1;
        setCart((prevCart) => ({
            ...prevCart,
            [service._id]: service,
        }));
    };

    const isInCart = (serviceId: string): boolean =>
        Object.keys(cart || {}).includes(serviceId);



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
                setServices(data.services);
                console.log(services);
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

    return (
        <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {services.map((service) => (
                    <div key={service._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="flex justify-center items-center h-60">
                            <img
                                className="object-cover w-full h-full"
                                src={service.thumbnail}
                                alt={service.title}
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
                            {/* <div className="flex items-center text-gray-700 mb-2">
                  <svg
                    className="h-5 w-5 fill-current text-blue-500 mr-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                  <span className="text-sm">4.85 (204K reviews)</span>
                </div> */}
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-bold text-gray-700 md:text-xl">Price at {service.price}</h3>
                            </div>
                            <div className="mb-2 h-10">
                                <p className="text-xs text-gray-600">{service.description}</p>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <a onClick={() => toggleModal(true)} href="#" className="text-blue-600 text-sm font-semibold">View details</a>
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
    );
}
