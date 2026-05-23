"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MagneticButton({ children, inverted = false, className }: { children: React.ReactNode, inverted?: boolean, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 }); // 15% magnetic pull
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn("inline-block cursor-pointer", className)}
    >
      <motion.button
        animate={{ x: position.x * 0.3, y: position.y * 0.3 }} // Inner text moves slightly more
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className={cn(
          "px-10 py-5 rounded-none font-sans uppercase tracking-[0.2em] text-[10px] transition-colors duration-500",
          inverted ? "bg-alabaster text-onyx hover:bg-gray-200" : "bg-onyx text-alabaster hover:bg-charcoal"
        )}
      >
        {children}
      </motion.button>
    </motion.div>
  );
}
