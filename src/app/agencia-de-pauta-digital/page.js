"use client";
import Image from "next/image";

import DigitalHeader from "../components/digital/header";
import MainDigitalSection from "../components/digital/mainDigitalSection";

import WhyChooseUs from "../components/digital/whyChooseUs";
import DigitalServices from "../components/digital/digitalServices";
import HowWeWork from "../components/digital/howWeWork";
import Results from "../components/digital/Results";
import FormDigital from "../components/digital/formDigital";
import FrequentQuestions from "../components/digital/frequentQuestions";
import Reviews from "../components/digital/reviews";
import FooterDigital from "../components/digital/footerDigital";
import Head from "next/head";
import WppLogo from "/public/digital/wppLogo.webp";

export default function page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-noise-new mt-[-55px]">
      <Head>
        <title>Agencia de Pauta Digital</title>
        <meta name="description" content="Campañas que venden. Punto." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Contenido */}
      <div className="flex flex-col justify-center items-center relative z-10 text-white px-6 md:px-10 xl:px-20 2xl:px-44">
        <DigitalHeader />
        <MainDigitalSection />
        <WhyChooseUs />
        <DigitalServices />
        <HowWeWork />
        <Results />
        <FormDigital />
        <FrequentQuestions />
        <Reviews />
        <FooterDigital />
        <a href="https://wa.me/573148629805" target="_blank">
          <Image
            src={WppLogo}
            alt="WppLogo"
            className="fixed bottom-4 right-4 w-14 h-14 2xl:w-20 2xl:h-20 hover:scale-110 transition-transform duration-300"
            priority={true}
          />
        </a>
      </div>
    </div>
  );
}
