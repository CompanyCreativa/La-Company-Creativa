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

export default function page() {
  return (
    <div className="relative min-h-screen bg-[#090916] overflow-hidden bg-svg-noise">
      {/* Contenido */}
      <div className="flex flex-col justify-center items-center relative z-10 text-white px-6 md:px-10 xl:px-20 2xl:px-44 py-14">
        <DigitalHeader />
        <MainDigitalSection />
        <WhyChooseUs />
        <DigitalServices />
        <HowWeWork />
        <Results />
        <FormDigital />
        <FrequentQuestions />
      </div>

      {/* Luces difuminadas */}
      <div className="absolute left-[10%] top-[-400px] w-[1200px] h-[800px] bg-[#ffb600] rounded-full blur-3xl opacity-[0.05] animate-float1 z-0" />
      <div className="absolute right-[-200px] top-[-200px] w-[500px] h-[500px] bg-[#324a8c] rounded-full blur-3xl opacity-20 animate-float2 z-0" />
      <div className="absolute top-[30%] left-[50%] w-[200px] h-[200px] bg-blue-400 rounded-full blur-2xl opacity-25 animate-float3 z-0" />
    </div>
  );
}
