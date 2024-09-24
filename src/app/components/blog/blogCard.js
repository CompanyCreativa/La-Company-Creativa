import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import blogExampleImg from "@/app/assets/blogExample.png";
import Image from "next/image";

export default function BlogCard() {
  return (
    <div className="w-full relative">
      <Image src={blogExampleImg} className="w-full" />
      <div className="w-full h-full absolute top-0 left-0 px-7 py-4 flex flex-col justify-between bg-blogCard rounded-lg">
        <div className="flex items-end justify-end">
          <div className="bg-[#0C0A09]/30 w-[84px] h-[36px] rounded-lg flex justify-center items-center gap-3 self-end text-white">
            <FontAwesomeIcon icon={faEye} />
            422
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[21px] font-semibold text-[#fff8ea]">
            Conoce a Facebook Meta Business suite, la herramienta que lo
            consolida&nbsp;todo
          </h3>
          <div className="w-full flex justify-between items-center">
            <span className="text-[#fff8ea] font-light text-base">
              24 de Julio - 2024
            </span>
            <button className="font-bold font-abel tracking-wider text-[#fff8ea] text-lg flex justify-center items-center gap-1">
              Leer mas
              <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
