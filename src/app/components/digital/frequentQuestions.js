import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import logoConinsa from "/public/digital/logo-coninsa.png";
import logoViva from "/public/digital/logo-viva.png";
import logoNutresa from "/public/digital/logo-nutresa.png";
import logoLondonio from "/public/digital/logo-londonio.png";
import logoIdeo from "/public/digital/logo-ideo.png";
import logoArquitectura from "/public/digital/logo-arquitectura.png";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FrequentQuestions() {
  const companies = [
    logoConinsa,
    logoViva,
    logoNutresa,
    logoLondonio,
    logoIdeo,
    logoArquitectura,
  ];

  return (
    <div>
      <div>
        <h3 className="text-[#666AAC] text-[24px] mb-5 mt-14 lg:mt-30 2xl:mt-40 text-center">
          CONFÍAN <span>EN NOSOTROS</span>
        </h3>
        <div className="bg-[rgba(255,255,255,0.05)] w-full flex justify-center items-center gap-4 py-4 border border-[#2BFFC3]/10 rounded-[7px]">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={20}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className="flex items-center justify-center"
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <div className="flex items-center justify-center h-10">
                  <Image
                    src={company}
                    alt={`logo-${index}`}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <Accordion className="bg-transparent ">
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon className="text-[30px] text-companySalmon" />
            }
            className="text-white"
          >
            Por qué elegir a LaCompany Creativa?
          </AccordionSummary>
          <AccordionDetails className="text-white">Holaaaaa</AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
