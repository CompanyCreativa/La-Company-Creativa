import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import Section from "../../components/section";
import PortfolioIcon from "../../components/SVGicons/portfolioIcon";
import Form from "../../components/form";
import PortfolioTitle from "../../components/portfolio/portfolioTitle";
import PortfolioDescription from "../../components/portfolio/portfolioDescription";
import ServicesContainer from "../../components/servicesContainer";
import SistemaDiseñoIcon from "../../components/SVGicons/sistemaDiseñoIcon";
import RebrandingIcon from "../../components/SVGicons/rebrandingIcon";
import MotionGraphicsIcon from "../../components/SVGicons/motionGraphicsIcon";
import TitleSection from "../../components/portfolio/titleSection";
import MainContainer from "../../components/mainContainer";

import pacoLogoGif from "/public/paco/pacoLogoGif.gif";
import pacoLogoText from "/public/paco/pacoLogoText.png";
import pacoImg from "/public/paco/pacoImg.png";
import bannerPacoMobile from "/public/paco/bannerPacoMobile.png";
import pacoProm from "/public/paco/pacoProm.png";
import bannerDesktop from "/public/paco/pacoBannerDesktop.png";
import Breadcrumbs from "@/app/components/breadcrumbs";
import Head from "next/head";

export default function Page() {
  return (
    <MainContainer>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="w-full">
        <Image
          src={bannerPacoMobile}
          alt="Banner Paco"
          className="block lg:hidden"
        />
      </div>
      <Section>
        <div className="w-full hidden lg:block">
          <Image src={bannerDesktop} alt="Banner Desktop" className=" w-full" />
        </div>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Paco"} />
        <TitleSection>
          <PortfolioTitle textColor="text-[#FF5A5F]">Paco</PortfolioTitle>
          <PortfolioDescription>
            Los que piensan que el trabajo debe ser difícil y estresante, no
            conocen a Paco, no
            <br className="hidden lg:block" /> conocen el futuro. Por eso
            creamos una nueva marca para representar la herramienta
            <br className="hidden lg:block" /> que ayuda en todo eso que quita
            gran parte del tiempo que cada vez es más valioso.
          </PortfolioDescription>
          <Image
            src={pacoLogoText}
            alt=""
            className="mt-16 mx-auto w-[200px] lg:w-auto"
          />
        </TitleSection>
      </Section>
      <ServicesContainer>
        <RebrandingIcon color={"#FF5A5F"} />
        <SistemaDiseñoIcon color={"#FF5A5F"} />
        <MotionGraphicsIcon color={"#FF5A5F"} />
      </ServicesContainer>
      <div className="w-full">
        <video
          loop
          autoPlay
          playsInline
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/paco/pacoIntro.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col-reverse lg:flex-col">
        <div className="w-full flex justify-center items-center py-10 px-9 lg:px-0">
          <Image src={pacoImg} alt="Paco Image" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 w-full max-w-[1780px] mx-auto lg:px-5">
          <div className="flex justify-center items-center px-7 lg:p-0 ">
            <Image src={pacoProm} alt="Paco Promotion" />
          </div>
          <div className="min-h-[260px] flex justify-center items-center bg-[#003357] mb-[4.7%]">
            <Image src={pacoLogoGif} alt="Paco Logo" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center lg:mt-20 ">
        <video
          loop
          autoPlay
          playsInline
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/paco/Pantallas.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-full max-w-[1780px] mx-auto px-5 hidden justify-center items-center h-[505px] mt-20 lg:flex">
        <div className="w-full">
          <video
            loop
            autoPlay
            playsInline
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="/paco/pacoVideoLogo.mp4" type="video/mp4" />
          </video>
          <div className="mt-10 lg:hidden">
            <Breadcrumbs lastPage={"Portafolio"} currentPage={"Paco"} />
          </div>
        </div>
      </div>
      <Section>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Paco"} />
      </Section>
      <div className="-mt-12 lg:mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
