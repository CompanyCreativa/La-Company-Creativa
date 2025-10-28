import MainSection from "../components/brandingTwo/mainSection";
import CreateBrand from "../components/brandingTwo/createBrand";
import WeDoIt from "../components/branding/weDoIt";
import Logo from "../components/brandingTwo/logo";
import FrequentQuestions from "../components/brandingTwo/frequentQuestions";
import FormBranding from "../components/branding/formBranding";
import BrandingHeader from "../components/brandingTwo/brandingHeader";
import Footer from "../components/brandingTwo/footer";
import Projects from "../components/brandingTwo/projects";
import Services from "../components/brandingTwo/services";
import Process from "../components/brandingTwo/process";

export default function page() {
  return (
    <div>
      <BrandingHeader />
      <div className="flex flex-col bg-[#F2F1ED] justify-center items-center gap-[116px]">
        <MainSection city="Medellín" />
        <Logo />
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
