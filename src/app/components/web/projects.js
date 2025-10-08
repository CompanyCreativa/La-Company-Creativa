import ButtonWeb from "./buttonWeb";
import SwiperProjects from "./swiperProjects";

export default function Projects({ children }) {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full max-w-[1300px] 2xl:max-w-[1500px] px-5 py-20 justify-between gap-10">
      <div className="flex  justify-start md:hidden mt-10">
        <ButtonWeb text="Ver portafolio completo" />
      </div>
      <SwiperProjects />
      <div className="flex flex-col gap-5">
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
        <h2 className="font-poppins text-3xl xl:text-4xl 2xl:text-5xl relative items-center justify-start uppercase font-[700] z-10 text-companySalmon">
          Nuestros proyectos
          <br /> hablan por nosotros
        </h2>
        <p className="SpaceGrotesk md:text-lg font-light max-w-[660px] z-10 text-[#E5E7EB]">
          Creamos sitios que responden a tu negocio y crecen contigo. Trabajamos
          con las principales tecnologías del mercado, siempre buscando que tu
          web sea rápida, segura y escalable.
        </p>
        <div className="flex items-end justify-end hidden md:block">
          <ButtonWeb text="Ver portafolio completo" action={"/portafolio"} />
        </div>
      </div>
    </div>
  );
}
