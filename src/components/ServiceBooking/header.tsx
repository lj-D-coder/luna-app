"use client";
import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import Image from "next/image";

import logo from "@/assets/images/Luna_Naanna_logo.png";
import { CartWidget } from "./CartWidget";
import { CartProps } from "../productBuying/products";
import { logoblack, logoblacktransparent, lunnaLogo2 } from "@/assets/images";
import Navbar from "../Navbar";

export const Header: FunctionComponent = () => {
  const [cart] = useLocalStorageState<CartProps>("cart", {});
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const productsCount: number = Object.keys(cart || {}).length;

  return (
    <header
      className="w-full h-[70px] flex items-center justify-between z-10 top-0 left-0">
      {/* <div>
        <Link href="/">
          <Image src={logoblacktransparent} className="w-32 ml-20" alt="Shopping Cart Application" />
        </Link>
      </div>
      <div>
        <CartWidget productsCount={productsCount} />
      </div> */}

      <Navbar />
    </header>
  );
};
