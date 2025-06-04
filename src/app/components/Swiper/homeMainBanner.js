"use client";

import { useState } from "react";
import Link from "next/link";

function HomeMainBanner() {
  return (
    <div className="relative z-10 w-full 2xl:h-[950px] xl:h-[800px] lg:h-[600px] h-[230px] sm:h-[400px] md:h-[500px]">
      <iframe
        src="https://player.vimeo.com/video/1024776482?title=0&amp;byline=0&amp;portrait=0&amp;playsinline=0&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;controls=0&amp;loop=1&amp;app_id=122963"
        width="100%"
        height="100%"
        allow="autoplay; fullscreen; clipboard-write"
        title="La Company"
        data-ready="true"
        style={{ width: "100%", height: "100%" }}
        className="w-full"
      ></iframe>
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
