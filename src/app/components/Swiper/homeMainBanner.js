"use client";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import zigzagImg from "/public/zigzag.gif";
import zigzagMobile from "/public/zigzagMobile.gif";

import banner2 from "/public/banner2.png";
import banner2Mobile from "/public/banner2Mobile.png";
import banner3 from "/public/banner3.png";
import banner3Mobile from "/public/banner3Mobile.png";
import banner4 from "/public/banner4.png";
import banner4Mobile from "/public/banner4Mobile.png";
import banner5 from "/public/banner5.png";
import banner5Mobile from "/public/banner5Mobile.png";
import banner6 from "/public/banner6.png";
import banner6Mobile from "/public/banner6Mobile.png";
import banner7 from "/public/banner7.png";
import banner7Mobile from "/public/banner7Mobile.png";
import banner8 from "/public/banner8.png";
import banner8Mobile from "/public/banner8Mobile.png";
import SwiperImageContainer from "./swiperImageContainer";

function HomeMainBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="w-full lg:w-[91.5%] max-w-[1760px] mx-auto lg:h-[calc(89vh-68px)] relative lg:max-h-[717px]">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        onSlideChange={handleSlideChange}
        className="homeSwiper h-full w-full"
      >
        <SwiperSlide className="lg:h-full w-full relative">
          <SwiperImageContainer
            img={zigzagImg}
            imgMobile={zigzagMobile}
            alt={"Proyecto zig-zag"}
            textBold="BRANDING ZIG ZAG"
            textNormal="MODULAR LIVING"
            animation={`${activeIndex === 0 ? "slide-up opacity-1" : ""}`}
          />
        </SwiperSlide>
        <SwiperSlide className="lg:h-full">
          <SwiperImageContainer
            img={banner2}
            imgMobile={banner2Mobile}
            alt={"Proyecto Paco"}
          />
        </SwiperSlide>
        <SwiperSlide className="lg:h-full">
          <SwiperImageContainer
            img={banner3}
            imgMobile={banner3Mobile}
            alt={"Proyecto Franca"}
            textBold="FRANCA & CO"
            textNormal="BRANDING"
            animation={`${activeIndex === 2 ? "slide-up opacity-1" : ""}`}
          />
        </SwiperSlide>
        <SwiperSlide className="lg:h-full">
          <SwiperImageContainer
            img={banner4}
            imgMobile={banner4Mobile}
            alt={"Proyecto Big Bang"}
            textBold="BIG BANG"
            textNormal="BRANDING"
            animation={`${activeIndex === 3 ? "slide-up opacity-1" : ""}`}
          />
        </SwiperSlide>
        <SwiperSlide className="lg:h-full">
          <SwiperImageContainer
            img={banner5}
            imgMobile={banner5Mobile}
            alt={"Proyecto Ideoterapias"}
            textBold="IDEOTERAPIAS"
            textNormal="IDEO"
            animation={`${activeIndex === 4 ? "slide-up opacity-1" : ""}`}
          />
        </SwiperSlide>
        <SwiperSlide className="lg:h-full">
          <SwiperImageContainer
            img={banner6}
            imgMobile={banner6Mobile}
            alt={"Proyecto El Dorado"}
            textBold="DÍA DE LA PASTA"
            textNormal="EL DORADO"
            animation={`${activeIndex === 5 ? "slide-up opacity-1" : ""}`}
          />
        </SwiperSlide>
        <SwiperSlide className="lg:h-full">
          <SwiperImageContainer
            img={banner7}
            imgMobile={banner7Mobile}
            alt={"Proyecto La booblist"}
            textBold="La Booblist"
            textNormal="La primera playlist que salva vidas"
            animation={`${activeIndex === 6 ? "slide-up opacity-1" : ""}`}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeMainBanner;
