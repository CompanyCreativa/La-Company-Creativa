"use client";
import { useState } from "react";
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
  const total = images.length;

  // Función para calcular el desplazamiento más corto entre dos índices en un carrusel circular
  const getCircularOffset = (i) => {
    let offset = i - currentIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  const getCardStyle = (i) => {
    const offset = getCircularOffset(i);
    const rotate = offset * 40; // inclinación por posición
    const translateX = offset * 400; // solapado horizontal
    const translateY = Math.abs(offset) * 200; // altura relativa
    const scale = offset === 0 ? 1.1 : 1; // más grande la activa
    const zIndex = total - Math.abs(offset); // en frente la activa

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

  return (
    <div className="flex flex-col items-center gap-6 py-10">
      <div className="relative w-[500px] h-[500px] flex justify-center items-center ml-52 rotate-[10deg]">
        {images.map((src, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="absolute w-40 h-56 md:w-[418px] md:h-[418px] rounded-lg overflow-hidden shadow-lg cursor-pointer border-2 border-transparent transition-all duration-500"
            style={{
              ...getCardStyle(i),
            }}
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
