"use client";
import React, { FunctionComponent, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { CurrencyFormatter } from "./CurrencyFormatter";
import { Loader } from "./Loader";
import { Cart } from "./cart";

const API_URL = "https://dummyjson.com/products";



export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  image: string;
  quantity: number;
};

export interface CartProps {
  [productId: string]: Product;
}

export const Products: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal state
  const toggleModal = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  async function fetchData(url: string) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
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

  const addToCart = (product: Product): void => {
    product.quantity = 1;

    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }));
  };

  const isInCart = (productId: number): boolean => Object.keys(cart || {}).includes(productId.toString());

  if (error) {
    return <h3>An error occurred when fetching data. Please check the API and try again.</h3>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-12 gap-4 ml-10 mt-10">
      <div className="col-span-12 md:col-span-4">
        <div className="w-[350px] mx-auto my-1"> {/* Adjusted width */}
          <div className="text-3xl font-semibold mb-4">AC Service & Repair</div>
          <div className="bg-white shadow rounded-lg p-4">
            <div className="font-medium mb-4">Select a service</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <img src="https://placehold.co/128x128" alt="Placeholder image of a person servicing an AC unit" className="mb-2 mx-auto" /> {/* Larger image size */}
                <div className="text-sm">Service</div>
              </div>
              <div className="text-center">
                <img src="https://placehold.co/128x128" alt="Placeholder image of a person refilling gas in an AC unit" className="mb-2 mx-auto" /> {/* Larger image size */}
                <div className="text-sm">Repair & gas refill</div>
              </div>
              <div className="text-center">
                <img src="https://placehold.co/128x128" alt="Placeholder image of a person installing or uninstalling an AC unit" className="mb-2 mx-auto" /> {/* Larger image size */}
                <div className="text-sm">Install & uninstall</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="w-full bg-white shadow-lg rounded-lg overflow-hidden my-1">
              <div className="flex justify-center items-center w-full h-70 bg-white">
                <img className="object-cover" src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1710823009022-7427f2.jpeg" alt="A service person wearing a black cap and t-shirt with 'Urban Company' logo, servicing an AC unit, representing Power Saver AC Servicing." />
              </div>
              <div className="py-4 px-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Power Saver AC service</h2>
                <div className="flex items-center mt-4 text-gray-700">
                  <svg className="h-6 w-6 fill-current text-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                  <h1 className="px-2 text-sm">4.85 (204K reviews)</h1>
                </div>
                <div className="flex justify-between mt-3 item-center">
                  <h1 className="text-lg font-bold text-gray-700 md:text-xl">Next at ₹499 <span className="text-sm text-gray-500 line-through">₹599</span></h1>
                </div>

                <div className="mt-4">
                  <h1 className="text-xs text-gray-600">Advanced Foam-jet technology</h1>
                  <h1 className="text-xs text-gray-600">Deep jet cleaning of outdoor unit</h1>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a onClick={() => toggleModal(true)} href="#" className="text-blue-600 text-sm font-semibold">View details</a>
                  <div>
                    <button
                      disabled={isInCart(product.id)}
                      onClick={() => addToCart(product)}
                      className={`bg-black text-white rounded-md px-6 py-2 ${isInCart(product.id) ? "bg-gray-300 cursor-not-allowed" : ""
                        }  `}> {isInCart(product.id) ? "In Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="bg-purple-500 p-4 rounded-lg shadow-md mx-auto my-10" style={{ width: '1000px', maxHeight: '2000px', overflowY: 'auto' }}>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-purple-700 border-b-4 border-purple-700 pb-2">CLASSIC PACKAGE</h2>
              <div className="text-green-600 text-right font-semibold mt-2">₹ 3999</div>
              <ul className="list-inside mt-4">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  Full Interior Vacuum
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  Car Exterior wash
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  Alloys and tyres cleaning.
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  Dashboard & Door trims polish
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  Coolant Top Up
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  Windscreen wiper fluid
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  Batery Water Top up
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  Throttle Body Cleaning (Petrol)
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  Ac Filter Replacement
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  Air Filter Replacement
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  Engine oil replacement
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  75 point vehicle health check
                </li>
              </ul>
              <div className="flex justify-end mt-4">
                <button onClick={() => toggleModal(false)} className="bg-purple-700 text-white font-semibold px-4 py-2 rounded-md">Close</button>
              </div>
            </div>
          </div>
        </div>

      )}
    </div>
  );
};
