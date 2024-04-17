"use client";
import Navbar from "../Navbar";

export const Header = () => {
  return (
    <div className="w-full bg-white fixed h-[100px] flex items-center justify-between top-0 left-0">
      <Navbar />
    </div>
  );
};
