import React from "react";
import Slider from "react-slick";


export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="{`$.{process.env.PUBILC_URL}/public/lawn-mower-2127637_1280.jpg`}" alt="bilde"/>
        
      </div>
      <div>
        <h1>2</h1>
      </div>
      
      
      
      
    </Slider>
  );
}

console.log(Slider)