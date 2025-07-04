import Image from "next/image";

import realStateMainBanner from "/public/realstate/realstate-main-banner.png";
import Link from "next/link";

export default function MainSection({ city }) {
  return (
    <div className="-mt-[88.64px] md:mt-[40px] lg:mx-0 flex justify-between w-full">
      <div className="lg:w-1/2 mt-20 flex flex-col justify-center lg:justify-center">
        <h1 className="relative mt-[24px] md:mt-[0px] text-5xl md:text-[65px] xl:text-6xl 2xl:text-8xl text-companySalmon font-semibold 2xl:text-start z-10 SpaceGrotesk uppercase">
          Conectamos <br />
          <span className="hidden lg:block SpaceGrotesk text-start xl:text-5xl 2xl:text-7xl text-[#23194F] font-light">
            proyectos&nbsp;inmobiliarios
            <br />
            con&nbsp;
            <span className=" SpaceGrotesk font-semibold">
              compradores&nbsp;reales
            </span>
          </span>
          <span className="block lg:hidden SpaceGrotesk text-4xl text-start text-[#23194F] font-light leading-[1.2]">
            proyectos inmobiliarios con
            <strong className="leading-[1.2] SpaceGrotesk font-semibold">
              {" "}
              compradores reales
            </strong>
          </span>
        </h1>
        <h4 className="hidden lg:block xl:text-md 2xl:text-xl text-[#23194F]">
          Somos especialistas en{" "}
          <span className="font-semibold"> publicidad y mercadeo </span>
          para inmobiliarias.
        </h4>
        <div className="flex justify-start">
          <Link
            className="inline-block robout px-6 py-3 mt-4 2xl:mt-6 text-sm 2xl:text-lg bg-companySalmon hover:bg-[#23194F] text-[#FFF8EA] transition duration-300 ease-in-out"
            href="https://wa.link/pemtg8"
            target="_blank"
          >
            Solicita diagnóstico gratuito
          </Link>
        </div>
        <div
          className="relative flex flex-col md:flex-row lg:items-end justify-end lg:justify-around gap-6 px-4 xl:px-10 py-4 xl:py-10 2xl:py-16 mt-10 bg-no-repeat bg-center bg-cover min-h-[207px] xl:min-h-[308px] 2xl:min-h-[400px] 2xl:mt-auto rounded-2xl lg:rounded-0
             bg-[url('/realstate/decoration1Mobile.png')] md:bg-[url('/realstate/decoration1.png')]"
        >
          <h3 className="text-2xl 2xl:text-3xl text-[#FFF8EA] font-light robout text-start max-w-lg">
            Somos expertos <br />
            en comunicación <span className="font-semibold">inmobiliaria</span>
          </h3>
          <Link
            className="hidden md:flex w-auto inline-block robout px-6 py-3 text-sm 2xl:text-lg bg-companySalmon hover:bg-[#FFF8EA] hover:text-companySalmon text-[#FFF8EA] transition duration-300 ease-in-out"
            href="#proyects"
          >
            Ver casos de éxito
          </Link>
        </div>
        <Link
          className="lg:hidden w-auto inline-block robout px-6 py-3 text-sm 2xl:text-lg bg-companySalmon hover:bg-[#FFF8EA] hover:text-companySalmon transition duration-300 ease-in-out mt-6"
          href="#proyects"
        >
          Ver casos de éxito
        </Link>
      </div>
      <div className="hidden lg:block w-1/2 flex justify-end">
        <Image
          src={realStateMainBanner}
          alt="realstate image"
          className="w-full"
          priority={true}
        />
      </div>
    </div>
  );
}
