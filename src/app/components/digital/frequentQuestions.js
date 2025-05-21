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

export default function FrequentQuestions({
  contentAccordion1,
  contentAccordion2,
}) {
  const companies = [
    logoConinsa,
    logoViva,
    logoNutresa,
    logoLondonio,
    logoIdeo,
    logoArquitectura,
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full mt-14 lg:mt-30 2xl:mt-40 lg:gap-10 2xl:gap-20 lg:bg-[rgba(255,255,255,0.05)] lg:border lg:border-[#2BFFC3]/10 lg:rounded-[11px] lg:px-10 lg:py-5">
        <h3 className="whitespace-nowrap text-[#666AAC] text-[24px] mb-5 lg:mb-0 lg:mt-0 text-center w-auto">
          CONFÍAN <span>EN NOSOTROS</span>
        </h3>
        <div className="bg-[rgba(255,255,255,0.05)]  w-full flex justify-center items-center gap-4 py-4 border border-[#2BFFC3]/10 rounded-[7px] lg:hidden">
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
            {companies.map((company, index) => (
              <SwiperSlide style={{ width: "auto" }} key={index}>
                <div className="flex items-center justify-center h-10 lg:h-14 2xl:h-20 mr-4 py-1 xl:mr-0 xl:py-0">
                  <Image
                    src={company}
                    alt={`logo-${index}`}
                    className="max-h-10 lg:max-h-14 2xl:max-h-15 w-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="bg-[rgba(255,255,255,0.05)] w-full flex justify-center items-center gap-4 py-4 border border-[#2BFFC3]/10 rounded-[7px] hidden lg:flex justify-between  lg:bg-transparent lg:border-none">
          {companies.map((company, index) => (
            <Image
              src={company}
              alt={`logo-${index}`}
              className="h-10 lg:h-14 2xl:h-15 object-contain"
              key={index}
            />
          ))}
        </div>
      </div>
      <h2 className="text-[38px] lg:text-[62px] 2xl:text-[52px] mt-14 lg:mt-30 2xl:mt-40 text-center font-semibold 2xl:mb-[-80px]">
        Preguntas Frecuentes
      </h2>
      <div className="relative grid grid-cols-1 gap-x-16 pb-16 md:pb-32 lg:grid-cols-2 mt-14 lg:mt-30 2xl:mt-40">
        <div className="flex flex-col gap-4 overflow-hidden rounded-[7px] lg:rounded-[11px]">
          {contentAccordion1.map((item, index) => (
            <Accordion
              className="bg-[rgba(255,255,255,0.05)] rounded-[7px] lg:rounded-[11px]"
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon className="text-[30px] md:text-[40px] xl:text-[50px] text-companySalmon" />
                }
                className="text-white transition-colors duration-300 ease-in-out [&.Mui-expanded]:text-red-500 hover:text-companySalmon tracking-wider text-[16px] xl:text-[18px] 2xl:text-[21px]"
              >
                {item.title}
              </AccordionSummary>
              <AccordionDetails className="text-white">
                {item.description}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <div className="flex flex-col gap-4 overflow-hidden rounded-[7px] lg:rounded-[11px]">
          {contentAccordion2.map((item, index) => (
            <Accordion
              className="bg-[rgba(255,255,255,0.05)] rounded-[7px] lg:rounded-[11px] overflow-hidden"
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon className="text-[30px] md:text-[40px] xl:text-[50px] text-companySalmon" />
                }
                className="text-white transition-colors duration-300 ease-in-out [&.Mui-expanded]:text-red-500 hover:text-companySalmon tracking-wider text-[16px] xl:text-[18px] 2xl:text-[21px]"
              >
                {item.title}
              </AccordionSummary>
              <AccordionDetails className="text-white">
                {item.description}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
