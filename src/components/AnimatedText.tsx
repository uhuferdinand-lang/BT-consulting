"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type AnimatedTextProps = {
  text: string;
  tag?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  accentWords?: string[];
  accentClassName?: string;
};

const normalize = (word: string) =>
  word.toLowerCase().replace(/[^a-z0-9]/g, "");

export function AnimatedText({
  text,
  tag = "h2",
  className = "",
  delay = 0,
  accentWords = [],
  accentClassName = "font-['Playfair_Display'] italic text-[#6B6560]",
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const accents = useMemo(() => new Set(accentWords.map(normalize)), [accentWords]);
  const words = text.split(" ");

  const children = words.map((word, index) => {
    const isAccent = accents.has(normalize(word));
    const inner = (
      <motion.span
        className={isAccent ? accentClassName : undefined}
        initial={{ y: "100%", opacity: 0 }}
        animate={inView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, delay: delay + index * 0.04, ease }}
        style={{ display: "inline-block" }}
      >
        {word}
      </motion.span>
    );

    return (
      <span
        key={`${word}-${index}`}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        {isAccent ? <em className="not-italic">{inner}</em> : inner}
        {index < words.length - 1 ? "\u00a0" : ""}
      </span>
    );
  });

  if (tag === "h1") {
    return <h1 ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>{children}</h1>;
  }

  if (tag === "h3") {
    return <h3 ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>{children}</h3>;
  }

  if (tag === "p") {
    return <p ref={ref as React.RefObject<HTMLParagraphElement>} className={className}>{children}</p>;
  }

  return <h2 ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>{children}</h2>;
}
