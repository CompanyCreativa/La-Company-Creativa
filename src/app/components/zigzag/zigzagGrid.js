import Image from "next/image";

import zigzagGridImg from "/public/zig-zag/zig-zag-grid.png";
import zigzagGridImgMobile from "/public/zig-zag/zig-zag-gridMobile.png";
import gridSquaresImg from "/public/zig-zag/gridSquares.png";
import zigzagBookImg from "/public/zig-zag/zigzagBook.png";

export default function ZigzagGrid() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2">
        <div className="bg-[#212121] flex flex-col justify-center px-7 py-10 lg:px-10 2xl:px-20">
          <div className="flex gap-5 xl:gap-10 items-end ">
            <h1 className="text-[52px] lg:text-[45px] xl:text-[65px] 2xl:text-[70px] text-[#DEDACF] mangiola">
              Zigzag
            </h1>
            <span className="tracking-[14px] text-[#DEDACF] text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              (sust.)
            </span>
          </div>
          <div className="text-[#DEDACF] text-base mt-10 text-[20px] xl:text-[22px] 2xl:text-[31px] lg:mt-10 2xl:mt-20">
            <p className="archivo-condensed tracking-widest leading-[32px] lg:leading-[48px]">
              Patrón que se caracteriza por
              <br className="hidden lg:block" /> su constante alternancia que
              crea
              <br className="hidden lg:block" /> un aspecto en forma de "Z".
            </p>
          </div>
        </div>
        <div className="lg:row-start-1 lg:row-end-3 lg:col-start-2">
          <Image
            src={zigzagGridImg}
            alt="zig-zag grid image"
            className="w-full hidden lg:block"
          />
          <Image
            src={zigzagGridImgMobile}
            alt="zig-zag grid image"
            className="w-full lg:hidden"
          />
        </div>
        <div className="bg-[#212121] hidden lg:block"></div>
        <div className="relative">
          <Image
            src={gridSquaresImg}
            alt="grid squares img"
            className="w-full h-full object-fill"
          />
          <Image
            src={zigzagBookImg}
            alt="zig-zag book"
            className="w-full max-w-[1061px] absolute top-0 right-0 lg:hidden"
          />
        </div>
        <div className="bg-[#DEDACF] items-center justify-center hidden lg:flex">
          <h1 className="mangiola tracking-wider lg:text-[60px] 2xl:text-[80px]">
            SER
            <br /> MODULAR <br />
            ES SER
            <br /> SINGULAR
            <br /> <span className="mangiola italic">ÚNICO</span>
          </h1>
        </div>
      </div>
      <div className="grid relative lg:grid-cols-3 lg:grid-rows-2">
        <div className="bg-[#212121] hidden lg:block"></div>
        <div className="bg-[#DEDACF] hidden lg:block"></div>
        <div className="border-2 border-[#CCC9BF] hidden lg:block">
          <Image
            src={gridSquaresImg}
            alt="grid squares img"
            className="w-full h-full object-fill"
          />
        </div>
        <div className="bg-[#DEDACF] hidden lg:block"></div>
        <div className="bg-[#212121] flex flex-col items-center justify-center py-20 lg:p-0">
          <div className="grid grid-cols-2 grid-rows-2">
            <div className="h-[61px] w-[61px] bg-[#DEDACF]"></div>
            <div className="h-[61px] w-[61px] bg-[#DEDACF] row-start-2 col-start-2"></div>
          </div>
        </div>
        <div className="bg-[#DEDACF] hidden lg:block"></div>
        <div className="absolute top-0 right-0  w-full justify-end hidden lg:flex">
          <Image
            src={zigzagBookImg}
            alt="zig-zag book"
            className="w-[55%] max-w-[1061px]"
          />
        </div>
      </div>
    </>
  );
}
