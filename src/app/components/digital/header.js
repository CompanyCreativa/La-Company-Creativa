import Image from "next/image";
import Link from "next/link";

import logo from "/public/logoCompany.svg";

export default function DigitalHeader() {
  return (
    <header className="my-20">
      <Link href="/">
        <Image
          src={logo}
          className="max-w-[150px] lg:max-w-[153px] cursor-pointer "
          alt="Logo"
        />
      </Link>
    </header>
  );
}
