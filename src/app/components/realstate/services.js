"use client";
import Cicle from "../SVGicons/cicle";
import Papers from "../SVGicons/papers";
import MeetingPoint from "../SVGicons/meetingPoint";
import UnderCarriage from "../SVGicons/underCarriage";
import PlayPause from "../SVGicons/playPause";
import Things from "../SVGicons/things";
import Rock from "../SVGicons/rock";
import CurvedRoad from "../SVGicons/curvedRoad";
import Mosaic from "../SVGicons/mosaic";
import TrashCan from "../SVGicons/trashCan";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Services({ city }) {
  const services = [
    {
      image: <Cicle className={"text-companySalmon"} />,
      title: (
        <>
          Estrategia digital 360
          <br />
          con visión comercial
        </>
      ),
      description:
        "Tu web y presencia digital trabajan juntas para generar leads y ventas.",
    },
    {
      image: <Papers className={"text-companySalmon"} />,
      title: (
        <>
          Pauta digital en Meta
          <br />y Google
        </>
      ),
      description:
        "Las pautas en Meta y Google atraen compradores cualificados a tu web.",
    },
    {
      image: <MeetingPoint className={"text-companySalmon"} />,
      title: (
        <>
          Diseño de marca
          <br />y piezas emocionales
        </>
      ),
      description: "Piezas con alma que acercan tu marca al cliente.",
    },
    {
      image: <UnderCarriage className={"text-companySalmon"} />,
      title: (
        <>
          Landing y sitios web
          <br />
          integradas a CRM
        </>
      ),
      description:
        "Conectadas al CRM capturan leads eficientemente para tu equipo.",
    },
    {
      image: <PlayPause className={"text-companySalmon"} />,
      title: (
        <>
          Videos, recorridos
          <br />y activaciones
        </>
      ),
      description: "Virtuales inmersivos venden propiedades, no solo fotos.",
    },
    {
      image: <Things className={"text-companySalmon"} />,
      title: (
        <>
          Ideas creativas para sala
          <br />
          de ventas y eventos
        </>
      ),
      description: "Transforman visitas en experiencias que cierran ventas.",
    },
    {
      image: <Rock className={"text-companySalmon"} />,
      title: (
        <>
          Intervención de
          <br />
          espacios comerciales
        </>
      ),
      description:
        "Transformamos tus espacios comerciales en experiencias inmersivas que venden.",
    },
    {
      image: <CurvedRoad className={"text-companySalmon"} />,
      title: (
        <>
          Producción
          <br />
          de Stands
        </>
      ),
      description:
        "Impactantes que atraen, cautivan y generan prospectos en eventos.",
    },
    {
      image: <Mosaic className={"text-companySalmon"} />,
      title: (
        <>
          Publicidad
          <br />
          exterior
        </>
      ),
      description: "Genera impacto, llevando tráfico a tus salas de ventas.",
    },
    {
      image: <TrashCan className={"text-companySalmon"} />,
      title: (
        <>
          Material
          <br />
          publicitario
        </>
      ),
      description: "Conecta, informa y convierte interesados en clientes.",
    },
  ];

  return (
    <section className="flex flex-col justify-center gap-10 bg-[url('/realstate/backgroundSection2.png')] bg-no-repeat bg-cover p-8 xl:p-10 2xl:p-16 2xl:pb-[24px] rounded-3xl">
      <h2 className="SpaceGrotesk text-[22px] xl:text-4xl 2xl:text-5xl mb-4 uppercase font-light text-white xl:text-center">
        <span className="SpaceGrotesk font-semibold text-companySalmon">
          No hacemos
        </span>{" "}
        <span className="SpaceGrotesk font-semibold">
          ❝publicidad para proyectos inmobiliarios❞.{" "}
        </span>
        <br />
        Hacemos que tu proyecto tenga sentido, forma{" "}
        <span className="SpaceGrotesk font-semibold">y resultados.</span>
      </h2>
      <div className="lg:grid grid-cols-5 justify-between w-full xl:gap-x-4 xl:gap-y-8 2xl:gap-x-8 2xl:gap-y-16 hidden">
        {services.map((service) => (
          <div
            className="flex flex-col gap-1 xl:gap-2 2xl:gap-3"
            key={service.description}
          >
            {service.image}
            <h3 className="text-[28px] xl:text-xl 2xl:text-2xl font-semibold text-[#fff8ea] text-left mt-3 SpaceGrotesk ">
              {service.title}
              <span className="text-companySalmon font-bold">.</span>
            </h3>
            <div className="w-full h-[1px] bg-[#fff8ea] mt-2"></div>
            <p className="xl:text-md 2xl:text-lg font-light text-[#fff8ea] text-left mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="lg:hidden">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          speed={2500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          navigation={{
            nextEl: ".next-swiper-button",
            prevEl: ".prev-swiper-button",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.description}>
              <div className="flex flex-col gap-1 bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                {service.image}
                <h3 className="text-lg font-semibold text-[#fff8ea] text-left mt-3 SpaceGrotesk">
                  {service.title}
                  <span className="text-companySalmon font-bold">.</span>
                </h3>
                <div className="w-full h-[1px] bg-[#fff8ea] mt-2"></div>
                <p className="text-sm font-light text-[#fff8ea] text-left mt-2">
                  {service.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center">
        <button className="inline-block robout px-10 py-5 mt-4 2xl:mt-6 text-sm 2xl:text-lg bg-companySalmon hover:bg-[#FFF8EA] text-[#FFF8EA] hover:text-companySalmon transition duration-300 ease-in-out">
          Contactar a un asesor
        </button>
      </div>
      <p className="hidden lg:block text-center xl:text-md 2xl:text-lg font-light text-[#fff8ea]">
        Somos la agencia que entiende el{" "}
        <span className="font-semibold">negocio inmobiliario:</span> creamos
        estrategia, producimos contenido
        <br /> y activamos campañas que{" "}
        <span className="font-semibold">venden de verdad.</span>
      </p>
      <p className="text-sm lg:hidden text-center font-light text-[#fff8ea]">
        Damos forma, voz y alcance a <span className="font-semibold">tu proyecto</span>
      </p>
    </section>
  );
}
