"use client";
import { FunctionComponent, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

import { Quantifier, Operation } from "./Quantifier";
import { CartProps } from "./ServicesGrid";
import { TotalPrice } from "./TotalPrice";
import { usePathname } from "next/navigation";

import CartWidget from "./CartWidget";
import { CheckOutModal } from "../CheckOut";
import handleApplyCoupon from "@/lib/utils/couponHandler";
import { BookingComplete } from "../CheckOut/success";

export const Cart: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});
  const location = usePathname();

  const [coupon, setCoupon] = useState<string | null>(null);
  const [discount, setDiscount] = useState<number>(0);

  const handleApply = () => {
    if (coupon) {
      handleApplyCoupon(coupon, setDiscount);
    } else {
      alert("Please enter a coupon code");
    }
  };

  const handleRemoveCoupon = () => {
    setCoupon(null);
    setDiscount(0);
  };

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

  const totalPrice =
    getServices().reduce((accumulator, service) => accumulator + service.price * service.serviceCapacity, 0) - discount;
  const productsCount: number = Object.keys(cart || {}).length;

  return (
    <>
      <div className="w-full md:w-1/4 md:fixed md:right-0 py-3 pl-0 md:pl-4 pr-0 md:pr-6">
        <div className="bg-white shadow-lg rounded-lg overflow-y-auto max-h-[400px]">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold px-2">Cart</h2>
            <CartWidget productsCount={productsCount} />
          </div>
          <div className="grid grid-cols-1">
            {getServices().map((service) => (
              <div key={service._id} className="border-t mt-4 pt-4">
                <h3 className="font-medium text-gray-700 px-2">{service.title}</h3>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border rounded-md">
                    <Quantifier
                      removeProductCallback={() => handleRemoveProduct(service._id)}
                      serviceId={service._id}
                      handleUpdateQuantity={handleUpdateQuantity}
                    />
                  </div>
                  <span className="text-gray-900 font-semibold px-2">
                    ₹{(service.price * service.serviceCapacity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex border-2 mt-1 rounded">
          {discount <= 0 && (
            <>
              <h2 className="text-sm md:text-lg p-2 font-semibold">Coupon</h2>
              <input
                type="text"
                className="p-2 w-full text-sm md:text-base"
                placeholder="Enter coupon code"
                value={coupon || ""}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button
                className="px-2 text-blue-600 font-semibold border-l flex text-center items-center justify-center"
                onClick={handleApply}
              >
                Apply
              </button>
            </>
          )}
          {discount > 0 && (
            <>
              <div className="p-2 w-full border text-sm md:text-base border-gray-300 rounded">Discount of ₹{discount} is applied</div>
              <button
                className="px-1 text-blue-600 font-semibold border-l flex text-center items-center justify-center"
                onClick={handleRemoveCoupon}
              >
                Remove
              </button>
            </>
          )}
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
      <CheckOutModal isOpen={isOpen} setOpen={setIsOpen} />
      <BookingComplete openSuccess={success} setOpenSuccess={setSuccess} />
    </>
  );
};
