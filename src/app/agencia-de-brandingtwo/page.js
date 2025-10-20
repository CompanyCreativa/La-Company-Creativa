import MainSection from "../components/brandingTwo/mainSection";
import WhatWeDo from "../components/branding/whatWeDo";
import BuildBrand from "../components/branding/buildBrand";
import WeDoIt from "../components/branding/weDoIt";
import Logo from "../components/brandingTwo/logo";
import CreateBrand from "../components/branding/createBrand";
import FrequentQuestions from "../components/branding/frequentQuestions";
import FormBranding from "../components/branding/formBranding";
import BrandingHeader from "../components/brandingTwo/brandingHeader";
import FooterBranding from "../components/branding/footerBranding";

export default function page() {
  return (
    <div>
      <BrandingHeader />
      <div className="flex flex-col bg-[#F2F1ED] justify-center items-center gap-[116px]">
        <MainSection city="Medellín" />
        <Logo />
        {/* <WhatWeDo /> */}
        <BuildBrand city={"Medellín"} />
        <WeDoIt city={"Medellín"} />
        <CreateBrand />
        <FrequentQuestions />
        <FormBranding />
        <FooterBranding />
      </div>
    </div>
  );
}
