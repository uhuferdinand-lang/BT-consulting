"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BookingButton } from "./BookingButton";

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Case Studies", "/case-studies"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`sticky top-0 z-50 border-b bg-[#F5F3EF] transition-all duration-300 ${
          scrolled
            ? "border-[#C9C3BB] bg-[#F5F3EF]/90 backdrop-blur-sm"
            : "border-[#D8D4CE]"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link
            href="/"
            aria-label="BT Consulting home"
            className="flex min-h-11 items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#C65F8A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F3EF]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#C65F8A] font-['DM_Sans'] text-sm font-medium lowercase text-[#F5F3EF]">
              bt
            </span>
            <span className="hidden font-['DM_Sans'] text-sm font-medium text-[#1A1A18] sm:inline">
              Business Therapy Consulting
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.slice(0, -1).map(([label, href]) => (
              <Link
                key={label}
                href={href}
                aria-label={`Go to ${label}`}
                className="min-h-11 content-center rounded-sm font-['DM_Sans'] text-sm font-normal text-[#1A1A18] outline-none transition-colors hover:text-[#C65F8A] focus-visible:ring-2 focus-visible:ring-[#C65F8A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F3EF]"
              >
                {label}
              </Link>
            ))}
            <BookingButton label="Book a Session" className="px-5 py-2.5" />
          </div>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-[#1A1A18] outline-none focus-visible:ring-2 focus-visible:ring-[#C65F8A] lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#1A1A18] px-6 py-6 text-[#F5F3EF]"
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-20 flex flex-col gap-7">
              {navItems.map(([label, href], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index }}
                >
                  <Link
                    href={href}
                    aria-label={`Go to ${label}`}
                    onClick={() => setOpen(false)}
                    className="font-['Playfair_Display'] text-3xl font-normal text-[#F5F3EF]"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <BookingButton label="Book a Session" />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
