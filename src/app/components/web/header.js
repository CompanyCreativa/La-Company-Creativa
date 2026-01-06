import Image from "next/image";
import Link from "next/link";

import logo from "/public/logoCompany.svg";
import ButtonWeb from "./buttonWeb";

export default function () {
  return (
    <header className="w-full w-full bg-[#1D1D1D]  flex justify-center py-7 shadow-[0_4px_4px_0px_rgba(0,0,0,0.12),0_2px_4px_-1px_rgba(0,0,0,0.06)] z-50">
      <div className="max-w-[1300px] 2xl:max-w-[1500px] w-full flex justify-center md:justify-between">
        <Link href="/">
          <Image
            src={logo}
            className="max-w-[150px] lg:max-w-[153px] cursor-pointer "
            alt="Logo"
          />
        </Link>
        <ButtonWeb
          text="Hablemos"
          action={"https://wa.link/103gx5"}
          newTab
          className="hidden md:flex"
        />
      </div>
    </header>
  );
}
