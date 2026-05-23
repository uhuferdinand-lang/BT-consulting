"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

const luxEase = [0.16, 1, 0.3, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1.4, ease: luxEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealLine({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <span ref={ref} className="relative overflow-hidden inline-flex pb-2">
      <motion.span
        className="origin-bottom-left"
        initial={{ y: "100%", opacity: 0, rotateZ: 3 }}
        animate={
          isInView
            ? { y: 0, opacity: 1, rotateZ: 0 }
            : { y: "100%", opacity: 0, rotateZ: 3 }
        }
        transition={{ duration: 1.4, ease: luxEase, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
