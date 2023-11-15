import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
function Sidebar() {
  return (
    <div className="  bg-white px-4" style={{ width: "500px" }}>
      <div className="flex item-center justify-between py-5 border-b border-dinputBorder mb-2">
        <h2 className="font-semibold">11.11 Hot Seller</h2>
        <a className="text-blue-500 text-sm flex flex-row">
          <span>View All</span>
          <RiArrowDropRightLine size={20} color="blue" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
