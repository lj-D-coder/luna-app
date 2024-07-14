"use client"
import { useState } from "react";
import Search from "@/components/Search";
import { logoNavbar } from "../assets/images/index";

export default () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "About Us", path: "/about" },
    { title: "Blog", path: "https://blog.lunanaanna.com/" },
  ];

  return (
    <nav className="bg-white w-full h-auto md:h-0 border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-2">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/">
            <img src={ logoNavbar.src } width={120} height={50} alt="logo" />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 12h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <Search
            propClassName="w-auto lg:w-[850px] hidden md:block mt-10"
            placeholder="what services are you looking for ?"
          />

        <div className={`flex-1 justify-end pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"}`}>
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0 whitespace-nowrap">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
            <li>
              <a
                href="/contact"
                className="py-3 px-2 md:px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow whitespace-nowrap"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
