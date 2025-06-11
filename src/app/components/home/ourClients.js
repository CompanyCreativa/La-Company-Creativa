import Image from "next/image";

import Section from "../section";
import Button from "../button";
import GridCard from "../gridCard";

import pacoDesktop from "/public/portfolio/pacoDesktop.png";
import pacoMobile from "/public/portfolio/pacoMobile.png";
import bobDesktop from "/public/portfolio/bobDesktop.png";
import bobMobile from "/public/portfolio/bobMobile.png";
import bigDesktop from "/public/portfolio/bigDesktop.png";
import doradoDesktop from "/public/portfolio/doradoDesktop.png";
import francaImg from "/public/portfolio/francaPortfolio.png";
import terapiaDesktop from "/public/portfolio/terapiasDesktop.png";
import reflexDesktop from "/public/portfolio/reflexDesktop.png";
import zigDesktop from "/public/portfolio/zigDesktop.png";

export default function OurClients() {
  return (
    <div className="bg-[#0C0C0C] align-center items-center pt-12 pb-16 flex flex-col -mx-4 md:-mx-5 xl:-mx-10 px-4 md:px-5 xl:px-10">
      <Section>
        <div className="lg:mt-12">
          <h1 className="font-SpaceGrotesk font-normal text-white text-lg tracking-widest leading-7 lg:text-[32px] ">
            Ideas que hemos
            <span className="font-semibold text-companySalmon">
              {" "}
              materializado{" "}
            </span>
            <br /> para
            <strong className="font-semibold"> nuestros clientes</strong>
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">
            <div className="hidden lg:block">
              <GridCard
                image={pacoDesktop}
                title={"Rebranding - Paco"}
                link="/portafolio/paco"
              />
            </div>
            <div className="block lg:hidden">
              <GridCard
                image={pacoMobile}
                title={"Rebranding - Paco"}
                link="/portafolio/paco"
              />
            </div>
            <div className="hidden lg:block">
              <GridCard
                image={bobDesktop}
                title="Campaña cáncer de seno - LA BOOBLIST"
                link="/portafolio/booblist"
              />
            </div>
            <div className="block lg:hidden">
              <GridCard
                image={bobMobile}
                title="Campaña cáncer de seno - LA BOOBLIST"
                link="/portafolio/booblist"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14">
            <GridCard
              image={zigDesktop}
              title="Branding - ZIG ZAG"
              link="/portafolio/zig-zag"
            />
            <GridCard
              image={francaImg}
              title="Branding - Franca & Co"
              link="/portafolio/franca"
            />
            <div className="hidden lg:block">
              <GridCard
                image={bigDesktop}
                title="Campaña de branding - Big bang"
                link="/portafolio/big-bang-branding/"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14">
            <GridCard
              image={doradoDesktop}
              title="Campaña de branding - El dorado"
              link="/portafolio/pastas-el-dorado"
            />
            <div className="hidden lg:block">
              <GridCard
                image={reflexDesktop}
                title="Campaña de lanzamiento - Réflex"
                link="/portafolio/reflex"
              />
            </div>
            <GridCard
              image={terapiaDesktop}
              title="Ideoterapias Ideo"
              link="/portafolio/ideoterapia"
            />
          </div>
        </div>
      </Section>
      <div className="flex items-center w-full justify-start md:justify-center pl-5 md:pl-0">
        <Button color="cream" type={"link"} link="/portafolio">
          Ver más
        </Button>
      </div>
    </div>
  );
}
