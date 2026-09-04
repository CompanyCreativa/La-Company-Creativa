"use client";

import Link from "next/link";

function HomeMainBanner() {
  return (
    <div className="relative z-10 w-full 2xl:h-[950px] xl:h-[800px] lg:h-[600px] h-[230px] sm:h-[400px] md:h-[500px]">
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/ndADMCxtOUg?controls=0&autoplay=1&mute=1&loop=1&playlist=ndADMCxtOUg&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1"
          width="100%"
          height="100%"
          allow="autoplay; fullscreen; clipboard-write; encrypted-media; picture-in-picture"
          title="La Company"
          data-ready="true"
          style={{
            width: "100%",
            height: "100%",
            pointerEvents: "none", // bloquea clics, hover, toda interacción
          }}
          className="w-full"
        ></iframe>
      </div>
      <Link
        href="/contacto"
        className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 bottom-[70px] z-10 text-background font-normal SpaceGrotesk border border-background py-2 px-4 hover:bg-companySalmon transition-all text-lg cursor-pointer"
        style={{ animation: "slide-up opacity-1" }}
      >
        Contáctanos
      </Link>
    </div>
  );
}

export default HomeMainBanner;
