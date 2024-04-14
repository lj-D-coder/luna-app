"use client";
import { FunctionComponent, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

import { Quantifier, Operation } from "./Quantifier";
import { CartProps } from "./ServicesGrid";
import { TotalPrice } from "./TotalPrice";
import { usePathname } from "next/navigation";
import { Button, Drawer } from "antd";

import BookingCalender from "../Drawer/calender";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import FormComponent from "../Drawer/form";
import CartWidget from "./CartWidget";
import { Modal } from "../Modal";

export const Cart: FunctionComponent = () => {
  // const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [next, setNext] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});
  const location = usePathname();
  
  const handleCheckout = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleRemoveProduct = (serviceId: string): void => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[serviceId];
      return updatedCart;
    });
  };

  const handleUpdateQuantity = (serviceId: string, operation: Operation) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[serviceId]) {
        if (operation === "increase") {
          updatedCart[serviceId] = {
            ...updatedCart[serviceId],
            serviceCapacity: updatedCart[serviceId].serviceCapacity + 1,
          };
        } else if (operation === "decrease" && updatedCart[serviceId].serviceCapacity > 1) {
          updatedCart[serviceId] = {
            ...updatedCart[serviceId],
            serviceCapacity: updatedCart[serviceId].serviceCapacity - 1,
          };
        }
      }
      return updatedCart;
    });
  };

  const getServices = () => Object.values(cart || {});

  const totalPrice = getServices().reduce(
    (accumulator, service) => accumulator + service.price * service.serviceCapacity,
    0
  );
  const productsCount: number = Object.keys(cart || {}).length;

  return (
    <>
      <div className="md:fixed">

        <div className="bg-white shadow-lg rounded-lg p-6 overflow-y-auto max-h-[400px]">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Cart</h2>
            <CartWidget productsCount={productsCount} />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {getServices().map((service) => (
              <div key={service._id} className="border-t mt-4 pt-4">
                <h3 className="font-medium text-gray-700">{service.title}</h3>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border rounded-md">
                    <Quantifier
                      removeProductCallback={() => handleRemoveProduct(service._id)}
                      serviceId={service._id}
                      handleUpdateQuantity={handleUpdateQuantity}
                    />
                  </div>
                  <span className="text-gray-900 font-semibold">
                    ₹{(service.price * service.serviceCapacity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex border-2 mt-1 rounded">
          <input type="text" className="px-4 py-2 w-80" placeholder="GET50OFF" />
          <button className="px-1 text-blue-600 font-semibold border-l flex text-center items-center justify-center">
            Apply
          </button>
        </div>



        {totalPrice > 0 && (
          <div className="flex justify-between items-center mt-5">
            <span className="text-gray-900 font-semibold">
              <TotalPrice amount={totalPrice} />
            </span>
            <button
              onClick={handleCheckout}
              className="bg-purple-600 text-white rounded-md px-6 py-2 hover:purple-900 focus:outline-none focus:bg-purple-900"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
      <Modal isOpen={isOpen} setOpen={setIsOpen} />

      {/* <Drawer title="Basic Drawer" onClose={onClose} open={open}>
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
      </Drawer> */}
    </>
  );
};
