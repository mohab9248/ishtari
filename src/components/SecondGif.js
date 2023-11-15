import React from "react";
import image from "../assets/secondgif.webp";
function SecondGif() {
  return (
    <div className="flex -mx-4 flex-wrap justify-between">
      <div className="  false cursor-pointer flex justify-center p-[1px] hover:opacity-80 w-1/1 md:w-1/1">
        <span
          style={{
            boxsizing: "border-box",
            display: "inline-block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
            position: "relative",
            maxwidth: "100%",
          }}
        >
          <img href={image} alt="img" className="w-full max-w-full ms-10 " />
        </span>
      </div>
    </div>
  );
}

export default SecondGif;
