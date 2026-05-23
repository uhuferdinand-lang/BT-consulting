"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxImage({ src, alt }: { src: string, alt: string }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // The image moves slightly slower than the scroll, creating depth
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full h-full bg-onyx">
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        className="w-full h-[120%] object-cover object-center origin-center filter grayscale-[30%] contrast-[1.1] hover:grayscale-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
      />
      {/* Film grain overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("/noise.png")' }} />
    </div>
  );
}
