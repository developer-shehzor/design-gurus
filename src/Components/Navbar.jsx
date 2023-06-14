import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <main class="md:section_padding">
      <div class="md:flex md:items-center md:justify-between md:mt-[31px]">
        <div class="flex items-center justify-between ml-[15px] md:ml-[0px] mr-[15px] md:mr-[0px] py-5 md:py-0 px-6 md:px-0">
          <div>
            <span class="text-[22px] md:text-[25px] font-bold text-[#0078E7] leading-[38px]">
              DevShehzor
            </span>
          </div>

          
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 0.5H22.5V3.66667H0.5V0.5ZM6 8.41667H22.5V11.5833H6V8.41667ZM12.875 16.3333H22.5V19.5H12.875V16.3333Z"
                    fill="black"
                  />
                </svg>
              )}
            </button>
        </div>
        <div class={`${
          isMenuOpen ? "block" : "hidden"
        } mt-4 md:mt-0 flex flex-col justify-start items-center md:flex-row md:flex md:items-center md:justify-between md:gap-9 md:mr-[170px] md:text-[20px] md:leading-[30px] font-medium`}>
         
          <a class="hover:underline" href="#home"  className={`block py-2 px-4 text-black hover:text-gray-900 hover:underline ${
                isMenuOpen ? "bg-blue-500 w-[78%] text-white" : ""
              }`}
              onClick={closeMenu}>
            Home
          </a>
          
            <a class="hover:underline" href="#works" className={`block py-2 px-4 text-black hover:text-gray-900 hover:underline ${
                isMenuOpen ? "bg-blue-500 w-[78%] text-white mt-[0.5rem] mb-[0.5rem]" : ""
              }`}
              onClick={closeMenu}>
              Our Work
            </a>
          
          <a class="hover:underline" href="#services"  className={`block py-2 px-4 text-black hover:text-gray-900 hover:underline ${
                isMenuOpen ? "bg-blue-500 w-[78%] text-white" : ""
              }`}>
            Services
          </a>
  
        </div>
        <div>
          <button class="hidden md:flex bg-white text-[#0078E7] font-bold text-[20px] leading-[30px] px-[23px] py-[9px] rounded-23 gap-[10px] shadow-sm">
            Get a Quote
          </button>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
