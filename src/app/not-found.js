import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import Img404 from "/public/404Img.png";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="bg-pattern flex justify-center flex-col items-center h-[calc(100vh-100px)]">
        <div className="flex lg:w-[50%] 2xl:w-[40%] flex-col text-4xl font-bold items-center justify-center bg-[#FFF8EA] text-center gap-4 border-2 border-[#E1DBD1] p-10">
          <Image src={Img404} alt="404" />
          <h2 className="text-[28px] lg:text-[32px] text-companySalmon SpaceGrotesk mt-2">
            Oops! no podemos encontrar página.
          </h2>
          <p className="text-[18px]	text-[#11190c]  font-medium SpaceGrotesk">
            Tal vez se ha movido o nunca existió. Verifica la URL o vuelve al
            inicio.
          </p>
          <a
            className="inline-flex max-w-max items-center  gap-2 text-[12px] uppercase tracking-[3px] bg-companySalmon py-4 px-7 font-thin hover:bg-[#B92A1D] transition-all duration-300 text-[#FFF8EA]"
            href="/"
          >
            Volver al inicio
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.75 1C11.75 0.585787 11.4142 0.250001 11 0.250001L4.25 0.250001C3.83579 0.250001 3.5 0.585787 3.5 1C3.5 1.41421 3.83579 1.75 4.25 1.75H10.25V7.75C10.25 8.16421 10.5858 8.5 11 8.5C11.4142 8.5 11.75 8.16421 11.75 7.75L11.75 1ZM2.03033 11.0303L11.5303 1.53033L10.4697 0.469671L0.96967 9.96967L2.03033 11.0303Z"
                fill="#FFF8EA"
              />
              <path d="M1 1L11 1L11 11" stroke="#FFF8EA" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
