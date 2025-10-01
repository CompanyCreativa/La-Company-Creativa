import Image from "next/image";
import ButtonWeb from "./buttonWeb";
import decorationTwo from "/public/web/decorationtwo.webp";
import decorationThree from "/public/web/decorationthree.webp";
import decorationFour from "/public/web/decorationfour.webp";
import decorationFive from "/public/web/decorationfive.webp";

export default function Skills({ children }) {
  const services = [
    {
      title: "Ecommerce",
      subtitle: (
        <>
          Comercio <span className="font-semibold font-poppins">digital</span>
        </>
      ),
      tecnologies: ["Wordpress", "Shopify", "Figma"],
      image: decorationTwo,
      text: "Tiendas en línea hechas para vender: intuitivas, seguras y optimizadas para que tus productos lleguen más lejos y a más personas.",
    },
    {
      title: "Sitios web",
      subtitle: (
        <>
          Espacios <span className="font-semibold font-poppins">digitales</span>
        </>
      ),
      tecnologies: ["Wordpress", "SEO", "Next.js", "Figma"],
      image: decorationThree,
      text: "Diseñamos sitios corporativos y de marca que cuentan tu historia, muestran tu portafolio y generan confianza desde la primera visita.",
    },
    {
      title: "Landing page",
      subtitle: (
        <>
          Página de{" "}
          <span className="font-semibold font-poppins">resultados</span>
        </>
      ),
      tecnologies: ["Wordpress", "SEO", "Figma"],
      image: decorationFour,
      text: "Para campañas, lanzamientos o productos específicos. Páginas web simples, rápidas y enfocadas en la conversión.",
    },
  ];

  return (
    <div className="w-full flex flex-col max-w-[1366px] 2xl:max-w-[1500px] mx-auto py-20 px-5">
      <div className="flex items-center gap-2">
        <p className="font-poppins text-[#E5E7EB] mb-2">
          Impulsamos tu web con tecnología de punta
        </p>
        <div className="h-[1px] w-[50px] bg-[#E5E7EB] mb-2 hidden xl:block"></div>
        <div className="w-[10px] h-[10px] bg-[#F55548] rounded-full mb-2 hidden xl:block"></div>
        <div className="w-[10px] h-[10px] bg-[#E5E7EB] rounded-full mb-2 hidden xl:block"></div>
        <div className="w-[10px] h-[10px] bg-[#E5E7EB] rounded-full mb-2 hidden xl:block"></div>
      </div>
      <h2 className="text-3xl xl:text-4xl 2xl:text-6xl text-[#E5E7EB] font-bold font-poppins mb-10 text-[#F55548] leading-2">
        Usamos la tecnología
        <br /> como{" "}
        <div
          alt="decoration"
          className="bg-[url('/web/decorationFive.webp')] bg-cover bg-center h-12 rounded-full w-40 inline-block grayscale text-[16px] relative top-2 ml-2 group hover:bg-blend-darken transition-all duration-300 ease-in-out hover:bg-black/50 bg-black/0"
        >
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 font-poppins text-[#E5E7EB] font-light group-hover:opacity-100 transition duration-300 ease-in-out select-none ">
            Casos&nbsp;de&nbsp;éxito
          </p>
        </div>{" "}
        <span className="font-poppins text-[#FF8F87] leading-tight">
          aliada,
          <br /> no como obstáculo.
        </span>
      </h2>
      <p className="SpaceGrotesk text-lg font-light max-w-[660px] z-10 text-[#E5E7EB]">
        Creamos sitios que responden a tu negocio y crecen contigo. Trabajamos
        con las principales tecnologías del mercado, siempre buscando que tu web
        sea rápida, segura y escalable.
      </p>
      <div className="mt-10 mb-20">
        <ButtonWeb text="Contáctanos" className="w-auto" />
      </div>
      <div>
        <h3>Habilidades</h3>
      </div>
    </div>
  );
}
