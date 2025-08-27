import Image from "next/image";

import imageBlog3 from "/public/blog/imageblog3.webp";
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
            currentPage="¿Qué puede hacer la IA por tu marca? (Y qué no debería)"
          />
        </div>
        <Image
          src={imageBlog3}
          alt="estrategia 360"
          className="w-full h-auto rounded-lg mb-8 mx-auto"
        />
        <Section>
          <div className="flex flex-col mt-[32px] justify-center items-center">
            <h1 className="text-[38px] lg:text-5xl 2xl:text-6xl text-center font-bold">
              ¿Qué puede hacer la IA por tu marca? <br />
              (Y qué no debería)
            </h1>
            <br />
            <div className="flex flex-col max-w-5xl">
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg leading-8">
                Una guía con criterio para no usarla “porque sí”.
                <br />
                <br />
                La inteligencia artificial dejó de ser cosa de ciencia ficción
                para volverse parte del día a día de quienes trabajamos con
                marcas. Desde una agencia de branding hasta un equipo de
                contenidos o un emprendedor que lanza su marca desde cero, todos
                tenemos la misma pregunta:
                <br />
                <br />
                ¿Hasta dónde se puede usar la IA sin que lo humano se pierda?
                <br />
                <br />
                La respuesta corta: hasta donde tenga sentido. La larga, te la
                contamos en este blog.
              </p>
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                La IA no reemplaza, potencia (si la usas con criterio)
              </h2>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg leading-8">
                La inteligencia artificial no viene a quitarnos el trabajo, sino
                a quitarnos lo que más tiempo nos roba:
                <br />
                <br />
                <ul className="list-disc pl-5">
                  <li>Lo repetitivo</li>
                  <li>Lo mecánico</li>
                  <li>
                    Lo que se puede automatizar para liberar tiempo creativo
                  </li>
                </ul>
                <br />
                Como dicen en este{" "}
                <Link
                  href="https://www.revistapym.com.co/articulos/comunicacion/85347/razones-para-usar-la-inteligencia-artificial-segun-allmarket"
                  className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  artículo de P&M
                </Link>
                , la IA no viene a reemplazar la creatividad sino a ayudar a
                quienes crean ideas a trabajar mejor.
                <br />
                <br />
                El reto no está en saber usarla, sino en saber cuándo usarla y
                para qué.
              </p>
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                ¿Qué tipo de tareas puede resolver?
              </h2>
              <br />
              <ol className="list-decimal pl-5">
                <li>
                  <h3 className="text-left text-sm lg:text-base 2xl:text-lg font-semibold">
                    Naming & branding
                  </h3>
                  <p className="text-left text-sm lg:text-base 2xl:text-lg">
                    La IA puede generar ideas de nombres, revisar dominios
                    disponibles, crear moodboards y hasta armar una propuesta de
                    identidad visual básica.
                    <br /> Claro, eso no reemplaza la intuición ni el
                    conocimiento de cultura local que tiene una agencia de
                    branding con experiencia, pero sí puede ser un gran punto de
                    partida.
                  </p>
                </li>
                <br />
                <li>
                  <h3 className="text-left text-sm lg:text-base 2xl:text-lg font-semibold">
                    Diseño editorial y visual
                  </h3>
                  <p className="text-left text-sm lg:text-base 2xl:text-lg">
                    Con herramientas como Adobe Firefly, Midjourney o Recraft
                    puedes generar composiciones gráficas, paletas de color o
                    piezas base para revistas, ebooks, catálogos o incluso
                    contenido interactivo.
                    <br /> La clave está en no aceptar el primer resultado:
                    refinar, curar y aplicar con criterio.
                  </p>
                </li>
                <br />
                <li>
                  <h3 className="text-left text-sm lg:text-base 2xl:text-lg font-semibold">
                    Escritura y tono de marca
                  </h3>
                  <p className="text-left text-sm lg:text-base 2xl:text-lg">
                    Chatbots como ChatGPT, Jasper o Copy.ai ayudan a redactar
                    textos base, titulares o ideas creativas, pero la magia real
                    está en la edición.
                    <br /> No se trata solo de escribir, sino de sonar como tu
                    marca, con su tono, intención y propósito.
                  </p>
                </li>
              </ol>
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                ¿Y qué NO debería hacer la IA?
              </h2>
              <br />
              <ul className="list-disc pl-5 text-left text-sm lg:text-base 2xl:text-lg">
                <li>
                  Definir el propósito de una marca:
                  <br /> Eso nace de una conversación profunda, no de un prompt.
                </li>
                <li>
                  Decidir por ti:
                  <br /> Puede sugerir ideas, pero tú (o tu agencia) son quienes
                  tienen que decir cuál vale la pena seguir.
                </li>
                <li>
                  Sustituir lo humano:
                  <br /> No siente, no interpreta entre líneas, no ve lo que
                  está fuera del prompt.
                </li>
              </ul>
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                ¿Y entonces, cómo lo hacemos en La Company?
              </h2>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Nos encanta la IA (cuando se usa bien). En La Company la usamos
                como una herramienta más, no como la única respuesta.
                <br /> 🚫 No nos casamos con el “hazme una marca en 10 segundos”{" "}
                <br />✅ Sí creemos en procesos que mezclen datos, sensibilidad,
                creatividad y contexto.
                <br />
                <br />
                Sea que estés buscando una agencia de branding en Medellín,
                Bogotá o desde donde nos estés leyendo, te dejamos un mini
                resumen de cómo usamos la IA:
              </p>
              <br />
              <div className="flex gap-10">
                <ul className="text-sm lg:text-base 2xl:text-lg ">
                  <li className="font-semibold">Lo que hacemos</li>
                  <br />
                  <li>Generar ideas con IA + criterio humano.</li>
                  <li>Usar IA para naming, diseño y copy.</li>
                  <li>Automatizar lo operativo.</li>
                  <li>Curar con criterio, conectar con contexto</li>
                </ul>
                .
                <ul className="text-sm lg:text-base 2xl:text-lg">
                  <li className="font-semibold">Lo que no hacemos</li>
                  <br />
                  <li>Publicar lo primero que sale</li>
                  <li>Reemplazar la estrategia</li>
                  <li>Ignorar la intuición</li>
                  <li>Olvidar lo que hace única tu marca</li>
                </ul>
              </div>
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                En resumen: úsala, pero no te dejes usar
              </h2>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                La IA no va a hacer tu trabajo por ti. Pero si la usas con
                estrategia, puede hacer que tus ideas lleguen más lejos, más
                rápido y con más datos.
                <br /> Y eso, en manos de una marca con visión (o una agencia
                con sentido), es oro puro.
                <br />
                <br />
                Nos encanta crear marcas donde el futuro no borra lo que somos:
                lo multiplica.
                <br /> Conversemos tu marca con IA (y criterio).
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
