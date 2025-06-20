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
import section3 from "/public/minipet/section3.png";
import section3Mobile1 from "/public/minipet/section3_mobile1.png";
import section3Mobile2 from "/public/minipet/section3_mobile2.png";

export const metadata = {
  title: "Retiro Alto | Campaña | Agencia La Company Creativa",
  description:
    "En Navidad, llevamos la alegría a quienes no podían estar con su familia. Una acción para acercar corazones, incluso en la distancia",
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
          currentPage={"Navidad al trabajo"}
        />
        <TitleSection>
          <PortfolioTitle textColor="text-[#4299A2]">
            Retiro Alto
          </PortfolioTitle>
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
      <div className="w-full flex gap-16  mt-16">
        <video
          loop
          playsInline
          webkit-playsinline
          autoPlay
          style={{ width: "50%", height: "100%" }}
          className="w-1/2"
        >
          <source src="/retiro-alto/section2.mp4" type="video/mp4" />
        </video>
        <div className="w-1/2 flex flex-col justify-between">
          <Image
            src={section21}
            className="row-span-3 col-span-1 object-cover"
          />
          <Image
            src={section22}
            className="row-span-2 col-span-1 object-cover"
          />
        </div>
      </div>
      <Section className="bg-[#4299A2] flex justify-center items-center p-8 lg:p-16 lg:pb-14 mt-16">
        <p className="text-[#FFFFFF] mosk leading-8 xl:leading-6 2xl:leading-10 text-md xl:text-xl 2xl:text-2xl font-light">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
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
