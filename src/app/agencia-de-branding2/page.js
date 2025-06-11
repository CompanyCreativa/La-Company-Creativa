import MainSection from "../components/branding/mainSection";
import WhatWeDo from "../components/branding/whatWeDo";
import BuildBrand from "../components/branding/buildBrand";
import WeDoIt from "../components/branding/weDoIt";
import Logo from "../components/branding/logo";
import CreateBrand from "../components/branding/createBrand";
import FrequentQuestions from "../components/branding/frequentQuestions";
import FormBranding from "../components/branding/formBranding";
import BrandingHeader from "../components/branding/brandingHeader";

export default function page() {
  return (
    <div>
      <BrandingHeader />
      <div className="flex flex-col bg-[#F2F1ED] px-8 lg:px-14 xl:px-20 2xl:px-24 gap-[116px]">
        <MainSection />
        <Logo />
        <WhatWeDo />
        <BuildBrand />
        <WeDoIt />
        <CreateBrand />
        <FrequentQuestions />
        <FormBranding />
      </div>
    </div>
  );
}
