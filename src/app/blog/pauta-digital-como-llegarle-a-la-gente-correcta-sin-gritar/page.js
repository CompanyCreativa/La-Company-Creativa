import Image from "next/image";

import imageBlog2 from "/public/blog/imageblog2.png";
import Section from "@/app/components/section";
import Breadcrumbs from "@/app/components/breadcrumbs";
import Form from "@/app/components/form";

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
          src={imageBlog2}
          alt="estrategia 360"
          className="w-full h-auto rounded-lg mb-8 mx-auto"
        />
        <Section>
          <div className="flex flex-col mt-[32px] justify-center items-center">
            <h1 className="text-[38px] lg:text-[62px] 2xl:text-[62px] text-center font-bold">
              Pauta digital: cómo llegarle a la gente correcta (sin gritar)
            </h1>
            <br />
            <div className="flex flex-col max-w-5xl">
              <p className="text-left mx-auto text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                Spoiler: no se trata de estar en todas partes, sino en el lugar
                preciso con el mensaje justo.
              </p>
              <br />
              <br />
              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                ¿Y eso de pauta digital qué es?
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                La pauta digital es lo que hace que tu marca no solo esté en
                internet… sino que se note.
                <br />
                Sí, hablamos de anuncios en Google, en redes, en YouTube, en
                banners, en todas esas esquinas donde la gente vive, scrollea y
                decide.
                <br />
                <br />
                Pero ojo: pautar no es meterle plata a lo loco.
                <br />
                Es tener una estrategia. Y ahí es donde entra La Company.
              </p>
              <br />
              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                Entonces… ¿por qué deberías pautar?
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                Porque no se trata solo de llegar a más personas. Se trata de
                llegar a las personas correctas, con el mensaje adecuado, en el
                momento justo.
                <br />
                <br />
                <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] font-bold">
                  La pauta digital bien hecha sirve para:
                </p>
                <br />
                <ul className="list-disc pl-5">
                  <li>Aumentar visibilidad</li>
                  <li>Generar tráfico real a tu web</li>
                  <li>Vender más (¡sí, eso también!)</li>
                  <li>Probar ideas en tiempo real</li>
                  <li>Medir todo (y aprender mientras lo haces)</li>
                </ul>
                <br />Y sí, cuando lo haces bien, la pauta deja de ser gasto y
                se vuelve inversión.
              </p>
              <br />
              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                ¿Y cómo lo hacemos en La Company?
              </h2>
              <br />
              <h3 className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] font-bold">
                Así lo vivimos:
              </h3>
              <ul className="list-disc pl-5">
                <li>
                  <h4 className="text-left text-[14px] lg:text-[16px] 2xl:text-[18px] font-bold">
                    Segmentamos con cabeza
                  </h4>
                  <p>
                    No le hablamos a todo el mundo. Le hablamos a los que de
                    verdad pueden conectar contigo.
                  </p>
                </li>
                <br />
                <li>
                  <h4 className="text-left text-[14px] lg:text-[16px] 2xl:text-[18px] font-bold">
                    Pensamos antes de lanzar
                  </h4>
                  <p>
                    ¿El mensaje tiene sentido? ¿Conecta con tu marca? ¿Le habla
                    a la audiencia? Si no pasa ese filtro, no sale.
                  </p>
                </li>
                <br />
                <li>
                  <h4 className="text-left text-[14px] lg:text-[16px] 2xl:text-[18px] font-bold">
                    Medimos y optimizamos
                  </h4>
                  <p>
                    Nada se queda quieto. Revisamos, afinamos y probamos. Porque
                    la pauta también se aprende.
                  </p>
                </li>
              </ul>
              <br />
              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                Creamos ideas que no pasan sin dejar huella
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                Tus anuncios no van a parecer anuncios. Van a parecer algo que
                valía la pena ver.
              </p>
              <br />
              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                ¿Dónde pautamos?
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                Depende de tu marca. Pero sí, trabajamos en:
              </p>
              <br />
              <ul className="list-disc pl-5">
                <li>Google Ads</li>
                <li>Meta (Instagram y Facebook)</li>
                <li>YouTube</li>
                <li>TikTok Ads</li>
                <li>LinkedIn</li>
                <li>Medios digitales y programática</li>
              </ul>
              <br />
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                Y si necesitas una estrategia de pauta 360, que conecte varios
                canales y se alinee con toda tu comunicación… también la
                armamos.
              </p>
              <br />
              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                ¿Y si ya pautas pero no ves resultados?
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                Te ayudamos a revisar qué está fallando.
                <br /> Porque a veces el problema no es la pauta, sino lo que
                estás diciendo o cómo lo estás diciendo. Y si hay que
                replantearlo todo, lo hacemos.
                <br /> Sin drama. Con criterio.
              </p>
              <br />
              <h2 className="text-[24px] lg:text-[28px] 2xl:text-[32px] text-left font-bold">
                En resumen:
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                La pauta digital no es solo presionar “promocionar”.
                <br />
                Es una herramienta poderosa si se usa con estrategia, con
                claridad… y con un poco de audacia creativa.
                <br />
                <br />Y eso, en La Company, nos sobra.
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
                ¿Quieres pautar con propósito (y con resultados)?
              </h2>
              <p className="text-left text-[18px] lg:text-[20px] 2xl:text-[20px] leading-8">
                Escríbenos. Te ayudamos a llegar más lejos, sin perder lo que
                hace única a tu marca.
              </p>
            </div>
          </div>
        </Section>
      </div>
      <Form />
    </main>
  );
}
