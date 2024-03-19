import React from "react";
import ServicesCard from "./ServicesCard";
import { Lamp } from "../Lamp";

const Services = () => {
  return (
    <>
    <Lamp />
    <div className="container mx-auto min-h-[500px] bg-transparent">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-20 pt-20 mx-10">
        <div className="col-span-2 md:col-span-4">
          <h1 className="text-5xl text-white tracking-widest pt-10 text-center">SERVICE SECTION</h1>
          <p className="text-xl text-white mt-5 tracking-[.25em] text-center">
            Hi the is the sub heading section of services
          </p><br />
        </div>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="w-auto hover:scale-105 ease-in duration-300">
              <ServicesCard />
            </div>
          ))};
        </div>
      </div>
      </>  
  );
};

export default Services;
