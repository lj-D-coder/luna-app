import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface cardData {
  id: number;
  title: string;
  url: string;
}

interface OfferCardProps {
  offerData: cardData;
}

const OfferCard: React.FC<OfferCardProps> = ({ offerData }) => {
  return (
    <div className="w-full bg-gray-100 cursor-pointer relative card-hover-effects">
      <div className="flex h-full">
        <div className="flex-none w-40 relative m-1">
          <Image
            src={offerData.url}
            width={100}
            height={100}
            alt={offerData.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex-auto flex flex-col justify-between">
          <div className="p-2">
            <div className="flex flex-wrap items-baseline">
              <h1 className="w-full flex-none mb-3 text-lg leading-none text-slate-900">
                Car Wash Offer Car 
              </h1>
              <div className="flex-auto text-lg font-sans text-slate-900">₹ 350.00</div>
            </div>
            <div className="flex items-start mt-2 border-b border-slate-200 overflow-auto">
              <p className="text-sm text-slate-500">
                Free shipping on all continental.Free shipping on 
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glow-on-hover:focus,
        .glow-on-hover:hover {
          text-shadow: 0 0 30px #ffffff;
        }
      `}</style>

      <div className="w-full absolute bottom-0 right-0 flex justify-end space-x-4 text-sm font-medium m-1">
        <button
          className="w-[40%] h-12 uppercase font-medium tracking-wider bg-slate-900 text-white glow-on-hover card-hover-effects"
          type="submit"
        >
          Book now
        </button>
        <button
          className="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200 glow-on-hover card-hover-effects"
          type="button"
        >
          <ShoppingCartIcon className="h-[28px] w-[28px] text-gray-900" />
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
