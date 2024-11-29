import Section from "../components/section";
import Form from "../components/form";

import pacoDesktop from "/public/portfolio/pacoPortfolio.png";
import bobListImg from "/public/portfolio/bobListImg.png";
import francaImg from "/public/portfolio/francaPortfolio.png";
import zigDesktop from "/public/portfolio/zigDesktop.png";
import terapiaDesktop from "/public/portfolio/terapiasDesktop.png";
import reflexDesktop from "/public/portfolio/reflexDesktop.png";
import doradoDesktop from "/public/portfolio/doradoDesktop.png";
import casaDesktop from "/public/portfolio/casaDesktop.png";
import bigDesktop from "/public/portfolio/bigDesktop.png";
import loveDesktop from "/public/portfolio/loveDesktop.png";
import navidadDesktop from "/public/portfolio/navidadDesktop.png";
import GridCard from "../components/gridCard";
import MainContainer from "../components/mainContainer";
import Breadcrumbs from "../components/breadcrumbs";

export default function Page() {
  return (
    <MainContainer>
      <Section className="px-5">
        <div className="my-2">
          <Breadcrumbs lastPage="Inicio" currentPage="Portafolio" />
        </div>
        <div className="flex flex-col justify-center items-center mt-8">
          <h1 className="text-center text-[32px] leading-10 lg:text-[48px]">
            <strong>¡Un montón de ideas</strong>
            <br className="lg:hidden" /> hechas realidad!
          </h1>
          <span className="text-center mt-6 tracking-wider leading-7 font-light lg:text-lg">
            Cada proyecto es una oportunidad para romperla. Mira algunos de los
            trabajos que hemos hecho.
          </span>
        </div>
        <div className="mt-16 lg:mt-20 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:justify-center lg:items-center w-full lg:pb-10">
          <GridCard
            image={pacoDesktop}
            title="Rebranding - Paco"
            link="/portafolio/paco"
          />
          <GridCard
            image={zigDesktop}
            title="Branding - ZIG ZAG"
            link="/portafolio/zig-zag"
          />
          <GridCard
            image={bobListImg}
            title="Campaña cancer de seno - la Booblist"
            link="/portafolio/booblist"
          />
          <GridCard
            image={francaImg}
            title="Branding - Franca & Co"
            link="/portafolio/franca"
          />
          <GridCard
            image={bigDesktop}
            title="Campaña de branding - Big Bang"
            link="/portafolio/bigbang"
          />
          <GridCard
            image={doradoDesktop}
            title="Campaña de branding - El Dorado"
            link="/portafolio/eldorado"
          />
          <GridCard
            image={terapiaDesktop}
            title="Ideoterapias - Ideo"
            link="/portafolio/ideoterapia"
          />
          <GridCard
            image={reflexDesktop}
            title="Campaña de lanzamiento - Réflex"
            link="/portafolio/reflex"
          />
          <GridCard
            image={loveDesktop}
            title="La diversidad nos inspira - Ideo"
            link="/portafolio/mes-del-orgullo"
          />
          <GridCard
            image={casaDesktop}
            title="Mes del orgullo LGBTI - Casa Magna"
            link="/portafolio/casaMagna"
          />
          <div className="hidden lg:block">
            <GridCard
              image={navidadDesktop}
              title="Navidad al trabajo - Casa Magna"
              link="/portafolio/navidad-al-trabajo"
            />
          </div>
        </div>
      </Section>
      <Form />
    </MainContainer>
  );
}
