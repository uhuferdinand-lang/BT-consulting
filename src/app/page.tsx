"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  LayoutList,
  MapPin,
  Menu,
  Search,
  Target,
  X,
} from "lucide-react";

const COLORS = {
  light: "#F5F3EF",
  dark: "#1A1A18",
  card: "#EDEAE4",
  green: "#2D4A3E",
  greenHover: "#3D5C4E",
  primary: "#1A1A18",
  secondary: "#6B6560",
  darkText: "#F5F3EF",
  darkMuted: "#A09890",
  divider: "#D8D4CE",
  studio: "#2A2A27",
  studioBorder: "#3A3A36",
};

const EASE = [0.16, 1, 0.3, 1] as const;

const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const group: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const painPoints = [
  {
    number: "01",
    title: "Flat or unpredictable revenue",
    copy: "You are working harder than ever, but the numbers refuse to move in a straight line.",
  },
  {
    number: "02",
    title: "No clarity on what is broken",
    copy: "You have tried tactics. Rebrands. New hires. Nothing sticks because you have not found the root cause.",
  },
  {
    number: "03",
    title: "You are solving the wrong problems",
    copy: "The team is busy, but the business keeps circling the same constraint from a different angle.",
  },
];

const phases = [
  {
    number: "01",
    title: "Analyze",
    icon: Search,
    copy: "A forensic read of revenue, operations, positioning, and offer. We map what exists before we touch anything.",
  },
  {
    number: "02",
    title: "Identify",
    icon: Target,
    copy: "We isolate the one or two structural issues that are causing the most downstream damage. No scatter. Precision diagnosis.",
  },
  {
    number: "03",
    title: "Strategize",
    icon: LayoutList,
    copy: "We build the sequenced moves. Not a generic playbook - a specific, prioritized plan for your exact situation.",
  },
  {
    number: "04",
    title: "Install",
    icon: CheckCircle2,
    copy: "We work alongside you to execute the first 90 days. Accountability, iteration, and measurable milestones.",
  },
];

const deliverables = [
  "Pre-session business intake",
  "Live 90-minute deep-dive with the principal",
  "Written diagnosis report within 48 hours",
  "Prioritized 30-day action roadmap",
  "One follow-up accountability call",
];

const testimonials = [
  {
    quote:
      "BT Consulting named the thing I had been avoiding for a year. Six weeks later, revenue was a different shape.",
    name: "Adaeze O.",
    role: "Founder, consumer brand",
  },
  {
    quote:
      "Unlike other advisors, they do not hand you a deck and disappear. Their framework changed how our team thinks about the business entirely.",
    name: "T. A.",
    role: "Co-founder, B2B services",
  },
];

const navItems = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Case Studies", "#case-studies"],
];

const noiseStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
};

function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`font-['DM_Sans'] text-xs font-medium uppercase tracking-widest ${
        dark ? "text-[#A09890]" : "text-[#6B6560]"
      }`}
    >
      {children}
    </p>
  );
}

function BookingButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.a
      href="#book"
      aria-label="Book a Business Diagnosis Session"
      whileHover={{ scale: 1.02, backgroundColor: COLORS.greenHover }}
      whileTap={{ scale: 0.99 }}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-[#2D4A3E] px-6 py-3 font-['DM_Sans'] text-sm font-medium text-[#F5F3EF] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F3EF] ${className}`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </motion.a>
  );
}

function TextLink({
  href,
  children,
  dark = false,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
  icon?: "down" | "arrow";
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center gap-2 rounded-sm font-['DM_Sans'] text-sm font-light underline-offset-4 outline-none transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 ${
        dark
          ? "text-[#A09890] focus-visible:ring-offset-[#1A1A18]"
          : "text-[#6B6560] focus-visible:ring-offset-[#F5F3EF]"
      }`}
    >
      {children}
      {icon === "down" && <ChevronDown className="h-4 w-4" aria-hidden="true" />}
      {icon === "arrow" && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
    </a>
  );
}

function AnimatedSection({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      variants={group}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const existing = document.querySelector<HTMLLinkElement>(
      'link[data-bt-fonts="true"]',
    );

    if (!existing) {
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
        "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap";
      document.head.appendChild(link);
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setShowMobileCta(window.scrollY > window.innerHeight * 0.72);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main
      id="home"
      className="min-h-screen overflow-x-hidden bg-[#F5F3EF] font-['DM_Sans'] text-[#1A1A18] antialiased selection:bg-[#2D4A3E] selection:text-[#F5F3EF]"
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className={`sticky top-0 z-50 border-b border-[#D8D4CE] bg-[#F5F3EF] transition-all duration-300 ${
          scrolled ? "bg-[#F5F3EF]/90 backdrop-blur-sm" : ""
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a
            href="#home"
            aria-label="BT Consulting home"
            className="flex min-h-11 items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F3EF]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#2D4A3E] font-['DM_Sans'] text-sm font-medium lowercase text-[#F5F3EF]">
              bt
            </span>
            <span className="hidden font-['DM_Sans'] text-sm font-medium text-[#1A1A18] sm:inline">
              Business Therapy Consulting
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="min-h-11 content-center rounded-sm font-['DM_Sans'] text-sm font-normal text-[#1A1A18] outline-none transition-colors hover:text-[#2D4A3E] focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F3EF]"
              >
                {label}
              </a>
            ))}
            <BookingButton className="px-5 py-2.5">Book a Session</BookingButton>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-[#1A1A18] outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-[#D8D4CE] bg-[#F5F3EF] px-5 py-5 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="min-h-11 rounded-sm py-3 font-['DM_Sans'] text-sm text-[#1A1A18]"
                >
                  {label}
                </a>
              ))}
              <BookingButton className="mt-3 w-full">Book a Session</BookingButton>
            </div>
          </motion.div>
        )}
      </motion.header>

      <section className="bg-[#F5F3EF] px-5 py-20 sm:px-8 md:py-32 lg:px-10">
        <motion.div
          variants={group}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={reveal}>
            <SectionLabel>Boutique strategy & growth consulting</SectionLabel>
          </motion.div>

          <motion.h1
            variants={reveal}
            className="mt-6 max-w-5xl font-['Playfair_Display'] text-5xl font-normal leading-[1.02] tracking-[-0.01em] text-[#1A1A18] sm:text-6xl md:text-7xl"
          >
            Fix what&apos;s holding your business{" "}
            <em className="font-['Playfair_Display'] italic text-[#6B6560]">
              back
            </em>
            .
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-6 max-w-2xl font-['DM_Sans'] text-lg font-light leading-relaxed text-[#6B6560]"
          >
            BT Consulting helps founders identify growth blockers and install
            the strategies that drive real, measurable results.
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <BookingButton>Book a Diagnosis Session</BookingButton>
            <TextLink href="#services" icon="down">
              Explore our approach
            </TextLink>
          </motion.div>

          <motion.div
            variants={reveal}
            className="relative mt-16 h-72 overflow-hidden rounded-sm bg-[linear-gradient(135deg,#2D4A3E,#1A1A18)] md:h-96"
            aria-label="Editorial image placeholder for BT Consulting"
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={noiseStyle}
              aria-hidden="true"
            />
            <div className="absolute bottom-6 left-6 max-w-sm border-l border-[#F5F3EF]/30 pl-5 font-['DM_Sans'] text-sm font-light leading-relaxed text-[#F5F3EF] md:bottom-8 md:left-8">
              Clinical strategy for businesses with symptoms, pressure, and
              no time for vague advice.
            </div>
          </motion.div>
        </motion.div>
      </section>

      <AnimatedSection className="bg-[#F5F3EF] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 border-y border-[#D8D4CE] sm:grid-cols-2">
          {[
            ["14+", "Years advising founders"],
            ["90 days", "Avg. time to measurable lift"],
          ].map(([value, label], index) => (
            <motion.div
              key={label}
              variants={reveal}
              className={`py-10 sm:px-10 ${
                index === 1
                  ? "border-t border-[#D8D4CE] sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <p className="font-['Playfair_Display'] text-5xl font-normal text-[#1A1A18]">
                {value}
              </p>
              <p className="mt-4 font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#6B6560]">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#F5F3EF] px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div variants={reveal}>
            <SectionLabel>The trap of effort without clarity</SectionLabel>
          </motion.div>
          <motion.h2
            variants={reveal}
            className="mt-6 max-w-2xl font-['Playfair_Display'] text-4xl font-normal leading-tight text-[#1A1A18] md:text-5xl"
          >
            You&apos;re not lazy. You&apos;re running a business without a
            diagnosis.
          </motion.h2>

          <div className="mt-14 border-t border-[#D8D4CE]">
            {painPoints.map((point) => (
              <motion.div
                key={point.number}
                variants={{
                  hidden: { opacity: 0, x: -8 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: EASE },
                  },
                }}
                className="grid gap-5 border-b border-[#D8D4CE] py-8 md:grid-cols-[5rem_0.8fr_1fr] md:gap-8"
              >
                <p className="font-['DM_Sans'] text-xs font-light text-[#6B6560]">
                  {point.number}
                </p>
                <h3 className="font-['DM_Sans'] text-lg font-normal text-[#1A1A18]">
                  {point.title}
                </h3>
                <p className="max-w-xl font-['DM_Sans'] text-base font-light leading-relaxed text-[#6B6560]">
                  {point.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="services"
        className="bg-[#EDEAE4] px-5 py-24 sm:px-8 md:py-32 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div variants={reveal}>
            <SectionLabel>The BT Diagnosis Framework</SectionLabel>
          </motion.div>
          <motion.h2
            variants={reveal}
            className="mt-6 max-w-3xl font-['Playfair_Display'] text-4xl font-normal leading-tight text-[#1A1A18] md:text-5xl"
          >
            A structured way to move from stuck to compounding.
          </motion.h2>
          <motion.p
            variants={reveal}
            className="mt-6 max-w-2xl font-['DM_Sans'] text-lg font-light leading-relaxed text-[#6B6560]"
          >
            Four disciplined phases. No fluff, no vague advice. Every
            engagement runs through this spine.
          </motion.p>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <motion.article
                  key={phase.number}
                  variants={{
                    hidden: { opacity: 0, scale: 0.97 },
                    show: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.6, ease: EASE },
                    },
                  }}
                  className="rounded-sm border border-[#D8D4CE] bg-[#F5F3EF] p-8"
                >
                  <div className="flex items-start justify-between gap-8">
                    <p className="font-['DM_Sans'] text-xs font-light text-[#A09890]">
                      {phase.number}
                    </p>
                    <Icon className="h-5 w-5 text-[#2D4A3E]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-14 font-['Playfair_Display'] text-2xl font-normal text-[#1A1A18]">
                    {phase.title}
                  </h3>
                  <p className="mt-4 font-['DM_Sans'] text-base font-light leading-relaxed text-[#6B6560]">
                    {phase.copy}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative overflow-hidden bg-[#1A1A18] px-5 py-32 text-center sm:px-8 lg:px-10">
        <div
          className="absolute inset-0 opacity-10"
          style={noiseStyle}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl">
          <motion.div variants={reveal}>
            <SectionLabel dark>Our philosophy</SectionLabel>
          </motion.div>
          <motion.blockquote
            variants={{
              hidden: { opacity: 0, y: 16, scale: 0.98 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: EASE },
              },
            }}
            className="mt-8 font-['Playfair_Display'] text-3xl font-normal leading-relaxed text-[#F5F3EF] md:text-4xl"
          >
            Businesses rarely fail from lack of effort. They fail from{" "}
            <em className="font-['Playfair_Display'] italic">
              lack of clarity and structure
            </em>
            . Our job is to give you both.
          </motion.blockquote>
          <motion.div variants={reveal} className="mt-10">
            <TextLink href="#services" dark icon="arrow">
              Read the full approach
            </TextLink>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="book"
        className="bg-[#F5F3EF] px-5 py-24 sm:px-8 md:py-32 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          <div>
            <motion.div variants={reveal}>
              <SectionLabel>Featured offering</SectionLabel>
            </motion.div>
            <motion.h2
              variants={reveal}
              className="mt-6 font-['Playfair_Display'] text-4xl font-normal leading-tight text-[#1A1A18] md:text-5xl"
            >
              The Business Diagnosis Session
            </motion.h2>
            <motion.p
              variants={reveal}
              className="mt-6 max-w-prose font-['DM_Sans'] text-lg font-light leading-relaxed text-[#6B6560]"
            >
              A 90-minute, high-signal consultation built to surface the one or
              two structural issues actually holding you back - and the
              sequenced moves to fix them.
            </motion.p>
          </div>

          <div>
            <div className="border-t border-[#D8D4CE]">
              {deliverables.map((item, index) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: 6 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, ease: EASE },
                    },
                  }}
                  className="grid grid-cols-[3rem_1fr] gap-5 border-b border-[#D8D4CE] py-5"
                >
                  <p className="font-['DM_Sans'] text-xs font-light text-[#A09890]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="font-['DM_Sans'] text-base font-normal text-[#1A1A18]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={reveal}
              className="mt-10 flex flex-col gap-8 rounded-sm border border-[#D8D4CE] bg-[#EDEAE4] p-8 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-['Playfair_Display'] text-5xl font-normal text-[#1A1A18]">
                  $299
                </p>
                <p className="mt-3 font-['DM_Sans'] text-sm font-light text-[#6B6560]">
                  One session. One diagnosis. One clear path forward.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3">
                <BookingButton className="px-8 py-4">Book for $299</BookingButton>
                <TextLink href="#book" icon="arrow">
                  See all services
                </TextLink>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="case-studies"
        className="bg-[#F5F3EF] px-5 py-24 sm:px-8 md:py-32 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div variants={reveal}>
            <SectionLabel>Client outcomes</SectionLabel>
          </motion.div>
          <motion.h2
            variants={reveal}
            className="mt-6 max-w-3xl font-['Playfair_Display'] text-4xl font-normal leading-tight text-[#1A1A18]"
          >
            Quiet, measurable wins from founders who stopped guessing.
          </motion.h2>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <motion.article
                key={testimonial.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.97 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.6, ease: EASE },
                  },
                }}
                className="relative rounded-sm border border-[#D8D4CE] bg-[#EDEAE4] p-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-6 top-2 font-['Playfair_Display'] text-6xl text-[#D8D4CE]"
                >
                  &quot;
                </span>
                <p className="relative mt-10 font-['Playfair_Display'] text-xl font-normal leading-relaxed text-[#1A1A18] md:text-2xl">
                  {testimonial.quote}
                </p>
                <div className="mt-10">
                  <p className="font-['DM_Sans'] text-sm font-medium text-[#1A1A18]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 font-['DM_Sans'] text-xs font-light text-[#6B6560]">
                    {testimonial.role}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="about"
        className="relative overflow-hidden bg-[#1A1A18] px-5 py-24 sm:px-8 md:py-32 lg:px-10"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={noiseStyle}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <motion.h2
              variants={reveal}
              className="font-['Playfair_Display'] text-4xl font-normal leading-tight text-[#F5F3EF] md:text-5xl"
            >
              Based in Lagos. Available globally.
            </motion.h2>
            <motion.p
              variants={reveal}
              className="mt-6 max-w-prose font-['DM_Sans'] text-lg font-light leading-relaxed text-[#A09890]"
            >
              We run engagements virtually for clients worldwide, with a
              concentrated Lagos studio for local in-person intensives.
            </motion.p>
          </div>

          <motion.div
            variants={reveal}
            className="inline-block rounded-sm border border-[#3A3A36] bg-[#2A2A27] p-8"
          >
            <MapPin className="h-5 w-5 text-[#A09890]" aria-hidden="true" />
            <p className="mt-8 font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#A09890]">
              Studio
            </p>
            <p className="mt-3 font-['Playfair_Display'] text-3xl font-normal text-[#F5F3EF]">
              Lagos, Nigeria
            </p>
            <p className="mt-3 font-['DM_Sans'] text-sm font-light text-[#A09890]">
              By appointment only
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="bg-[#F5F3EF] px-5 py-32 text-center sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Next step</SectionLabel>
          <h2 className="mt-6 font-['Playfair_Display'] text-4xl font-normal leading-tight text-[#1A1A18] md:text-5xl">
            Stop wondering what&apos;s wrong.
            <br />
            <em className="font-['Playfair_Display'] italic text-[#6B6560]">
              Find out.
            </em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-['DM_Sans'] text-base font-light leading-relaxed text-[#6B6560]">
            One structured session. One honest diagnosis. A clear path forward.
          </p>
          <div className="mt-8">
            <BookingButton className="px-10 py-4">
              Book a Diagnosis Session
            </BookingButton>
          </div>
        </div>
      </motion.section>

      <footer className="bg-[#1A1A18] px-5 text-[#F5F3EF] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-[#3A3A36] py-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <p className="font-['Playfair_Display'] text-2xl italic leading-snug text-[#F5F3EF]">
              Get the thinking on strategy, structure, and scale.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="you@company.com"
                className="min-h-11 flex-1 rounded-sm border border-[#3A3A36] bg-transparent px-4 font-['DM_Sans'] text-sm font-light text-[#F5F3EF] outline-none placeholder:text-[#A09890] focus-visible:ring-2 focus-visible:ring-[#F5F3EF]"
              />
              <a
                href="#book"
                className="inline-flex min-h-11 items-center gap-2 rounded-sm font-['DM_Sans'] text-sm font-normal text-[#F5F3EF] outline-none hover:underline focus-visible:ring-2 focus-visible:ring-[#F5F3EF]"
              >
                Subscribe
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 py-12 md:grid-cols-4">
            <div>
              <p className="font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#F5F3EF]">
                Navigate
              </p>
              <ul className="mt-5 space-y-3 font-['DM_Sans'] text-sm font-light text-[#A09890]">
                {navItems.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="transition-colors hover:text-[#F5F3EF]">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#F5F3EF]">
                Work with us
              </p>
              <ul className="mt-5 space-y-3 font-['DM_Sans'] text-sm font-light text-[#A09890]">
                <li>
                  <a href="#book" className="transition-colors hover:text-[#F5F3EF]">
                    Book a Session
                  </a>
                </li>
                <li>
                  <a href="#book" className="transition-colors hover:text-[#F5F3EF]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#F5F3EF]">
                Studio
              </p>
              <ul className="mt-5 space-y-3 font-['DM_Sans'] text-sm font-light text-[#A09890]">
                <li>Lagos, Nigeria</li>
                <li>Virtual worldwide</li>
                <li>Mon-Fri · 09:00-18:00 WAT</li>
              </ul>
            </div>

            <div>
              <p className="font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#F5F3EF]">
                Business Therapy
              </p>
              <p className="mt-5 max-w-xs font-['DM_Sans'] text-sm font-light leading-relaxed text-[#A09890]">
                Clinical precision for founder-led businesses ready to stop
                guessing and start operating with structure.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 border-t border-[#3A3A36] py-6 sm:flex-row">
            <p className="font-['DM_Sans'] text-sm font-medium text-[#F5F3EF]">
              BT Consulting
            </p>
            <p className="font-['DM_Sans'] text-xs font-light text-[#A09890]">
              © 2026 Business Therapy Consulting
            </p>
          </div>
        </div>
      </footer>

      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={showMobileCta ? { y: 0, opacity: 1 } : { y: 120, opacity: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="fixed inset-x-0 bottom-0 z-50 border-t border-[#3A3A36] bg-[#1A1A18] p-4 md:hidden"
      >
        <div className="flex items-center justify-between gap-4">
          <p className="font-['DM_Sans'] text-sm font-normal text-[#F5F3EF]">
            Diagnosis Session
            <span className="block text-xs font-light text-[#A09890]">$299</span>
          </p>
          <BookingButton className="px-4 py-3">Book</BookingButton>
        </div>
      </motion.div>
    </main>
  );
}
