import Form from "../components/form";
import MainContainer from "../components/mainContainer";

export default function page() {
  return (
    <MainContainer>
      <div className="flex-col justify-center items-center pt-16 px-5 gap-7 hidden lg:flex">
        <h1 className="text-[42px] lg:text-[62px] 2xl:text-[82px] text-center">
          ¿Tienes un proyecto <strong>en mente?</strong>
        </h1>
        <p className="text-lg text-[#11190c] font-light text-center">
          Cuenta con nosotros para descubrir y crear un universo de
          posibilidades que impulsen tu marca, alejándonos de lo cotidiano,{" "}
          <strong>pero acercándonos a tus clientes.</strong>
        </p>
      </div>
      <div className="mt-40 lg:mt-16">
        <Form />
      </div>
    </MainContainer>
  );
}
