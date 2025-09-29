import Image from "next/image";

import Section from "../../components/section";
import Form from "../../components/form";
import PortfolioTitle from "../../components/portfolio/portfolioTitle";
import MainContainer from "@/app/components/mainContainer";
import TitleSection from "@/app/components/portfolio/titleSection";
import ServicesContainer from "@/app/components/servicesContainer";
import Breadcrumbs from "@/app/components/breadcrumbs";
import RebrandingIcon from "@/app/components/SVGicons/rebrandingIcon";

import bannerDesktop from "/public/importadoras-asociadas/bannerDesktop.webp";
import bannerMobile from "/public/importadoras-asociadas/bannerMobile.webp";
import logo from "/public/importadoras-asociadas/logo.webp";
import section1 from "/public/importadoras-asociadas/section1.webp";
import section2 from "/public/importadoras-asociadas/section2.webp";
import section3 from "/public/distrito-florida/section3.png";
import section41 from "/public/importadoras-asociadas/section4-1.webp";
import section42 from "/public/importadoras-asociadas/section4-2.webp";
import section5 from "/public/importadoras-asociadas/section5.webp";

export const metadata = {
  title: "Importadoras Asociadas | Rebranding | Agencia La Company Creativa",
  description:
    "Es una empresa que por más de 56 años se ha consolidado en la comercialización, distribución y servicio de autopartes, baterías y lubricantes, necesitaba establecer sus marcas bajo una nueva arquitectura. Así renovamos una marca que representa liderazgo, innovación y reconocimiento.",
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
          currentPage={"Importadoras Asociadas"}
        />
        <TitleSection>
          <PortfolioTitle textColor="text-[#5C8CDA]">
            Importadoras Asociadas
          </PortfolioTitle>
          <div className="mt-5 relative pr-5">
            <span className="text-lg tracking-wider leading-8">
              Es una empresa que por más de 56 años se ha consolidado en la
              comercialización,
              <br className="hidden lg:block" /> distribución y servicio de
              autopartes, baterías y lubricantes, necesitaba
              <br className="hidden lg:block" /> establecer sus marcas bajo una
              nueva arquitectura
              <br className="hidden lg:block" />
              Así renovamos una marca que representa liderazgo, innovación y
              reconocimiento.
            </span>
          </div>
        </TitleSection>
        <div className="w-full flex flex-col justify-center items-center gap-16 mt-16">
          <Image src={logo} />
        </div>
      </Section>
      <ServicesContainer>
        <RebrandingIcon color="#B5D2F2" />
      </ServicesContainer>
      <div className="w-full flex flex-col justify-center items-center gap-16">
        <Image src={section1} />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-16 mt-16">
        <Image src={section2} />
      </div>
      {/*<Image src={section3} className="mt-16 w-full" /> */}
      <div className="w-full flex justify-center items-center gap-16">
        <Image src={section41} className="mt-16 w-full" />
        <Image src={section42} className="mt-16 w-full" />
      </div>

      <Image src={section5} className="mt-16 w-full hidden lg:block" />
      <Section>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Distrito Florida"} />
      </Section>
      <div className="-mt-12 lg:mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
