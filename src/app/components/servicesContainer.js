"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "@/app/globals.css";
import { Autoplay, FreeMode } from "swiper/modules";

export default function ServicesContainer({ children }) {
  let responsiveServices;

  if (Array.isArray(children)) {
    responsiveServices = (
      <Swiper
        pagination={true}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        slidesPerView={2}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        className="swiper-container-free-mode h-full w-full "
      >
        {children.map((child, index) => (
          <SwiperSlide key={index} className=" h-full ">
            <div className="flex items-center justify-center h-full">
              {child}
            </div>
          </SwiperSlide>
        ))}

        {}
      </Swiper>
    );
  } else {
    responsiveServices = (
      <div className="flex items-center justify-center h-full">{children}</div>
    );
  }

  return (
    <div className="w-full bg-[#0C0C0C] h-[64px] lg:h-[92px] text-[#FFF8EA] text-[22px] font-light">
      <div className="hidden lg:flex w-full h-full justify-center gap-28">
        {children}
      </div>

      <div className="lg:hidden w-full h-full">{responsiveServices}</div>
    </div>
  );
}
