"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import imgSlider1 from "/public/editorial/imgSlider1.webp";
import imgSlider2 from "/public/editorial/imgSlider2.webp";
import imgSlider3 from "/public/editorial/imgSlider3.webp";
import imgSlider4 from "/public/editorial/imgSlider4.webp";
import imgSlider5 from "/public/editorial/imgSlider5.webp";
import imgSlider6 from "/public/editorial/imgSlider6.webp";
import imgSlider7 from "/public/editorial/imgSlider7.webp";
import imgSlider8 from "/public/editorial/imgSlider8.webp";

export default function FanDeckCarousel() {
  const images = [
    imgSlider1,
    imgSlider2,
    imgSlider3,
    imgSlider4,
    imgSlider5,
    imgSlider6,
    imgSlider7,
    imgSlider8,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = images.length;

  // Detectar si es mobile o desktop
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);

    const listener = (e) => setIsMobile(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  // Desplazamiento circular
  const getCircularOffset = (i) => {
    let offset = i - currentIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  // Estilos de cada tarjeta
  const getCardStyle = (i) => {
    const offset = getCircularOffset(i);

    // Ajustes distintos para mobile y desktop
    const rotate = offset * (isMobile ? 20 : 40);
    const translateX = offset * (isMobile ? 150 : 400);
    const translateY = Math.abs(offset) * (isMobile ? 80 : 200);
    const scale = offset === 0 ? 1.1 : 1;
    const zIndex = total - Math.abs(offset);

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
      zIndex,
    };
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Autoplay cada 5s
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="flex flex-col items-center mx-auto gap-6 py-10">
      <div className="relative w-[250px] h-[250px] md:w-[418px] md:h-[418px] xl:w-[500px] xl:h-[500px] flex justify-center items-center md:ml-52 md:rotate-[10deg]">
        {images.map((src, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="absolute w-[250px] h-[250px] md:w-[418px] md:h-[418px] rounded-lg overflow-hidden shadow-lg cursor-pointer border-2 border-transparent transition-all duration-500"
            style={getCardStyle(i)}
          >
            <Image
              src={src}
              alt={`Imagen ${i}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
