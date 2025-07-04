import Image from "next/image";

import Section from "../../components/section";
import Form from "../../components/form";
import PortfolioTitle from "../../components/portfolio/portfolioTitle";
import MainContainer from "@/app/components/mainContainer";
import TitleSection from "@/app/components/portfolio/titleSection";
import ServicesContainer from "@/app/components/servicesContainer";
import Breadcrumbs from "@/app/components/breadcrumbs";
import MotionGraphicsIcon from "@/app/components/SVGicons/motionGraphicsIcon";
import RebrandingIcon from "@/app/components/SVGicons/rebrandingIcon";

import bannerDesktop from "/public/retiro-alto/bannerDesktop.png";
import bannerMobile from "/public/retiro-alto/bannerMobile.png";
import logo from "/public/retiro-alto/logo.png";
import section1 from "/public/retiro-alto/section1.png";
import section21 from "/public/retiro-alto/section21.png";
import section22 from "/public/retiro-alto/section22.png";
import section3 from "/public/retiro-alto/section3.png";
import section5 from "/public/retiro-alto/section5.png";

export const metadata = {
  title: "Retiro Alto | Campaña | Agencia La Company Creativa",
  description:
    "Retiro Alto refleja una propuesta de vivienda simple, cercana y estratégica para habitar el oriente antioqueño con propósito y estilo.",
};

export default function Page() {
  return (
    <MainContainer>
      <div className="w-full">
        <Image
          src={bannerMobile}
          alt="Banner Paco"
          className="block lg:hidden"
        />
      </div>
      <Section>
        <div className="w-full hidden lg:block">
          <Image src={bannerDesktop} alt="Banner Desktop" className=" w-full" />
        </div>
        <Breadcrumbs
          lastPage={"Portafolio"}
          currentPage={"Retiro Alto"}
        />
        <TitleSection>
          <PortfolioTitle textColor="text-[#4299A2]">
            Retiro Alto
          </PortfolioTitle>
          <div className="mt-5 relative pr-5">
            <span className="text-lg tracking-wider leading-8">
              Retiro Alto es más que un proyecto inmobiliario, es una nueva
              forma de habitar el Oriente Antioqueño.
              <br className="hidden lg:block" /> Creamos una identidad y
              estrategia de comunicación centradas en un mensaje claro: vivir
              como soñaste
              <br className="hidden lg:block" /> no tiene por qué ser costoso,
              complicado ni inalcanzable. Desde el diseño conceptual hasta los
              contenidos <br className="hidden lg:block" />
              clave, trabajamos para posicionar a Retiro Alto como una marca
              cercana, humana y sin pretensiones,
              <br className="hidden lg:block" /> donde el bienestar, la
              tranquilidad y la buena inversión se encuentran. Un branding que
              conecta con quienes
              <br className="hidden lg:block" /> buscan desconectarse del ruido,
              sin renunciar al diseño, la ubicación ni el respaldo.
            </span>
          </div>
        </TitleSection>
        <div className="w-full flex flex-col justify-center items-center gap-16 mt-16">
          <Image src={logo} />
        </div>
      </Section>
      <ServicesContainer>
        <RebrandingIcon color="#FF5A5F" />
        <MotionGraphicsIcon color="#FF5A5F" />
      </ServicesContainer>
      <div className="w-full flex flex-col justify-center items-center gap-16">
        <Image src={section1} />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-32 mt-16">
        <video
          loop
          playsInline
          webkit-playsinline="true"
          autoPlay
          className="w-full sm:w-[47%] h-auto"
        >
          <source src="/retiro-alto/section2.mp4" type="video/mp4" />
        </video>
        <div className="lg:w-1/2 gap-16 lg:gap-0 flex flex-col justify-between">
          <Image src={section21} className="" />
          <Image src={section22} className="" />
        </div>
      </div>
      <Image src={section3} className="mt-16 w-full" />
      <video
        loop
        playsInline
        webkit-playsinline
        autoPlay
        style={{ width: "100%", height: "100%" }}
        className="mt-16"
      >
        <source src="/retiro-alto/section4.mp4" type="video/mp4" />
      </video>
      <Section className="bg-[#263A4B] flex justify-center items-center p-8 lg:p-16 lg:pb-14 mt-16">
        <p className="text-[#FFFFFF] mosk leading-8 xl:leading-6 2xl:leading-10 text-md xl:text-xl 2xl:text-2xl font-light">
          Para Retiro Alto desarrollamos un enfoque de marketing y branding
          estratégico que traduce su valor diferencial en mensajes claros,
          cercanos y memorables. Desde el naming y la identidad visual hasta los
          contenidos digitales y piezas para redes sociales, construimos una
          marca coherente que rompe con los clichés del sector. Aplicamos
          herramientas de posicionamiento de marca, tono de voz emocional y
          diseño de contenido pensado para conectar con audiencias reales que
          sueñan con una vivienda propia en el oriente antioqueño. Una propuesta
          de comunicación inmobiliaria que combina diseño, propósito y
          estrategia comercial.
        </p>
      </Section>
      <Image src={section5} className="mt-16 w-full hidden lg:block" />
      <Section>
        <Breadcrumbs
          lastPage={"Portafolio"}
          currentPage={"Retiro Alto"}
        />
      </Section>
      <div className="-mt-12 lg:mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
