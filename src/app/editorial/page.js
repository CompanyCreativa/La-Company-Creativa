import EditorialHeader from "../components/editorial/editorialHeader";
import MainSection from "../components/editorial/mainSection";
import BuildExperience from "../components/editorial/buildExperience";
import WhatWeDo from "../components/editorial/whatWeDo";
import Projects from "../components/editorial/projects";
import FormEditorial from "../components/editorial/formEditorial";
import FooterEditorial from "../components/editorial/footerEditorial";

export default function page() {
  return (
    <div className="bg-[#302F32]">
      <EditorialHeader />
      <div className="flex flex-col px-3 md:px-20 xl:px-32 2xl:px-52 gap-32 max-w-[1920px] mx-auto">
        <MainSection />
        <BuildExperience />
        <WhatWeDo />
        <Projects />
        <FormEditorial />
        <FooterEditorial />
      </div>
    </div>
  );
}
