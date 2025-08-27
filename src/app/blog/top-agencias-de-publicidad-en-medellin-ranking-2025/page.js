import Image from "next/image";

import imageBlog5 from "/public/blog/imageblog5.webp";
import Section from "@/app/components/section";
import Breadcrumbs from "@/app/components/breadcrumbs";
import Form from "@/app/components/form";
import Link from "next/link";

export default async function Page() {
  return (
    <main className="min-h-screen bg-pattern">
      <div className="flex flex-col mt-[120px] lg:mt-[110px] px-[20px] xl:px-[200px] 2xl:px-[300px]">
        <div className="mb-10">
          <Breadcrumbs
            lastPage="Inicio"
            currentPage="Top agencias de publicidad en Medellín - Ranking 2025"
          />
        </div>
        <Image
          src={imageBlog5}
          alt="estrategia 360"
          className="w-full h-auto rounded-lg mb-8 mx-auto"
        />
        <Section>
          <div className="flex flex-col mt-[32px] justify-center items-center">
            <h1 className="text-[38px] lg:text-5xl 2xl:text-6xl text-center font-bold">
              Top 5 agencias de publicidad en Medellín que están transformando
              marcas
            </h1>
            <br />
            <div className="flex flex-col max-w-5xl">
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg leading-8">
                Cuando hablamos de agencias de publicidad en Medellín, no
                hablamos solo de creatividad bonita. <br />
                Hablamos de estrategia, de impacto, de equipos que entienden
                marcas y las hacen crecer.
                <br /> Y como sabemos que elegir agencia no es fácil, te dejamos
                este radar de cinco agencias que están marcando el ritmo en la
                ciudad.
                <br />
                <br />
                Desde las más estratégicas hasta las más creativas, este ranking
                editorial está basado en reputación, casos reales, innovación y
                presencia en el ecosistema digital.
                <br />
                <br />Y sí, spoiler: La Company está en el primer lugar (por
                razones que te van a encantar).
              </p>
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                1. La Company Creativa - Agencia con coraje, corazón y mucha
                estrategia
              </h2>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg leading-8">
                Especialidades: branding, pauta digital, estrategia 360, diseño,
                conceptualización de campañas.
                <br />
                <br />
                Por qué está en el #1: <br />
                La Company combina una visión estratégica muy bien pensada con
                un tono creativo, humano y actual.
                <br /> No solo crea campañas, crea conexiones reales entre
                marcas y personas. <br />
                Su diferencial está en su mirada profunda: entienden el negocio
                del cliente, diseñan ideas con propósito y ejecutan con una
                estética impecable.
                <br /> <br />
                Además, tienen un sello único: coraje y corazón. <br />
                Eso se siente en todo lo que hacen, desde marcas nuevas hasta
                campañas de impacto social o experiencias de retail. <br />
                <br />
                Clientes destacados: Ideo, Casa Magna, Comfama, Colpatria,
                CORONA, Autolarte, entre otros…
                <br /> <br />
                Sitio web:{" "}
                <Link
                  href="companycreativa.com"
                  target="_blank"
                  className="underline hover:text-blue-500"
                >
                  companycreativa.com
                </Link>
                <br />
              </p>
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                2. Branch Agencia
              </h2>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Branch es una agencia de marketing digital enfocada en SEO, SEM
                y publicidad online. Su fuerte es generar leads y crear
                comunidades que conectan de verdad con las marcas, impulsando
                conversaciones auténticas y bidireccionales. <br />
                <br /> Sitio web:{" "}
                <Link
                  href="https://branch.com.co/"
                  target="_blank"
                  className="underline hover:text-blue-500"
                >
                  https://branch.com.co/
                </Link>
              </p>
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                3. BRM Medellín
              </h2>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Especialidades: automatización, CRM, experiencia de cliente.{" "}
                <br />
                <br />
                Más que una agencia creativa, BRM se posiciona como una
                consultora de customer experience. Son expertos en transformar
                datos en decisiones. <br />
                Ideales para marcas que necesitan una visión más técnica y de
                performance. <br /> <br />
                Sitio web:{" "}
                <Link
                  href="https://www.brm.com.co/ "
                  target="_blank"
                  className="underline hover:text-blue-500"
                >
                  https://www.brm.com.co/
                </Link>
              </p>
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                4. AMD Agencia
              </h2>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                AMD Agencia, con sede en Bogotá, cuenta con más de 13 años de
                experiencia en marketing digital y diseño web. Su propuesta
                combina creatividad, análisis y tecnología para ofrecer
                servicios como social media, SEO, publicidad digital y
                desarrollo de sitios web que marcan la diferencia.
                <br />
                <br />
                Sitio web:{" "}
                <Link
                  href="https://agenciadigitalamd.com/"
                  target="_blank"
                  className="underline hover:text-blue-500"
                >
                  https://agenciadigitalamd.com/
                </Link>
              </p>
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                5. Drimset
              </h2>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Drimset se especializa en ofrecer estrategias digitales
                personalizadas para negocios B2B. Su expertise está en
                herramientas como Mi Negocio Google, Google Shopping y Google
                Ads, potenciando la presencia de las marcas en el ecosistema
                digital. <br /> <br />
                Su promesa se centra en conectar a las marcas con clientes de
                manera más eficiente y estratégica, optimizando la inversión en
                publicidad digital y logrando resultados medibles.
                <br />
                <br />
                Sitio web:{" "}
                <Link
                  href="https://drimset.com/"
                  target="_blank"
                  className="underline hover:text-blue-500"
                >
                  https://drimset.com/
                </Link>
              </p>
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                En resumen...
              </h2>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                No existe una fórmula única ni una agencia perfecta para todos.
                La elección depende de lo que tu marca busque: conexión,
                estrategia, diseño, resultados medibles o todo lo anterior
                junto.
                <br /> <br />
                Lo importante es tener claro que, con el aliado correcto, una
                campaña puede pasar de ser “una más” a convertirse en una
                experiencia que la gente recuerde. Este ranking no es un
                veredicto final, sino un punto de partida para que explores y
                elijas el camino que mejor haga clic contigo y con lo que
                quieres lograr.
              </p>
              <br />
            </div>
          </div>
        </Section>
      </div>
      <Form />
    </main>
  );
}
