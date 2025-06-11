import Image from "next/image";
import Link from "next/link";

import logo from "/public/logoCompany.svg";

export default function BrandingHeader() {
  return (
    <header className="flex flex-col justify-center bg-[#f2f1ed]/80 backdrop-blur lg:bg-[#F2F1ED] shadow-[0px_4px_4px_rgba(0,0,0,0.12)] p-[16px] lg:p-[28px] sticky top-0 z-50">
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
