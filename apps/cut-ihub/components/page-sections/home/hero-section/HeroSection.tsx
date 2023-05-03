import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper';
import FirstSlide from './slides/FirstSlide';
import SecondSlide from './slides/SecondSlide';
import ThirdSlide from './slides/ThirdSlide';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const HeroSection = (props: Props) => {
  const hero_section_slides = [
    { slide: <FirstSlide /> },
    { slide: <SecondSlide /> },
    { slide: <ThirdSlide /> },
  ];

  return (
    <div className="h-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {hero_section_slides.map((item, index) => (
          <SwiperSlide key={index}>{item.slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
