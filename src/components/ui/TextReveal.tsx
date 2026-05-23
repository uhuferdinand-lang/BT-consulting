"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease, duration } from "@/lib/motion";

export function TextReveal({ children, delay = 0 }: { children: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Split text into words for a staggered effect, or keep as a block for line reveal
  return (
    <span ref={ref} className="relative overflow-hidden inline-block pb-1">
      <motion.span
        className="inline-block origin-bottom"
        initial={{ y: "100%", opacity: 0, rotateZ: 2 }}
        animate={isInView ? { y: 0, opacity: 1, rotateZ: 0 } : { y: "100%", opacity: 0, rotateZ: 2 }}
        transition={{ duration, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
