import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import LogoCompany from "../../../public/logoCompany.svg";
import MainContainer from "../components/mainContainer";
import Link from "next/link";
import decorationThanks from "../../../public/decorationThanks.png";

export default function Gracias({ params }) {
  const slug = params.slug || [];
  const last = slug[slug.length - 1];

  if (last !== "gracias") return notFound();

  // 🚀 Dispara el evento de GA4 cuando carga la página de gracias
  //useEffect(() => {
  //if (typeof window !== "undefined" && typeof window.gtag === "function") {
  //window.gtag("event", "generated_lead", {
  //form_id: slug.join("/"), // opcional: saber desde qué ruta vino el form
  // status: "success",
  // });
  // }
  //}, [slug]);

  return (
    <MainContainer>
      <div className="h-screen inset-0 z-50 flex items-center justify-center bg-pattern bg-repeat">
        <div className="border lg:px-[175px] lg:pb-[100px] lg:pt-[250px] rounded-2xl text-center flex flex-col gap-5  relative lg:max-w-[1000px] md:max-w-[800px] md:px-20 md:py-16 px-4 py-20 max-w-[370px] bg-background">
          <Image
            src={decorationThanks}
            alt="Heart"
            width={500}
            height={200}
            className="absolute top-0 left-0 w-full z-0"
          />
          <h1 className="lg:text-4xl md:text-3xl font-semibold z-10 text-xl">
            ¡Gracias por enviarnos tus datos!
          </h1>
          <p className="underline-offset-8 decoration-1 z-10 md:text-lg decoration-0 md:underline text-m">
            En breve un asesor se comunicará contigo para contarte todos los
            detalles.
          </p>
          <Link className="flex justify-center mt-10" href="/">
            <Image
              src={LogoCompany}
              alt="Logo"
              width={200}
              height={200}
              className="z-10"
            />
          </Link>
        </div>
      </div>
    </MainContainer>
  );
}

// ✅ definir rutas conocidas
export async function generateStaticParams() {
  return [
    { slug: ["gracias"] },
    { slug: ["agencia-de-branding-medellin", "gracias"] },
    { slug: ["agencia-de-branding-bogota", "gracias"] },
    { slug: ["agencia-de-pauta-digital", "gracias"] },
    { slug: ["agencia-de-pauta-digital-medellin", "gracias"] },
    { slug: ["agencia-de-pauta-digital-bogota", "gracias"] },
    { slug: ["agencia-de-publicidad", "gracias"] },
    { slug: ["agencia-de-publicidad-bogota", "gracias"] },
    { slug: ["agencia-de-publicidad-medellin", "gracias"] },
    { slug: ["publicidad-proyectos-inmobiliarios", "gracias"] },
    { slug: ["otra", "ruta", "gracias"] },
  ];
}
