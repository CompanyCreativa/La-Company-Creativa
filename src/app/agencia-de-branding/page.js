"use client";
import Image from "next/image";


export default function page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F2F1ED] ">
      <div>
        <h1>
          ¿TU MARCA <br /> <span>SE VE, PERO</span>, <br />
          NO SE SIENTE?
        </h1>
        <image src="/agencia-de-branding.png" alt="Agencia de branding" />
      </div>
    </div>
  );
}
