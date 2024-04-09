"use client";
import { FunctionComponent, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

import { CurrencyFormatter } from "./CurrencyFormatter";
import { Loader } from "./Loader";

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
    return <h3 className="">An error occurred when fetching data. Please check the API and try again.</h3>;
  }

  if (isLoading) {
    return (
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Loader />;
      </div>
    )
    
  }

  return (
    <section className="p-4 mt-32">
      <h1>Products</h1>

      <div className="flex flex-wrap justify-between">
        {products.map((product) => (
          <div className="xs:flex-1 sm:flex-1/2 md:flex-1/3 mb-20 text-center" key={product.id}>
            <img className="max-w-12 h-auto m-2.5" src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>
              Price: <CurrencyFormatter amount={product.price} />
            </p>
            <button
              className={`p-2 bg-blue-500 text-white rounded ${
                isInCart(product.id) ? "bg-gray-300 cursor-not-allowed" : ""
              }`}
              disabled={isInCart(product.id)}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
