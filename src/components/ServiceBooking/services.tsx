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
    return <h3>An error occurred when fetching data. Please check the API and try again.</h3>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="container mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-48 object-cover" src={product.thumbnail} alt={product.title} />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 truncate">{product.title}</h3>
              <p className="text-gray-600 mb-4">
                Price: <CurrencyFormatter amount={product.price} />
              </p>
              <button
                className={`w-full py-2 px-4 bg-black text-white rounded ${
                  isInCart(product.id) ? "bg-gray-300 cursor-not-allowed" : ""
                } hover:bg-gray-700 transition duration-300`}
                disabled={isInCart(product.id)}
                onClick={() => addToCart(product)}
              >
                {isInCart(product.id) ? "In Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
