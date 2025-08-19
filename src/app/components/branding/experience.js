import Image from "next/image";

import historia from "/public/branding/historia.png";
import estrategico from "/public/branding/estrategico.png";
import competencia from "/public/branding/competencia.png";
import visual from "/public/branding/visual.png";
import decoration4 from "/public/realstate/decoration4.png";
import Award from "../SVGicons/award";
import TaskAdd from "../SVGicons/taskAdd";
import Building from "../SVGicons/building";

export default function Experience({ city }) {
  return (
    <div>
      <div className="flex flex-col justify-center xl:bg-[#FFFFFF] gap-4 xl:p-12 2xl:p-16">
        <h3 className="text-xl xl:text-3xl 2xl:text-5xl SpaceGrotesk text-[#23194F] uppercase text-start lg:text-center font-light">
          <span className="text-3xl 2xl:text-5xl font-semibold SpaceGrotesk tracking-tighter">
            Más que una agencia de publicidad,
          </span>{" "}
          <br className="md:hidden" />
          somos ese aliado que piensa como tú...{" "}
          <br className="hidden md:block" />
          <span className="text-companySalmon SpaceGrotesk tracking-tighter">
            pero ejecuta <br className="md:hidden" />
            <span className="font-semibold SpaceGrotesk tracking-tighter">
              como nadie
            </span>
          </span>
        </h3>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-12 xl:gap-16">
          <div className="flex flex-col gap-12 xl:gap-16">
            <div className="flex  gap-4 items-center">
              <Award className="text-companySalmon w-10 md:w-auto" />
              <p className="text-[22px] xl:text-[20px] 2xl:text-2xl font-light text-[#23194F] SpaceGrotesk">
                <span className="font-medium SpaceGrotesk">36 Años</span> de
                experiencia
                <br /> en proyectos inmobilarios
              </p>
            </div>
            <div className="flex  gap-4 items-center">
              <TaskAdd className="text-companySalmon  w-10 md:w-auto" />
              <p className="text-[22px] xl:text-[20px] 2xl:text-2xl font-light text-[#23194F] SpaceGrotesk">
                Sabemos de pauta,
                <br /> pero también
                <span className="font-medium SpaceGrotesk"> de cierres</span>
              </p>
            </div>
            <div className="flex  gap-4 items-center">
              <Building className="text-companySalmon  w-10 md:w-auto" />
              <p className="text-[22px] xl:text-[20px] 2xl:text-2xl font-light text-[#23194F] SpaceGrotesk">
                Más de 1.000
                <span className="font-medium SpaceGrotesk">
                  {" "}
                  proyectos <br /> inmobiliarios
                </span>{" "}
                intervenidos
              </p>
            </div>
          </div>
          <Image src={decoration4} className="w-2/3 xl:w-80 2xl:w-auto" alt="Decoration" />
          <div className="flex flex-col gap-16">
            <div className="flex  gap-4 items-center">
              <Award className="text-companySalmon  w-10 md:w-auto" />
              <p className="text-[22px] xl:text-[20px] 2xl:text-2xl font-light text-[#23194F] SpaceGrotesk">
                <span className="font-medium SpaceGrotesk">
                  Equipo creativo
                </span>{" "}
                con
                <br /> experiencia en el sector
              </p>
            </div>
            <div className="flex  gap-4 items-center">
              <TaskAdd className="text-companySalmon  w-10 md:w-auto" />
              <p className="text-[22px] xl:text-[20px] 2xl:text-2xl font-light text-[#23194F] SpaceGrotesk">
                Cero discursos, muchas
                <br />
                <span className="font-medium SpaceGrotesk">
                  ideas aplicables
                </span>
              </p>
            </div>
            <div className="flex  gap-4 items-center">
              <Building className="text-companySalmon  w-10 md:w-auto" />
              <p className="text-[22px] xl:text-[20px] 2xl:text-2xl font-light text-[#23194F] SpaceGrotesk">
                Cercanía a
                <span className="font-medium SpaceGrotesk"> tu equipo</span>
                <br />
                comercial
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
