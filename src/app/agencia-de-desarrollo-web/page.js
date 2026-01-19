"use client";
import Header from "../components/web/header";
import Services from "../components/web/services";
import MainSection from "../components/web/mainSection";
import Skills from "../components/web/skills";
import Projects from "../components/web/projects";
import Testimonials from "../components/web/testimonials";
import VideoWeb from "../components/web/videoWeb";
import Questions from "../components/web/questions";
import Footer from "../components/web/footer";
import BeforeAndAfter from "../components/web/beforeAndAfter";

export default function page() {
  return (
    <div className="overflow-hidden min-h-screen bg-[#201C1C] flex flex-col items-center">
      <Header />
      <MainSection />
      <Services />
      <BeforeAndAfter />
      <Skills />
      <Projects />
      <Testimonials />
      <VideoWeb />
      <Questions />
      <Footer />
    </div>
  );
}
