import React from "react";
import Logo from "../images/P.png";
import { SlideData } from "./SlideData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  // Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideImgs = SlideData.map((slide) => {
    return (
      <div
        className="!flex flex-col justify-center items-center border-r border-l pt-2 sm:pt-7 [perspective:1000px]"
        key={slide.title}
      >
        {/* Card Image */}
        <div className="border border-[#333] shadow-2xl rounded-full h-32 !w-32 sm:h-48 sm:!w-48 relative transition-all duration-500 [transform-style:preserve-3d] sm:hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover rounded-full"
            />
          </div>

          <div
            className="absolute inset-0 h-full w-full rounded-full bg-black/50 px-12 text-center text-[#f3f3f3] [transform:rotateY(180deg)]
           [backface-visibility:hidden] overflow-hidden pt-5 font-serif break-words"
          >
            {slide.text}
          </div>
        </div>

        {/* Title and Rate */}
        <div className="px-5 py-2 sm:py-5 font-serif text-lg sm:text-xl tracking-wide hover:text-blue-400 transition-colors delay-75">
          <a href="/#" className="flex flex-col">
            <p>{slide.title}</p>
            <span className="font-sans font-light text-base text-gray-800 self-center">
              {slide.rate}
            </span>
          </a>
        </div>
      </div>
    );
  });

  return (
    // Hero Section
    <div className="flex flex-col justify-center items-center pb-8">
      <div className="flex justify-center w-full mb-3 py-2 sm:py-3 shadow-sm">
        <img src={Logo} alt="hemenLogoSmall" className="h-12 sm:h-16" />
        <p className="flex self-center text-xl sm:text-2xl font-semibold text-gray-600">
          Most&nbsp;
          <span className="text-black">Popular</span>
        </p>
      </div>

      {/* Carousel */}
      <div className="max-w-full sm:py-2">
        <Slider {...settings}>{slideImgs}</Slider>
      </div>
    </div>
  );
};

export default Slide;
