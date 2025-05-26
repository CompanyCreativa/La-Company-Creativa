import FormContact from "../components/formContact";
import MainContainer from "../components/mainContainer";

export default function page() {
  return (
    <MainContainer>
      <div className="flex-col justify-center items-center pt-16 px-40 gap-7 hidden lg:flex ">
        <h1 className="text-[42px] lg:text-[62px] 2xl:text-[82px] text-center">
          ¿Tienes un proyecto <strong>en mente?</strong>
        </h1>

        <p className="text-center mt-6 tracking-wider leading-7 font-light lg:text-lg">
          Nosotros tenemos coraje, corazón y muchas ideas listas para salir. Si
          llegaste hasta acá, probablemente ya entendiste algo: no somos una
          agencia de publicidad cualquiera. Pensamos contigo, nos metemos en tu
          mundo, y creamos marcas que conectan, transforman y se sienten vivas.
          Cuéntanos qué ronda tu cabeza… y déjanos ayudarte a hacerlo realidad.
        </p>
      </div>
      <div className="mt-40  bg-transparent lg:mt-16">
        <FormContact />
      </div>
    </MainContainer>
  );
}
