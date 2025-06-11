import Image from "next/image";
import Link from "next/link";

import logo from "/public/logoCompany.svg";

export default function BrandingHeader() {
  return (
    <header className="flex flex-col justify-center  bg-[#F2F1ED] shadow-[0px_20px_4px_rgba(0,0,0,0.12)] p-[28px] z-10">
      <Link href="/" className="flex justify-center">
        <Image
          src={logo}
          className="max-w-[150px] lg:max-w-[153px] cursor-pointer"
          alt="Logo"
        />
      </Link>
    </header>
  );
}
