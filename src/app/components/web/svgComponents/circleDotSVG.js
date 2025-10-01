"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function CircleDotSVG({ className = "" }) {
  // valores de la línea
  const x1 = 67.1013;
  const y1 = 19.7865;
  const x2 = 43.7668;
  const y2 = 98.2754;

  // MotionValue para controlar el progreso (0 → inicio, 1 → final)
  const progress = useMotionValue(0);

  // Interpolamos X e Y según el progreso
  const cx = useTransform(progress, [0, 1], [x1, x2]);
  const cy = useTransform(progress, [0, 1], [y1, y2]);

  useEffect(() => {
    // animación ping-pong (ida y vuelta)
    animate(progress, 1, {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse", // 🔑 hace que se devuelva
      ease: "easeInOut",
    });
  }, [progress]);

  return (
    <svg
      viewBox="0 0 121 121"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* círculo grande */}
      <circle
        cx="60.6561"
        cy="60.6562"
        r="42.1562"
        transform="rotate(-45 60.6561 60.6562)"
        stroke="currentColor"
      />

      {/* línea de referencia */}
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" />

      {/* círculo animado */}
      <motion.circle r="7.2" fill="currentColor" cx={cx} cy={cy} />
    </svg>
  );
}
