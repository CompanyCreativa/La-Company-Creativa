import MainSection from "../components/realstate/mainSection";
import WeDoIt from "../components/branding/weDoIt";
import CreateBrand from "../components/branding/createBrand";
import FrequentQuestions from "../components/branding/frequentQuestions";
import FormBranding from "../components/branding/formBranding";
import BrandingHeader from "../components/branding/brandingHeader";
import FooterBranding from "../components/branding/footerBranding";
import Pains from "../components/realstate/pains";
import StepsWork from "../components/realstate/stepsWork";
import Services from "../components/realstate/services";

export default function page() {
  return (
    <div className="bg-[#F2F1ED]">
      <BrandingHeader />
      <div className="flex flex-col  px-7 lg:px-14 xl:px-12 2xl:px-16 gap-[116px] max-w-[1920px] mx-auto">
        <MainSection />
        <Pains />
        <Services />
        <StepsWork city="Bogotá" />
        <WeDoIt city="Bogotá" />
        <CreateBrand />
        <FrequentQuestions />
        <FormBranding />
        <FooterBranding />
      </div>
    </div>
  );
}
