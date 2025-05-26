import Image from "next/image";

import Section from "../../components/section";
import Form from "../../components/form";
import PortfolioTitle from "../../components/portfolio/portfolioTitle";
import PortfolioIcon from "../../components/SVGicons/portfolioIcon";
import MainContainer from "@/app/components/mainContainer";
import TitleSection from "@/app/components/portfolio/titleSection";
import ServicesContainer from "@/app/components/servicesContainer";
import FotografiaIcon from "@/app/components/SVGicons/fotografiaIcon";
import EdicionAudiovisualIcon from "@/app/components/SVGicons/edicionAudiovisualIcon";
import PlaneacionEstrategicaIcon from "@/app/components/SVGicons/planeacionEstrategicaIcon";
import GestionRedesIcon from "@/app/components/SVGicons/gestionRedesIcon";
import PautaIcon from "@/app/components/SVGicons/pautaIcon";
import Breadcrumbs from "@/app/components/breadcrumbs";

import bannerMobile from "/public/navidad-al-trabajo/bannerMobile.png";
import navidadBannerDesktop from "/public/navidad-al-trabajo/navidadBannerDesktop.png";
import promImg1 from "/public/navidad-al-trabajo/promImg1.png";
import promImg2 from "/public/navidad-al-trabajo/promImg2.png";
import promImg3 from "/public/navidad-al-trabajo/promImg3.png";
import ConceptualizacionIcon from "@/app/components/SVGicons/conceptualizacionIcon";
import BtlIcon from "@/app/components/SVGicons/btlIcon";
import Head from "next/head";

export const metadata = {
  title: "Navidad al trabajo | Campaña | Agencia La Company Creativa",
  description:
    "En Navidad, llevamos la alegría a quienes no podían estar con su familia. Una acción para acercar corazones, incluso en la distancia",
};

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
          <Image
            src={navidadBannerDesktop}
            alt="Banner Desktop"
            className=" w-full"
          />
        </div>
        <Breadcrumbs
          lastPage={"Portafolio"}
          currentPage={"Navidad al trabajo"}
        />
        <TitleSection>
          <PortfolioTitle textColor="text-[#5A1218]">
            Navidad al trabajo
          </PortfolioTitle>
          <div className="mt-5 relative pr-5">
            <span className="text-lg tracking-wider leading-8">
              En Navidad todo el mundo quiere estar con familia,
              desafortunadamente
              <br className="hidden lg:block" /> no es posible para muchos que
              por su trabajo deben estar lejos de casa,
              <br className="hidden lg:block" /> por eso llevamos la alegría de
              esta época al lugar menos esperado.
            </span>
          </div>
        </TitleSection>
      </Section>
      <ServicesContainer>
        <ConceptualizacionIcon color="#E4C240" />
        <EdicionAudiovisualIcon color="#E4C240" />
        <BtlIcon color="#E4C240" />
      </ServicesContainer>
      <div className="w-full flex flex-col justify-center items-center gap-16">
        <Image src={promImg1} />
        <Image src={promImg2} />
        <Image src={promImg3} />
      </div>
      <TitleSection>
        <p className="text-lg tracking-wider leading-10 text-left max-w-[620px] mx-auto mb-20">
          En Navidad, algunos no pueden estar en casa… así que llevamos la
          Navidad hasta su trabajo.
          <br /> Con esta campaña, Casa Magna quiso recordar que el hogar no
          siempre es un lugar, a veces es un momento compartido.
          <br /> Le organizamos una cena de Navidad al vigilante de IDEO, junto
          a su esposa e hija, para que pudieran celebrar juntos esa noche
          especial, en medio de turnos y deberes.
          <br /> Una acción sencilla, pero cargada de sentido. Porque dar es la
          mejor forma de habitar una marca.
        </p>
      </TitleSection>
      <Section>
        <Breadcrumbs
          lastPage={"Portafolio"}
          currentPage={"Navidad al trabajo"}
        />
      </Section>
      <div className="-mt-12 lg:mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
