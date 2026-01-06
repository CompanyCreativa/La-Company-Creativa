import Image from "next/image";
import ButtonWeb from "./buttonWeb";
import decorationSix from "/public/web/decorationSix.webp";

export default function Skills({ children }) {
  const skills = [
    {
      title: "WordPress",
      progress: "100%",
    },
    {
      title: "Integraciones CRM",
      progress: "95%",
    },
    {
      title: "WooCommerce",
      progress: "100%",
    },
    {
      title: "SEO técnico y on-page",
      progress: "100%",
    },
    {
      title: "Shopify",
      progress: "95%",
    },
    {
      title: "Diseño UX/UI (Figma)",
      progress: "100%",
    },
    {
      title: "JS / React, Next.js",
      progress: "100%",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1300px] 2xl:max-w-[1500px] mx-auto items-end px-5 pb-10 xl:pb-20">
      <div className="flex flex-col ] pt-10 xl:pt-20 ">
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
          Usamos&nbsp;la&nbsp;tecnología
          <br /> como{" "}
          <div
            alt="decoration"
            className="bg-[url('/web/decorationFive.webp')] bg-cover bg-center h-12 rounded-full w-40 inline-block grayscale text-[16px] relative top-2 ml-2 group hover:bg-blend-darken transition-all duration-300 ease-in-out hover:bg-black/50 bg-black/0 hidden md:inline-block"
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
        <p className="SpaceGrotesk md:text-lg font-light max-w-[660px] z-10 text-[#E5E7EB]">
          Creamos sitios que responden a tu negocio y crecen contigo. Trabajamos
          con las principales tecnologías del mercado, siempre buscando que tu
          web sea rápida, segura y escalable.
        </p>
        <div className="mt-10 mb-20">
          <ButtonWeb
            text="Contáctanos"
            className="w-auto"
            action={"https://wa.link/103gx5"}
            newTab
          />
        </div>
        <div className="border border-[#343232] rounded-xl p-5 xl:p-8 2xl:p-10 max-w-[700px]">
          <h3 className="text-3xl 2xl:text-2xl font-bold text-[#F55548] font-poppins ">
            Habilidades
          </h3>
          <div className="md:grid grid-cols-2 gap-x-10">
            {skills.map((skill, index) => (
              <div className="mt-5 flex flex-col ">
                <span className="SpaceGrotesk text-[#E5E7EB] text-lg">
                  {skill.title}
                </span>
                <div className="flex gap-3 items-center">
                  <div className="h-3 w-full bg-[#343232] rounded-full">
                    <div
                      className={`h-3 w-[${skill.progress}] bg-gradient-to-b from-[#A9A9A9] to-[#F7F7F7] rounded-full`}
                    ></div>
                  </div>
                  <span className="mt-1 font-poppins text-[#FFFFFF]/70">
                    {skill.progress}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col items-center justify-center">
        <Image
          src={decorationSix}
          alt="decoration"
          className="grayscale  [mask-image:linear-gradient(black_70%,transparent)] 
         [mask-repeat:no-repeat] 
         [mask-size:100%]"
        />
        <div className="flex w-full gap-2 md:gap-10 mt-10 items-center  justify-between md:justify-center wrap">
          <div className="text-center ">
            <h2 className="font-poppins font-bold text-2xl md:text-4xl text-[#F55548]">
              3 países
            </h2>
            <span className="SpaceGrotesk text-xs xl:text-md 2xl::text-lg text-[#E5E7EB]">
              Colombia, México, USA
            </span>
          </div>
          <div className="text-center ">
            <h2 className="font-poppins font-bold text-2xl md:text-4xl text-[#F55548]">
              +30
            </h2>
            <span className="SpaceGrotesk text-xs xl:text-md 2xl::text-lg text-[#E5E7EB]">
              Años de experiencia
            </span>
          </div>
          <div className="text-center ">
            <h2 className="font-poppins font-bold text-2xl md:text-4xl text-[#F55548]">
              +100
            </h2>
            <span className="SpaceGrotesk text-xs xl:text-md 2xl::text-lg text-[#E5E7EB]">
              clientes satisfechos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
