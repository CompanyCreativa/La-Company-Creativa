import Image from "next/image";

import imageBlog4 from "/public/blog/imageblog4.webp";
import Section from "@/app/components/section";
import Breadcrumbs from "@/app/components/breadcrumbs";
import Form from "@/app/components/form";
import Link from "next/link";

export default async function Page() {
  return (
    <main className="min-h-screen ">
      <div className="flex flex-col mt-[120px] lg:mt-[110px] px-[20px] xl:px-[200px] 2xl:px-[300px]">
        <div className="mb-10">
          <Breadcrumbs
            lastPage="Inicio"
            currentPage="Conceptos clave de la pauta digital"
          />
        </div>
        <Image
          src={imageBlog4}
          alt="estrategia 360"
          className="w-full h-auto rounded-lg mb-8 mx-auto"
        />
        <Section>
          <div className="flex flex-col mt-[32px] justify-center items-center">
            <h1 className="text-[38px] lg:text-5xl 2xl:text-6xl text-center font-bold">
              Agencia de branding: lo que realmente hace y por qué tu marca la
              necesita
            </h1>
            <br />
            <div className="flex flex-col max-w-5xl">
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg leading-8">
                Todos hablan de branding, pero pocos entienden realmente lo que
                significa construir una marca desde cero.
                <br />
                Y no, no es solo tener un logo “bonito”.
                <br />
                <br />
                En La Company, como agencia de branding, lo sabemos: una marca
                bien pensada no solo se ve, se siente. Tiene una historia que
                contar, un tono que la hace única y una imagen que la vuelve
                reconocible, incluso sin decir su nombre.
                <br />
                <br />
                Pero... ¿Qué hace exactamente una agencia de branding?, ¿cuándo
                deberías buscar una?, ¿y cómo saber si es la ideal para tu
                proyecto?
              </p>
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                1. ¿Qué hace una agencia de branding?
              </h2>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg leading-8">
                Una agencia de branding es el equipo detrás de la magia: piensa,
                diseña y estructura cómo una marca se ve, se siente y conecta.
                <br />
                <br />
                El enfoque aquí es crear la identidad completa de una marca,
                desde el nombre hasta cómo se comunica, pasando por su paleta de
                colores, su voz, su tono y hasta sus reglas internas.
                <br />
                <br />
                El branding es lo que le da alma a tu negocio. Es lo que hace
                que una marca no solo compita por precio o funcionalidad, sino
                por significado.
              </p>
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                2. ¿Cuándo deberías buscar una agencia de branding?
              </h2>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg leading-8">
                Si estás creando una marca desde cero o si tu marca actual no
                está diciendo lo que debería decir, probablemente necesitas
                ayuda.
                <br />
                <br />
                Estas son señales claras de que una agencia de branding puede
                ser tu próxima mejor decisión:
              </p>
              <br />
              <ul className="list-disc pl-5 text-left text-sm lg:text-base 2xl:text-lg">
                <li>Tienes un logo… pero nada más.</li>
                <li>
                  Cada pieza de comunicación parece hablar un idioma distinto.
                </li>
                <li>
                  Tu equipo no tiene claro cómo contar la historia de la marca.
                </li>
                <li>Tu marca no se diferencia (ni en forma ni en fondo).</li>
                <li>Te estás reinventando y necesitas hacerlo bien.</li>
              </ul>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg leading-8">
                Una buena agencia no te va a ofrecer una plantilla. Te va a
                escuchar, cuestionar, analizar y solo después, te propondrá una
                idea de marca con sentido.
              </p>
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                3. ¿Qué hace diferente a una buena agencia de branding?
              </h2>
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                El branding no es un proceso rápido ni superficial. Y si lo es…
                desconfía.
                <br />
                <br />
                Una agencia de branding con visión va más allá de lo estético.
                Entiende tu negocio, tu audiencia, tu competencia, tu propósito
                y tus valores. Y con base en eso, construye una identidad que
                tenga forma y fondo.
                <br />
                <br />
                Estas son algunas señales de que estás con una agencia que vale
                la pena:
              </p>
              <br />
              <ul className="list-disc pl-5 text-left text-sm lg:text-base 2xl:text-lg">
                <li>
                  Se toma el tiempo de conocerte (y no solo de presupuestarte).
                </li>
                <li>
                  Tiene casos reales de marcas construidas, no solo adaptadas.
                </li>
                <li>
                  Te entrega algo más que un logo: te da un sistema completo
                  para comunicar con coherencia.
                </li>
                <li>
                  Te habla claro, sin lenguaje de moda, y con estrategia detrás.
                </li>
              </ul>
              <br />
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                4. ¿Cómo trabajamos el branding en La Company?
              </h2>
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                En La Company no tenemos fórmula mágica, pero sí un proceso con
                alma:
              </p>
              <br />
              <ol className="list-decimal pl-5 text-left text-sm lg:text-base 2xl:text-lg">
                <li>Escuchamos tu historia como si fuera nuestra.</li>
                <li>
                  Trazamos una idea estratégica que sostenga todo lo que la
                  marca quiere decir.
                </li>
                <li>
                  Diseñamos un sistema de identidad completo: visual, verbal y
                  emocional.
                </li>
                <li>Creamos un brandbook real, usable, no de adorno.</li>
                <li>
                  Te acompañamos en el aterrizaje: desde las piezas hasta la
                  forma en que tu equipo cuenta la marca.
                </li>
              </ol>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                No es solo “hacer marca”. Es construir algo que tenga sentido,
                que conecte con las personas correctas y que dure más allá de
                una campaña.
              </p>
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                5. ¿Y después del branding, qué?
              </h2>
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Una vez tu marca está bien armada, todo lo demás se vuelve más
                claro, desde tus redes, hasta tu publicidad, tu empaque o tu
                sitio web.
                <br />
                <br /> El branding es el punto de partida y cuando está bien
                hecho, te ahorra dolores de cabeza, decisiones erráticas y
                cambios innecesarios cada seis meses.
              </p>
              <br />
              <h3 className="text-left text-sm lg:text-base 2xl:text-lg font-semibold">
                En resumen:
              </h3>
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Una agencia de branding no está para “ponerle bonito” a tu
                marca.
                <br /> Está para darle forma, alma y dirección. Para que tenga
                coherencia, para que diga lo que tiene que decir, y para que lo
                haga de una manera memorable. <br />
                <br /> En La Company, eso es lo que más nos gusta hacer: marcas
                que no solo existen, sino que conectan. <br />
                <br />
                ¿Estás listo para construir la tuya?
              </p>
              <br />
              <br />
              <a
                href="https://companycreativa.com/contacto"
                className="text-companySalmon font-semibold hover:underline"
              >
                Contáctanos aquí
              </a>

              <a
                href="https://companycreativa.com/portafolio"
                className="text-companySalmon font-semibold hover:underline"
              >
                {" "}
                Explora nuestro portafolio de branding
              </a>
            </div>
          </div>
        </Section>
      </div>
      <Form />
    </main>
  );
}
