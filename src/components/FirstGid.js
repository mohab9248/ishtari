import React from "react";

function FirstGid() {
  return (
    <div className="flex -mx-4 flex-wrap justify-between">
      <div
        className="  false cursor-pointer flex justify-center p-[1px] hover:opacity-80 w-1/1 md:w-1/1"
        style={{ width: "unset" }}
      >
        <a className="relative" href="ishtari.com">
          <span>
            <img
              src="https://www.ishtari.com/image/data/system_banner/10000/2800/2752/web11-2.gif"
              alt="img"
              className="w-full max-w-full ms-10 "
              style={{
                borderRadius: 20,
              }}
            />
          </span>
        </a>
      </div>
    </div>
  );
}

export default FirstGid;
