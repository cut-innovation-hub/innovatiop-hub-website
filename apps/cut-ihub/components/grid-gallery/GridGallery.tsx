import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface GridGalleryProps {
  images: any;
}

export default function GridGallery({ images }: GridGalleryProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="md:h-[500px] h-[300px] overflow-hidden">
      <Slider {...settings}>
        {images.map((image: string, index: number) => (
          <div key={index} className={"md:h-[450px] h-[250px]"}>
            <img
              src={image}
              alt=""
              className="object-contain rounded bg-slate-100"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
