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

  const contentAccordion1 = [
    {
      title: (
        <p>
          ¿Por qué elegir a <strong>LaCompany Creativa?</strong>
        </p>
      ),
      description: (
        <p>
          No vendemos humo, entregamos resultados. Diseñamos estrategias
          efectivas, optimizamos cada peso de tu inversión y te mostramos
          métricas claras y medibles. Somos expertos con más de 36 años de
          experiencia y más de 1.000 campañas exitosas en sectores como
          ecommerce, salud, propiedad, raíz, educación y más.
        </p>
      ),
    },
    {
      title: <p>¿Que es pauta digital?</p>,
      description: (
        <p>
          La publicidad pagada que se realiza en plataformas como Google Ads,
          Meta Ads (Facebook e Instagram Ads), TikTok Ads y LinkedIn Ads se
          conoce como pauta digital. Esta publicidad permite optimizar los
          anuncios para llegar a audiencias específicas y generar tráfico,
          clientes potenciales y conversiones.
        </p>
      ),
    },
    {
      title: <p>¿Cuál es la mejor plataforma para anunciar mi negocio?</p>,
      description: (
        <>
          <p>La mejor plataforma depende de tu objetivo:</p>
          <ul>
            <li>
              <strong>Google Ads:</strong> Ideal para captar clientes que buscan
              activamente tus productos o servicios.
            </li>
            <li>
              <strong>Meta Ads:</strong> Perfecto para segmentación detallada y
              remarketing.
            </li>
            <li>
              <strong>TikTok Ads:</strong>
              Recomendado para marcas con contenido visual atractivo y
              audiencias jóvenes.
            </li>
            <li>
              <strong>LinkedIn Ads:</strong> La mejor opción para publicidad B2B
              y generación de leads profesionales.
            </li>
          </ul>
        </>
      ),
    },
  ];

  const contentAccordion2 = [
    {
      title: <p className="text">¿Cuál es la diferencia entre SEM y SEO?</p>,
      description: (
        <ul>
          <li>
            <strong>SEM (Marketing en Motores de Búsqueda):</strong> Publicidad
            pagada en buscadores, como Google Ads, para aparecer en los primeros
            resultados.
          </li>
          <li>
            <strong>SEO (Optimización en Motores de Búsqueda):</strong>
            Optimización orgánica de sitios web para mejorar su posicionamiento
            en Google sin pagar anuncios.
          </li>
        </ul>
      ),
    },
    {
      title: <p>¿Qué tipos de pauta existen?</p>,
      description: (
        <ul>
          <li>
            <strong>Anuncios de Búsqueda (Google Ads SEM):</strong> anuncios
            basados en palabras clave que aparecen en los resultados de los
            motores de búsqueda.
          </li>
          <li>
            <strong>Anuncios de Display:</strong> banners publicitarios que se
            muestran en sitios web y aplicaciones.
          </li>
          <li>
            <strong>
              Anuncios en Redes Sociales (Meta Ads, TikTok Ads, LinkedIn Ads):
            </strong>
            publicidad que se difunde a través de plataformas sociales.
          </li>
          <li>
            <strong>
              Anuncios de Video (YouTube, TikTok, Facebook e Instagram Reels):
            </strong>
            anuncios en formato de video en diversas plataformas.
          </li>
          <li>
            <strong>Remarketing:</strong> anuncios dirigidos a usuarios que
            previamente han interactuado con tu marca.
          </li>
        </ul>
      ),
    },
    {
      title: <p>¿Qué hace una agencia de pauta digital?</p>,
      description: (
        <p>
          Una agencia de pauta digital crea, optimiza y gestiona campañas en
          Google Ads, Meta Ads, TikTok Ads y LinkedIn Ads para aumentar la
          visibilidad, atraer leads y mejorar las conversiones. Utiliza
          segmentación avanzada, análisis de datos y optimización continua para
          maximizar el ROAS (Retorno de la inversión publicitaria). 🚀
        </p>
      ),
    },
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
