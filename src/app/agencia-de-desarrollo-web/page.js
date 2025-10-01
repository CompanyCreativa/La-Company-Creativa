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
import WppLogo from "/public/digital/wppLogo.webp";

import logoGoogle from "/public/digital/logo-google.png";
import logoMeta from "/public/digital/logo-meta.png";
import logoTiktok from "/public/digital/logo-tiktok.png";
import logoLinkedin from "/public/digital/logo-linkedin.png";

import renderPc from "/public/digital/render-pc.png";
import Header from "../components/web/header";
import Services from "../components/web/services";

export default function page() {
  return (
    <div className="overflow-hidden min-h-screen bg-[#201C1C] flex flex-col items-center">
      <Header />
      <Services />
    </div>
  );
}
