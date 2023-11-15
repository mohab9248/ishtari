import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import nav from "../Backend/navbar.json";
import AllCategories from "./AllCategories";

function NavBar() {
  return (
    <div>
      <div
        className="hidden  lg:flex items-center text-base group-hover:text-red-700"
        style={{ minHeight: "48px" }}
      >
        <AllCategories />
        {nav.map((s) => {
          return (
            <div className="group  border-r border-dplaceHolder px-5 hover:text-red-700 cursor-pointer">
              <a href="ishtari.com">{s.title}</a>
              <div className="hidden group-hover:block h-auto absolute z-40 px-3 py-4 bg-gray-100">
                <div className="container">
                  <div className=" flex py-6 px-10  ">
                    <div className="top-0 w-48 bg-gray-100 ">
                      <a
                        href="ishtari.com"
                        className=" font-semibold mb-4 text-black"
                      >
                        {s.title}
                      </a>
                      {s.categories.map((res) => {
                        return (
                          <div className="py-1">
                            <a
                              className="block text-black text-sm py-2 hover:text-blue-700 "
                              href="ishtari.com"
                            >
                              {res}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex space-x-1 w-10/12 ml-10">
                      {s.image.map((res) => {
                        return (
                          <div className="p-0">
                            <div className=" cursor-pointer">
                              <img
                                src={res}
                                alt="img"
                                style={{ height: "100%", width: "100%" }}
                                height={400}
                                width={600}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="group  relative  border-r border-dplaceHolder px-4 hover:text-red-700 cursor-pointer">
          <a href="/home-kitchen/c=1084">Back To Stock</a>
          <div className="  absolute hidden h-auto"></div>
        </div>
        <div class="group  relative   px-4 hover:text-red-700 cursor-pointer">
          <a href="/home-kitchen/c=1084">New Arrivals</a>
          <div className="  absolute hidden h-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
