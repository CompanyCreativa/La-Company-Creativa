import Image from "next/image";

import Section from "../../components/section";
import Form from "../../components/form";
import PortfolioTitle from "../../components/portfolio/portfolioTitle";
import PortfolioDescription from "../../components/portfolio/portfolioDescription";
import MainContainer from "../../components/mainContainer";
import TitleSection from "../../components/portfolio/titleSection";
import ServicesContainer from "../../components/servicesContainer";
import CampañaBrandingIcon from "../../components/SVGicons/campañaBrandingIcon";
import ZigzagGrid from "../../components/zigzag/zigzagGrid";
import Breadcrumbs from "@/app/components/breadcrumbs";

import zigzagBanner from "/public/zigzag.gif";
import zigzagBannerMobile from "/public/zigzagMobile.gif";
import zigzagImg1 from "/public/zig-zag/zigzagImg1.png";
import zigzagImg1Mobile from "/public/zig-zag/zigzagImg1Mobile.png";
import history1Img from "/public/zig-zag/history1.png";
import history2Img from "/public/zig-zag/history2.png";
import history3Img from "/public/zig-zag/history3.png";
import zigzagRender1 from "/public/zig-zag/zigzagRender1.png";
import zigzagRender2 from "/public/zig-zag/zigzagRender2.png";
import zigzagMockup from "/public/zig-zag/zigzagMockup.png";
import ZigzagAltoSection from "@/app/components/zigzag/zigzagAltoSection";
import Head from "next/head";

export const metadata = {
  title: "Zig Zag | Branding | Agencia La Company Creativa",
  description:
    "Es cambio constante. Es la flexibilidad de los espacios. Es arquitectura que se abre y se adapta al mundo",
};

export default function Page() {
  return (
    <MainContainer>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="w-full">
        <Image
          src={zigzagBannerMobile}
          alt="Banner Paco"
          className="block lg:hidden h-[290px] object-cover"
        />
      </div>
      <Section>
        <div className="w-full hidden lg:block">
          <Image
            src={zigzagBanner}
            alt="Banner Desktop"
            className="w-full lg:max-h-[410px] xl:max-h-[500px] 2xl:max-h-[717px] object-cover"
          />
          
        </div>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"ZIG ZAG"} />
        <TitleSection>
          <PortfolioTitle textColor="text-[#212121]" bgColor="bg-[#212121]">
            ZIG ZAG
          </PortfolioTitle>
          <PortfolioDescription>
            Es cambio constante. Es la flexibilidad de los espacios.
            <br className="hidden lg:block" /> Es arquitectura que se abre y se
            adapta al mundo.
          </PortfolioDescription>
        </TitleSection>
      </Section>
      <ServicesContainer>
        <CampañaBrandingIcon />
      </ServicesContainer>
      <div className="w-full">
        <Image
          src={zigzagImg1}
          alt="Apartamentos zig-zag"
          className="w-full hidden lg:block"
        />
        <Image
          src={zigzagImg1Mobile}
          alt="Apartamentos zig-zag"
          className="w-full lg:hidden"
        />
      </div>
      <ZigzagGrid />
      <div className="bg-zigzagBg flex flex-col gap-10 justify-between px-12 py-24 -mt-1 lg:flex-row lg:gap-0 lg:px-32 lg:pt-32 lg:pb-24">
        <Image
          src={history1Img}
          alt="Historia destacada de Zig-zag"
          className="w-full lg:w-[28%]"
        />
        <Image
          src={history2Img}
          alt="Historia destacada de Zig-zag"
          className="w-full lg:w-[28%]"
        />
        <Image
          src={history3Img}
          alt="Historia destacada de Zig-zag"
          className="w-full lg:w-[28%]"
        />
      </div>
      <Section>
        <div className="flex flex-col gap-12 py-10 lg:px-0 lg:py-12 2xl:py-24 2xl:gap-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 2xl:gap-24 ">
            <Image
              src={zigzagRender1}
              alt="Render pertenciente al proyecto Zig-zag"
              className=""
            />
            <Image
              src={zigzagRender2}
              alt="Render pertenciente al proyecto Zig-zag"
              className=""
            />
          </div>
          <div className="hidden lg:block">
            <Image src={zigzagMockup} alt="Zig-zag mockup" />
          </div>
        </div>
        <div className="hidden lg:block">
          <ZigzagAltoSection />
        </div>
        <TitleSection>
          <p className="text-lg tracking-wider leading-10 text-left max-w-[620px] mx-auto mb-20">
            Zig Zag nació con una idea clara y nosotros la convertimos en marca.{" "}
            <br />
            Creamos el concepto, la identidad visual, el tono y todo el universo
            que le da vida a Zig Zag.
            <br /> Desde el naming hasta el brandbook completo, construimos una
            marca versátil, dinámica y con propósito, pensada para conectar con
            su audiencia desde el primer trazo.
            <br /> Una creación hecha con estrategia, diseño… y el toque
            irreverente que no podía faltar.
          </p>
        </TitleSection>
        <div className="mt-2 hidden lg:block">
          <Breadcrumbs lastPage={"Portafolio"} currentPage={"Zig Zag"} />
        </div>
      </Section>
      <div className="-mt-10 lg:hidden">
        <ZigzagAltoSection />
      </div>

      <div className="px-8 pt-2 pb-8 lg:hidden">
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Zig Zag"} />
      </div>
      <div className="-mt-12 lg:-mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
