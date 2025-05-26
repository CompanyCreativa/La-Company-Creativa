import Image from "next/image";

import Section from "../../components/section";
import Form from "../../components/form";
import PortfolioTitle from "../../components/portfolio/portfolioTitle";
import Breadcrumbs from "@/app/components/breadcrumbs";
import MainContainer from "@/app/components/mainContainer";
import TitleSection from "@/app/components/portfolio/titleSection";
import PortfolioDescription from "@/app/components/portfolio/portfolioDescription";
import ServicesContainer from "@/app/components/servicesContainer";
import Campaña360Icon from "@/app/components/SVGicons/campaña360Icon";
import CampañaBrandingIcon from "@/app/components/SVGicons/campañaBrandingIcon";
import ConceptualizacionIcon from "@/app/components/SVGicons/conceptualizacionIcon";

import reflexBannerMobile from "/public/reflex/reflexBannerMobile.png";
import reflexBannerDesktop from "/public/reflex/reflexBannerDesktop.png";
import promImg1 from "/public/reflex/promImg1.png";
import promImg2 from "/public/reflex/promImg2.png";
import promImg3 from "/public/reflex/promImg3.png";
import promImg4 from "/public/reflex/promImg4.png";
import promImg5 from "/public/reflex/promImg5.png";
import Head from "next/head";

export const metadata = {
  title: "Reflex | Campaña 360° | Agencia La Company Creativa",
  description:
    "Lanzamos Réflex, la nueva etapa de Flex Living: un concepto inmobiliario flexible que refleja la personalidad de quien lo habita",
};

export default function Page() {
  return (
    <MainContainer>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="w-full">
        <Image
          src={reflexBannerMobile}
          alt="Banner Paco"
          className="block lg:hidden"
        />
      </div>
      <Section>
        <div className="w-full hidden lg:block">
          <Image
            src={reflexBannerDesktop}
            alt="Banner Desktop"
            className=" w-full"
          />
        </div>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Réflex"} />
        <TitleSection className="">
          <PortfolioTitle textColor="text-[#F193C6]">Réflex</PortfolioTitle>
          <PortfolioDescription>
            Para el lanzamiento de una nueva etapa de Flex Living, un proyecto
            inmobiliario, debíamos
            <br className="hidden lg:block" /> encontrar una nueva identidad,
            que bajo la misma sombrilla nos ayudará a darle vida.
            <br className="hidden lg:block" /> Construimos un nombre que
            siguiera siendo parte de su esencia. Uno con especial énfasis
            <br className="hidden lg:block" /> al concepto flexible que ya probó
            su efectividad. Para lograr esto encontramos un sufijo que hace
            <br className="hidden lg:block" /> eso en especial RE rebonito,
            rebueno, recargado. Así como cada acción tiene su reacción.
            <br className="hidden lg:block" /> Este Flex tendrá su Réflex. ¡Pero
            aquí no termina todo! también debíamos crear una comunicación{" "}
            <br className="hidden lg:block" />
            que diera a conocer esa flexibilidad. Y como un apartamento no es
            nada sin nadie que lo habite,
            <br className="hidden lg:block" /> llegamos a la conclusión que
            cuando esa persona abre la puerta, se convierte en su propio espacio
            <br className="hidden lg:block" /> y en el reflejo de su
            personalidad.
          </PortfolioDescription>
        </TitleSection>
      </Section>
      <ServicesContainer>
        <CampañaBrandingIcon color="#F193C6" />
        <Campaña360Icon color="#F193C6" />
        <ConceptualizacionIcon color="#F193C6" />
      </ServicesContainer>
      <div className="w-full flex flex-col justify-center items-center gap-12">
        <Image src={promImg1} />
      </div>
      <Section>
        <div className="pt-20 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <Image src={promImg2} className="w-full" />
          <Image src={promImg3} className="w-full" />
        </div>
      </Section>
      <div className="w-full">
        <Image src={promImg4} className="w-full" />
      </div>
      <div className="pt-10 lg:pt-20 lg:pb-7 lg:w-[91.5%] lg:max-w-[1760px] mx-auto">
        <Image src={promImg5} className="w-full" />
      </div>
      <TitleSection>
        <p className="text-lg tracking-wider leading-10 text-left max-w-[620px] mx-auto mb-20">
          Reflex no fue solo un cambio de nombre. Fue un cambio de mirada.{" "}
          <br />
          Rediseñamos la marca desde su identidad visual hasta su narrativa,
          apostando por una idea poderosa: no es solo dónde vives, es cómo lo
          vives.
          <br /> Creamos una imagen fresca, clara y emocional que recarga la
          experiencia de vivir en Reflex. Una marca pensada para inspirar,
          conectar y sentirse como en casa desde el primer vistazo.
        </p>
      </TitleSection>
      <Section>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Réflex"} />
      </Section>
      <div className="-mt-12 lg:mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
