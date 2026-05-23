"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, LayoutList, MapPin, Search, Target } from "lucide-react";
import { AnimatedBlock } from "@/components/AnimatedBlock";
import { AnimatedText } from "@/components/AnimatedText";
import { BookingButton } from "@/components/BookingButton";
import { ImageReveal } from "@/components/ImageReveal";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { grainStyle, imageUrls } from "@/constants";

const painPoints = [
  [
    "01",
    "Flat or unpredictable revenue",
    "You're working harder than ever, but the numbers refuse to move in a straight line.",
  ],
  [
    "02",
    "No clarity on what's broken",
    "You've tried tactics. Rebrands. New hires. Nothing sticks because you haven't found the root cause.",
  ],
  [
    "03",
    "You're solving the wrong problems",
    "Most business problems have one cause. Most founders fix everything except it.",
  ],
];

const phases = [
  ["01", "Analyze", Search, "A forensic read of revenue, operations, positioning, and offer. We map what exists before we touch anything."],
  ["02", "Identify", Target, "We isolate the one or two structural issues causing the most downstream damage. No scatter. Precision diagnosis."],
  ["03", "Strategize", LayoutList, "We build the sequenced moves. Not a generic playbook, a specific prioritized plan for your exact situation."],
  ["04", "Install", CheckCircle2, "We work alongside you to execute the first 90 days. Accountability, iteration, and measurable milestones."],
];

const deliverables = [
  "Pre-session business intake",
  "Live 90-minute deep-dive with the principal",
  "Written diagnosis report within 48 hours",
  "Prioritized 30-day action roadmap",
  "One follow-up accountability call",
];

const testimonials = [
  [
    "BT Consulting named the thing I had been avoiding for a year. Six weeks later, revenue was a different shape.",
    "Adaeze O.",
    "Founder, consumer brand",
  ],
  [
    "Unlike other advisors, they do not hand you a deck and disappear. Their framework changed how our team thinks about the business entirely.",
    "T. A.",
    "Co-founder, B2B services",
  ],
];

function Label({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`font-['DM_Sans'] text-xs font-medium uppercase tracking-widest ${dark ? "text-[#A09890]" : "text-[#6B6560]"}`}>
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <PageShell>
      <Section className="bg-[#F5F3EF] px-5 py-20 sm:px-8 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AnimatedBlock><Label>Boutique strategy & growth consulting</Label></AnimatedBlock>
          <AnimatedText
            text="Fix what's holding your business back."
            tag="h1"
            accentWords={["back"]}
            className="mt-6 max-w-5xl font-['Playfair_Display'] text-5xl font-normal leading-[1.02] text-[#1A1A18] sm:text-6xl md:text-7xl"
          />
          <AnimatedBlock delay={0.3}>
            <p className="mt-6 max-w-2xl font-['DM_Sans'] text-lg font-light leading-relaxed text-[#6B6560]">
              BT Consulting helps founders identify growth blockers and install
              the strategies that drive real, measurable results.
            </p>
          </AnimatedBlock>
          <AnimatedBlock delay={0.45} className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <BookingButton />
            <Link href="/services" aria-label="Explore our approach" className="inline-flex min-h-11 items-center gap-2 rounded-sm font-['DM_Sans'] text-sm font-light text-[#6B6560] underline-offset-4 transition-colors hover:text-[#C65F8A] hover:underline">
              Explore our approach <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </AnimatedBlock>
          <AnimatedBlock className="mt-16">
            <ImageReveal src={imageUrls.hero} alt="Warm open-plan office used by a strategy consulting team" />
          </AnimatedBlock>
        </div>
      </Section>

      <Section className="bg-[#F5F3EF] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 border-y border-[#D8D4CE] sm:grid-cols-2">
          {[
            ["14+", "Years advising founders"],
            ["90 days", "Avg. time to measurable lift"],
          ].map(([value, label], index) => (
            <AnimatedBlock key={value} className={`py-10 sm:px-10 ${index === 1 ? "border-t border-[#D8D4CE] sm:border-l sm:border-t-0" : ""}`}>
              <AnimatedText text={value} tag="h3" className="font-['Playfair_Display'] text-5xl font-normal text-[#1A1A18] md:text-6xl" />
              <p className="mt-4 font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#6B6560]">{label}</p>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section className="bg-[#F5F3EF] px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AnimatedBlock><Label>The trap of effort without clarity</Label></AnimatedBlock>
          <AnimatedText text="You're not lazy. You're running a business without a diagnosis." tag="h2" className="mt-6 max-w-3xl font-['Playfair_Display'] text-4xl font-normal leading-tight text-[#1A1A18] md:text-5xl" />
          <div className="mt-14 border-t border-[#D8D4CE]">
            {painPoints.map(([num, title, copy], index) => (
              <AnimatedBlock key={num} delay={index * 0.1} className="grid gap-5 border-b border-[#D8D4CE] py-8 md:grid-cols-[5rem_0.8fr_1fr] md:gap-8">
                <p className="font-['DM_Sans'] text-xs font-light text-[#6B6560]">{num}</p>
                <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[#1A1A18]">{title}</h3>
                <p className="max-w-xl font-['DM_Sans'] text-base font-light leading-relaxed text-[#6B6560]">{copy}</p>
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#EDEAE4] px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AnimatedBlock><Label>The BT Diagnosis Framework</Label></AnimatedBlock>
          <AnimatedText text="A structured way to move from stuck to compounding." tag="h2" className="mt-6 max-w-3xl font-['Playfair_Display'] text-4xl font-normal leading-tight text-[#1A1A18] md:text-5xl" />
          <AnimatedBlock>
            <p className="mt-6 max-w-2xl font-['DM_Sans'] text-lg font-light leading-relaxed text-[#6B6560]">
              Four disciplined phases. No fluff, no vague advice. Every
              engagement runs through this spine.
            </p>
          </AnimatedBlock>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {phases.map(([num, title, Icon, copy], index) => {
              const PhaseIcon = Icon as typeof Search;
              return (
                <AnimatedBlock key={num as string} delay={index * 0.1} className="rounded-sm border border-[#D8D4CE] bg-[#F5F3EF] p-8">
                  <div className="flex items-start justify-between gap-8">
                    <p className="font-['DM_Sans'] text-xs font-light text-[#748A55]">{num as string}</p>
                    <PhaseIcon className="h-5 w-5 text-[#C65F8A]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-14 font-['Playfair_Display'] text-2xl font-normal text-[#1A1A18]">{title as string}</h3>
                  <p className="mt-4 font-['DM_Sans'] text-base font-light leading-relaxed text-[#6B6560]">{copy as string}</p>
                </AnimatedBlock>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-[#1A1A18] px-5 py-32 text-center sm:px-8 lg:px-10">
        <div className="absolute inset-0 opacity-[0.04]" style={grainStyle} aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <AnimatedBlock><Label dark>Our philosophy</Label></AnimatedBlock>
          <AnimatedText
            text="Businesses rarely fail from lack of effort. They fail from lack of clarity and structure."
            tag="h2"
            accentWords={["lack", "clarity", "structure"]}
            accentClassName="font-['Playfair_Display'] italic text-[#A09890]"
            className="mt-8 font-['Playfair_Display'] text-3xl font-normal leading-relaxed text-[#F5F3EF] md:text-4xl"
          />
          <AnimatedBlock className="mt-10">
            <Link href="/about" aria-label="Read the full approach" className="inline-flex min-h-11 items-center gap-2 rounded-sm font-['DM_Sans'] text-sm font-light text-[#A09890] underline-offset-4 transition-colors hover:text-[#BFCFA2] hover:underline">
              Read the full approach <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </AnimatedBlock>
        </div>
      </Section>

      <Section className="bg-[#F5F3EF] px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <AnimatedBlock><Label>Featured offering</Label></AnimatedBlock>
            <AnimatedText text="The Business Diagnosis Session" tag="h2" className="mt-6 font-['Playfair_Display'] text-4xl font-normal leading-tight text-[#1A1A18] md:text-5xl" />
            <AnimatedBlock>
              <p className="mt-6 max-w-prose font-['DM_Sans'] text-lg font-light leading-relaxed text-[#6B6560]">
                A 90-minute, high-signal consultation built to surface the one
                or two structural issues actually holding you back, plus the
                sequenced moves to fix them.
              </p>
            </AnimatedBlock>
          </div>
          <div>
            <div className="border-t border-[#D8D4CE]">
              {deliverables.map((item, index) => (
                <AnimatedBlock key={item} delay={index * 0.1} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-[#D8D4CE] py-5">
                  <p className="font-['DM_Sans'] text-xs font-light text-[#6B6560]">{String(index + 1).padStart(2, "0")}</p>
                  <p className="font-['DM_Sans'] text-base font-normal text-[#1A1A18]">{item}</p>
                </AnimatedBlock>
              ))}
            </div>
            <AnimatedBlock className="mt-10 rounded-sm border border-[#D8D4CE] border-l-2 border-l-[#748A55] bg-[#EDEAE4] p-8">
              <AnimatedText text="$299" tag="h3" className="font-['Playfair_Display'] text-5xl font-normal text-[#1A1A18] md:text-6xl" />
              <p className="mt-3 font-['DM_Sans'] text-sm font-light text-[#6B6560]">One session. One diagnosis. One clear path forward.</p>
              <div className="mt-7">
                <BookingButton label="Book for $299" />
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F5F3EF] px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AnimatedBlock><Label>Client outcomes</Label></AnimatedBlock>
          <AnimatedText text="Quiet, measurable wins from founders who stopped guessing." tag="h2" className="mt-6 max-w-3xl font-['Playfair_Display'] text-4xl font-normal leading-tight text-[#1A1A18] md:text-5xl" />
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {testimonials.map(([quote, name, role], index) => (
              <AnimatedBlock key={name} delay={index * 0.1} className="rounded-sm border border-[#D8D4CE] border-l-2 border-l-[#748A55] bg-[#EDEAE4] p-8">
                <AnimatedText text={quote} tag="h3" className="font-['Playfair_Display'] text-xl font-normal leading-relaxed text-[#1A1A18] md:text-2xl" />
                <div className="mt-10">
                  <p className="font-['DM_Sans'] text-sm font-medium text-[#1A1A18]">{name}</p>
                  <p className="mt-1 font-['DM_Sans'] text-xs font-light text-[#6B6560]">{role}</p>
                </div>
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-[#1A1A18] px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="absolute inset-0 opacity-[0.04]" style={grainStyle} aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <AnimatedText text="Based in Lagos. Available globally." tag="h2" className="font-['Playfair_Display'] text-4xl font-normal leading-tight text-[#F5F3EF] md:text-5xl" />
            <AnimatedBlock>
              <p className="mt-6 max-w-prose font-['DM_Sans'] text-lg font-light leading-relaxed text-[#A09890]">
                We run engagements virtually for clients worldwide, with a
                concentrated Lagos studio for local in-person intensives.
              </p>
            </AnimatedBlock>
          </div>
          <AnimatedBlock className="rounded-sm border border-[#3A3A36] bg-[#2A2A27] p-8">
            <MapPin className="h-5 w-5 text-[#A09890]" aria-hidden="true" />
            <p className="mt-8 font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#A09890]">Studio</p>
            <p className="mt-3 font-['Playfair_Display'] text-3xl font-normal text-[#F5F3EF]">Lagos, Nigeria</p>
            <p className="mt-3 font-['DM_Sans'] text-sm font-light text-[#A09890]">By appointment only</p>
          </AnimatedBlock>
        </div>
      </Section>

      <Section className="bg-[#F5F3EF] px-5 py-32 text-center sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <AnimatedBlock><Label>Next step</Label></AnimatedBlock>
          <AnimatedText text="Stop wondering what's wrong. Find out." tag="h2" accentWords={["Find", "out"]} className="mt-6 font-['Playfair_Display'] text-4xl font-normal leading-tight text-[#1A1A18] md:text-5xl" />
          <AnimatedBlock>
            <p className="mx-auto mt-4 max-w-xl font-['DM_Sans'] text-base font-light leading-relaxed text-[#6B6560]">
              One structured session. One honest diagnosis. A clear path forward.
            </p>
          </AnimatedBlock>
          <AnimatedBlock className="mt-8"><BookingButton /></AnimatedBlock>
        </div>
      </Section>
    </PageShell>
  );
}
