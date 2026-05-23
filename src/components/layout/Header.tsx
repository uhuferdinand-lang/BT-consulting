"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ease } from "@/lib/motion";

const navItems = [
  ["Approach", "#approach"],
  ["Outcomes", "#outcomes"],
  ["Firm", "#firm"],
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full px-6 transition-all duration-700 ease-lux md:px-12 xl:px-24 ${
          scrolled
            ? "border-b border-lux bg-background/85 py-5 backdrop-blur-md"
            : "bg-transparent py-8 md:py-10"
        }`}
      >
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
          <Link
            href="/"
            className="relative z-50 font-serif text-2xl tracking-tighter"
          >
            BT Consult.
          </Link>

          <nav className="hidden items-center gap-12 md:flex">
            {navItems.map(([item, href]) => (
              <Link
                key={item}
                href={href}
                className="micro-caps text-muted transition-colors duration-500 hover:text-foreground"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              className="micro-caps border border-lux px-6 py-3 text-accent transition-colors duration-500 hover:bg-accent hover:text-background"
            >
              Book Diagnosis
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="micro-caps relative z-50 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-surface"
          >
            <nav className="flex flex-col gap-8 text-center">
              {[...navItems, ["Book Diagnosis", "#contact"]].map(
                ([item, href], index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="font-serif text-4xl text-foreground"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ),
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
