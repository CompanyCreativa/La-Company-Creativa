import Image from "next/image";

import Section from "../../components/section";
import Form from "../../components/form";
import PortfolioTitle from "../../components/portfolio/portfolioTitle";
import PortfolioDescription from "../../components/portfolio/portfolioDescription";
import TitleSection from "../../components/portfolio/titleSection";
import ServicesContainer from "../../components/servicesContainer";

import GestionRedesIcon from "../../components/SVGicons/gestionRedesIcon";
import MainContainer from "@/app/components/mainContainer";
import Breadcrumbs from "@/app/components/breadcrumbs";

import bannerCasaMagnaDesktop from "/public/casaMagna/casaMagnaBannerDesktop.png";
import bannerMobile from "/public/casaMagna/casaMagnaBannerMobile.png";
import casaMagnaImg1 from "/public/casaMagna/casaMagnaImg1.png";
import casaMagnaImg2 from "/public/casaMagna/casaMagnaImg2.png";
import casaMagnaImg2Mobile from "/public/casaMagna/casaMagnaImg2Mobile.png";
import Campaña360Icon from "@/app/components/SVGicons/campaña360Icon";
import ConceptualizacionIcon from "@/app/components/SVGicons/conceptualizacionIcon";
import Head from "next/head";

export default function Page() {
  return (
    <MainContainer className="-mt-[142px]">
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
          <Image
            src={bannerCasaMagnaDesktop}
            alt="Banner Desktop"
            className=" w-full"
          />
        </div>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Casa Magna"} />
        <TitleSection>
          <PortfolioTitle textColor="text-[#6D6D6D]" bgColor="bg-[#6D6D6D]">
            La receta que no devolvió el color
          </PortfolioTitle>
          <PortfolioDescription>
            <span className="font-medium">Más que un reto:</span> no se trató
            simplemente de una estrategia digital, esto
            <br /> fue un compromiso de marca y agencia para darle la
            importancia que se
            <br /> merece al Mes del Orgullo.
            <span className="hidden lg:block tracking-wider leading-10">
              <span className="font-medium">La idea:</span> dejamos en blanco y
              negro todo nuestro ecosistema digital para
              <br /> mostrar lo que perdemos sin la diversidad y el color que
              representa la <br />
              comunidad LGBTIQ+. Cuando acabó el mes lanzamos en un live la
              receta
              <br /> que nos devolvió el color con un mensaje muy importante: la
              sociedad,
              <br /> al igual que la cocina, necesitan color y diversidad.
              <br />
              #Pride
            </span>
          </PortfolioDescription>
        </TitleSection>
      </Section>
      <ServicesContainer>
        <Campaña360Icon color="#EF2D1A" />
        <ConceptualizacionIcon color="#EF2D1A" />
        <GestionRedesIcon color="#EF2D1A" />
      </ServicesContainer>
      <div className="mb-10 lg:mb-20">
        <video
          src="/casaMagna/video.mp4"
          autoPlay
          playsInline
          webkit-playsinline
          controls
          muted={true}
          className="w-full"
        ></video>
        <div className="lg:hidden px-5 pt-8">
          <span className="lg:hidden tracking-wider leading-10">
            <span className="font-medium">La idea:</span> dejamos en blanco y
            negro todo nuestro ecosistema digital para mostrar lo que perdemos
            sin la diversidad y el color que representa la comunidad LGBTIQ+.
            Cuando acabó el mes lanzamos en un live la receta que nos devolvió
            el color con un mensaje muy importante: la sociedad, al igual que la
            cocina, necesitan color y diversidad. #Pride
          </span>
        </div>
      </div>
      <div className="w-full">
        <Image
          src={casaMagnaImg1}
          alt="Casa Magna Image 1"
          className="w-full"
        />
      </div>
      <div className="lg:hidden px-5 pt-8">
        <span className="lg:hidden tracking-wider leading-10">
          Cuando acabó el mes lanzamos en un live la receta que nos devolvió el
          color con un mensaje muy importante: la sociedad, al igual que la
          cocina, necesitan color y diversidad. #Pride
        </span>
      </div>
      <section className="lg:px-0 pb-2 lg:pb-16 flex flex-col items-center w-[91.5%] max-w-[1760px] mx-auto">
        <div className="w-full mt-20 flex flex-col items-center">
          <Image
            src={casaMagnaImg2}
            alt="Casa Magna Image 2"
            className="hidden lg:block"
          />
          <Image
            src={casaMagnaImg2Mobile}
            alt="Casa Magna Image 2"
            className="lg:hidden"
          />
        </div>
      </section>
      <Section>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Casa Magna"} />
      </Section>
      <div className="-mt-12 lg:mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
