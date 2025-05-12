import Image from "next/image";
import renderPc from "/public/digital/render-pc.png";
import { motion } from "motion/react";
import Link from "next/link";

export default function MainDigitalSection() {
  const svgVariants = {
    initial: { rotate: -125, x: 30 },
    hover: { rotate: 0, x: 0 },
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-center items-center lg:items-start lg:w-[45%]">
        <h1 className="max-w-[323px] md:max-w-[500px] lg:max-w-[800px] text-center lg:text-left text-[24px] md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-thin">
          <span className=" ">
            Más clientes,
            <br className="hidden md:block" />
          </span>{" "}
          <span className=" ">
            más ventas y una{" "}
            <span className="font-semibold">
              agencia <br className="hidden md:block" /> de pauta digital
            </span>
            <br className="hidden md:block" /> que
          </span>
          <span className="font-semibold text-companySalmon \">
            {" "}
            optimiza tu inversión
          </span>
        </h1>
        <h2 className="mt-4 mb-4 text-[14px] lg:text-[16px] text-center lg:text-left font-[300]">
          <span className="font-[500]">Agencia experta</span> en estrategias de
          pauta digital Menos desperdicio,{" "}
          <span className="font-[500]">más resultados.</span>
        </h2>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
        <Link
          className="flex items-center mt-7 mb-10 gap-2 text-[12px] uppercase tracking-[3px] bg-companySalmon py-4 px-7 font-thin hover:bg-[#B92A1D] transition-all duration-300"
          href="#contact"
        >
          Hagámoslo posible{" "}
          <svg
            width="11"
            height="11"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.75 1C11.75 0.585787 11.4142 0.250001 11 0.250001L4.25 0.250001C3.83579 0.250001 3.5 0.585787 3.5 1C3.5 1.41421 3.83579 1.75 4.25 1.75H10.25V7.75C10.25 8.16421 10.5858 8.5 11 8.5C11.4142 8.5 11.75 8.16421 11.75 7.75L11.75 1ZM2.03033 11.0303L11.5303 1.53033L10.4697 0.469671L0.96967 9.96967L2.03033 11.0303Z"
              fill="#FFF8EA"
            />
            <path d="M1 1L11 1L11 11" stroke="#FFF8EA" strokeWidth="1.5" />
          </svg>
        </Link>
        <div className="hidden md:flex justify-center items-center gap-4 px-4">
          <a href="#contact">
            <motion.div
              className="flex justify-center items-center border border-white border-opacity-50 rounded-full relative cursor-pointer hover:border-transparent transition-all duration-500"
              whileHover="hover" // Cambia el estado al hacer hover
              initial="initial" // Estado inicial
            >
              <motion.svg
                width="40"
                height="30"
                viewBox="0 0 11 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-companySalmon rounded-full p-3 w-[50px] h-[50px] flex justify-center items-center"
                variants={svgVariants} // Aplicar variantes
                transition={{ duration: 0.5 }} // Duración de la animación
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.73629 8.87116C9.95211 8.65535 10.302 8.65535 10.5178 8.87116C10.7336 9.08698 10.7336 9.43688 10.5178 9.6527L5.8286 14.3419C5.61278 14.5578 5.26287 14.5578 5.04706 14.3419L0.357824 9.6527C0.142008 9.43688 0.142008 9.08698 0.357824 8.87116C0.57364 8.65535 0.923547 8.65535 1.13936 8.87116L4.8852 12.617V1.44654C4.8852 1.14133 5.13262 0.893908 5.43783 0.893909C5.74304 0.893908 5.99046 1.14133 5.99046 1.44654V12.617L9.73629 8.87116Z"
                  fill="#FFF8EA"
                />
              </motion.svg>
            </motion.div>
          </a>
          <h3 className="robout font-[300] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[28px] lg:max-w-[600px] pl-8">
            <span className="font-[500]">Potenciamos</span> tu negocio con
            campañas pagas en{" "}
            <span className="font-[500]">
              motores de búsqueda y redes sociales
            </span>{" "}
            diseñadas para vender.
          </h3>
        </div>
      </div>
      <Image
        src={renderPc}
        alt="Agencia de pauta digital"
        priority
        className="w-full lg:w-1/2 lg:object-contain"
      />
      <div className="flex md:hidden justify-center items-center gap-4 px-4 ">
        <svg
          width="40"
          height="30"
          viewBox="0 0 11 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="bg-companySalmon rounded-full p-2 min-w-[40px] h-[40px] flex justify-center items-center"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.73629 8.87116C9.95211 8.65535 10.302 8.65535 10.5178 8.87116C10.7336 9.08698 10.7336 9.43688 10.5178 9.6527L5.8286 14.3419C5.61278 14.5578 5.26287 14.5578 5.04706 14.3419L0.357824 9.6527C0.142008 9.43688 0.142008 9.08698 0.357824 8.87116C0.57364 8.65535 0.923547 8.65535 1.13936 8.87116L4.8852 12.617L4.8852 1.44654C4.8852 1.14133 5.13262 0.893908 5.43783 0.893909C5.74304 0.893908 5.99046 1.14133 5.99046 1.44654L5.99046 12.617L9.73629 8.87116Z"
            fill="#FFF8EA"
          />
        </svg>
        <p className="robout text-[14px] tracking-wider md:text-2xl lg:text-3xl font-[300]">
          <span className="font-[500]">Expertos</span> en estrategias de pauta
          digital Menos desperdicio,{" "}
          <span className="font-[500]">más resultados.</span>
        </p>
      </div>
    </div>
  );
}
