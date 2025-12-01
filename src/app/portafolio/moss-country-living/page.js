import Image from "next/image";

import Section from "../../components/section";
import Form from "../../components/form";
import PortfolioTitle from "../../components/portfolio/portfolioTitle";
import MainContainer from "@/app/components/mainContainer";
import TitleSection from "@/app/components/portfolio/titleSection";
import ServicesContainer from "@/app/components/servicesContainer";
import Breadcrumbs from "@/app/components/breadcrumbs";

import bannerDesktop from "/public/moss/bannerDesktop.gif";
import bannerMobile from "/public/alkosto/bannerMobile.webp";

import section1 from "/public/moss/section1.gif";
import section2 from "/public/moss/section2.webp";
import section3 from "/public/moss/section3.webp";
import section41 from "/public/moss/section4.gif";
import section5 from "/public/moss/section5.webp";
import section7 from "/public/moss/section7.webp";
import section8 from "/public/moss/section8.webp";
import section9 from "/public/moss/section9.gif";
import section10 from "/public/moss/section10.webp";

import ConceptualizacionIcon from "@/app/components/SVGicons/conceptualizacionIcon";
import Campaña360Icon from "@/app/components/SVGicons/campaña360Icon";

export const metadata = {
  title: "Moss Country Living | Campaña 360 | Agencia La Company Creativa",
  description:
    "Para demostrar que aquí todo se convierte en hogar creamos una identidad visual liquidad que con el constante cambio le hiciera justicia al concepto",
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
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Alkosto"} />
        <TitleSection>
          <PortfolioTitle textColor="text-[#152121]">
            Moss Country Living
          </PortfolioTitle>
          <div className="mt-5 relative pr-5">
            <span className="text-lg tracking-wider leading-8">
              Para demostrar que aquí todo se convierte en hogar creamos una
              identidad
              <br /> visual liquidad que con el constante cambio le hiciera
              justicia al concepto
            </span>
          </div>
        </TitleSection>
      </Section>
      <ServicesContainer>
        <Campaña360Icon color="#CB5B2D" />
        <ConceptualizacionIcon color="#CB5B2D" />
      </ServicesContainer>
      <div className="w-full flex flex-col justify-center items-center gap-16">
        <Image src={section1} className="w-full" />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-16 mt-16">
        <Image src={section2} />
      </div>
      <Image src={section3} className="mt-16 w-full" />
      <div className="w-full flex justify-center items-center gap-16">
        <Image src={section41} className="mt-16 w-full" />
      </div>
      <div className="w-full flex justify-center items-center gap-16">
        <Image src={section5} className="mt-16 w-full" />
      </div>
      <div className="w-full flex justify-center items-center gap-16">
        <Image src={section7} className="mt-16 w-full" />
      </div>
      <div className="w-full flex justify-center items-center gap-16">
        <Image src={section8} className="mt-16 w-full" />
      </div>
      <div className="w-full flex justify-center items-center gap-16">
        <Image src={section9} className="mt-16 w-full" />
      </div>
      <div className="w-full flex justify-center items-center gap-16">
        <Image src={section10} className="mt-16 w-full" />
      </div>
      <Section>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Alkosto "} />
      </Section>
      <div className="-mt-12 lg:mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
