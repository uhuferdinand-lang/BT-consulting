"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Footer } from "./Footer";
import { MobileBookingBar } from "./MobileBookingBar";
import { Navbar } from "./Navbar";

export function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (document.querySelector('link[data-bt-fonts="true"]')) return;

    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnect);

    const preconnectStatic = document.createElement("link");
    preconnectStatic.rel = "preconnect";
    preconnectStatic.href = "https://fonts.gstatic.com";
    preconnectStatic.crossOrigin = "anonymous";
    document.head.appendChild(preconnectStatic);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.dataset.btFonts = "true";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F3EF] font-['DM_Sans'] text-[#1A1A18] antialiased selection:bg-[#C65F8A] selection:text-[#F5F3EF]">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
      <MobileBookingBar />
    </main>
  );
}
