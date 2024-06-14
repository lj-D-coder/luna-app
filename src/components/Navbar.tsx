import Image from "next/image";
import { logoblacktransparent } from "../assets/images/index";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/solid";
import hamburger from "../assets/images/hamburger.svg";

const Navbar = () => {
  return (
    <nav className="w-screen h-20 absolute inset-x-0 top-0 border-2 border-b-gray-200 card-hover-effects z-50">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between md:h-[50px]">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logoblacktransparent} alt="Logo" width={140} height={100} className="mr-2 -mt-2" />
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="https://blog.lunanaanna.com/" className="text-lg font-semibold text-black hover:text-gray-900">Blog</a>
            <a href="#" className="text-lg font-semibold text-black hover:text-gray-900">PHONE : 7428775548</a>
          </div>
          <div className="md:hidden">
            <Image src={hamburger} alt="Hamburger" width={20} height={12} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
