"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function MagneticButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    setPosition({
      x: (clientX - (left + width / 2)) * 0.15,
      y: (clientY - (top + height / 2)) * 0.15,
    });
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-block cursor-pointer ${className}`}
    >
      <span className="group relative flex items-center gap-4 bg-accent px-8 py-5 font-sans text-background transition-colors hover:bg-foreground md:px-10 md:py-6">
        <motion.span animate={{ x: position.x * 0.3, y: position.y * 0.3 }}>
          {children}
        </motion.span>
        <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-lux group-hover:translate-x-1" />
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="micro-caps inline-block">
        {content}
      </a>
    );
  }

  return (
    <button type="button" className="micro-caps inline-block">
      {content}
    </button>
  );
}

export function EditorialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center font-sans micro-caps text-accent"
    >
      {children}
      <span className="ml-4 transition-transform duration-700 ease-lux group-hover:translate-x-2">
        -&gt;
      </span>
      <span className="absolute -bottom-2 left-0 h-[1px] w-full origin-left scale-x-0 bg-accent transition-transform duration-700 ease-lux group-hover:scale-x-100" />
    </a>
  );
}
