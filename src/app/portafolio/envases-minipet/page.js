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

import section2 from "/public/minipet/section2.png";
import section3 from "/public/minipet/section3.png";
import section3Mobile1 from "/public/minipet/section3_mobile1.png";
import section3Mobile2 from "/public/minipet/section3_mobile2.png";

export const metadata = {
  title: "Envases Minipet | Campaña | Agencia La Company Creativa",
  description:
    "Inspirados en la forma y propósito de Minipet, construimos una marca sostenible con un rebranding que resalta su versatilidad e identidad visual.",
};

export default function Page() {
  return (
    <MainContainer>
      <Section>
        <div className="w-full lg:block">
          <video
            loop
            playsInline
            webkit-playsinline
            autoPlay
            style={{ width: "100%", height: "100%" }}
          >
            <source src="/minipet/minipet_banner.mp4" type="video/mp4" />
          </video>
        </div>
        <Breadcrumbs
          lastPage={"Portafolio"}
          currentPage={"Envases Minipet"}
        />
        <TitleSection>
          <PortfolioTitle textColor="text-[#4299A2]">Minipet</PortfolioTitle>
          <div className="mt-5 relative pr-5">
            <span className="text-lg tracking-wider leading-8">
              Minipet diseña envases PET recliclados para grandes marcas. Su
              nombre suele
              <br className="hidden lg:block" /> confundirse con productos para
              mascotas, por eso nos inspiramos en la rosca
              <br className="hidden lg:block" /> de la tapa y en el estado
              maleable del plástico antes del soplado, para crear
              <br className="hidden lg:block" /> una identidad visual que
              refleja su capacidad de transformarse en cualquier
              <br className="hidden lg:block" /> forma. Una marca clara,
              versátil y comprometida con la sostenibilidad.
            </span>
          </div>
        </TitleSection>
        <div className="w-full flex flex-col justify-center items-center gap-16">
          <img src={"/minipet/logo_minipet.gif"} className="lg:w-1/2" />
        </div>
      </Section>
      <ServicesContainer>
        <RebrandingIcon color="#FF5A5F" />
        <MotionGraphicsIcon color="#FF5A5F" />
      </ServicesContainer>
      <div className="w-full flex flex-col justify-center items-center gap-16">
        <video
          loop
          playsInline
          webkit-playsinline
          autoPlay
          style={{ width: "100%", height: "100%" }}
        >
          <source src="/minipet/section1.mp4" type="video/mp4" />
        </video>
      </div>
      <Image src={section2} className="mt-16 w-full" />
      <Section className="bg-[#4299A2] flex justify-center items-center p-8 lg:p-16 lg:pb-14 mt-16">
        <p className="text-[#FFFFFF] mosk leading-8 xl:leading-6 2xl:leading-10 text-md xl:text-xl 2xl:text-2xl font-light">
          Nuestro trabajo con Minipet demuestra cómo una estrategia de branding
          sólida puede resolver retos reales de posicionamiento y percepción.
          Más allá de crear un nuevo logotipo, desarrollamos una identidad que
          comunica su verdadero valor: innovación, transformación y compromiso
          con el medio ambiente. En La Company Creativa entendemos que el
          branding no es solo diseño, es una herramienta poderosa para alinear
          negocios sostenibles con su audiencia, construir confianza y
          diferenciarse en el mercado.
        </p>
      </Section>
      <Image src={section3} className="mt-16 w-full hidden lg:block" />
      <Image src={section3Mobile1} className="mt-16 w-full lg:hidden" />
      <Image src={section3Mobile2} className="mt-16 w-full lg:hidden" />
      <div className="w-full flex flex-col justify-center items-center mt-16">
        <video
          loop
          playsInline
          webkit-playsinline
          autoPlay
          style={{ width: "100%", height: "100%" }}
        >
          <source src="/minipet/section4.mp4" type="video/mp4" />
        </video>
      </div>
      <Section>
        <Breadcrumbs
          lastPage={"Portafolio"}
          currentPage={"Envases Minipet"}
        />
      </Section>
      <div className="-mt-12 lg:mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
