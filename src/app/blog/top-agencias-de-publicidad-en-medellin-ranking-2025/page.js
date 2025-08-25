import Image from "next/image";

import imageBlog2 from "/public/blog/imageblog2.png";
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
            currentPage="Top agencias de publicidad en Medellín - Ranking 2025"
          />
        </div>
        <Image
          src={imageBlog2}
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
                Pero primero ¿qué es la pauta digital?
              </h2>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg leading-8">
                La pauta digital es como alquilar una vitrina en internet. Le
                pagas a las plataformas (Meta, Google, TikTok, etc.) para que le
                muestren tu contenido a las personas correctas. Pero si no sabes
                qué mostrar, cómo segmentar o qué medir, lo más probable es que
                botes dinero sin ver resultados.
                <br />
                <br />
                Por eso muchas marcas trabajan con una agencia de pauta, no para
                hacer más, sino para hacerlo bien.
              </p>
              <br />
              <h2 className="text-[24px] lg:text-3xl 2xl:text-4xl text-left font-semibold">
                Empecemos con los conceptos clave:
              </h2>
              <br />
              <h3 className="text-left text-sm lg:text-base 2xl:text-lg font-semibold">
                Segmentación
              </h3>
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Es elegir bien a quién le hablas.
                <br /> Con la segmentación, defines edades, gustos, ubicaciones
                y hasta comportamientos para conectar con quien realmente podría
                enamorarse de tu producto.
              </p>
              <br />
              <h3 className="text-left text-sm lg:text-base 2xl:text-lg font-semibold">
                Impresiones
              </h3>
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Son las veces que se muestra tu anuncio.
                <br /> Eso no significa que lo hayan leído o que haya gustado,
                solo que apareció por ahí.
                <br /> Por eso, más que impresionar, lo importante es conectar.
              </p>
              <br />
              <h3 className="text-left text-sm lg:text-base 2xl:text-lg font-semibold">
                Alcance
              </h3>
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Es cuántas personas únicas vieron tu anuncio. <br />
                Si tu anuncio lo vio una persona 10 veces, son 10 impresiones,
                pero solo 1 de alcance.
                <br /> Y si lo haces bien, con 1 vez puede bastar para que te
                recuerden.
              </p>
              <br />
              <h3 className="text-left text-sm lg:text-base 2xl:text-lg font-semibold">
                CPC (Costo por clic)
              </h3>
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Lo que pagas cada vez que alguien hace clic en tu anuncio.
                <br /> Este número ayuda a entender si el anuncio está siendo
                efectivo.
                <br /> Y si no lo es, no pasa nada, se analiza, se aprende y se
                mejora (de eso nos encargamos en la agencia de pauta).
              </p>
              <br />
              <h3 className="text-left text-sm lg:text-base 2xl:text-lg font-semibold">
                CTR (Click Through Rate)
              </h3>
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Es el porcentaje de personas que hicieron clic en tu anuncio
                frente al número total de veces que se mostró.
                <br /> ¿Bajo CTR? Puede que el mensaje no esté resonando o que
                la audiencia no sea la correcta.
              </p>
              <br />
              <h3 className="text-left text-sm lg:text-base 2xl:text-lg font-semibold">
                Conversión
              </h3>
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Es cuando el clic se transforma en una acción real, como una
                compra, un formulario lleno, una descarga, lo que tú quieras
                lograr. Una campaña bien pensada no se queda en likes, sino que
                convierte.
              </p>
              <br />
              <h3 className="text-left text-sm lg:text-base 2xl:text-lg font-semibold">
                Retargeting
              </h3>
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Es volverle a hablar a quien ya te vio.
                <br />
                Como ese “Oye, aún estás a tiempo” que todos necesitamos a
                veces. ¿Te metiste a una tienda y no compraste? Luego te aparece
                ese mismo producto, eso es el retargeting tratando de
                convencerte.
                <br /> Inteligente y oportuno.
              </p>
              <br />
              <h3 className="text-left text-sm lg:text-base 2xl:text-lg font-semibold">
                Creatividades
              </h3>
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Son los textos, imágenes o videos de tus anuncios.
                <br /> Porque no todo es estrategia: la forma como lo cuentas
                también enamora (o espanta).
                <br /> Aquí es donde entra la magia del diseño, el copy y el
                corazón que le ponemos en cada campaña.
              </p>
              <br />
              <h3 className="text-left text-sm lg:text-base 2xl:text-lg font-semibold">
                Funnel o embudo
              </h3>
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Es ese camino que va desde “conozco tu marca” hasta “me
                convierto en cliente fiel”.
                <br /> Y cada paso necesita su propio mensaje, tono y formato.
                <br />
                No le hablas igual a alguien que recién te conoce que a alguien
                que ya te tiene en su carrito.
              </p>
              <br />
              <h3 className="text-left text-sm lg:text-base 2xl:text-lg font-semibold">
                Pauta en redes sociales
              </h3>
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Es la pauta pensada especialmente para plataformas como
                Instagram, Facebook, TikTok o LinkedIn. <br />
                Cada red tiene su lenguaje, sus tiempos y su estilo. <br />Y lo
                que funciona en una, puede no funcionar en otra. Por eso hay que
                pensar bien antes de darle al botón de “publicar”.
              </p>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Y todo esto lo maneja una agencia de pauta digital, como La
                Company:
              </p>
              <br />
              <ul className="list-disc pl-5 text-left text-sm lg:text-base 2xl:text-lg">
                <li>Elegir la estrategia adecuada.</li>
                <li>Segmentar bien.</li>
                <li>Escribir mensajes que conecten.</li>
                <li>Diseñar creatividades que enamoren.</li>
                <li>Optimizar cada campaña con cabeza, corazón y coraje.</li>
              </ul>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Creamos campañas que le hacen bien a tu marca.
              </p>
              <br />
              <h2 className="text-2xl lg:text-3xl 2xl:text-4xl text-left font-semibold">
                ¿Listo para pautar con propósito?
              </h2>
              <br />
              <p className="text-left text-sm lg:text-base 2xl:text-lg">
                Queremos que tu marca deje de pasar desapercibida. <br />
                Que aparezca donde tiene que estar. <br />
                Que no te preocupes por los tecnicismos, sino por disfrutar los
                resultados, nosotros te damos toda la asesoría y te lo
                explicamos todo. <br /> <br />
                Escríbenos. <br />
                Nos encantaría ayudarte a llegar más lejos (y más cerquita del
                corazón de tu público).
              </p>
            </div>
          </div>
        </Section>
      </div>
      <Form />
    </main>
  );
}
