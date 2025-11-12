import Image from "next/image";
import PacoLogo from "/public/branding/pacoLogo.webp";
import ZigZagLogo from "/public/branding/zigZagLogo.webp";
import ImportadorasAsociadasLogo from "/public/branding/importadorasAsociadasLogo.webp";
import FrancaLogo from "/public/branding/francaLogo.webp";
import MossLogo from "/public/branding/mossLogo.webp";
import FloridaLogo from "/public/branding/floridaLogo.webp";
import Arrow from "../SVGicons/arrow";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      name: "paco",
      description: "plataforma administrativa",
      imageLogo: PacoLogo,
      imageBackground: "pacoBackground",
      categories: ["branding", "sistema de diseño", "motion graphics"],
      link: "/portafolio/paco",
    },
    {
      name: "zig zag",
      description: "modular living",
      imageLogo: ZigZagLogo,
      imageBackground: "zigZagBackground",
      categories: ["branding", "sistema de diseño"],
      link: "/portafolio/zig-zag",
    },
    {
      name: "importadoras asociadas",
      description: "rebranding",
      imageLogo: ImportadorasAsociadasLogo,
      imageBackground: "importadorasAsociadasBackground",
      categories: ["rebranding"],
      link: "/portafolio/importadoras-asociadas",
    },
    {
      name: "franca & co",
      description: "branding",
      imageLogo: FrancaLogo,
      imageBackground: "francaBackground",
      categories: ["branding"],
      link: "/portafolio/franca",
    },
    {
      name: "moss",
      description: "country living",
      imageLogo: MossLogo,
      imageBackground: "mossBackground",
      categories: ["branding"],
      link: "/portafolio/moss",
    },
    {
      name: "distrito florida",
      description: "arquitectura de marca",
      imageLogo: FloridaLogo,
      imageBackground: "floridaBackground",
      categories: ["branding"],
      link: "/portafolio/distrito-florida",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center relative xl:max-w-[1300px] 2xl:max-w-[1500px] px-4">
      <h3 className="w-full flex justify-between">
        <span className="SpaceGrotesk font-bold">Casos de éxito</span>
        <span className="SpaceGrotesk font-bold"> (02)</span>
      </h3>
      <div className="w-full h-[1px] bg-[#353535] mt-1 mb-5"></div>
      <h2 className="font-montserrat text-4xl xl:text-7xl font-bold xl:tracking-wide uppercase">
        Lo que hacemos, <br />
        se ve y se siente
      </h2>
      <div className="flex flex-col xl:grid grid-cols-2 mt-20 gap-10">
        {projects.map((project, index) => (
          <Link
            className="w-full h-[400px] xl:h-[600px] relative overflow-hidden group rounded-lg"
            key={index}
            href={project.link}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-110`}
              style={{
                backgroundImage: `url(/branding/${project.imageBackground}.webp)`,
              }}
            ></div>
            <div className="relative flex justify-between flex-col h-full px-4 py-4 xl:px-10 xl:py-8">
              <div className="w-full flex justify-between items-center">
                <span className="font-montserrat tracking-wide text-sm xl:text-lg 2xl:text-2xl uppercase text-[#E5E7EB]">
                  <span className="font-montserrat font-bold">
                    {project.name}
                  </span>{" "}
                  - {project.description}
                </span>
                <div className="relative bg-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full -rotate-45 group-hover:rotate-45 transition-all duration-300 ease-in">
                  <Arrow className="text-[#353535] z-10 " />
                  <div className="absolute w-0 h-0 group-hover:w-full bg-companySalmon transition-all duration-300 ease-in group-hover:h-full rounded-full"></div>
                </div>
              </div>
              <Image
                src={project.imageLogo}
                alt={project.name}
                className="self-center"
              />
              <div className="flex gap-2 xl:gap-5">
                {project.categories.map((category, index) => (
                  <span
                    className="bg-[#D9D9D9]/40 backdrop-blur-sm py-1 px-2 xl:py-3 xl:px-4 rounded-full font-montserrat xl:font-bold tracking-wider text-[#FFFFFF] uppercase text-[10px] xl:text-md"
                    key={index}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
