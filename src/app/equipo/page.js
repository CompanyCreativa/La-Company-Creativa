import TeamMembersList from "../components/equipo/teamMembersList";
import Form from "../components/form";
import MainContainer from "../components/mainContainer";
import Section from "../components/section";
import Breadcrumbs from "../components/breadcrumbs";

export default function page() {
  return (
    <MainContainer className="min-h-screen mt-[115px]">
      <Section>
        <div className="my-2">
          <Breadcrumbs lastPage="Inicio" currentPage="Equipo" />
        </div>
        <div className="flex flex-col pb-24">
          <div className="mt-16 flex flex-col justify-center items-center gap-5 lg:gap-2">
            <h1 className="text-[38px] lg:text-[55px] xl:text-[70px] 2xl:text-[82px] text-center">
              Conoce a nuestro <strong>equipo de trabajo</strong>
            </h1>
            <p className="text-[15px] lg:text-lg text-center text-[#11190c] font-light">
              Cuenta con nosotros para descubrir y crear un universo de
              posibilidades que impulsen tu marca, alejándonos de lo cotidiano,{" "}
              <strong>pero acercándonos a tus clientes.</strong>
            </p>
          </div>
          <TeamMembersList />
        </div>
      </Section>
      <div className="-mt-20 lg:mt-28">
        <Form />
      </div>
    </MainContainer>
  );
}
