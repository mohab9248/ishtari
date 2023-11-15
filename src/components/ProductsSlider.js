import React from "react";
import sliderData from "../Backend/Slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider className="mx-8" {...settings}>
      {sliderData.map((s) => {
        return (
          <div className="hover:opacity-80 w-1/1 md:w-1/1">
            <a href="ishtari.com">
              <div className="relative">
                <div className="flex flex-col h-full md:w-auto bg-white text-black p-2.5 relative pb-2">
                  <div className=" h-full relative -mt-1.5 -mx-1.5 ">
                    <img src={s} alt="img" />
                  </div>
                  <div className="pt-3 flex flex-col w-full">
                    <div className="font-semibold text-black  h-9 mb-2">
                      <span className="text-black    mb-1 h-10 pr-semibold">
                        Name
                      </span>
                      <span className="text-black ml-1 md:text-thin font-light   mb-1 h-10 ">
                        Description of All Products
                      </span>
                    </div>
                    <div>
                      <div className="w-full flex justify-between">
                        <h1>Price</h1>
                        <div className="relative shadow shadow-gray-100 z-20 rounded-full px-2 h-6 w-9 pr-2 py-1">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="none"
                              d="M0 0h24v24H0zm18.31 6l-2.76 5z"
                            ></path>
                            <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="w-full flex justify-between">
                        <s className="text-gray-300">38$</s>
                        <div className="relative shadow shadow-gray-100 z-20 rounded-full text-green-500">
                          Off 50%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </Slider>
  );
}

export default ProductsSlider;
