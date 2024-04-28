//import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./banner.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div>
          <img src={"https://i.ibb.co/7gpNX6T/carousel-image-1.jpg"} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={"https://i.ibb.co/CJvRBQH/carousel-image-3.jpg"} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={"https://i.ibb.co/NYPwQny/carousel-image-2.jpg"} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
