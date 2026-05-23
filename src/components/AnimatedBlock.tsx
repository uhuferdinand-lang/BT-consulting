"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedBlockProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedBlock({
  children,
  className = "",
  delay = 0,
}: AnimatedBlockProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

