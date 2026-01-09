import MainSection from "../components/brandingTwo/mainSection";
import CreateBrand from "../components/brandingTwo/createBrand";
import Logo from "../components/brandingTwo/logo";
import FrequentQuestions from "../components/brandingTwo/frequentQuestions";
import BrandingHeader from "../components/brandingTwo/brandingHeader";
import Footer from "../components/brandingTwo/footer";
import Projects from "../components/brandingTwo/projects";
import Services from "../components/brandingTwo/services";
import Process from "../components/brandingTwo/process";
import BeforeAfterSlider from "../components/brandingTwo/BeforeAfterSlider";
import AfterImportadorasAsociadas from "/public/branding/afterImportadorasAsociadas.webp";
import BeforeImportadorasAsociadas from "/public/branding/beforeImportadorasAsociadas.webp";
import AfterImportadorasAsociadasMobile from "/public/branding/afterImportadorasAsociadasMobile.webp";
import BeforeImportadorasAsociadasMobile from "/public/branding/beforeImportadorasAsociadasMobile.webp";

export default function page() {
  return (
    <div>
      <BrandingHeader />
      <div className="flex flex-col bg-[#F2F1ED] justify-center items-center gap-[86px] xl:gap-[116px]">
        <MainSection city="Medellín" />
        <Logo />
        <BeforeAfterSlider
          after={AfterImportadorasAsociadas}
          before={BeforeImportadorasAsociadas}
          afterMobile={AfterImportadorasAsociadasMobile}
          beforeMobile={BeforeImportadorasAsociadasMobile}
          aspect="16 / 9"
        />
        <Projects />
        <Services />
        <Process />
        <CreateBrand />
        <FrequentQuestions />
        <Footer />
      </div>
    </div>
  );
}
