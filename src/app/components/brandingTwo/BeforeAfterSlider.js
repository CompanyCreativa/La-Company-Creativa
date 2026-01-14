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
  const afterRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const handle = handleRef.current;
    const afterLayer = afterRef.current;

    const setPosition = (clientX) => {
      const rect = container.getBoundingClientRect();
      let x = clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));

      const percentage = (x / rect.width) * 100;
      handle.style.left = `${percentage}%`;
      afterLayer.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    };

    const onPointerDown = (e) => {
      e.preventDefault();
      handle.setPointerCapture(e.pointerId);
      setPosition(e.clientX);
    };

    const onPointerMove = (e) => {
      if (!handle.hasPointerCapture(e.pointerId)) return;
      setPosition(e.clientX);
    };

    const onPointerUp = (e) => {
      handle.releasePointerCapture(e.pointerId);
    };

    setPosition(container.offsetWidth / 2);

    handle.addEventListener("pointerdown", onPointerDown);
    handle.addEventListener("pointermove", onPointerMove);
    handle.addEventListener("pointerup", onPointerUp);
    handle.addEventListener("pointercancel", onPointerUp);

    return () => {
      handle.removeEventListener("pointerdown", onPointerDown);
      handle.removeEventListener("pointermove", onPointerMove);
      handle.removeEventListener("pointerup", onPointerUp);
      handle.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl select-none mx-auto max-w-[90%] h-[300px] xl:h-[600px] xl:max-w-[1300px] 2xl:max-w-[1500px]"
    >
      {/* AFTER (SIEMPRE 100%) */}
      <Image
        src={after}
        alt="Before"
        fill
        className="object-cover hidden lg:block"
        priority
      />

      {/* AFTER MOBILE */}
      <Image
        src={afterMobile}
        alt="Before"
        fill
        className="object-cover lg:hidden"
        priority
      />

      {/* BEFORE */}
      <div
        ref={afterRef}
        className="absolute inset-0 lg:hidden"
        style={{ clipPath: "inset(0 100% 0 0)" }}
      >
        <Image src={beforeMobile} alt="After" fill className="object-cover" />
      </div>

      {/* BEFORE MOBILE */}
      <div
        ref={afterRef}
        className="absolute inset-0 hidden lg:block"
        style={{ clipPath: "inset(0 100% 0 0)" }}
      >
        <Image src={before} alt="After" fill className="object-cover" />
      </div>

      {/* HANDLE */}
      <div
        ref={handleRef}
        className="absolute top-0 h-full w-[2px] bg-white cursor-pointer  shadow-[0px_4px_4px_rgba(0,0,0,1)]"
      >
        <div className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white  flex items-center justify-center text-black font-bold">
          <Image src={ChangeImageButton} alt="Change" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
