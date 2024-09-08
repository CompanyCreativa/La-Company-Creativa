import Image from "next/image";

import Section from "../../components/section";
import Form from "../../components/form";
import PortfolioTitle from "../../components/portfolio/portfolioTitle";
import PortfolioDescription from "../../components/portfolio/portfolioDescription";
import MainContainer from "../../components/mainContainer";
import TitleSection from "../../components/portfolio/titleSection";
import ServicesContainer from "../../components/servicesContainer";
import MotionGraphicsIcon from "../../components/SVGicons/motionGraphicsIcon";
import Campaña360Icon from "../../components/SVGicons/campaña360Icon";
import ConceptualizacionIcon from "../../components/SVGicons/conceptualizacionIcon";
import Breadcrumbs from "@/app/components/breadcrumbs";

import booblistBanner from "/public/booblist/booblistBanner.png";
import booblistBannerMobile from "/public/booblist/booblistBannerMobile.png";
import BooblistRender1 from "/public/booblist/boblisRender1.png";
import nominacionImg from "/public/booblist/nominacionImg.png";
import CounterText from "@/app/components/booblist/counterText";

export default function Page() {
  return (
    <MainContainer>
      <div className="w-full">
        <Image
          src={booblistBannerMobile}
          alt="Banner Paco"
          className="block lg:hidden"
        />
      </div>
      <Section>
        <div className="w-full ">
          <Image
            src={booblistBanner}
            alt="Banner Desktop"
            className="hidden lg:block w-full max-h-[717px] object-cover"
          />
        </div>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"La Booblist"} />
        <TitleSection>
          <PortfolioTitle textColor="text-[#DA76B4]">
            La Booblist <span className="hidden lg:inline-block">-</span>{" "}
            <br className="lg:hidden" />{" "}
            <span className="font-light text-xl lg:text-2xl">
              la primera playlist que salva vidas
            </span>
          </PortfolioTitle>
          <PortfolioDescription>
            Entendimos que aunque el Cáncer de Mama tenga su mes, su color,
            cientos
            <br className="hidden lg:block" /> de campañas y miles de
            fundaciones, las personas no se hacen el autoexamen
            <br className="hidden lg:block" /> para prevenirlo a tiempo. Por eso
            nos aliamos (sin que ellos lo supieran)
            <br className="hidden lg:block" /> con las personas a las que sí
            escuchan todos los días, sus cantantes favoritos,
            <br className="hidden lg:block" /> para que cada vez que vayan a
            seleccionar su música favorita se encuentren
            <br className="hidden lg:block" /> con La Booblist y recuerden
            tocarse.
          </PortfolioDescription>
        </TitleSection>
      </Section>
      <ServicesContainer>
        <Campaña360Icon color="#DA76B4" />
        <ConceptualizacionIcon color="#DA76B4" />
        <MotionGraphicsIcon color="#DA76B4" />
      </ServicesContainer>
      <div className="w-full">
        <Image src={BooblistRender1} alt="Boblist Render" />
        <video
          loop
          playsInline
          webkit-playsinline
          autoPlay
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/booblist/video1.mp4" type="video/mp4" />
        </video>
        <video
          loop
          playsInline
          webkit-playsinline
          autoPlay
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="-mt-1"
        >
          <source src="/booblist/video2.mp4" type="video/mp4" />
        </video>
        <div className="bg-booblist bg-top w-full flex items-center justify-center py-10 mt-20 lg:mt-12 px-5">
          <div className="w-full max-w-[1300px] mx-auto">
            <div className="grid gap-2 lg:gap-20 border-b border-white pb-10 grid-cols-3">
              <CounterText number="+12.7k" description="Cuentas alcanzadas" />
              <CounterText number="+25k" description="Impresiones" />
              <CounterText number="+750" description="Reproducciones" />
            </div>
            <div className="text-white text-sm text-center lg:text-2xl font-bold font-montserrat flex justify-center tracking-wider py-7 border-b border-white">
              <span>
                163 minutos de música que pueden salvar miles de vidas
              </span>
            </div>
            <div className="mt-20">
              <Image
                src={nominacionImg}
                alt="nominacion a premio para la booblist"
              />
            </div>
          </div>
        </div>
      </div>
      <Section>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"La Booblist"} />
      </Section>
      <div className="-mt-12 lg:mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
