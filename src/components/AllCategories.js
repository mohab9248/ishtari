import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import categories from "../Backend/AllCat.json";
import Sidebar from "./Sidebar";

function AllCategories() {
  return (
    <div>
      <div className=" group  relative   border-r px-4 ms-10 border-dplaceHolder ">
        <div className="flex flex-row group-hover:text-red-700">
          <div>All Categories</div>
          <RiArrowDropDownLine
            size={25}
            color="black"
            className="group-hover:fill-red-700"
          />
        </div>
        <div className="  group-hover:block hidden ">
          <div className="absolute bg-gray-100 z-40 w-screen ">
            {categories.map((s) => {
              return (
                <div className=" container flex flex-row">
                  <div className="top-0  bg-gray-100 px-6 py-2">
                    <div id="first" className=" group flex  py-1 text-black ">
                      <img src={s.img} alt="img" width={30} height={30} />
                      <span className=" ml-3 font-light text-sm">
                        {s.title}
                      </span>
                      <div id="change">
                        <Sidebar />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCategories;
