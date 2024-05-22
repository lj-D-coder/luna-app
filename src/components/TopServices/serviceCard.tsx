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

          <div className="absolute w-52 h-full bg-white/80 hover:bg-white/90 transition-colors duration-500 ease-in-out -right-1 p-2 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center text-center">
              <h1 className="mb-3 text-base font-extrabold leading-none text-slate-900">{service.title}</h1>
              <div className="text-lg text-slate-900">₹ {service.price}</div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <a

                href="#"
                className="text-blue-600 text-sm font-semibold"
              >
                View details
              </a>

            </div>
            <div className="w-full mt-4 flex justify-center">
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
