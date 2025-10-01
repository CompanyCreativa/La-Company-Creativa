"use client";
import { motion } from "framer-motion";

export default function StarSVG({ className = "" }) {
  return (
    <motion.svg
      width="129"
      height="129"
      viewBox="0 0 129 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{
        rotate: [0, 60, 120, 180, 240, 300, 360, 300, 240, 180, 120, 60, 0],
      }}
      transition={{
        duration: 12, // duración total del ciclo
        ease: "easeInOut",
        repeat: Infinity, // ciclo infinito
        times: Array.from({ length: 24 }, (_, i) => i / 23), // distribuye los "frames"
      }}
    >
      <path
        d="M77.8869 13.588L68.8879 56.9064C68.7254 57.6887 69.5384 58.3125 70.2519 57.9531L109.765 38.0491L72.7712 62.3166C72.1032 62.7548 72.2369 63.7708 72.9956 64.0212L115.01 77.8871L71.6915 68.8881C70.9093 68.7256 70.2855 69.5386 70.6449 70.2521L90.5489 109.765L66.2814 72.7714C65.8431 72.1034 64.8271 72.2372 64.5768 72.9959L50.7109 115.01L59.7099 71.6918C59.8724 70.9095 59.0594 70.2857 58.3458 70.6451L18.8326 90.5491L55.8266 66.2816C56.4946 65.8434 56.3608 64.8274 55.6021 64.577L13.5878 50.7111L56.9062 59.7101C57.6885 59.8726 58.3123 59.0596 57.9529 58.3461L38.0489 18.8328L62.3164 55.8268C62.7546 56.4948 63.7706 56.361 64.021 55.6024L77.8869 13.588Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}
