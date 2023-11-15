import React from "react";
import Slider from "react-slick";
import FirstList from "../Backend/Umbrella";
function Umbrela() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 2500,
  };
  return (
    <Slider className="mx-10 " {...settings}>
      {FirstList.map((s) => {
        return (
          <div className="rounded-full">
            <a href="ishtari">
              <img src={s} />
            </a>
          </div>
        );
      })}
    </Slider>
  );
}

export default Umbrela;
