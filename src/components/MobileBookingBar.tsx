"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BookingButton } from "./BookingButton";

export function MobileBookingBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={show ? { y: 0 } : { y: "100%" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-[#3A3A36] bg-[#1A1A18] px-4 py-3 md:hidden"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-['DM_Sans'] text-sm font-medium text-[#F5F3EF]">
            Business Diagnosis Session
          </p>
          <p className="font-['Playfair_Display'] text-lg font-normal text-[#F5F3EF]">
            $299
          </p>
        </div>
        <BookingButton label="Book" className="px-4 py-2.5" />
      </div>
    </motion.div>
  );
}

