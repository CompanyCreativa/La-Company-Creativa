import Image from "next/image";

import googleLogo from "/public/digital/google_logo.png";
import review1 from "/public/digital/review1.png";
import review2 from "/public/digital/review2.png";
import review3 from "/public/digital/review3.png";
import review4 from "/public/digital/review4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Reviews() {
  const reviews = [review1, review2, review3, review4];

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex lg:flex-col justify-between items-end lg:items-center lg:gap-5">
        <h2 className="text-[24px] 2xl:text-[52px] leading-[30px] text-white">
          Hemos <span className=" font-semibold">transformado</span>
          <br className="lg:hidden" /> marcas como la tuya
        </h2>
        <Image src={googleLogo} alt="google logo"/>
      </div>
      <div className="mt-4 p-5 bg-[#2BFFC3] bg-opacity-[0.02] rounded-[7px] border border-[#2BFFC3] border-opacity-[0.1]">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={10}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="w-full flex justify-center"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <div>
                <Image src={review} alt={`Review ${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
