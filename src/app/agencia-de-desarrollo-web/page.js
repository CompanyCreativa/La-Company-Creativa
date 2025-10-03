"use client";
import Header from "../components/web/header";
import Services from "../components/web/services";
import MainSection from "../components/web/mainSection";
import Skills from "../components/web/skills";
import Projects from "../components/web/projects";

export default function page() {
  return (
    <div className="overflow-hidden min-h-screen bg-[#201C1C] flex flex-col items-center">
      <Header />
      <MainSection />
      <Services />
      <Skills />
      <Projects />
    </div>
  );
}
