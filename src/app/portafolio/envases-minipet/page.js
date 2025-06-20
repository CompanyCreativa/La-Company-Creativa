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
  title: "Navidad al trabajo | Campaña | Agencia La Company Creativa",
  description:
    "En Navidad, llevamos la alegría a quienes no podían estar con su familia. Una acción para acercar corazones, incluso en la distancia",
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
          currentPage={"Navidad al trabajo"}
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."{" "}
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
          currentPage={"Navidad al trabajo"}
        />
      </Section>
      <div className="-mt-12 lg:mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
