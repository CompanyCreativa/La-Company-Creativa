import Head from "next/head";
import FormContact from "../components/formContact";
import MainContainer from "../components/mainContainer";

export default function page() {
  return (
    <MainContainer>
      <Head>
        <title>¿Hablamos o seguimos siendo extraños digitales?</title>
        <meta
          name="description"
          content="¿Hablamos o seguimos siendo extraños digitales?"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
