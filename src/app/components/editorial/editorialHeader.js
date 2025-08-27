import Image from "next/image";
import Link from "next/link";

import logo from "/public/logoCompany.svg";
import ButtonEditorial from "./buttonEditorial";

export default function EditorialHeader() {
  return (
    <header className="flex justify-center md:justify-between backdrop-blur bg-[#302F32] shadow-[0px_4px_4px_rgba(0,0,0,0.12)] p-[16px] md:px-20 xl:px-32 2xl:px-52 2xl:py-6 sticky top-0 z-50">
      <Link href="/" className="flex justify-center">
        <Image
          src={logo}
          className="max-w-[150px] lg:max-w-[153px] cursor-pointer"
          alt="Logo"
        />
      </Link>
      <ButtonEditorial
        text="Hablemos"
        className="hidden md:flex"
        action={"https://wa.link/103gx5"}
        newTab
      />
    </header>
  );
}
