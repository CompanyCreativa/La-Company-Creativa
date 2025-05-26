import Image from "next/image";

import Section from "../../components/section";
import Form from "../../components/form";
import PortfolioTitle from "../../components/portfolio/portfolioTitle";
import PortfolioIcon from "../../components/SVGicons/portfolioIcon";
import PortfolioDescription from "../../components/portfolio/portfolioDescription";
import TitleSection from "../../components/portfolio/titleSection";
import ServicesContainer from "../../components/servicesContainer";
import PautaIcon from "../../components/SVGicons/pautaIcon";
import Breadcrumbs from "@/app/components/breadcrumbs";
import Campaña360Icon from "@/app/components/SVGicons/campaña360Icon";
import ConceptualizacionIcon from "@/app/components/SVGicons/conceptualizacionIcon";

import bannerMobile from "/public/ideoterapia/ideoterapaiaBannerMobile.png";
import bannerDesktop from "/public/ideoterapia/ideoterapaiaBannerDesktop.png";
import testimonialsImg from "/public/ideoterapia/testimonialsImg.png";
import testimonial1 from "/public/ideoterapia/testimonial1.png";
import testimonial2 from "/public/ideoterapia/testimonial2.png";
import testimonial3 from "/public/ideoterapia/testimonial3.png";
import testimonial4 from "/public/ideoterapia/testimonial4.png";
import testimonial5 from "/public/ideoterapia/testimonial5.png";
import testimonial6 from "/public/ideoterapia/testimonial6.png";
import testimonial7 from "/public/ideoterapia/testimonial7.png";

import promIdeo1 from "/public/ideoterapia/promIdeo1.png";
import promIdeo2 from "/public/ideoterapia/promIdeo2.png";
import promIdeo3 from "/public/ideoterapia/promIdeo3.png";
import promIdeo4 from "/public/ideoterapia/promIdeo4.png";
import promIdeo5 from "/public/ideoterapia/promIdeo5.png";
import promIdeo6 from "/public/ideoterapia/promIdeo6.png";
import MainContainer from "@/app/components/mainContainer";
import Head from "next/head";

export const metadata = {
  title: "Ideoterapia | Campaña 360° | Agencia La Company Creativa",
  description:
    "En Ideo creamos terapias para reenamorarte de tu hogar. Porque después de la pandemia, muchos dejaron de sentirse bien en casa",
};

export default function page() {
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
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Ideoterapia"} />
        <TitleSection>
          <PortfolioTitle textColor="text-[#5EC0CB]" bgColor="bg-[#5EC0CB]">
            Ideoterapia
          </PortfolioTitle>
          <PortfolioDescription>
            Algunas cifras que hemos visto en la pandemia:
            <br className="hidden lg:block" />
            <br className="hidden lg:block" /> Aumentaron las terapias de pareja
            30%
            <br className="hidden lg:block" /> Subieron las solicitudes de
            divorcio 51% <br className="hidden lg:block" />
            Crecieron los casos de ansiedad 45%
            <br className="hidden lg:block" />
            <br className="hidden lg:block" /> Pero hay un problema al que se le
            está dando poca importancia:
            <br /> Las personas que se han cansado de su hogar y ahora no lo
            quieren ni ver. <br className="hidden lg:block" />
            Por eso en
            <strong> Ideo</strong>, decidimos hacer algo y crear las primeras
            terapias para
            <br className="hidden lg:block" /> reenamorarnos de nuestra casa.
          </PortfolioDescription>
        </TitleSection>
      </Section>
      <ServicesContainer>
        <Campaña360Icon color="#5EC0CB" />
        <ConceptualizacionIcon color="#5EC0CB" />
        <PautaIcon color="#5EC0CB" />
      </ServicesContainer>
      <div className="w-full justify-center hidden lg:flex">
        <Image src={testimonialsImg} />
      </div>
      <div className="w-full bg-[#5ec0cb] flex flex-col gap-5 px-5 py-12 lg:hidden">
        <Image src={testimonial1} />
        <Image src={testimonial2} />
        <Image src={testimonial3} className="self-end" />
        <Image src={testimonial4} />
        <Image src={testimonial5} className="self-end" />
        <Image src={testimonial6} />
        <Image src={testimonial7} />
      </div>
      <section className="lg:px-0 pb-2 lg:pb-7 flex flex-col lg:w-[91.5%] max-w-[1760px] mx-auto">
        <div className="w-full flex flex-col gap-8 justify-center items-center lg:pt-12">
          <Image src={promIdeo1} />
          <Image src={promIdeo2} className="lg:hidden" />
          <Image src={promIdeo3} />
          <Image src={promIdeo4} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-8 lg:px-0 w-full max-w-[1760px] mx-auto">
            <Image src={promIdeo5} />
            <Image src={promIdeo6} />
          </div>
        </div>
      </section>
      <TitleSection>
        <p className="text-lg tracking-wider leading-10 text-left max-w-[620px] mx-auto mb-20">
          Ideoterapia fue nuestra manera de decir: tu casa también necesita
          cariño.
          <br /> Creamos una campaña para IDEO con un objetivo claro: volver a
          enamorar a las personas de sus hogares.
          <br /> Desde frases que abrazaban hasta terapias creativas para cada
          espacio, invitamos a ver el cambio en casa como lo que es: una forma
          de cuidarse.
          <br /> Porque transformar el hogar también es terapia.
        </p>
      </TitleSection>
      <Section>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Ideoterapia"} />
      </Section>
      <div className="-mt-12 lg:mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
