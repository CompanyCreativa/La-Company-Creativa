"use client";
import Header from "../components/web/header";
import MainSection from "../components/web/mainSection";

export default function page() {
  return (
    <div className="overflow-hidden min-h-screen bg-[#201C1C] flex flex-col items-center">
      <Header />
      <MainSection />
    </div>
  );
}
