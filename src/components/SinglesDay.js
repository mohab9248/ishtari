import React from "react";
import CategorySeparator from "./CategorySeparator";
import ProductsSlider from "./ProductsSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderData from "../Backend/Slider";
function SinglesDay() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div>
      <CategorySeparator title="SINGLE'S DAY DEALS" />

      <ProductsSlider />
    </div>
  );
}

export default SinglesDay;
