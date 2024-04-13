"use client"
import { FC, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Loader } from "./Loader";

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

  console.log(categoryUrl);
  const API_URL = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/services/${categoryUrl}`;
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState<Service[]>([]);
  const [error, setError] = useState(false);
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});
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

  const isInCart = (serviceId: string): boolean =>
    Object.keys(cart || {}).includes(serviceId);

  if (error) {
    return <h3>An error occurred when fetching data. Please check the API and try again.</h3>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-12">
      {/* Left Side */}
      <div className="col-span-12 md:col-span-4">
        <div className="w-full md:w-[350px] mx-auto my-1">
          <div className="text-3xl font-semibold mb-4">{categoryUrl.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} Service</div>
          <div className="bg-white shadow rounded-lg p-4">
            <div className="font-medium mb-4">Select a service</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <img src="https://placehold.co/128x128" alt="Placeholder image of a person servicing an AC unit" className="mb-2 mx-auto" />
                <div className="text-sm">Service</div>
              </div>
              <div className="text-center">
                <img src="https://placehold.co/128x128" alt="Placeholder image of a person refilling gas in an AC unit" className="mb-2 mx-auto" />
                <div className="text-sm">Repair & gas refill</div>
              </div>
              <div className="text-center">
                <img src="https://placehold.co/128x128" alt="Placeholder image of a person installing or uninstalling an AC unit" className="mb-2 mx-auto" />
                <div className="text-sm">Install & uninstall</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="col-span-12 md:col-span-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
