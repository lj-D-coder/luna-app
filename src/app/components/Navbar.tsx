// components/Navbar.js
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/hamburger.svg";

const Navbar = () => {
  return (
    <nav className="absolute z-10 w-full h-[auto] bg-gray-100 bg-no-repeat bg-cover opacity-70">
    {/* </nav><nav className="h-[auto] bg-[url(./assets/images/nav-bg.svg)] bg-[100% 100%] bg-no-repeat bg-cover opacity-70">
    <nav className="h-[auto] lg:h-[250px] bg-[url(./assets/images/nav-bg.svg)] bg-[100% 100%] lg:bg-[url(./assets/images/nav-bg-big.svg)] bg-no-repeat bg-cover lg:bg-contain"> */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between md:h-[50px]">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              width={21}
              height={23}
              className="mr-2"
            />
            <div className="text-black font-semibold text-lg">Luna Nanna</div>
          </div>
          <div className="hidden md:flex space-x-4">
            {/* Add your navigation links here */}
            {/* <a href="#" className="text-black hover:text-gray-300">Home</a>
            <a href="#" className="text-black hover:text-gray-300">About</a>
            <a href="#" className="text-black hover:text-gray-300">Services</a> */}
            {/* ... more links */}
          </div>
          <div className="md:hidden">
            <Image
              src={hamburger}
              alt="Hamburger"
              width={20}
              height={12}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
