import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Section from "../../components/section";
import Form from "../../components/form";
import PortfolioTitle from "../../components/portfolio/portfolioTitle";
import PortfolioIcon from "../../components/SVGicons/portfolioIcon";
import MainContainer from "@/app/components/mainContainer";
import TitleSection from "@/app/components/portfolio/titleSection";
import PortfolioDescription from "@/app/components/portfolio/portfolioDescription";
import ServicesContainer from "@/app/components/servicesContainer";
import FotografiaIcon from "@/app/components/SVGicons/fotografiaIcon";
import EdicionAudiovisualIcon from "@/app/components/SVGicons/edicionAudiovisualIcon";
import PautaIcon from "@/app/components/SVGicons/pautaIcon";
import GestionRedesIcon from "@/app/components/SVGicons/gestionRedesIcon";
import Breadcrumbs from "@/app/components/breadcrumbs";

import bannerMobile from "/public/mes-del-orgullo/bannerOrgulloMobile.png";
import bannerDesktop from "/public/mes-del-orgullo/bannerOrgulloDesktop.png";
import promImg1 from "/public/mes-del-orgullo/promImg1.png";
import promImg2 from "/public/mes-del-orgullo/promImg2.png";
import promImg3 from "/public/mes-del-orgullo/promImg3.png";
import BtlIcon from "@/app/components/SVGicons/btlIcon";
import ConceptualizacionIcon from "@/app/components/SVGicons/conceptualizacionIcon";
import Head from "next/head";

export default function Page() {
  return (
    <MainContainer>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
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
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Mes del orgullo"} />
        <TitleSection>
          <PortfolioTitle textColor="text-[#112638]">
            La diversidad nos inspira
          </PortfolioTitle>
          <PortfolioDescription>
            Ideo es un centro comercial caracterizado por la diversidad de
            marcas,
            <br className="hidden lg:block" /> productos y posibilidades para
            remodelar, construir y decorar; por lo que
            <br className="hidden lg:block" /> el Mes del Orgullo debía actuar
            de la misma forma.
            <br className="hidden lg:block" />
            Por eso nos aliamos con importantes marcas y creamos un espacio
            único
            <br className="hidden lg:block" /> para celebrar e inspirarnos con
            la diferencia, el color y todas las formas
            <br className="hidden lg:block" /> de amor.
          </PortfolioDescription>
        </TitleSection>
      </Section>
      <ServicesContainer>
        <BtlIcon color="#E4C240" />
        <ConceptualizacionIcon color="#E4C240" />
        <EdicionAudiovisualIcon color="#E4C240" />
      </ServicesContainer>
      <div className="w-full flex flex-col justify-center items-center gap-12">
        <Image src={promImg1} />
        <div className="px-8 lg:px-0">
          <Image src={promImg2} />
        </div>
        <Image src={promImg3} />
      </div>
      <Section>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Mes del orgullo"} />
      </Section>
      <div className="-mt-12 lg:mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
