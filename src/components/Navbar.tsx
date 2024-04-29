import Image from "next/image";
import { logoblacktransparent } from "../assets/images/index";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-10 w-full h-[auto] bg-no-repeat bg-cover">
      <div className="container mx-auto mt-2 p-2">
        <div className="flex items-center justify-between md:h-[50px]">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logoblacktransparent} alt="Logo" width={140} height={100} className="mr-2" />
            </Link>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-lg font-semibold text-black hover:text-gray-900">Blog</a>
            <a href="#" className="text-lg font-semibold text-black hover:text-gray-900">Contact</a>
          </div>
          {/* <div className="md:hidden">
            <Image src={hamburger} alt="Hamburger" width={20} height={12} className="cursor-pointer" />
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
