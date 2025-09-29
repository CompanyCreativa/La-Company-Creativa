import Image from "next/image";
import Link from "next/link";

import logo from "/public/logoCompany.svg";
import ButtonWeb from "./buttonWeb";

export default function () {
  return (
    <header className="w-full w-full bg-[#1D1D1D]  flex justify-center py-7 ">
      <div className="max-w-[1500px] w-full flex justify-between">
        <Link href="/">
          <Image
            src={logo}
            className="max-w-[150px] lg:max-w-[153px] cursor-pointer "
            alt="Logo"
          />
        </Link>
        <ButtonWeb text="Hablemos" />
      </div>
    </header>
  );
}
