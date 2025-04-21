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

export default function page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-noise-new mt-[-55px]">
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
      </div>
    </div>
  );
}
