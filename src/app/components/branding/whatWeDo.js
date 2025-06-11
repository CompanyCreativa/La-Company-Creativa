import Image from "next/image";
import rebrandingIcon from "/public/branding/rebranding.png";
import designSystemIcon from "/public/branding/design_system.png";
import motionGraphicsIcon from "/public/branding/motion_graphics.png";
import conceptualization from "/public/branding/conceptualization.png";
import instagramVerified from "/public/branding/instagram_verified.png";

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
      title: (
        <>
          Pequeños envases para
          <br /> grandes marcas
        </>
      ),
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
      <h3 className="text-[28px] xl:text-[29px] 2xl:text-[33px] SpaceGrotesk font-bold text-[#23194F] uppercase text-center">
        Lo que hacemos, se ve
      </h3>
      <h4 className="inline-block w-auto text-[24px] xl:text-[20px] 2xl:text-[24px] font-medium text-companySalmon uppercase text-center border border-companySalmon border-[1px] px-2 py-1 xl:py-2 xl:px-4 mx-auto rounded-full">
        Y se siente
      </h4>
      <div className="flex flex-col lg:flex-row gap-4 justify-between xl:mt-4 2xl:mt-6">
        {projects.map((project, index) => (
          <div
            style={{
              backgroundImage: `url("/branding/${project.url}")`,
              backgroundImage: `url("/branding/${project.url}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="relative flex flex-col lg:w-[300px] lg:h-[431px] xl:w-[445px] xl:h-[639px] 2xl:w-[560px] 2xl:h-[806px] xl:p-[18px] 2xl:p-[23px] gap-2 border border-white xl:border-[18px] 2xl:border-[23px] shadow-[0_0_16px_rgba(0,0,0,0.60)] justify-end items-start"
            key={index}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0" />
            <div className="z-10 w-full">
              <h5 className="flex items-start SpaceGrotesk xl:text-[20px] 2xl:text-[24px] text-[#FFF8EA] font-bold text-left gap-2">
                {project.title} <Image src={instagramVerified} />
              </h5>
              <p className="xl:text-[14px] 2xl:text-[15px] text-[#FFF8EA] text-left tracking-wide">
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
                    <p className="xl:text-[10px] 2xl:text-[12px] text-[#FFF8EA] tracking-wider font-regular">
                      {category.title}
                    </p>

                    <Image src={category.icon} alt={category.title} />
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-center mt-5">
                <button className="xl:px-[20px] 2xl:px-[29px] xl:py-[15px] 2xl:py-[20px] xl:text-[12px] 2xl:text-[13px] robout uppercase tracking-wider bg-[#FFF8EA] hover:bg-companySalmon text-[#23194F]  hover:text-[#FFF8EA] transition-all duration-300">
                  Ver caso completo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
