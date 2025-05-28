import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Section from "../../components/section";
import Form from "../../components/form";
import PortfolioTitle from "../../components/portfolio/portfolioTitle";
import PortfolioDescription from "../../components/portfolio/portfolioDescription";
import PortfolioIcon from "../../components/SVGicons/portfolioIcon";
import TitleSection from "../../components/portfolio/titleSection";
import ServicesContainer from "../../components/servicesContainer";
import CampañaBrandingIcon from "../../components/SVGicons/campañaBrandingIcon";
import DiseñoWebIcon from "../../components/SVGicons/diseñoWebIcon";
import MotionGraphicsIcon from "../../components/SVGicons/motionGraphicsIcon";
import Breadcrumbs from "@/app/components/breadcrumbs";

import bannerBigbangMobile from "/public/bigbang/bannerBigbangMobile.png";
import bannerDesktop from "/public/bigbang/bannerBigbangDesktop.png";
import img1 from "/public/bigbang/img1.png";
import img2 from "/public/bigbang/img2.png";
import img3 from "/public/bigbang/img3.png";
import img4 from "/public/bigbang/img4.png";
import blackImg1 from "/public/bigbang/blackImg1.png";
import blackImg2 from "/public/bigbang/blackImg2.png";
import blackImg3 from "/public/bigbang/blackImg3.png";
import gridImg1 from "/public/bigbang/gridImg1.png";
import gridImg2 from "/public/bigbang/gridImg2.png";
import gridImg3 from "/public/bigbang/gridImg3.png";
import gridImg4 from "/public/bigbang/gridImg4.png";
import gridImg5 from "/public/bigbang/gridImg5.png";
import gridImg6 from "/public/bigbang/gridImg6.png";
import MainContainer from "@/app/components/mainContainer";
import Head from "next/head";

export const metadata = {
  title: "Big Bang | Branding | Agencia La Company Creativa",
  description:
    "Redefinimos la consultoría con una marca en movimiento: flexible, expansiva y pensada para romper esquemas sin perder estrategia",
};

const GridChild = ({ children }) => {
  return <div className="flex justify-center items-start">{children}</div>;
};

export default function page() {
  return (
    <MainContainer>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="w-full">
        <Image
          src={bannerBigbangMobile}
          alt="Banner Paco"
          className="block lg:hidden"
        />
      </div>
      <Section>
        <div className="w-full hidden lg:block">
          <Image src={bannerDesktop} alt="Banner Desktop" className=" w-full" />
        </div>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Big Bang"} />
        <TitleSection>
          <PortfolioTitle textColor="text-[#2C4C65]">Big bang</PortfolioTitle>
          <PortfolioDescription>
            Por muchos años los consultores han construido desde sus marcas una
            <br className="hidden lg:block" />
            categoría predecible en la que no se arriesga mucho. Bueno, nos
            cansamos
            <br className="hidden lg:block" /> de eso. Aquí entendimos que desde
            la creación del universo siempre
            <br className="hidden lg:block" /> ha habido una constante: el
            movimiento. Por eso debíamos desafiar el statu
            <br className="hidden lg:block" /> quo para crear una marca
            dinámica, expandible y adaptable basada en ondas
            <br className="hidden lg:block" /> con infinidad de variaciones y
            colores que permiten expresar lo que
            <br className="hidden lg:block" /> queremos sin caer en
            convencionalismos.
          </PortfolioDescription>
        </TitleSection>
      </Section>
      <ServicesContainer>
        <CampañaBrandingIcon color="#D9463E" />
        <DiseñoWebIcon color="#D9463E" />
        <MotionGraphicsIcon color="#D9463E" />
      </ServicesContainer>
      <div className="w-full pb-5 max-w-[1780px] lg:px-5 mx-auto lg:pt-10 lg:pb-20">
        <Image src={img1} className="" />
      </div>
      <div className="py-12 px-6 bg-black grid grid-cols-1 lg:grid-cols-3 gap-8 lg:flex-row lg:gap-20">
        <Image src={blackImg1} className="" />
        <Image src={blackImg2} className="" />
        <Image src={blackImg3} className="" />
      </div>
      <div className="py-12 px-4 bg-black mt-12 w-full">
        <div className="grid grid-cols-2 gap-x-5 gap-y-7 lg:grid-cols-3 lg:gap-0 px-10">
          <GridChild>
            <Image src={gridImg1} className="" />
          </GridChild>
          <GridChild>
            <Image src={gridImg2} />
          </GridChild>
          <GridChild>
            <Image src={gridImg3} className="-mt-28 lg:mt-0 hidden lg:block" />
            <Image
              src={gridImg4}
              className="-mt-[72px] lg:mt-0 block lg:hidden"
            />
          </GridChild>
          <GridChild>
            <Image src={gridImg4} className=" hidden lg:block" />
            <Image src={gridImg5} className="block lg:hidden" />
          </GridChild>
          <div className="flex justify-center items-start lg:items-end">
            <Image src={gridImg3} className="block lg:hidden" />
            <Image src={gridImg5} className="hidden lg:block" />
          </div>
          <GridChild>
            <Image src={gridImg6} />
          </GridChild>
        </div>
      </div>
      <section className="lg:px-0 pb-2 lg:pb-7 flex flex-col lg:w-[91.5%] max-w-[1760px] mx-auto">
        <div className="mt-10 flex flex-col gap-10">
          <Image src={img2} className="w-full" />
          <Image src={img3} className="w-full" />
          <Image src={img4} className="w-full" />
        </div>
      </section>
      <TitleSection>
        <p className="text-lg tracking-wider leading-10 text-left max-w-[620px] mx-auto mb-20">
          Todo empezó con una explosión… de ideas.
          <br /> Creamos la marca Big Bang desde el inicio: nombre, concepto,
          identidad visual y narrativa.
          <br /> Diseñamos un universo gráfico donde las ondas y el movimiento
          son protagonistas, haciendo homenaje a su nombre y esencia: energía en
          expansión.
          <br /> Una marca pensada para resonar, crecer y hacerse notar desde el
          primer impacto.
        </p>
      </TitleSection>
      <Section>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Big Bang"} />
      </Section>
      <div className="-mt-12 lg:mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
