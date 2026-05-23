"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ease, duration } from "@/lib/motion";

export function AccessibleFade({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  // If mobile or reduced motion, fallback to a simple, fast opacity fade
  if (prefersReducedMotion) {
    return (
      <div ref={ref} style={{ opacity: isInView ? 1 : 0, transition: "opacity 0.5s ease" }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration, ease }}
    >
      {children}
    </motion.div>
  );
}
