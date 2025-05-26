import Image from "next/image";

import Section from "../../components/section";
import Form from "../../components/form";
import PortfolioTitle from "../../components/portfolio/portfolioTitle";
import PortfolioIcon from "../../components/SVGicons/portfolioIcon";
import PortfolioDescription from "../../components/portfolio/portfolioDescription";
import TitleSection from "../../components/portfolio/titleSection";
import ServicesContainer from "../../components/servicesContainer";
import PautaIcon from "../../components/SVGicons/pautaIcon";
import MainContainer from "@/app/components/mainContainer";
import Breadcrumbs from "@/app/components/breadcrumbs";

import bannerMobile from "/public/dorado/doradoBannerMobile.png";
import bannerDesktop from "/public/dorado/doradoBannerDesktop.png";
import promImg1 from "/public/dorado/prom1.png";
import promImg2 from "/public/dorado/prom2.png";
import promImg3 from "/public/dorado/prom3.png";
import promImg4 from "/public/dorado/prom4.png";
import promImg1Desktop from "/public/dorado/prom1Desktop.png";
import promImg2Desktop from "/public/dorado/prom2Desktop.png";
import promImg3Desktop from "/public/dorado/prom3Desktop.png";
import promImg4Desktop from "/public/dorado/prom4Desktop.png";
import promImg5Desktop from "/public/dorado/prom5Desktop.png";
import Campaña360Icon from "@/app/components/SVGicons/campaña360Icon";
import ConceptualizacionIcon from "@/app/components/SVGicons/conceptualizacionIcon";
import Head from "next/head";

export const metadata = {
  title: " El Dorado | Campaña 360° | Agencia La Company Creativa",
  description:
    "En el Día Mundial de la Pasta, El Dorado premió el esfuerzo de sus seguidores convirtiendo calorías quemadas en gramos de pasta",
};

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
          <Image src={bannerDesktop} alt="Banner Desktop" className=" w-full" />
        </div>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"El Dorado"} />
        <TitleSection>
          <PortfolioTitle textColor="text-[#E5A842]" bgColor="bg-[#E5A842]">
            El Dorado
          </PortfolioTitle>
          <PortfolioDescription className="text-lg tracking-wider leading-8">
            Para celebrar el día mundial de la pasta, pastas El Dorado decidió
            recompensar el
            <br className="hidden lg:block" /> esfuerzo de sus seguidores,
            convirtiendo las calorías que quemaran,
            <br className="hidden lg:block" /> en gramos de pasta.
          </PortfolioDescription>
        </TitleSection>
      </Section>
      <ServicesContainer>
        <Campaña360Icon color="#E5A842" />
        <ConceptualizacionIcon color="#E5A842" />
        <PautaIcon color="#E5A842" />
      </ServicesContainer>
      <div className="w-full flex flex-col justify-center items-center gap-12">
        <Image src={promImg1Desktop} className="hidden lg:block" />
        <Image src={promImg2Desktop} className="hidden lg:block" />
        <Image src={promImg1} className="block lg:hidden" />
        <Image src={promImg2} className="block lg:hidden" />
        <Image src={promImg3} className="block lg:hidden" />
        <Image src={promImg4} className="block lg:hidden" />
      </div>
      <section className="lg:px-0 pb-2 lg:pb-7 flex flex-col lg:w-[91.5%] max-w-[1760px] mx-auto">
        <Image
          src={promImg3Desktop}
          className="hidden lg:block lg:my-10 xl:my-14 2xl:my-16"
        />
        <Image src={promImg4Desktop} className="hidden lg:block" />
        <Image src={promImg5Desktop} className="hidden lg:block" />
      </section>
      <TitleSection>
        <p className="text-lg tracking-wider leading-10 text-left max-w-[620px] mx-auto mb-20">
          Sí, regalamos pasta… pero con una razón poderosa (y divertida).
          <br /> Para celebrar el Día Mundial de la Pasta, creamos una campaña
          donde las calorías quemadas se transformaban en granos de pasta El
          Dorado.
          <br /> La mecánica era simple: entrenar, subir una foto desde tu app
          de ejercicio y etiquetar a la marca.
          <br /> Una acción pensada para generar interacción real y conectar con
          una comunidad activa que ama la pasta que puso a la audiencia a
          moverse (literalmente).
          <br /> Porque cuando una marca celebra con propósito, se vuelve
          inolvidable.
        </p>
      </TitleSection>
      <Section>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"El Dorado"} />
      </Section>
      <div className="-mt-12 lg:mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
