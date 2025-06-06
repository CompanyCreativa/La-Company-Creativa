import Image from "next/image";
import rebrandingIcon from "/public/branding/rebranding.png";
import designSystemIcon from "/public/branding/design_system.png";
import motionGraphicsIcon from "/public/branding/motion_graphics.png";
import conceptualization from "/public/branding/conceptualization.png";

export default function WhatWeDo() {
  const projects = [
    {
      url: "paco_branding.png",
      title: "Eso que te abogia paco lo hace",
      description: (
        <>
          Los que piensan que el trabajo debe ser difícil
          <br />y estresante, no conoces a Paco, no conocen el futuro.
        </>
      ),
      categories: [
        {
          icon: rebrandingIcon,
          title: "Rebranding",
        },
        {
          icon: designSystemIcon,
          title: "Design System",
        },
        {
          icon: motionGraphicsIcon,
          title: "Motion Graphics",
        },
      ],
    },
    {
      url: "comfama_habitat.png",
      title: "Crea, vive, conecta",
      description:
        "Bodega Hábitat es un proyecto de vivienda y talleres comerciales ubicado en el corazón del Perpetuo Socorro",
      categories: [
        {
          icon: rebrandingIcon,
          title: "branding",
        },
        {
          icon: conceptualization,
          title: "Conceptualización",
        },
        {
          icon: designSystemIcon,
          title: "Design System",
        },
      ],
    },
    {
      url: "minipet.png",
      title: "Pequeños envases para grandes marcas",
      description: "Envases a la medida para marcas únicas",
      categories: [
        {
          icon: rebrandingIcon,
          title: "branding",
        },
        {
          icon: conceptualization,
          title: "Conceptualización",
        },
        {
          icon: designSystemIcon,
          title: "Design System",
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col justify-center gap-4">
      <h3 className="text-[33px] SpaceGrotesk font-bold text-[#23194F] uppercase text-center">
        Lo que hacemos, se ve
      </h3>
      <h4 className="inline-block w-auto text-[24px] font-medium text-companySalmon uppercase text-center border border-companySalmon border-[1px] py-2 px-4 mx-auto rounded-full">
        Y se siente
      </h4>
      <div className="flex flex-col lg:flex-row gap-4 justify-between mt-6">
        {projects.map((project, index) => (
          <div
            style={{
              backgroundImage: `url("/branding/${project.url}")`,
            }}
            className="flex flex-col w-[560px] h-[806px] gap-2 border border-white border-[23px] shadow-[0_0_16px_rgba(0,0,0,0.25)] justify-end items-start p-[23px]"
            key={index}
          >
            <h5 className="SpaceGrotesk text-[24px] text-[#FFF8EA] font-bold text-left">
              {project.title}
            </h5>
            <p className="text-[15px] text-[#FFF8EA] text-left tracking-wide">
              {project.description}
            </p>
            <div className="w-full flex justify-center mt-5">
              {project.categories.map((category, index) => (
                <div
                  key={index}
                  className="relative flex flex-col gap-2 items-center px-4"
                >
                  {index < project.categories.length - 1 && (
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2 h-1/2 w-px bg-[#FFF8EA] opacity-50" />
                  )}
                  <p className="text-[12px] text-[#FFF8EA] tracking-wider font-regular">
                    {category.title}
                  </p>
                  <Image src={category.icon} alt={category.title} />
                </div>
              ))}
            </div>
            <button>ver caso completo</button>
          </div>
        ))}
      </div>
    </section>
  );
}
