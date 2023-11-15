import React from "react";

function CategorySeparator(props) {
  return (
    <div>
      <div className="flex items-center justify-between  mb-3 mx-10">
        <h1 className="pr-semibold p-2 text-xl">{props.title}</h1>
        <div>
          <a>
            <h1 className="font-bold text-xs border px-2 py-1 cursor-pointer hover:opacity-80">
              VIEW ALL
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CategorySeparator;
