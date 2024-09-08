import Image from "next/image";

import Section from "../../components/section";
import Form from "../../components/form";
import PortfolioTitle from "../../components/portfolio/portfolioTitle";
import PortfolioDescription from "../../components/portfolio/portfolioDescription";
import MainContainer from "../../components/mainContainer";
import TitleSection from "../../components/portfolio/titleSection";
import ServicesContainer from "../../components/servicesContainer";
import CampañaBrandingIcon from "../../components/SVGicons/campañaBrandingIcon";
import PackagingIcon from "../../components/SVGicons/packagingIcon";
import ColorsGrid from "@/app/components/franca/colorsGrid";
import Breadcrumbs from "@/app/components/breadcrumbs";

import francaBanner from "/public/franca/francaBanner.png";
import francaLogoGif from "/public/franca/francaLogoGif.gif";
import francaBannerMobile from "/public/franca/francaBannerMobile.png";
import render1 from "/public/franca/img1.png";
import render2 from "/public/franca/img2.png";
import render2Mobile from "/public/franca/img2Mobile.png";
import render3 from "/public/franca/img3.png";
import gridImg1 from "/public/franca/gridImg1.png";
import gridImg2 from "/public/franca/gridImg2.png";
import gridImg3 from "/public/franca/gridImg3.png";
import gridImg4 from "/public/franca/gridImg4.png";

export default function Page() {
  return (
    <MainContainer>
      <div className="w-full">
        <Image
          src={francaBannerMobile}
          alt="Banner Paco"
          className="block lg:hidden"
        />
      </div>
      <Section>
        <div className="w-full ">
          <Image
            src={francaBanner}
            alt="Banner Desktop"
            className="hidden lg:block w-full max-h-[717px] object-cover"
          />
        </div>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Franca & Co"} />
        <TitleSection>
          <PortfolioTitle textColor="text-[#009339]" bgColor="bg-[#009339]">
            Franca & Co
          </PortfolioTitle>
          <PortfolioDescription>
            Inspirada en la transparencia de cada proceso, en la ética con{" "}
            <br className="hidden lg:block" /> la que elegimos cada ingrediente
            y la honestidad con la que <br className="hidden lg:block" /> se
            maneja cada relación. Es todo eso lo que nos convierte en{" "}
            <br className="hidden lg:block" />
            la compañía de frutas más franca y confiable.
          </PortfolioDescription>
        </TitleSection>
      </Section>
      <div className="lg:w-7/12 mx-auto">
        <Image src={francaLogoGif} alt="Franca logo animado" />
      </div>
      <ServicesContainer>
        <CampañaBrandingIcon color="#69FFA5" />
        <PackagingIcon color="#69FFA5" />
      </ServicesContainer>
      <div className="w-full">
        <Image src={render1} alt="Franca render de marca" className="w-full" />
      </div>
      <Section>
        <div className="lg:py-12 xl:py-16 flex flex-col lg:gap-20">
          <div className="grid grid-cols-2 grid-rows-2 px-3 py-12 lg:p-0">
            <div className="col-start-1 col-end-3 lg:col-end-2">
              <Image
                src={gridImg1}
                alt="Render de franca"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-start-1 lg:col-start-2 col-end-3 lg:col-end-2">
              <Image
                src={gridImg2}
                alt="Render de franca"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Image
                src={gridImg3}
                alt="Render de franca"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Image
                src={gridImg4}
                alt="Render de franca"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Image
            src={render2}
            alt="Franca render de marca"
            className="hidden lg:block"
          />

          <div className="hidden lg:block">
            <ColorsGrid />
          </div>
        </div>
      </Section>
      <div className="w-full -mt-10 lg:hidden">
        <Image
          src={render2Mobile}
          alt="Franca render de marca"
          className="lg:hidden"
        />
        <div className="">
          <ColorsGrid />
        </div>
      </div>

      <div className="w-full mt-16 lg:mt-0">
        <Image src={render3} alt="Franca Render" className="w-full" />
      </div>
      <Section>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Franca & Co"} />
      </Section>
      <div className="-mt-12 lg:mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
