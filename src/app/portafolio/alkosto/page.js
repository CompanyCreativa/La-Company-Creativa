import Image from "next/image";

import Section from "../../components/section";
import Form from "../../components/form";
import PortfolioTitle from "../../components/portfolio/portfolioTitle";
import MainContainer from "@/app/components/mainContainer";
import TitleSection from "@/app/components/portfolio/titleSection";
import ServicesContainer from "@/app/components/servicesContainer";
import Breadcrumbs from "@/app/components/breadcrumbs";

import bannerDesktop from "/public/alkosto/bannerDesktop.webp";
import bannerMobile from "/public/alkosto/bannerMobile.webp";

import section1 from "/public/alkosto/section1.webp";
import section2 from "/public/alkosto/section2.webp";
import section3 from "/public/alkosto/section3.webp";
import section41 from "/public/alkosto/section4.webp";

import ConceptualizacionIcon from "@/app/components/SVGicons/conceptualizacionIcon";
import Campaña360Icon from "@/app/components/SVGicons/campaña360Icon";

export const metadata = {
  title: "Alkosto | Campaña 360 | Agencia La Company Creativa",
  description:
    "Tiendas Alkosto necesitaba comunicar que su carne era sostenible, gracias a prácticas como: cero desperdicio de agua, bienestar animal, alimentación controlada, cero huella de carbono, cero deforestación y cero hormonas. Así lo hicimos...",
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
          <PortfolioTitle textColor="text-[#CB5B2D]">Alkosto</PortfolioTitle>
          <div className="mt-5 relative pr-5">
            <span className="text-lg tracking-wider leading-8">
              Tiendas Alkosto necesitaba comunicar que su carne era sostenible,
              gracias a
              <br className="hidden lg:block" /> prácticas como: cero
              desperdicio de agua, bienestar animal, alimentación
              <br className="hidden lg:block" /> controlada, cero huella de
              carbono, cero deforestación y cero hormonas. Así lo hicimos...
            </span>
          </div>
        </TitleSection>
      </Section>
      <ServicesContainer>
        <Campaña360Icon color="#CB5B2D" />
        <ConceptualizacionIcon color="#CB5B2D" />
      </ServicesContainer>
      <div className="w-full flex flex-col justify-center items-center gap-16">
        <Image src={section1} />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-16 mt-16">
        <Image src={section2} />
      </div>
      <Image src={section3} className="mt-16 w-full" />
      <div className="w-full flex justify-center items-center gap-16">
        <Image src={section41} className="mt-16 w-full" />
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
