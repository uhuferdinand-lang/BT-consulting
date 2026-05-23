"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BOOKING_HREF } from "@/constants";

type BookingButtonProps = {
  label?: string;
  variant?: "primary" | "outline";
  href?: string;
  className?: string;
  ariaLabel?: string;
};

export function BookingButton({
  label = "Book a Diagnosis Session",
  variant = "primary",
  href = BOOKING_HREF,
  className = "",
  ariaLabel,
}: BookingButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-6 py-3 font-['DM_Sans'] text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#C65F8A] focus-visible:ring-offset-2";
  const styles =
    variant === "outline"
      ? "border border-[#C65F8A] text-[#C65F8A] hover:bg-[#C65F8A] hover:text-[#F5F3EF] focus-visible:ring-offset-[#F5F3EF]"
      : "bg-[#C65F8A] text-[#F5F3EF] hover:bg-[#AD4F78] focus-visible:ring-offset-[#F5F3EF]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? label}
      className="inline-flex"
    >
      <motion.button
        type="button"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.99 }}
        className={`${base} ${styles} ${className}`}
      >
        {label}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </motion.button>
    </a>
  );
}
