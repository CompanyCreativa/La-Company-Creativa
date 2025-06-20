"use client";

import Link from "next/link";

function HomeMainBanner() {
  return (
    <div className="relative z-10 -mx-8 md:mx-0 aspect-video overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1024776482?title=0&amp;byline=0&amp;portrait=0&amp;playsinline=0&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;controls=0&amp;loop=1&amp;app_id=122963"
        allow="autoplay; fullscreen; clipboard-write"
        title="La Company"
        data-ready="true"
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
      <Link
        href="/contacto"
        className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 bottom-[70px] z-10 text-background font-normal SpaceGrotesk border border-background py-2 px-4 hover:bg-companySalmon transition-all text-lg cursor-pointer"
      >
        Contáctanos
      </Link>
    </div>
  );
}

export default HomeMainBanner;
