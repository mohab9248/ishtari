import React from "react";
import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";
import Country from "./Country";

function Header() {
  return (
    <div>
      <div className="flex items-center justify-between px-[50px] py-5 h-22 container">
        <div className="flex items-center">
          <button className="lg:hidden">
            <FaBars size={20} style={{ color: "black" }} />
          </button>
          <a
            className="header-logo flex justify-start md:justify-center lg:justify-start"
            href="ishtari.com"
          >
            <img
              className="mobile:hidden"
              src="https://www.ishtari.com/images/logo/logo-redd.png"
              width="150"
              height="32"
              alt="ishtari-logo"
            />
            <img
              className="hidden mobile:block"
              src="https://www.ishtari.com/images/logo/logo-dblack2.png"
              width="96"
              height="20"
              alt="ishtari-logo"
            />
          </a>
        </div>
        <div className="flex justify-end items-center flex-1">
          <div className="relative flex justify-center lg:flex-grow bg-dsearchGrey">
            <input
              type="text"
              placeholder="What are you looking for?"
              autocomplete="off"
              className="bg-gray-100 hidden lg:block rounded-sm h-11  w-4/5  outline-none p-4 bg-dsearchGrey "
              id="searchInput"
              value=""
            />
            <BiSearch
              size={20}
              style={{ color: "black" }}
              className="block lg:hidden icon icon-search text-dgreyBlack text-2xl"
            />
          </div>
          <div className="flex  items-center">
            <div className="flex justify-center lg:border-r lg:border-dplaceHolder md:mr-3">
              <div>
                <Country />
              </div>
            </div>
            <div className="relative">
              <div className="hidden xl:block lg:block">
                <div className="lg:border-r lg:border-dplaceHolder font-semibold text-base flex items-center px-3 md:pr-5 cursor-pointer hover:opacity-80 relative">
                  <span>Sign In</span>
                  <GoPerson className="ml-1 w-5 h-5" color="black" />
                </div>
              </div>
            </div>
            <a
              className=" font-semibold text-base flex items-center pl-1.5 pr-1 sm:pl-3 sm:pr-6 cursor-pointer hover:opacity-80 relative"
              href="Cart"
            >
              <span class="hidden lg:block ">Cart</span>
              <AiOutlineShopping
                className="ml-1 w-5.5 h-5.5 lg:w-5 lg:h-6"
                color="black"
              />
              <span className="w-5 h-5  bg-dbase flex text-white items-center justify-center rounded-full text-xs absolute sm:right-2 -top-1.5 border border-white  mobile:mr-1 bg-red-600">
                <span>
                  <span>0</span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
