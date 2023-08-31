import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/Slider.css';


const CarouselSlider = ({ slides }) => {
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 450,
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 5000, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            {slide.content}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;