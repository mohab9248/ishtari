import React from "react";
import sliderData from "../Backend/Slider";

import Slider from "react-slick";

function HorBar() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <Slider className="px-8" {...settings}>
      {sliderData.map((s) => {
        return (
          <div className="hover:opacity-80 w-1/1 md:w-1/1">
            <a href="ishtari.com">
              <img src={s} alt="" />
            </a>
          </div>
        );
      })}
    </Slider>
  );
}

export default HorBar;
