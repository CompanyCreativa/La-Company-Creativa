import Marquee from "react-fast-marquee";
import ButtonWeb from "./buttonWeb";
import CircleDotSVG from "./svgComponents/circleDotSVG";
import StarSVG from "./svgComponents/starSVG";
import StarTwoSVG from "./svgComponents/starTwoSvg";
import Image from "next/image";
import decoration from "/public/web/decoration.webp";

export default function MainSection() {
  return (
    <div className="xl:max-w-[1366px] 2xl:max-w-[1500px] w-full  py-10 flex flex-col gap-10 text-white relative z-10 px-8">
      <div className="flex items-center gap-2">
        <p className="font-poppins text-[#E5E7EB] mb-2">
          <span className="font-poppins font-semibold">
            En la Company hacemos
          </span>{" "}
          que tu marca se sienta viva en digital.
        </p>
        <div className="h-[1px] w-[50px] bg-[#E5E7EB] mb-2 hidden xl:block"></div>
        <div className="w-[10px] h-[10px] bg-[#F55548] rounded-full mb-2 hidden xl:block"></div>
        <div className="w-[10px] h-[10px] bg-[#E5E7EB] rounded-full mb-2 hidden xl:block"></div>
        <div className="w-[10px] h-[10px] bg-[#E5E7EB] rounded-full mb-2 hidden xl:block"></div>
      </div>
      <div>
        <h1 className="font-poppins text-4xl md:text-6xl xl:text-8xl relative items-center justify-start uppercase font-[700] z-10">
          Páginas web
          <br />{" "}
          <span className="font-poppins text-[#E5E7EB] pl-28 xl:pl-72">
            que venden
          </span>
          <StarSVG className="text-[#F55548] w-[80px] h-[80px] xl:w-[110px] xl:h-[110px] absolute top-[-30px] xl:top-[-10px] right-[30px] xl:left-[700px] z-20" />
          <div className="absolute bottom-[-10px] xl:bottom-[10px] left-[-20px] flex items-center justify-center">
            <CircleDotSVG className="text-[#F55548] xl:w-[120px] xl:h-[120px] w-[80px] h-[80px]" />
            <CircleDotSVG className="text-[#F55548] rotate-[-240deg] absolute top-0 left-[45px] xl:left-[70px] xl:w-[120px] xl:h-[120px] w-[80px] h-[80px]" />
            <div className="w-[90px] h-[1px] bg-[#E5E7EB] absolute top-0 top-1/2 right-[-170px] hidden xl:block"></div>
          </div>
        </h1>
      </div>
      <p className="SpaceGrotesk text-lg font-light max-w-[900px] z-10">
        En La Company sabemos que una página web no es un adorno digital: es la
        vitrina más poderosa de tu marca. Por eso diseñamos y desarrollamos
        páginas web que comunican, inspiran confianza y convierten visitas en
        clientes reales. Desde un landing page ágil hasta un ecommerce robusto,
        tu sitio web será mucho más que un link: será tu mejor vendedor.
      </p>
      <ButtonWeb
        text="Quiero mi página web ahora"
        action={"https://wa.link/103gx5"}
        newTab
        className={"max-w-[350px]"}
      />
      <div className="overflow-hidden whitespace-nowrap py-4 relative">
        <Marquee
          style={{ gap: "40px" }}
          speed={100}
          gradient={true}
          gradientWidth={100}
          gradientColor="#201C1C"
        >
          <div className="flex  font-poppins  text-5xl">
            <span className="gap-10 flex  items-center justify-center text-[#F55548] font-semibold">
              Diseño <StarTwoSVG className="text-companySalmon inline" /> Diseño{" "}
              <StarTwoSVG className="text-companySalmon inline" /> Creativo{" "}
              <StarTwoSVG className="text-companySalmon inline" /> Digital{""}
              <StarTwoSVG className="text-companySalmon inline ml-2" />
            </span>
          </div>
          <div className="flex font-poppins font-semibold text-5xl">
            <span className="gap-10 flex items-center justify-center text-[#F55548]">
              Diseño <StarTwoSVG className="text-companySalmon inline" /> Diseño{" "}
              <StarTwoSVG className="text-companySalmon inline" /> Creativo{" "}
              <StarTwoSVG className="text-companySalmon inline" /> Digital
              <StarTwoSVG className="text-companySalmon inline mr-[40px]" />
            </span>
          </div>
        </Marquee>
      </div>
      <Image src={decoration} alt="Decoration" className="absolute right-0" />
    </div>
  );
}
