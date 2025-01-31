import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import acer_logo from "../assets/logos/acer_logo.webp";
import asus_logo from "../assets/logos/asus_logo.webp";
import dell_logo from "../assets/logos/dell_logo.webp";
import hp_logo from "../assets/logos/hp_logo.webp";
import lenovo_logo from "../assets/logos/lenovo_logo.webp";
import samsung_logo from "../assets/logos/samsung_logo.webp";
import zebronics_logo from "../assets/logos/zebronics_logo.webp";
import epson_logo from '../assets/logos/epson_logo.webp'
import canon_logo from '../assets/logos/canon_logo.webp'
import brother_logo from '../assets/logos/brother_logo.webp';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

   const partnerLogos = [
      acer_logo,
      asus_logo,
      dell_logo,
      hp_logo,
      lenovo_logo,
      samsung_logo,
      zebronics_logo, epson_logo, canon_logo, brother_logo
    ];

  return (
    <div className="slider-container">
      <h2 className="section-header">Explore the Best Brands in Tech</h2>
      <Slider {...settings}>
        {partnerLogos.map((logo, index) => (
          <div key={index} className="carousel-item">
            <img
              className="carousel-logo"
              src={logo}
              alt={`logo-${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
