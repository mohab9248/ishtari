import React, { useState } from "react";
import Lebanon from "../assets/Lebanon.png";
import Ghana from "../assets/Ghana.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
function Country() {
  const [clicked, setClicked] = useState(1);
  const Handleclick = () => {
    if (clicked)
      return <RiArrowDropDownLine size={25} style={{ color: "black" }} />;

    return (
      <RiArrowDropDownLine
        size={25}
        style={{ color: "black" }}
        className="icon icon-down-dir transition-all mobile:block transform rotate-180"
      />
    );
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          onClick={() => {
            setClicked(clicked === 0 ? 1 : 0);
          }}
          className=" dropdown-toggle px-1 text-s leading-tight transition duration-150 ease-in-out flex items-center whitespace-nowrap"
        >
          <div className=" flex  p-1 sm:p-3">
            <img src={Lebanon} className="w-7 h-5 " alt="lebanon" />
            <span class="ml-2  mobile:block"> Lebanon</span>
          </div>
          {Handleclick()}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="dropdown-menu min-w-max absolute right-0 bg-white text-base z-50 float-left py-3 px-3 list-none text-left rounded-sm shadow-lg">
          <div className="py-1">
            <Menu.Item>
              <a className="flex py-3 pl-2 pr-3" href="ishtari.com">
                <div className=" flex  p-1 sm:p-3">
                  <img src={Lebanon} className="w-7 h-5 " alt="lebanon" />
                  <span class="ml-2  mobile:block"> Lebanon</span>
                </div>
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className="flex py-3 pl-2 pr-3" href="ishtari.com">
                <div className=" flex  p-1 sm:p-3">
                  <img src={Ghana} className="w-7 h-5 " alt="Ghana" />
                  <span class="ml-2  mobile:block">Ghana</span>
                </div>
              </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Country;
