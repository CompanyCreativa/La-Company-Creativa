import Image from "next/image";

import Section from "@/app/components/section";
import Breadcrumbs from "@/app/components/breadcrumbs";
import Form from "@/app/components/form";

import imageBlog1 from "/public/blog/imageblog1.png";

export default async function Page() {
  return (
    <main className="min-h-screen bg-pattern">
      <div className="flex flex-col mt-[120px] lg:mt-[110px] px-[20px] xl:px-[200px] 2xl:px-[300px]">
        <div className="mb-10">
          <Breadcrumbs
            lastPage="Inicio"
            currentPage="¿Qué es una estrategia 360 y cómo la aplicamos en La Company Creativa?"
          />
        </div>
        <Image
          src={imageBlog1}
          alt="estrategia 360"
          className="w-full h-auto rounded-lg mb-8 mx-auto"
        />
        <Section>
          <div className="flex flex-col mt-[32px] justify-center items-center">
            <h1 className="text-[38px] lg:text-[62px] 2xl:text-[62px] text-center font-bold">
              ¿Qué es una estrategia 360 y cómo la aplicamos en La Company
              Creativa?
            </h1>
            <br />
            <div className="flex flex-col max-w-5xl">
              <p className="text-left mx-auto text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                Descubre qué es una estrategia 360 (de verdad) y cómo la
                convertimos en ideas con sentido en La Company Creativa. Y no,
                no es solo hacer “de todo un poquito”.
              </p>
              <br />
              <br />
              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                Empecemos por lo básico: ¿qué significa “estrategia 360”?
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                Una estrategia 360 es como ese outfit que te queda bien desde
                cualquier ángulo. No se trata solo de estar “en todas partes”,
                sino de tener una visión completa y coherente de cómo se
                comunica una marca en todos los puntos donde se encuentra con su
                audiencia.
                <br />
                <br />
                ¿Redes? Sí. ¿Eventos? También. ¿Punto de venta, prensa, diseño,
                <a
                  href="https://www.companycreativa.com/agencia-de-pauta-digital"
                  className="text-companySalmon underline"
                >
                  {" "}
                  pauta
                </a>
                , web, ATL, BTL y más letras? Claramente.
                <br />
                <br />
                Pero lo más importante que todo este conectado con una idea
                potente, que no se rompe, ni se disuelve, ni se contradice.
              </p>
              <br />
              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                Entonces… ¿es hacer de todo?
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                No. <br />
                Una estrategia 360 no es ser pulpo. Es ser orquesta.
                <br />
                <br />
                Aquí no se trata de hacer mil cosas porque sí. Se trata de saber
                qué decir, dónde decirlo, cómo decirlo y, sobre todo, para qué.
                <br />
                <br />Y en La Company, no hacemos ruido, hacemos sentido.
              </p>
              <br />

              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                ¿Cómo lo aplicamos en La Company Creativa?
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                No tenemos una fórmula mágica, pero sí una forma muy nuestra de
                hacer que todo funcione como un sistema bien pensado. Te
                contamos cómo lo vivimos:
              </p>
              <br />

              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                Escuchamos primero (de verdad).
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                Nos metemos en la historia del cliente como si fuera nuestra.
                Preguntamos, analizamos, volvemos a preguntar y escuchamos lo
                que no se dice.
              </p>
              <br />

              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                Trazamos una idea eje (de esas que aguantan todo).
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                Una idea poderosa, creativa, retadora. Que funcione igual en una
                valla que en un reel. Esa es nuestra brújula.
              </p>
              <br />

              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                Armamos la estrategia a medida.
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                Creamos un mapa real de los puntos de contacto de la marca. Y
                pensamos qué papel juega cada canal, cómo se conecta con los
                demás y qué tiene que sentir el usuario en cada paso.
              </p>
              <br />

              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                Ejecutamos con coraje y corazón.
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                No nos da miedo proponer. Nos emocionamos con las ideas.
                Celebramos los aciertos y ajustamos cuando toca. Pero todo,
                TODO, lo hacemos con compromiso.
              </p>
              <br />

              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                ¿Y por qué importa una estrategia 360?
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                Porque hoy las marcas no viven en una sola pantalla. Están en
                scrolls, pasillos, playlists, conversaciones, mensajes, cajas,
                correos y recuerdos.
                <br />
                <br />Y si no se cuentan bien en cada lugar, se pierden.
              </p>
              <br />

              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                En resumen
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                Una estrategia 360 no es hacer más. Es hacer mejor.
                <br /> Con una idea que se siente en todo.
                <br /> Con coherencia, creatividad y visión.
                <br /> Y en La Company, eso nos encanta.
              </p>
              <br />
              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                ¿Te quedaste con dudas, ideas o un proyecto en mente?
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                Escríbenos. Esto apenas comienza
              </p>
            </div>
          </div>
        </Section>
      </div>
      <Form />
    </main>
  );
}
