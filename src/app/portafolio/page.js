"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import Section from "../components/section";
import Form from "../components/form";
import GridCard from "../components/gridCard";
import MainContainer from "../components/mainContainer";
import Breadcrumbs from "../components/breadcrumbs";
import ModalForm from "../components/modalForm";

import pacoDesktop from "/public/portfolio/pacoPortfolio.png";
import bobListImg from "/public/portfolio/bobListImg.png";
import francaImg from "/public/portfolio/francaPortfolio.png";
import zigDesktop from "/public/portfolio/zigDesktop.png";
import terapiaDesktop from "/public/portfolio/terapiasDesktop.png";
import doradoDesktop from "/public/portfolio/doradoDesktop.png";
import casaDesktop from "/public/portfolio/casaDesktop.png";
import bigDesktop from "/public/portfolio/bigDesktop.png";
import loveDesktop from "/public/portfolio/loveDesktop.png";
import navidadDesktop from "/public/portfolio/navidadDesktop.png";
import minipet from "/public/portfolio/minipet.png";
import distritoFlorida from "/public/portfolio/distritoFlorida.png";

export default function Page() {
  return (
    <MainContainer>
      <Section>
        <div className="my-2">
          <Breadcrumbs lastPage="Inicio" currentPage="Portafolio" />
        </div>
        <div className="flex flex-col justify-center items-center mt-8">
          <h1 className="text-center text-[32px] leading-10 lg:text-[48px]">
            <strong>¡Un montón de ideas</strong>
            <br className="lg:hidden" /> hechas realidad!
          </h1>
          <span className="text-center mt-6 tracking-wider leading-7 font-light lg:text-lg">
            Esto es una muestra de lo que sucede cuando una agencia de
            publicidad trabaja con estrategia, creatividad, diseño y mucha
            actitud. Desde campañas 360, branding, producción audiovisual,
            experiencias de marca y contenido digital… cada proyecto refleja lo
            que nos mueve: coraje, corazón y resultados que marcan.
            <br />
            <br />
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
            link="/portafolio/big-bang-branding"
          />
          <GridCard
            image={doradoDesktop}
            title="Campaña de branding - El Dorado"
            link="/portafolio/pastas-el-dorado"
          />
          <GridCard
            image={terapiaDesktop}
            title="Ideoterapias - Ideo"
            link="/portafolio/ideoterapia"
          />
          <GridCard
            image={loveDesktop}
            title="La diversidad nos inspira - Ideo"
            link="/portafolio/mes-del-orgullo"
          />
          <GridCard
            image={casaDesktop}
            title="Mes del orgullo LGBTI - Casa Magna"
            link="/portafolio/casa-magna-electrodomesticos"
          />
          <div className="hidden lg:block">
            <GridCard
              image={navidadDesktop}
              title="Navidad al trabajo - Casa Magna"
              link="/portafolio/navidad-al-trabajo"
            />
          </div>
          <GridCard
            image={minipet}
            title="Envases a la medida - Minipet"
            link="/portafolio/envases-minipet"
          />
          <GridCard
            image={distritoFlorida}
            title="Vive la transformación - Distrito Florida"
            link="/portafolio/distrito-florida"
          />
        </div>
      </Section>
      <Section>
        <span className="text-center mt-6 tracking-wider leading-7 font-light lg:text-lg">
          En La Company Creativa creemos que una agencia de publicidad no solo
          debe generar ideas, sino mover emociones, construir marcas sólidas y
          lograr resultados medibles. Cada campaña 360 que desarrollamos, cada
          proyecto de branding, cada pieza de contenido digital o producción
          audiovisual tiene un propósito claro: conectar a las marcas con las
          personas de forma auténtica y estratégica. Creamos experiencias de
          marca que marcan la diferencia y trabajamos con una visión integral
          que combina creatividad, diseño y estrategia en cada paso. Si estás
          buscando una agencia que entienda tu negocio y lo lleve al siguiente
          nivel con actitud, corazón y resultados, estás en el lugar correcto.
        </span>
      </Section>
      <GoogleReCaptchaProvider reCaptchaKey="6LdvCVUqAAAAAFu4m6fcWmoaqH9ChXiuv4svye7d">
        <ModalForm />
      </GoogleReCaptchaProvider>
      <Form />
    </MainContainer>
  );
}
