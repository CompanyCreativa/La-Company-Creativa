import MainContainer from "../components/mainContainer";
import Header from "../components/header";
import { TextArea } from "../components/textArea";
import Button from "../components/button";

const page = () => {
  return (
    <MainContainer>
      <Header page="brief_naming" />
      <div className="flex flex-col justify-center items-center pb-10">
        <h1 className="text-[32px] md:text-[42px] lg:text-[52px] font-semibold">
          BRIEF - DESARROLLO DE NAMING
        </h1>
        <h2 className="text-[24px] md:text-[32px] lg:text-[42px] font-regular">
          Nueva marca
        </h2>
        <h2 className="text-[24px] md:text-[32px] lg:text-[42px] font-regular">
          Importadoras asociadas
        </h2>
        <form
          action=""
          className="flex flex-col justify-center items-center max-w-[1250px]"
        >
          <p className="text-[20px] md:text-[28px] lg:text-[32px] font-semibold">
            Información general
          </p>
          <div className="flex flex-col gap-2 max-w-[600px] w-full">
            <TextArea
              name="dedication"
              className="h-[100px]"
              text="¿A qué se dedicará esta nueva marca?"
            />

            <TextArea
              name="different"
              className="h-[100px]"
              text="¿Qué le hará diferente?"
            />

            <TextArea
              name="promise"
              className="h-[100px]"
              text="¿Cuál será su promesa de valor?"
            />

            <TextArea
              name="words"
              className="h-[100px]"
              text="Elige palabras con las que quisieras que nos relacionaran"
            />

            <TextArea
              name="color"
              className="h-[100px]"
              text="¿Hay algún color que nos caracterice?"
            />
          </div>
          <div className="flex flex-col gap-2 max-w-[600px] w-full">
            <TextArea
              name="architecture"
              className="h-[100px]"
              text="¿Estaremos bajo la arquitectura de marca de Importadores Asociadas?"
            />

            <TextArea
              name="products"
              className="h-[100px]"
              text="¿Qué productos y marcas comercializará?"
            />

            <TextArea
              name="brand"
              className="h-[100px]"
              text="¿A quiénes se dirigirá la marca?"
            />

            <TextArea
              name="competence"
              className="h-[100px]"
              text="¿Quién es la competencia en este segmento?"
            />
          </div>
          <p className="text-[20px] md:text-[28px] lg:text-[32px] font-semibold">
            {" "}
            Insumo creativo
          </p>
          <div className="flex flex-col gap-2 max-w-[600px] w-full">
            <TextArea
              name="single-word"
              className="h-[100px]"
              text="¿Hay alguna palabra especifica que deba incluir?"
            />
            <TextArea
              name="descriptor"
              className="h-[100px]"
              text="¿Qué apellido o descriptor debería tener la marca?"
            />
            <TextArea
              name="name-style"
              className="h-[100px]"
              text="¿Tiene alguna preferencia de estilo para el nombre?"
            />
            <TextArea
              name="names"
              className="h-[100px]"
              text="¿Que nombres de otras marcas te gustan y porqué?"
            />
          </div>
          <div className="mt-10">
            <Button color="black">Enviar Información</Button>
          </div>
        </form>
      </div>
    </MainContainer>
  );
};

export default page;
