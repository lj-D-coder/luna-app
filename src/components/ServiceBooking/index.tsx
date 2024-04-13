// pages/cart.js
import { Header } from "./header";
import { Cart } from "./cart";
// import { Products } from "./products";
import Image from "next/image";
// import Navbar from "../Navbar";
import { FC } from 'react';
import { Services } from "./Services";

interface ServiceBookingProps {
  categoryUrl: string;
}

const ServiceBooking: FC<ServiceBookingProps> = ({ categoryUrl }) => {
  return (
    <div style={{
    }}>
      <Header />
      <div className="grid grid-cols-12 gap-4 m-5">
        <div className="col-span-12 md:col-span-9">
          <Services categoryUrl={categoryUrl} />
        </div>
        <div className="col-span-12 md:col-span-3 ">
          {/* <section className="p-4">
            <h1 className="text-3xl font-semibold mb-8 mt-2">Services we offer!!</h1>
            <img
              src="  https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216851653-cc8265.jpeg"
            ></img>
            <div className="w-full mx-auto mt-1">
            </div>
          </section> */}
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default ServiceBooking;

