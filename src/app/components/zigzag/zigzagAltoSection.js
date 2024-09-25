import Image from "next/image";

import zigzagRender3 from "/public/zig-zag/zigzagrender3.png";
import zigzagRender3Mobile from "/public/zig-zag/zigzagrender3Mobile.png";
import AltoLogo from "/public/zig-zag/AltoLogo.png";

export default function ZigzagAltoSection() {
  return (
    <div className="bg-[#212121] flex flex-col gap-10 justify-between px-0 py-20 lg:p-12 2xl:p-22 2xl:pr-0 lg:pr-0 lg:flex-row ">
      <div className="flex flex-col justify-between px-8 gap-10 lg:gap-0">
        <div>
          <h1 className="text-[#DEDACF] text-[42px] mangiola tracking-widest leading-tight lg:text-[30px] xl:text-[50px] 2xl:text-[66px]">
            SÉ PARTE
            <br /> DE ALGO
            <br /> JAMÁS ANTES
            <br /> <span className="mangiola italic -ml-2 lg:ml-0">VISTO.</span>
          </h1>
        </div>
        <div>
          <h4 className="text-[#DEDACF] font-light text-lg archivo-condensed tracking-widest leading-normal lg:text-base 2xl:text-[29px]">
            Una galería arquitectónica
            <br />
            en el Alto de las Palmas
          </h4>
        </div>
        <div>
          <Image
            src={AltoLogo}
            alt="Logo Alto"
            className="w-[227px] lg:w-auto"
          />
        </div>
      </div>
      <div className="pl-8 lg:p-0lg:w-[65%]">
        <Image
          src={zigzagRender3}
          alt="Render pertenciente al proyecto Zig-zag"
          className="hidden lg:block"
        />
        <Image
          src={zigzagRender3Mobile}
          alt="Render pertenciente al proyecto Zig-zag"
          className="w-full lg:hidden"
        />
      </div>
    </div>
  );
}
