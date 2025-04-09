import Image from "next/image";
import Link from "next/link";

import logo from "/public/logoCompany.svg";

export default function DigitalHeader() {
  return (
    <header>
      <Link href="/">
        <Image
          src={logo}
          className="max-w-[150px] lg:max-w-[153px] cursor-pointer mb-14"
          alt="Logo"
        />
      </Link>
    </header>
  );
}
