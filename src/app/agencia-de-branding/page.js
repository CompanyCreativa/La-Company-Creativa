import MainSection from "../components/branding/mainSection";
import WhatWeDo from "../components/branding/whatWeDo";
import BuildBrand from "../components/branding/buildBrand";
import WeDoIt from "../components/branding/weDoIt";

export default function page() {
  return (
    <div className="flex flex-col bg-[#F2F1ED] mt-[100px] px-4 md:px-5 xl:px-24 gap-[116px]">
      <MainSection />
      <WhatWeDo />
      <BuildBrand />
      <WeDoIt />
    </div>
  );
}
