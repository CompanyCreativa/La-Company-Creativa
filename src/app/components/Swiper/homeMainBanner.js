"use client";

import { useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper/modules";

// import zigzagImg from "/public/zigzag.gif";
// import zigzagMobile from "/public/zigzagMobile.gif";

// import banner2 from "/public/banner2.png";
// import banner2Mobile from "/public/banner2Mobile.png";
// import banner3 from "/public/banner3.png";
// import banner3Mobile from "/public/banner3Mobile.png";
// import banner4 from "/public/banner4.png";
// import banner4Mobile from "/public/banner4Mobile.png";
// import banner5 from "/public/banner5.png";
// import banner5Mobile from "/public/banner5Mobile.png";
// import banner6 from "/public/banner6.png";
// import banner6Mobile from "/public/banner6Mobile.png";
// import banner7 from "/public/banner7.png";
// import banner7Mobile from "/public/banner7Mobile.png";
// import SwiperImageContainer from "./swiperImageContainer";
import Link from "next/link";

function HomeMainBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  // const handleSlideChange = (swiper) => {
  //   setActiveIndex(swiper.activeIndex);
  // };

  return (
    <>
      <div className="relative z-10 w-full 2xl:h-[950px] xl:h-[800px] lg:h-[600px] h-[230px] sm:h-[400px] md:h-[500px]">
        <iframe
          src="https://player.vimeo.com/video/1024776482?title=0&amp;byline=0&amp;portrait=0&amp;playsinline=0&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;controls=0&amp;loop=1&amp;app_id=122963"
          width="100%"
          height="100%"
          allow="autoplay; fullscreen; clipboard-write"
          title="La Company"
          data-ready="true"
          style={{ width: "100%", height: "100%" }}
          className="w-full"
        ></iframe>
        <Link
          href="/contacto"
          className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 bottom-[70px] z-10 text-background font-normal SpaceGrotesk border border-background py-2 px-4 hover:bg-companySalmon transition-all text-lg cursor-pointer"
          style={{ animation: "slide-up opacity-1" }}
        >
          Contáctanos
        </Link>

        {/* <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        onSlideChange={handleSlideChange}
        className="homeSwiper h-full w-full relative"
      >
        
        <SwiperSlide className="lg:h-full  w-full relative">
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
      </Swiper> */}
      </div>
    </>
  );
}

export default HomeMainBanner;
