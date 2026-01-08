"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function BeforeAfterSlider({ before, after, height = 600 }) {
  const containerRef = useRef(null);
  const handleRef = useRef(null);
  const afterRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const handle = handleRef.current;
    const afterLayer = afterRef.current;

    let dragging = false;

    const setPosition = (clientX) => {
      const rect = container.getBoundingClientRect();
      let x = clientX - rect.left;

      x = Math.max(0, Math.min(x, rect.width));
      const percentage = (x / rect.width) * 100;

      handle.style.left = `${percentage}%`;
      afterLayer.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    };

    const start = (e) => {
      dragging = true;
      setPosition(e.clientX || e.touches[0].clientX);
    };

    const move = (e) => {
      if (!dragging) return;
      setPosition(e.clientX || e.touches[0].clientX);
    };

    const stop = () => (dragging = false);

    setPosition(container.offsetWidth / 2);

    handle.addEventListener("mousedown", start);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);

    handle.addEventListener("touchstart", start);
    window.addEventListener("touchmove", move);
    window.addEventListener("touchend", stop);

    return () => {
      handle.removeEventListener("mousedown", start);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", stop);

      handle.removeEventListener("touchstart", start);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl select-none mx-auto xl:max-w-[1300px] 2xl:max-w-[1500px]"
      style={{ height }}
    >
      {/* BEFORE */}
      <Image src={after} alt="Before" fill className="object-cover" priority />

      {/* AFTER (SIEMPRE 100%) */}
      <div
        ref={afterRef}
        className="absolute inset-0"
        style={{ clipPath: "inset(0 50% 0 0)" }}
      >
        <Image src={before} alt="After" fill className="object-cover" />
      </div>

      {/* HANDLE */}
      <div
        ref={handleRef}
        className="absolute top-0 h-full w-[2px] bg-white cursor-ew-resize shadow-lg"
      >
        <div className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg flex items-center justify-center text-black font-bold">
          ↔
        </div>
      </div>
    </div>
  );
}
