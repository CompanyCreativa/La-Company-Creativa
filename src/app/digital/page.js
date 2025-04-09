"use client";
import Image from "next/image";

import DigitalHeader from "../components/digital/header";

import renderPc from "/public/digital/render-pc.png";

export default function page() {
  return (
    <div className="relative min-h-screen bg-[#090916] overflow-hidden bg-svg-noise">
      {/* Contenido */}
      <div className="flex flex-col justify-center items-center relative z-10 text-white px-6 py-14 border border-white">
        <DigitalHeader />
        <div>
          <h2 className="max-w-[323px] text-[24px] md:text-4xl lg:text-5xl xl:text-6xl text-center font-thin">
            <span className="font-semibold">Más clientes,</span> más ventas y
            una agencia de marketing digital que
            <span className="font-semibold text-companySalmon">
              {" "}
              optimiza tu inversión
            </span>
          </h2>
          <p className="mt-4 text-[16px] md:text-2xl lg:text-3xl text-center font-thin">
            <span>Potenciamos</span> tu negocio con campañas pagas en{" "}
            <span>motores de búsqueda y redes sociales</span> diseñadas para
            vender.
          </p>
          <div class="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          <button>
            Hello{" "}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.75 1C11.75 0.585787 11.4142 0.250001 11 0.250001L4.25 0.250001C3.83579 0.250001 3.5 0.585787 3.5 1C3.5 1.41421 3.83579 1.75 4.25 1.75H10.25V7.75C10.25 8.16421 10.5858 8.5 11 8.5C11.4142 8.5 11.75 8.16421 11.75 7.75L11.75 1ZM2.03033 11.0303L11.5303 1.53033L10.4697 0.469671L0.96967 9.96967L2.03033 11.0303Z"
                fill="#FFF8EA"
              />
              <path d="M1 1L11 1L11 11" stroke="#FFF8EA" stroke-width="1.5" />
            </svg>
          </button>
          <Image src={renderPc} alt="render-pc" priority />
          <div>
            <svg
              width="11"
              height="15"
              viewBox="0 0 11 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.73629 8.87116C9.95211 8.65535 10.302 8.65535 10.5178 8.87116C10.7336 9.08698 10.7336 9.43688 10.5178 9.6527L5.8286 14.3419C5.61278 14.5578 5.26287 14.5578 5.04706 14.3419L0.357824 9.6527C0.142008 9.43688 0.142008 9.08698 0.357824 8.87116C0.57364 8.65535 0.923547 8.65535 1.13936 8.87116L4.8852 12.617L4.8852 1.44654C4.8852 1.14133 5.13262 0.893908 5.43783 0.893909C5.74304 0.893908 5.99046 1.14133 5.99046 1.44654L5.99046 12.617L9.73629 8.87116Z"
                fill="#FFF8EA"
              />
            </svg>
            <p>
              <span>Expertos</span> en estrategias de pauta digital Menos
              desperdicio, <span>más resultados.</span>
            </p>
          </div>
          <div>
            <h3>¿Por qué elegirnos?</h3>
          </div>
        </div>
      </div>

      {/* Luces difuminadas */}
      <div className="absolute left-[10%] top-[-400px] w-[1200px] h-[800px] bg-[#ffb600] rounded-full blur-3xl opacity-[0.05] animate-float1 z-0" />
      <div className="absolute right-[-200px] top-[-200px] w-[500px] h-[500px] bg-[#324a8c] rounded-full blur-3xl opacity-20 animate-float2 z-0" />
      <div className="absolute top-[30%] left-[50%] w-[200px] h-[200px] bg-blue-400 rounded-full blur-2xl opacity-25 animate-float3 z-0" />
    </div>
  );
}
