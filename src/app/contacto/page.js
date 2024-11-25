import FormContact from "../components/formContact";
import MainContainer from "../components/mainContainer";

export default function page() {
  return (
    <MainContainer>
      <div className="flex-col justify-center items-center pt-16 px-5 gap-7 hidden lg:flex ">
        <h1 className="text-[42px] lg:text-[62px] 2xl:text-[82px] text-center">
          ¿Tienes un proyecto <strong>en mente?</strong>
        </h1>
      </div>
      <div className="mt-40  bg-transparent lg:mt-16">
        <FormContact />
      </div>
    </MainContainer>
  );
}
