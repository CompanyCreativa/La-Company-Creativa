import MainSection from "../components/realstate/mainSection";
import FrequentQuestions from "../components/realstate/frequentQuestions";
import BrandingHeader from "../components/branding/brandingHeader";
import FooterBranding from "../components/branding/footerBranding";
import Pains from "../components/realstate/pains";
import Services from "../components/realstate/services";
import PurchaseDecision from "../components/realstate/purchaseDecision";
import Proyects from "../components/realstate/proyects";
import Experience from "../components/branding/experience";
import FormRealstate from "../components/realstate/formRealstate";

export default function page() {
  return (
    <div className="bg-[#F2F1ED]">
      <BrandingHeader />
      <div className="flex flex-col  px-7 lg:px-14 xl:px-12 2xl:px-16 gap-[116px] max-w-[1920px] mx-auto">
        <MainSection />
        <Pains />
        <Services />
        <PurchaseDecision />
        <Proyects />
        <Experience />
        <FrequentQuestions />
        <FormRealstate />
        <FooterBranding />
      </div>
    </div>
  );
}
