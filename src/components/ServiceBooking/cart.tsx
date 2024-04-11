"use client";
import { FunctionComponent, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

import { Quantifier, Operation } from "./Quantifier";
import { CartProps } from "./products";
import { TotalPrice } from "./TotalPrice";
import { usePathname } from "next/navigation";
import { Button, Drawer } from "antd";

import BookingCalender from "../Drawer/calender";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import FormComponent from "../Drawer/form";

export const Cart: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [next, setNext] = useState(false);
  const [success, setSuccess] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const handleCheckout = () => {
    console.log("Checkout clicked. Cart details:", cart);
    console.log(totalPrice);
    setOpen(true);
  };

  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});
  const location = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleRemoveProduct = (productId: number): void => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  const handleUpdateQuantity = (productId: number, operation: Operation) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        if (operation === "increase") {
          updatedCart[productId] = { ...updatedCart[productId], quantity: updatedCart[productId].quantity + 1 };
        } else if (operation === "decrease" && updatedCart[productId].quantity > 1) {
          updatedCart[productId] = { ...updatedCart[productId], quantity: updatedCart[productId].quantity - 1 };
        }
      }
      return updatedCart;
    });
  };

  const getProducts = () => Object.values(cart || {});

  const totalPrice = getProducts().reduce((accumulator, product) => accumulator + product.price * product.quantity, 0);

  return (
    <section className="p-4 mt-10 relative">
      <h1 className="text-3xl font-semibold mb-8">Cart</h1>

      <div className="grid grid-cols-1 gap-4">
        {getProducts().map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden">
            <div className="flex p-4 border-b">
              <img className="w-20 h-20 object-cover mr-4" src={product.thumbnail} alt={product.title} />
              <div className="flex-grow">
                <h3 className="text-blue-600 font-bold text-lg mb-1">{product.title}</h3>
                <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
              </div>
              <Quantifier
                removeProductCallback={() => handleRemoveProduct(product.id)}
                productId={product.id}
                handleUpdateQuantity={handleUpdateQuantity}
              />
            </div>
            <div className="p-4">
              <p className="text-gray-600">
                Total: <span className="font-semibold">${(product.price * product.quantity).toFixed(2)}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <TotalPrice amount={totalPrice} />
      {totalPrice > 0 && (
        <div className="mt-6 flex justify-center z-50">
          <button
            onClick={handleCheckout}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Checkout
          </button>
        </div>
      )}

      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        {!success && (
          <BookingCalender
            open={open}
            next={next}
            setNext={setNext}
            setSelectedDate={setSelectedDate}
            setSelectedTime={setSelectedTime}
          />
        )}
        {next && (
          <FormComponent
            success={success}
            setSuccess={setSuccess}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
          />
        )}
      </Drawer>
    </section>
  );
};
