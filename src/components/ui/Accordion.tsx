"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ease } from "@/lib/motion";

export function Accordion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-lux">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className="font-serif text-xl md:text-2xl group-hover:text-muted transition-colors duration-500">
          {question}
        </span>
        <span className="relative w-4 h-4 flex items-center justify-center text-muted">
          <span className="absolute w-full h-[1px] bg-current" />
          <span
            className={`absolute w-[1px] h-full bg-current transition-transform duration-700 ease-lux ${isOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"}`}
          />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease }}
            className="overflow-hidden"
          >
            <p className="pb-8 font-sans text-muted text-lg leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
