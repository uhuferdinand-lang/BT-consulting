"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/lib/motion";

export function ImageReveal({ src, alt }: { src: string, alt: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <div ref={ref} className="relative overflow-hidden w-full h-full bg-onyx/5">
      <motion.div
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={isInView ? { clipPath: "inset(0% 0% 0% 0%)" } : { clipPath: "inset(100% 0% 0% 0%)" }}
        transition={{ duration: 1.4, ease }}
        className="w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          initial={{ scale: 1.15 }}
          animate={isInView ? { scale: 1 } : { scale: 1.15 }}
          transition={{ duration: 2, ease }}
          className="object-cover w-full h-full origin-center"
        />
      </motion.div>
    </div>
  );
}
