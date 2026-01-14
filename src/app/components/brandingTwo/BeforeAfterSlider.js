"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import ChangeImageButton from "/public/branding/changesButton.webp";

export default function BeforeAfterSlider({
  before,
  after,
  beforeMobile,
  afterMobile,
}) {
  const containerRef = useRef(null);
  const handleRef = useRef(null);
  const beforeDesktopRef = useRef(null);
  const beforeMobileRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const handle = handleRef.current;
    const beforeDesktop = beforeDesktopRef.current;
    const beforeMobile = beforeMobileRef.current;

    const setPosition = (clientX) => {
      const rect = container.getBoundingClientRect();
      let x = clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));

      const percentage = (x / rect.width) * 100;
      handle.style.left = `${percentage}%`;
      
      const clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      if (beforeDesktop) beforeDesktop.style.clipPath = clipPath;
      if (beforeMobile) beforeMobile.style.clipPath = clipPath;
    };

    let isDragging = false;

    const onPointerDown = (e) => {
      e.preventDefault();
      e.stopPropagation();
      isDragging = true;
      handle.setPointerCapture(e.pointerId);
      setPosition(e.clientX || e.touches?.[0]?.clientX);
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      setPosition(e.clientX || e.touches?.[0]?.clientX);
    };

    const onPointerUp = (e) => {
      if (!isDragging) return;
      isDragging = false;
      if (handle.hasPointerCapture(e.pointerId)) {
        handle.releasePointerCapture(e.pointerId);
      }
    };

    // Inicializar en el centro
    setPosition(container.offsetWidth / 2);

    // Eventos pointer (funcionan en desktop y mobile)
    handle.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointercancel", onPointerUp);

    // Prevenir scroll en mobile mientras se arrastra
    handle.addEventListener("touchstart", (e) => e.preventDefault(), { passive: false });

    return () => {
      handle.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl select-none mx-auto max-w-[90%] h-[300px] xl:h-[600px] xl:max-w-[1300px] 2xl:max-w-[1500px] touch-none"
    >
      {/* AFTER Desktop (capa inferior) */}
      <Image
        src={after}
        alt="After"
        fill
        className="object-cover hidden lg:block pointer-events-none"
        priority
      />

      {/* AFTER Mobile (capa inferior) */}
      <Image
        src={afterMobile}
        alt="After"
        fill
        className="object-cover lg:hidden pointer-events-none"
        priority
      />

      {/* BEFORE Desktop (capa superior con clipPath) */}
      <div
        ref={beforeDesktopRef}
        className="absolute inset-0 hidden lg:block pointer-events-none"
        style={{ clipPath: "inset(0 50% 0 0)" }}
      >
        <Image src={before} alt="Before" fill className="object-cover" />
      </div>

      {/* BEFORE Mobile (capa superior con clipPath) */}
      <div
        ref={beforeMobileRef}
        className="absolute inset-0 lg:hidden pointer-events-none"
        style={{ clipPath: "inset(0 50% 0 0)" }}
      >
        <Image src={beforeMobile} alt="Before" fill className="object-cover" />
      </div>

      {/* HANDLE */}
      <div
        ref={handleRef}
        className="absolute top-0 h-full w-[2px] bg-white cursor-pointer shadow-[0px_4px_4px_rgba(0,0,0,1)] touch-none"
        style={{ touchAction: "none" }}
      >
        <div className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white flex items-center justify-center text-black font-bold">
          <Image src={ChangeImageButton} alt="Change" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}