import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedBlock } from "./AnimatedBlock";
import { grainStyle } from "@/constants";

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Case Studies", "/case-studies"],
  ["Contact", "/contact"],
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1A1A18] px-5 text-[#F5F3EF] sm:px-8 lg:px-10">
      <div className="absolute inset-0 opacity-[0.04]" style={grainStyle} aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <AnimatedBlock className="grid gap-8 border-b border-[#3A3A36] py-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <p className="font-['Playfair_Display'] text-2xl italic leading-snug text-[#F5F3EF]">
            Get the thinking on strategy, structure, and scale.
          </p>
          <a
            href="mailto:hello@btconsulting.co"
            aria-label="Email BT Consulting"
            className="inline-flex min-h-11 items-center gap-2 justify-self-start rounded-sm font-['DM_Sans'] text-sm font-normal text-[#A09890] outline-none transition-colors hover:text-[#BFCFA2] focus-visible:ring-2 focus-visible:ring-[#F5F3EF]"
          >
            hello@btconsulting.co
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </AnimatedBlock>

        <div className="grid grid-cols-2 gap-10 py-12 md:grid-cols-4">
          <AnimatedBlock>
            <p className="font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#F5F3EF]">
              Navigate
            </p>
            <ul className="mt-5 space-y-3 font-['DM_Sans'] text-sm font-light text-[#A09890]">
              {navItems.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    aria-label={`Go to ${label}`}
                    className="transition-colors hover:text-[#BFCFA2]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedBlock>

          <AnimatedBlock delay={0.1}>
            <p className="font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#F5F3EF]">
              Work with us
            </p>
            <ul className="mt-5 space-y-3 font-['DM_Sans'] text-sm font-light text-[#A09890]">
              <li>
                <a href="/services" className="transition-colors hover:text-[#BFCFA2]">
                  Diagnosis Session
                </a>
              </li>
              <li>
                <a href="/contact" className="transition-colors hover:text-[#BFCFA2]">
                  Contact
                </a>
              </li>
            </ul>
          </AnimatedBlock>

          <AnimatedBlock delay={0.2}>
            <p className="font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#F5F3EF]">
              Studio
            </p>
            <ul className="mt-5 space-y-3 font-['DM_Sans'] text-sm font-light text-[#A09890]">
              <li>Lagos, Nigeria</li>
              <li>Virtual worldwide</li>
              <li>Mon-Fri · 09:00-18:00 WAT</li>
            </ul>
          </AnimatedBlock>

          <AnimatedBlock delay={0.3}>
            <p className="font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#F5F3EF]">
              Business Therapy
            </p>
            <p className="mt-5 max-w-xs font-['DM_Sans'] text-sm font-light leading-relaxed text-[#A09890]">
              Clinical precision for founder-led businesses ready to stop
              guessing and start operating with structure.
            </p>
          </AnimatedBlock>
        </div>

        <AnimatedBlock className="flex flex-col justify-between gap-4 border-t border-[#3A3A36] py-6 sm:flex-row">
          <p className="font-['DM_Sans'] text-sm font-medium text-[#F5F3EF]">
            BT Consulting
          </p>
          <p className="font-['DM_Sans'] text-xs font-light text-[#A09890]">
            © 2026 Business Therapy Consulting
          </p>
        </AnimatedBlock>
      </div>
    </footer>
  );
}
