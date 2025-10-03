"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function SquareDotSVG({ className = "" }) {
  // coordenadas de la línea
  const x = 26.1587; // fijo
  const y1 = 6.03522;
  const y2 = 56.9653;

  // MotionValue para controlar el progreso (0 → inicio, 1 → final)
  const progress = useMotionValue(0);

  // Interpolamos Y (X es fijo)
  const cy = useTransform(progress, [0, 1], [y1, y2]);

  useEffect(() => {
    // animación ping-pong
    animate(progress, 1, {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    });
  }, [progress]);

  return (
    <svg
      viewBox="0 0 52 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className + "overflow-visible"}
    >
      {/* línea de referencia */}
      <line
        x1="26.1587"
        y1="56.9653"
        x2="26.1587"
        y2="6.03522"
        stroke="#F55548"
      />

      {/* cuadrado */}
      <rect
        x="0.5"
        y="6.19067"
        width="50.6187"
        height="50.6187"
        stroke="#F55548"
      />

      {/* círculo animado */}
      <motion.circle r="4.5" fill="#F55548" cx={x} cy={cy} />
    </svg>
  );
}
