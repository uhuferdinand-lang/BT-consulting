"use client";

import { AnimatedBlock } from "@/components/AnimatedBlock";
import { AnimatedText } from "@/components/AnimatedText";
import { BookingButton } from "@/components/BookingButton";
import { ImageReveal } from "@/components/ImageReveal";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { imageUrls } from "@/constants";

const cases = [
  {
    tag: "CONSUMER BRAND",
    headline: "Revenue reshaped in six weeks",
    problem:
      "Founder had been running paid acquisition hard for 9 months with flat CAC and declining retention. Assumed the problem was creative.",
    diagnosis:
      "The BT Diagnosis identified a positioning gap. The offer was attracting the wrong buyer segment entirely. Retention was low because the product was never right for the audience finding it.",
    result:
      "Six weeks after repositioning the offer and tightening the ICP, CAC dropped 31% and 90-day retention improved by 22%.",
    attribution: "Adaeze O. - Founder, consumer brand",
  },
  {
    tag: "B2B SERVICES",
    headline: "Framework changed how the team thinks",
    problem:
      "A 12-person services firm with strong delivery but inconsistent deal flow. Founder was personally closing every deal and burning out.",
    diagnosis:
      "No repeatable sales motion. The firm's offer was priced and packaged in a way that required the founder's credibility to close, structurally impossible to delegate.",
    result:
      "Rebuilt the offer architecture into three tiers with clear entry points. First non-founder-closed deal within 45 days of implementation.",
    attribution: "[Founder initial] - Co-founder, B2B services",
  },
  {
    tag: "EARLY-STAGE TECH",
    headline: "Stopped building the wrong thing",
    problem:
      "Pre-revenue SaaS product. Team had been in build mode for 14 months. Burn rate rising, no clear GTM.",
    diagnosis:
      "Product-market mismatch at the feature level. The pain point was real but the solution required a behavior change users wouldn't make. Classic overshoot.",
    result:
      "Pivoted to a leaner, adjacent use case. First paying customer within 60 days of relaunch.",
    attribution: "Anonymous - Founder, SaaS",
  },
];

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#6B6560]">{children}</p>;
}

export default function CaseStudies() {
  return (
    <PageShell>
      <Section className="bg-[#F5F3EF] px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AnimatedBlock><Label>Case studies</Label></AnimatedBlock>
          <AnimatedText text="Quiet work. Loud results." tag="h1" accentWords={["Loud", "results"]} className="mt-6 max-w-4xl font-['Playfair_Display'] text-5xl font-normal leading-tight text-[#1A1A18] md:text-6xl" />
          <AnimatedBlock>
            <p className="mt-6 max-w-2xl font-['DM_Sans'] text-lg font-light leading-relaxed text-[#6B6560]">
              A selection of engagements where the BT Diagnosis Framework
              moved the number that mattered.
            </p>
          </AnimatedBlock>
          <AnimatedBlock className="mt-14">
            <ImageReveal src={imageUrls.caseStudies} alt="Editorial team strategy session around a table" />
          </AnimatedBlock>
        </div>
      </Section>

      <Section className="bg-[#F5F3EF] px-5 pb-24 sm:px-8 md:pb-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {cases.map((item, index) => (
            <AnimatedBlock key={item.headline} delay={index * 0.2} className="rounded-sm border border-[#D8D4CE] border-l-2 border-l-[#748A55] bg-[#EDEAE4] p-8 md:p-10">
              <p className="font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#748A55]">{item.tag}</p>
              <h2 className="mt-6 font-['Playfair_Display'] text-3xl font-normal leading-tight text-[#1A1A18]">{item.headline}</h2>
              <div className="mt-8 space-y-5">
                <p className="font-['DM_Sans'] text-base font-light leading-relaxed text-[#6B6560]"><span className="font-medium text-[#1A1A18]">Problem:</span> {item.problem}</p>
                <p className="font-['DM_Sans'] text-base font-light leading-relaxed text-[#6B6560]"><span className="font-medium text-[#1A1A18]">Diagnosis:</span> {item.diagnosis}</p>
                <p className="font-['DM_Sans'] text-base font-light leading-relaxed text-[#6B6560]"><span className="font-medium text-[#1A1A18]">Result:</span> {item.result}</p>
              </div>
              <p className="mt-8 border-t border-[#D8D4CE] pt-5 font-['DM_Sans'] text-sm font-medium text-[#1A1A18]">{item.attribution}</p>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-[#1A1A18] px-5 py-20 text-center sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <AnimatedText text="Want results like these?" tag="h2" className="font-['Playfair_Display'] text-3xl font-normal text-[#F5F3EF]" />
          <AnimatedBlock>
            <p className="mx-auto mt-4 max-w-lg font-['DM_Sans'] text-base font-light text-[#A09890]">One session. One honest diagnosis.</p>
          </AnimatedBlock>
          <AnimatedBlock className="mt-8"><BookingButton label="Book for $50" /></AnimatedBlock>
        </div>
      </Section>
    </PageShell>
  );
}
