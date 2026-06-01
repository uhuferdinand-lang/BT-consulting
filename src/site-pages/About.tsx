"use client";

import { AnimatedBlock } from "@/components/AnimatedBlock";
import { AnimatedText } from "@/components/AnimatedText";
import { BookingButton } from "@/components/BookingButton";
import { ImageReveal } from "@/components/ImageReveal";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { imageUrls } from "@/constants";

const principles = [
  [
    "01",
    "Diagnose before prescribing",
    "No advice gets offered without evidence. We study the shape of your business first.",
  ],
  [
    "02",
    "Structure creates freedom",
    "Frameworks aren't constraints. They're the thing that lets you stop firefighting.",
  ],
  [
    "03",
    "Small, sharp engagements",
    "We don't sell 12-month retainers to justify headcount. We sell focused, time-bound interventions that move the needle fast.",
  ],
  [
    "04",
    "Results over relationships",
    "We'd rather deliver a diagnosis that stings and a result that compounds than be liked and leave you stuck.",
  ],
];

function Label({
  children,
  pink = false,
}: {
  children: React.ReactNode;
  pink?: boolean;
}) {
  return (
    <p
      className={`font-['DM_Sans'] text-xs font-medium uppercase tracking-widest ${pink ? "text-[#748A55]" : "text-[#6B6560]"}`}
    >
      {children}
    </p>
  );
}

export default function About() {
  return (
    <PageShell>
      <Section className="bg-[#F5F3EF] px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AnimatedBlock>
            <Label>About the firm</Label>
          </AnimatedBlock>
          <AnimatedText
            text="Business therapy, without the jargon."
            tag="h1"
            accentWords={["without", "the", "jargon"]}
            accentClassName="font-['Playfair_Display'] italic text-[#5F7447]"
            className="mt-6 max-w-4xl font-['Playfair_Display'] text-4xl font-normal leading-tight text-[#1A1A18] md:text-6xl"
          />
          <AnimatedBlock>
            <p className="mt-6 max-w-3xl font-['DM_Sans'] text-lg font-light leading-relaxed text-[#6B6560]">
              BT Consulting was built on a quiet observation: most struggling
              businesses don&apos;t need another coach, mastermind, or growth
              hack. They need someone to sit across the table, look at the
              operation honestly, and tell them what&apos;s actually broken.
            </p>
          </AnimatedBlock>
          <AnimatedBlock className="mt-14">
            <ImageReveal
              src={imageUrls.workspace}
              alt="Warm workspace interior used for strategy sessions"
            />
          </AnimatedBlock>
        </div>
      </Section>

      <Section className="bg-[#EDEAE4] px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <AnimatedBlock className="lg:order-2">
            <ImageReveal
              src={imageUrls.founder}
              alt="Founder of BT Consulting"
              className="aspect-[4/5] max-h-[680px]"
              imgClassName="object-[center_top]"
            />
          </AnimatedBlock>
          <div className="lg:order-1">
            <AnimatedBlock>
              <Label pink>Founder</Label>
            </AnimatedBlock>
            <AnimatedText
              text="A practitioner, not a pundit."
              tag="h2"
              className="mt-6 max-w-3xl font-['Playfair_Display'] text-4xl font-normal leading-tight text-[#1A1A18]"
            />
            <AnimatedBlock>
              <p className="mt-6 max-w-prose font-['DM_Sans'] text-lg font-light leading-relaxed text-[#6B6560]">
                The firm is led by a senior strategist with 14+ years across
                operating, advisory, and investor roles, shaped by working with
                founders inside consumer brands, service businesses, and
                early-stage tech. Every engagement is delivered personally. No
                junior handoffs, no ghosted accounts.
              </p>
            </AnimatedBlock>
            <AnimatedBlock>
              <p className="mt-5 max-w-prose font-['DM_Sans'] text-lg font-light leading-relaxed text-[#6B6560]">
                The work is small by design. We take a limited number of
                engagements each quarter so every client gets the depth the
                diagnosis demands.
              </p>
            </AnimatedBlock>
            <AnimatedBlock className="mt-8">
              <BookingButton />
            </AnimatedBlock>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F5F3EF] px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AnimatedBlock>
            <Label>Our principles</Label>
          </AnimatedBlock>
          <AnimatedText
            text="Four non-negotiables."
            tag="h2"
            className="mt-6 font-['Playfair_Display'] text-4xl font-normal leading-tight text-[#1A1A18]"
          />
          <div className="mt-14 border-t border-[#D8D4CE]">
            {principles.map(([num, name, copy], index) => (
              <AnimatedBlock
                key={num}
                delay={index * 0.1}
                className="grid gap-5 border-b border-[#D8D4CE] py-8 md:grid-cols-[5rem_0.8fr_1fr] md:gap-8"
              >
                <p className="font-['DM_Sans'] text-xs font-light text-[#748A55]">
                  {num}
                </p>
                <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[#1A1A18]">
                  {name}
                </h3>
                <p className="max-w-xl font-['DM_Sans'] text-base font-light leading-relaxed text-[#6B6560]">
                  {copy}
                </p>
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
