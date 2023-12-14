import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/Slider.css';


const CarouselSlider = ({ slides }) => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 1000, 
    responsive: [
      {
        breakpoint: 1000, 
        settings: {
          speed: 4000,  
          slidesToShow: 2, 
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
        
        },
      },
      {
        breakpoint: 800,
        settings: {
          speed: 6000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
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