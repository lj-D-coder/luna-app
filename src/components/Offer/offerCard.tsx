"user client";
import React, { useState } from "react";
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
  offerDetails: string;
  thumbnail: string;
  price: number;
  serviceCapacity: number;
};

interface ServiceCardProps {
  service: service;
}

const OfferCard: React.FC<ServiceCardProps> = ({ service }) => {
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

  if (success) {
    const timer = setTimeout(() => {
      localStorage.clear();
      router.refresh();
      router.push("/");
    }, 3000);
  }

  return (
    <>
      <div className="w-full bg-gray-100 cursor-pointer relative card-hover-effects">
        <div className="flex h-full">
          <div className="flex-none w-full md:w-full relative m-1">
            <Image
              src={service.thumbnail}
              width={100}
              height={100}
              alt={service.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* This block is make hidden because of client */}

          {/* <div className="flex-auto flex flex-col justify-between"> */}
          <div className="hidden">
            <div className="p-2">
              <div className="flex flex-wrap items-baseline">
                <h1 className="w-full flex-none mb-3 text-lg leading-none text-slate-900">{service.title}</h1>
                <div className="flex-auto text-lg font-sans text-slate-900">₹ {service.price}</div>
              </div>
              <div className="flex items-start mt-2 border-b border-slate-200 overflow-auto">
                <p className="line-clamp-2 text-sm text-slate-500">{service.offerDetails}</p>
              </div>
            </div>
          </div>
        </div>

        {/* This block is make hidden because of client */}
        {/* <div className=" w-full absolute bottom-0 right-10 md:right-8 flex justify-end space-x-4 text-sm font-medium m-1 pb-2"> */}
        <div className="hidden">
          <button
            onClick={() => instantCheckout(service)}
            className="w-[40%] md:w-1/3 h-12 uppercase font-medium rounded-full border-2 border-sky-600 tracking-wider bg-transparent hover:bg-sky-200 text-black card-hover-effects"
            type="submit"
          >
            Book now
          </button>
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

export default OfferCard;
