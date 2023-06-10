import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <main class="section_padding">
      <div class="flex items-center justify-between mt-[31px]">
        <div class="flex items-center">
          <span class="text-[25px] font-bold text-[#0078E7] leading-[38px]">
            DevShehzor
          </span>
        </div>
        <div class="hidden md:flex items-center justify-between gap-9 mr-[170px] text-[20px] leading-[30px] font-medium">
          <a class="hover:underline" href="#home">
            Home
          </a>
          <Link to="/ourwork">
            <a class="hover:underline" href="#works">
              Our Work
            </a>
          </Link>
          <a class="hover:underline" href="#services">
            Services
          </a>
        </div>
        <div>
          <button class="bg-white text-[#0078E7] font-bold text-[20px] leading-[30px] px-[23px] py-[9px] rounded-23 gap-[10px] shadow-sm">
            Get a Quote
          </button>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
