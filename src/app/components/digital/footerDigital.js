import Image from "next/image";
import Link from "next/link";
import companyWhiteLogo from "/public/digital/companyWhiteLogo.png";
import linkedin from "/public/digital/linkedin.png";
import instagram from "/public/digital/instagram.png";
import behance from "/public/digital/behance.png";
import whatsApp from "/public/digital/whatsapp.png";

export default function FooterDigital() {
  const socials = [
    {
      icon: linkedin,
      link: "https://co.linkedin.com/company/companycreativa",
    },
    {
      icon: instagram,
      link: "https://www.instagram.com/lacompanycrea/?hl=es",
    },
    {
      icon: behance,
      link: "https://www.behance.net/lacompanycrea",
    },
    {
      icon: whatsApp,
      link: "https://wa.me/573148629805",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-10 lg:mt-30 2xl:mt-40">
      <div className="flex flex-col lg:flex-row lg:gap-20 gap-10 justify-center items-center">
        <Image src={companyWhiteLogo} alt="companyWhiteLogo"/>
        <div className="flex gap-5 items-center justify-center">
          {socials.map((social, index) => (
            <Link key={index} href={social.link} target="_blank">
              <Image
                key={index}
                src={social.icon}
                className="bg-companySalmon p-3 w-[50px] rounded-full"
                alt={social.link}
              />
            </Link>
          ))}
        </div>
      </div>
      <p className="mt-14 mb-20">
        Copyright © 2025 |{" "}
        <Link href={"/"} className="underline">
          LA COMPANY CREATIVA
        </Link>{" "}
        | Todos los derechos reservados | Política de protección de datos
        personales
      </p>
    </div>
  );
}
