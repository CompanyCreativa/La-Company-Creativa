"use client";
import Image from "next/image";

import DigitalHeader from "../components/digital/header";
import MainDigitalSection from "../components/digital/mainDigitalSection";


import iconDigital5 from "/public/digital/icon-digital5.png";
import iconDigital6 from "/public/digital/icon-digital6.png";

import logoGoogle from "/public/digital/logo-google.png";
import logoMeta from "/public/digital/logo-meta.png";
import logoTiktok from "/public/digital/logo-tiktok.png";
import logoLinkedin from "/public/digital/logo-linkedin.png";
import logoConinsa from "/public/digital/logo-coninsa.png";
import logoViva from "/public/digital/logo-viva.png";
import logoNutresa from "/public/digital/logo-nutresa.png";
import logoLondonio from "/public/digital/logo-londonio.png";
import logoIdeo from "/public/digital/logo-ideo.png";
import logoArquitectura from "/public/digital/logo-arquitectura.png";
import WhyChooseUs from "../components/digital/whyChooseUs";

export default function page() {
  return (
    <div className="relative min-h-screen bg-[#090916] overflow-hidden bg-svg-noise">
      {/* Contenido */}
      <div className="flex flex-col justify-center items-center relative z-10 text-white px-6 md:px-10 lg:px-20 py-14">
        <DigitalHeader />
        <MainDigitalSection />
        <WhyChooseUs />
        <div>
          <div>
            <div>
              <p>01</p>
              <h4>Pauta digital en Meta Ads</h4>
              <p>
                Aumenta tu visibilidad y multiplica tus ventas con campañas
                optimizadas para la generación de resultados.
              </p>
            </div>
            <div>
              <p>02</p>
              <h4>Optimización y escalamiento de campañas</h4>
              <p>
                No basta con lanzar anuncios, hay que hacerlos rentables.
                Analizamos y optimizamos cada campaña en Meta y Google Ads para
                reducir costos y aumentar conversiones.
              </p>
            </div>
            <div>
              <p>03</p>
              <h4>Anuncios Creativos</h4>
              <p>
                Anuncios que no solo llaman la atención, sino que venden.
                Creamos imágenes, videos y copys irresistibles que elevan el
                rendimiento de tus campañas
              </p>
            </div>
          </div>
          <div>
            <div>
              <h3>
                <Image src={logoGoogle} alt="iconDigital1" />
                Google Ads
              </h3>
              <p>
                Lleva tu negocio a la audiencia correcta y maximiza tu ROI con
                campañas efectivas en Google Ads.
              </p>
            </div>
            <div>
              <h3>
                <Image src={logoMeta} alt="iconDigital1" />
                Meta Ads
              </h3>
              <p>
                Aprovecha el poder de Meta Ads para conectar, convertir y
                fidelizar a tu audiencia en redes sociales.
              </p>
            </div>
            <div>
              <h3>
                <Image src={logoLinkedin} alt="iconDigital1" />
                Linkedin Ads
              </h3>
              <p>
                Llega a los tomadores de decisión con campañas estratégicas en
                LinkedIn Ads que generan conexiones y oportunidades de negocio.
              </p>
            </div>
            <div>
              <h3>
                <Image src={logoTiktok} alt="iconDigital1" />
                TikTok Ads
              </h3>
              <p>
                Llega a los tomadores de decisión con campañas estratégicas en
                LinkedIn Ads que generan conexiones y oportunidades de negocio.
              </p>
            </div>
            <h3>Especialistas en pauta digital</h3>
            <p>
              Tenemos mas de 10 años de experiencia generando campañas de pauta
              paga rentables.
            </p>
            <button>
              Explora nuestros servicios{" "}
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
          </div>
        </div>
        <div>
          <div>
            <h3>Como trabajamos:</h3>
            <div>
              <div></div>
              <p>Análisis inicial y auditoría de tu marca</p>
              <p>Creación de una estrategia personalizada</p>
              <p>Lanzamiento y optimización continua</p>
              <p>Informe de resultados y plan de mejoras mes a mes</p>
            </div>
            <button>
              Máximiza tus resultados{" "}
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
          </div>
        </div>
        <div>
          <h3>
            <Image src={iconDigital5} alt="iconDigital1" /> No desperdicies más
            presupuesto
          </h3>
          <p>“Deja que los números hablen. Nosotros hacemos que crezcan.”</p>
          <div></div>
          <h4>
            Tenemos <span>para ti:</span>
          </h4>
          <ul>
            <li>Acompañamiento experto en cada paso.</li>
            <li>Estrategias probadas.</li>
            <li>Impacto real en tus resultados.</li>
            <li>Optimización constante para mejorar tu inversión.</li>
          </ul>
          <button>
            Diagnóstico gratuito{" "}
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
        </div>
        <div>
          <h3>
            <Image src={iconDigital6} alt="iconDigital1" /> Resultados o no
            pagas:
          </h3>
          <p>
            Si en 60 días no ves mejoras en ventas o leads (siguiendo nuestras
            recomendaciones estratégicas), te devolvemos el 50% de tu dinero.
          </p>
          <button>
            Comienza ya{" "}
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
        </div>
        <div>
          <form>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Mensaje" />
            <button type="submit">Enviar</button>
          </form>
          <div>
            <h2>Expertos en pauta digital</h2>
            <div>
              <Image src={logoGoogle} alt="iconDigital1" />
              <p>Google Ads</p>
            </div>
            <div>
              <Image src={logoMeta} alt="iconDigital1" />
              <p>Meta Ads</p>
            </div>
            <div>
              <Image src={logoLinkedin} alt="iconDigital1" />
              <p>Linkedin Ads</p>
            </div>
            <div>
              <Image src={logoTiktok} alt="iconDigital1" />
              <p>Tik Tok Ads</p>
            </div>
          </div>
        </div>
        <div>
          <h3>
            CONFÍAN <span>EN NOSOTROS</span>
          </h3>
          <div>
            <Image src={logoConinsa} alt="iconDigital1" />
            <Image src={logoViva} alt="iconDigital1" />
            <Image src={logoNutresa} alt="iconDigital1" />
            <Image src={logoLondonio} alt="iconDigital1" />
            <Image src={logoIdeo} alt="iconDigital1" />
            <Image src={logoIdeo} alt="iconDigital1" />
            <Image src={logoArquitectura} alt="iconDigital1" />
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
