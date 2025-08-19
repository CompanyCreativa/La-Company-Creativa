import EditorialHeader from "../components/editorial/editorialHeader";
import MainSection from "../components/editorial/mainSection";

import FrequentQuestions from "../components/realstate/frequentQuestions";
import FooterBranding from "../components/branding/footerBranding";
import Pains from "../components/realstate/pains";
import Services from "../components/realstate/services";
import PurchaseDecision from "../components/realstate/purchaseDecision";
import Proyects from "../components/realstate/proyects";
import Experience from "../components/branding/experience";
import FormRealstate from "../components/realstate/formRealstate";

export default function page() {
  return (
    <div className="bg-[#302F32]">
      <EditorialHeader />
      <div className="flex flex-col md:px-20 xl:px-32 2xl:px-52 gap-[116px] max-w-[1920px] mx-auto">
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
