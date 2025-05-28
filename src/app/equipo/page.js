import TeamMembersList from "../components/equipo/teamMembersList";
import Form from "../components/form";
import Section from "../components/section";
import Breadcrumbs from "../components/breadcrumbs";
import Head from "next/head";

export default function page() {
  return (
    <div className="min-h-screen mt-[115px] md:bg-pattern bg-repeat">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Section>
        <div className="my-2">
          <Breadcrumbs lastPage="Inicio" currentPage="Equipo" />
        </div>
        <div className="flex flex-col pb-24 mr-[-40px] md:mr-0">
          <div className="mt-16 flex flex-col justify-center items-center gap-5 lg:gap-2 SpaceGrotesk">
            <h1 className="text-[38px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] text-center SpaceGrotesk">
              Conoce a nuestro{" "}
              <strong className="font-semibold">equipo de trabajo</strong>
            </h1>
            <p className="text-[15px] lg:text-lg text-center text-[#11190c] font-light SpaceGrotesk">
              Cuenta con nosotros para descubrir y crear un universo de
              posibilidades que impulsen tu marca, <br /> alejándonos de lo
              cotidiano, <strong>pero acercándonos a tus clientes.</strong>
            </p>
          </div>
          <TeamMembersList />
        </div>
      </Section>
      <div className="lg:mt-0">
        <Form />
      </div>
    </div>
  );
}
