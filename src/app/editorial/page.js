import EditorialHeader from "../components/editorial/editorialHeader";
import MainSection from "../components/editorial/mainSection";
import BuildExperience from "../components/editorial/buildExperience";
import WhatWeDo from "../components/editorial/whatWeDo";

import FrequentQuestions from "../components/realstate/frequentQuestions";
import FooterBranding from "../components/branding/footerBranding";
import PurchaseDecision from "../components/realstate/purchaseDecision";
import Proyects from "../components/realstate/proyects";
import Experience from "../components/branding/experience";
import FormRealstate from "../components/realstate/formRealstate";
import Projects from "../components/editorial/projects";

export default function page() {
  return (
    <div className="bg-[#302F32]">
      <EditorialHeader />
      <div className="flex flex-col px-3 md:px-20 xl:px-32 2xl:px-52 gap-32 max-w-[1920px] mx-auto">
        <MainSection />
        <BuildExperience />
        <WhatWeDo />
        <Projects />
        <Proyects />
        <Experience />
        <FrequentQuestions />
        <FormRealstate />
        <FooterBranding />
      </div>
    </div>
  );
}
