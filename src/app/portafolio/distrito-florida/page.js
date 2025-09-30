import Image from "next/image";

import Section from "../../components/section";
import Form from "../../components/form";
import PortfolioTitle from "../../components/portfolio/portfolioTitle";
import MainContainer from "@/app/components/mainContainer";
import TitleSection from "@/app/components/portfolio/titleSection";
import ServicesContainer from "@/app/components/servicesContainer";
import Breadcrumbs from "@/app/components/breadcrumbs";
import MotionGraphicsIcon from "@/app/components/SVGicons/motionGraphicsIcon";
import RebrandingIcon from "@/app/components/SVGicons/rebrandingIcon";

import bannerDesktop from "/public/distrito-florida/bannerDesktop.png";
import bannerMobile from "/public/distrito-florida/bannerMobile.webp";
import logo from "/public/distrito-florida/logo.png";
import section1 from "/public/distrito-florida/section1.png";
import section2 from "/public/distrito-florida/section2.png";
import section3 from "/public/distrito-florida/section3.png";
import section41 from "/public/distrito-florida/section4-1.png";
import section42 from "/public/distrito-florida/section4-2.png";
import section5 from "/public/distrito-florida/section5.png";

export const metadata = {
  title: "Distrito Florida | Campaña | Agencia La Company Creativa",
  description:
    "Descubre cómo construimos la marca de Distrito Florida: un proyecto inmobiliario con propósito, identidad sólida y visión de ciudad desde el branding.",
};

export default function Page() {
  const colors = [
    {
      name: (
        <>
          Naranja <br />
          Desarrollo
        </>
      ),
      hex: "#C65445",
      cm: "C:4M:79",
      yk: "Y:73 K:0",
    },
    {
      name: (
        <>
          Verde <br />
          Florida
        </>
      ),
      hex: "#164239",
      cm: "C:100M:42",
      yk: "Y:72K:57",
    },
    {
      name: (
        <>
          Verde <br />
          Volador
        </>
      ),
      hex: "#C0D16D",
      cm: "C:35M:0",
      yk: "Y:72K:0",
    },
    {
      name: (
        <>
          Azul <br />
          Evolución
        </>
      ),
      hex: "#9BBFDE",
      cm: "C:49M:12",
      yk: "Y:7K:0",
    },
    {
      name: (
        <>
          Morado <br />
          Vital
        </>
      ),
      hex: "#4D3C8A",
      cm: "C:83M:87",
      yk: "Y:1K:0",
    },
  ];

  return (
    <MainContainer>
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
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Distrito Florida"} />
        <TitleSection>
          <PortfolioTitle textColor="text-[#FB6B58]">
            Distrito Florida
          </PortfolioTitle>
          <div className="mt-5 relative pr-5">
            <span className="text-lg tracking-wider leading-8">
              Distrito Florida es mucho más que un proyecto inmobiliario; es el
              punto de partida de algo grande.
              <br className="hidden lg:block" /> Una marca pensada para crecer
              con la ciudad, para conectar a las personas con un nuevo estilo
              <br className="hidden lg:block" /> de vida y transformar el
              territorio desde lo cotidiano. Desde el nombre hasta la campaña,
              <br className="hidden lg:block" />
              todo fue construido con intención: hablarle a quienes sueñan con
              invertir, habitar o simplemente ser parte
              <br className="hidden lg:block" /> de un cambio real. Porque aquí
              no se trata solo de vender apartamentos. Se trata de crear
              <br className="hidden lg:block" /> una marca que represente lo que
              viene: movimiento, desarrollo y ciudad
            </span>
          </div>
        </TitleSection>
        <div className="w-full flex flex-col justify-center items-center gap-16 mt-16">
          <Image src={logo} />
        </div>
      </Section>
      <ServicesContainer>
        <RebrandingIcon color="#FF5A5F" />
        <MotionGraphicsIcon color="#FF5A5F" />
      </ServicesContainer>
      <div className="w-full flex flex-col justify-center items-center gap-16">
        <Image src={section1} />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-16">
        <Image src={section2} />
      </div>
      <Image src={section3} className="mt-16 w-full" />
      <div className="mt-16 flex lg:flex-row flex-col justify-around">
        {colors.map((color, index) => (
          <div className="w-[290px] flex flex-col justify-center items-center">
            <div
              className={`w-[290px] h-[290px] flex items-end p-6`}
              style={{ backgroundColor: color.hex }}
            >
              <p className="text-background text-2xl font-semibold uppercase">
                {color.name}
              </p>
            </div>
            <div className="w-full mt-8">
              <p className="text-[#164239] text-2xl font-semibold">
                {color.hex}
              </p>
              <span className="text-[#164239] text-xl mr-6 mt-2">
                {color.cm}
              </span>
              <span className="text-[#164239] text-xl">{color.yk}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center gap-16">
        <Image src={section41} className="mt-16 w-full" />
        <Image src={section42} className="mt-16 w-full" />
      </div>
      <Section className="bg-[#FB6B58] flex justify-center items-center p-8 lg:p-16 lg:pb-14 mt-16">
        <p className="text-[#FFFFFF] mosk leading-8 xl:leading-6 2xl:leading-10 text-md xl:text-xl 2xl:text-2xl font-light">
          En la creación de Distrito Florida aplicamos una estrategia de marca
          que combina naming, storytelling, key visual y un plan de comunicación
          multicanal pensado para cautivar tanto a usuarios finales como a
          inversionistas. A través de un enfoque estratégico que mezcla
          marketing inmobiliario, creatividad aplicada al territorio y branding
          emocional, logramos traducir una oportunidad urbanística en una marca
          con peso, credibilidad y sentido de pertenencia. Cada pieza desde la
          campaña digital hasta la activación en puntos físicos como Florida
          Parque Comercial fue diseñada para ser parte de una narrativa potente.
          En este caso, no hablamos solo de vender apartamentos, sino de
          construir una marca inmobiliaria con visión de ciudad.
        </p>
      </Section>
      <Image src={section5} className="mt-16 w-full hidden lg:block" />
      <Section>
        <Breadcrumbs lastPage={"Portafolio"} currentPage={"Distrito Florida"} />
      </Section>
      <div className="-mt-12 lg:mt-0">
        <Form />
      </div>
    </MainContainer>
  );
}
