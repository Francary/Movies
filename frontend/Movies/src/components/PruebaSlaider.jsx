import React from "react";
import Slider from "react-slick";

 const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container max-width">
      <Slider {...settings}>
      <img className="glide__slide carousel " src="/Img/harry-1.webp"/>
            <img className="glide__slide carousel " src="/Img/hermione-1.webp"/>
            <img className="glide__slide carousel " src="/Img/luna-1.webp"/>
            <img className="glide__slide carousel " src="/Img/snape-patronus-1.webp"/>
            <img className="glide__slide carousel " src="/Img/harry-1.webp"/>
            <img className="glide__slide carousel " src="/Img/hermione-1.webp"/>
            <img className="glide__slide carousel " src="/Img/luna-1.webp"/>
            <img className="glide__slide carousel " src="/Img/snape-patronus-1.webp"/>
      </Slider>
    </div>
  );
}

export  {
    SimpleSlider
}
