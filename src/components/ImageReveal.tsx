"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

export function ImageReveal({
  src,
  alt,
  className = "aspect-[4/3] md:aspect-[16/9]",
  imgClassName = "",
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
      animate={
        inView
          ? { clipPath: "inset(0 0% 0 0)", opacity: 1 }
          : { clipPath: "inset(0 100% 0 0)", opacity: 0 }
      }
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className={`relative overflow-hidden rounded-sm ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover object-center ${imgClassName}`}
      />
      <div className="absolute inset-0 bg-[#1A1A18]/25" aria-hidden="true" />
    </motion.div>
  );
}
