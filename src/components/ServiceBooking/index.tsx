import { Header } from "./header";
import { Cart } from "./cart";
import { FC } from "react";
import { Services } from "./Services";

interface ServiceBookingProps {
  categoryUrl: string;
}

const ServiceBooking: FC<ServiceBookingProps> = ({ categoryUrl }) => {
  return (
    <div className="w-full">
      <Header />
      <div className="grid grid-cols-12 mt-24 gap-4">
        <div className="col-span-12 md:col-span-9 lg:col-span-9">
          <Services categoryUrl={categoryUrl} />
        </div>
        <div className="col-span-12 md:col-span-3 lg:col-span-3">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default ServiceBooking;
