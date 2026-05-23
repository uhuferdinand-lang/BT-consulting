"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ease } from "@/lib/motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values track raw mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Springs create the smooth trailing effect
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only mount on desktop
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16); // Center the cursor (32px width / 2)
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('button') || target.closest('a')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <motion.div 
        className="bg-white rounded-full"
        animate={{
          width: isHovered ? 32 : 8,
          height: isHovered ? 32 : 8,
          backgroundColor: isHovered ? "transparent" : "#ffffff",
          border: isHovered ? "1px solid #ffffff" : "0px solid #ffffff",
        }}
        transition={{ duration: 0.3, ease }}
      />
    </motion.div>
  );
}
