import Image from "next/image";
import ButtonWeb from "./buttonWeb";
import decorationTwo from "/public/web/decorationtwo.webp";
import decorationThree from "/public/web/decorationthree.webp";
import decorationFour from "/public/web/decorationfour.webp";

export default function Services({ children }) {
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
          Soluciones digitales modernas que impulsan tu marca que tu marca se
          sienta viva en digital.
        </p>
        <div className="h-[1px] w-[50px] bg-[#E5E7EB] mb-2 hidden xl:block"></div>
        <div className="w-[10px] h-[10px] bg-[#F55548] rounded-full mb-2 hidden xl:block"></div>
        <div className="w-[10px] h-[10px] bg-[#E5E7EB] rounded-full mb-2 hidden xl:block"></div>
        <div className="w-[10px] h-[10px] bg-[#E5E7EB] rounded-full mb-2 hidden xl:block"></div>
      </div>
      <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-[#E5E7EB] font-bold font-poppins mb-10">
        Servicios de diseño web a tu medida
      </h2>
      <div className="flex flex-col xl:flex-row gap-10 xl:gap-5 justify-between items-center">
        {services.map((service, index) => (
          <div className="border border-[#343232] rounded-xl p-5 xl:p-8 2xl:p-10 xl:max-w-[440px] 2xl:max-w-[475px] group/card hover:border-[#F7F7F7] transition-colors duration-300 ease-in-out items-stretch">
            <div className="flex items-start mb-5 w-full justify-between ">
              <Image
                src={service.image}
                alt="decoration"
                className="grayscale"
              />
              <h3 className="text-3xl text-[#393737] font-poppins font-bold group-hover/card:text-[#E5E7EB] transition-colors duration-300 ease-in-out">
                {service.title}
              </h3>
            </div>
            <div className="relative  after:content-[''] after:absolute after:top-[10px] after:right-0 after:w-[20px] after:h-[20px] after:border-t after:border-r after:border-[#9CA3AF]">
              <h4 className="text-2xl text-[#E5E7EB] font-poppins mb-5">
                {service.subtitle}
              </h4>
              <div className="flex gap-3 text-sm text-[#9CA3AF]  ">
                {service.tecnologies.map((tec) => (
                  <span className="border border-[#9CA3AF] border-[1px] py-1 px-4 md:px-5 rounded-md SpaceGrotesk text-xs md:text-sm">
                    {tec}
                  </span>
                ))}
              </div>
              <p className="text-[#E5E7EB] mt-5 md:mb-10 leading-6 SpaceGrotesk">
                {service.text}
              </p>
              <div className="w-full justify-center mt-20 hidden md:flex">
                <ButtonWeb
                  text="Mas información"
                  className="group-hover/card:bg-[#E5E7EB] opacity-0 group-hover/card:opacity-100 transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        ))}
        <ButtonWeb text="Mas información" className=" md:hidden mt-5" />
      </div>
    </div>
  );
}
