"user client";
import React, { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import Image from "next/image";
import { CheckOutModal } from "../CheckOut";
import { useRouter } from "next/navigation";
import { BookingComplete } from "../CheckOut/success";

export interface CartProps {
  [serviceId: string]: service;
}

type service = {
  _id: string;
  title: string;
  serviceDetails: string;
  thumbnail: string;
  price: number;
  serviceCapacity: number;
};

interface ServiceCardProps {
  service: service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});

  const getServices = () => Object.values(cart || {});
  const discount = 0;
  const totalPrice =
    getServices().reduce((accumulator, service) => accumulator + service.price * service.serviceCapacity, 0) - discount;
  const productsCount: number = Object.keys(cart || {}).length;

  //checkout function
  const instantCheckout = (service: service): void => {
    service.serviceCapacity = 1;
    setCart((prevCart) => ({
      ...prevCart,
      [service._id]: service,
    }));
    setIsOpen(true);
  };

  const handleSuccess = (successState: boolean) => {
    setSuccess(successState);
  };

  // Applying page refresh after booking success
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  if (success) {
    const timer = setTimeout(() => {
      localStorage.clear();
      router.refresh();
      router.push("/");
    }, 3000); // *** remove this when payment gateway is integrated ****
  }

  return (
    <>
      <div className="w-full bg-gray-200/50 cursor-pointer relative card-hover-effects rounded-md">
        <div className="flex h-full">
          <div className="flex-none w-full relative m-1">
            <Image
              src={service.thumbnail}
              width={500}
              height={500}
              alt={service.title}
              className="w-full h-full object-cover rounded-md"
              loading="lazy"
            />
          </div>
          <div className="absolute w-52 h-full bg-white/45 hover:bg-white/90 transition-colors duration-500 ease-in-out -right-1 p-2">
            <div className="">
              <div className="">
                <div className="flex flex-wrap items-baseline">
                  <h1 className="w-full flex-none mb-3 text-base font-extrabold leading-none text-slate-900">{service.title}</h1>
                  <div className="flex-auto text-lg text-slate-900">₹ {service.price}</div>
                </div>
                <div className="flex items-start mt-2 border-b border-slate-200 overflow-auto">
                  <p className="line-clamp-3 text-sm font-sans text-slate-900">{service.serviceDetails}</p>
                </div>
              </div>
            </div>
          

          <div className="w-full bottom-0 right-10 flex justify-end space-x-4 text-sm font-medium p-2">
            <button
              onClick={() => instantCheckout(service)}
              className="w-full h-12 uppercase font-medium rounded-full border-2 border-sky-600 tracking-wider bg-transparent hover:bg-sky-200 text-black card-hover-effects"
              type="submit"
            >
              Book now
              </button>
              </div>
          </div>
        </div>
      </div>
      <CheckOutModal
        isOpen={isOpen}
        setOpen={setIsOpen}
        totalPrice={totalPrice}
        discount={discount}
        onSuccess={handleSuccess}
      />

      <BookingComplete openSuccess={success} setOpenSuccess={setSuccess} />
    </>
  );
};

export default ServiceCard;
