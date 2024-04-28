//import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./banner.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: "700", delay: "700" });
  }, []);
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
          <div className="flex  flex-col md:relative" data-aos="fade-right">
            <img src={"https://i.ibb.co/XYvhyD4/carousel-image-1.jpg"} alt="" />
            <div className="block max-w-full md:absolute bottom-1 lg:top-1/2 lg:-translate-y-1/2 rounded-lg lg:left-12  glass lg:p-4 md:p-2 md:max-w-full md:bottom-0  lg:max-w-[450px]  ">
              <h2 className="text-[#102E56] md:text-2xl text-xl  font-jacquard">
                Serenity in Shades: Mountain Lake Landscape Painting
              </h2>
              <p className="font-roboto mt-2 text-sm md:text-base text-black md:text-white text-opacity-45">
                Capturing the essence of a peaceful mountain scene reflected in
                the clear waters of a serene lake, this artwork evokes a sense
                of calm and tranquility.{" "}
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex  flex-col md:relative">
          <img src={"https://i.ibb.co/CJvRBQH/carousel-image-3.jpg"} alt="" />
          <div className="block max-w-full md:absolute bottom-1 lg:top-1/2 lg:-translate-y-1/2 rounded-lg lg:left-12  glass lg:p-4 md:p-2 md:max-w-full md:bottom-0  lg:max-w-[450px]  ">
            <h2 className="text-[#FC736B] md:text-2xl text-xl  font-jacquard">
              Whispers of Eternity: Enigmatic Night Sky Oil Painting
            </h2>
            <p className="font-roboto mt-2 text-sm md:text-base text-black md:text-white text-opacity-45">
              Embark on a journey into the depths of the cosmos with our
              mesmerizing &apos;Whispers of Eternity&apos; oil painting. Against
              a canvas of infinite darkness, vibrant hues of celestial bodies
              dance in a symphony of light and shadow, illuminating the night
              sky with ethereal beauty..{" "}
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex  flex-col md:relative">
          <img src={"https://i.ibb.co/NYPwQny/carousel-image-2.jpg"} alt="" />
          <div className="block max-w-full md:absolute bottom-1 lg:top-1/2 lg:-translate-y-1/2 rounded-lg lg:left-12  glass lg:p-4 md:p-2 md:max-w-full md:bottom-0  lg:max-w-[450px]  ">
            <h2 className="text-[#E17630] md:text-2xl text-xl  font-jacquard">
              Autumn&#39;s Grace: Portrait of a Radiant Maiden
            </h2>
            <p className="font-roboto mt-2 text-sm md:text-base text-black md:text-white text-opacity-45">
              Immerse yourself in the enchanting allure of &#39;Autumn&#39;s
              Grace&#39; a captivating portrait capturing the beauty and
              serenity of a radiant maiden amidst the vibrant hues of fall
              foliage. With a gentle gaze that mirrors the tranquility of the
              forest around her, she stands as a symbol of elegance and
              harmony..{" "}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
