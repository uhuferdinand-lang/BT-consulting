"use client";

import { AnimatedBlock } from "@/components/AnimatedBlock";
import { AnimatedText } from "@/components/AnimatedText";
import { BookingButton } from "@/components/BookingButton";
import { ImageReveal } from "@/components/ImageReveal";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { growthHref, imageUrls } from "@/constants";

const services = [
  {
    label: "ENTRY POINT",
    pink: true,
    name: "The Business Diagnosis Session",
    price: "$50",
    duration: "90 minutes",
    description:
      "A forensic 90-minute consultation that surfaces the one or two structural issues actually holding you back, plus the sequenced moves to fix them.",
    deliverables: [
      "Pre-session business intake",
      "Live 90-minute deep-dive with the principal",
      "Written diagnosis report within 48 hours",
      "Prioritized 30-day action roadmap",
      "One follow-up accountability call",
    ],
    cta: "Book for $50",
  },
  {
    label: "MOST ENGAGED",
    pink: true,
    name: "The Growth Sprint",
    price: "Custom",
    duration: "6 weeks",
    description:
      "A structured 6-week engagement. We diagnose, build the strategy, and install the first execution layer alongside your team.",
    deliverables: [
      "Full diagnosis",
      "Custom strategy document",
      "Weekly working sessions",
      "30/60/90-day roadmap",
      "Async support channel",
    ],
    cta: "Start a Conversation",
    href: growthHref("Growth Sprint Enquiry"),
  },
  {
    label: "ONGOING",
    pink: false,
    name: "Strategic Retainer",
    price: "By arrangement",
    duration: "Quarterly",
    description:
      "Ongoing strategic counsel for founders who want a senior strategist in their corner. Limited slots. Existing clients get first right of refusal.",
    deliverables: [
      "Monthly diagnosis check-ins",
      "Quarterly strategic review",
      "On-call async advisory",
      "Annual plan facilitation",
    ],
    cta: "Enquire",
    variant: "outline" as const,
    href: growthHref("Retainer Enquiry"),
  },
];

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#6B6560]">{children}</p>;
}

export default function Services() {
  return (
    <PageShell>
      <Section className="bg-[#F5F3EF] px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AnimatedBlock><Label>Services</Label></AnimatedBlock>
          <AnimatedText text="Three engagements, one discipline." tag="h1" accentWords={["one", "discipline"]} className="mt-6 max-w-4xl font-['Playfair_Display'] text-5xl font-normal leading-tight text-[#1A1A18] md:text-6xl" />
          <AnimatedBlock>
            <p className="mt-6 max-w-2xl font-['DM_Sans'] text-lg font-light leading-relaxed text-[#6B6560]">
              Pick the depth that fits your moment. Every engagement runs
              through the BT Diagnosis Framework.
            </p>
          </AnimatedBlock>
          <AnimatedBlock className="mt-14">
            <ImageReveal
              src={imageUrls.services}
              alt="Consulting strategy session in a modern office"
              imgClassName="scale-[1.015] blur-[1.5px]"
            />
          </AnimatedBlock>
        </div>
      </Section>

      <Section className="bg-[#F5F3EF] px-5 pb-24 sm:px-8 md:pb-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedBlock key={service.name} delay={index * 0.15} className="rounded-sm border border-[#D8D4CE] bg-[#EDEAE4] p-8 md:p-10">
              <p className={`font-['DM_Sans'] text-xs font-medium uppercase tracking-widest ${service.pink ? "text-[#748A55]" : "text-[#6B6560]"}`}>{service.label}</p>
              <h2 className="mt-7 font-['Playfair_Display'] text-2xl font-normal text-[#1A1A18]">{service.name}</h2>
              <p className={`mt-8 font-['Playfair_Display'] font-normal text-[#1A1A18] ${service.price === "By arrangement" ? "text-3xl" : "text-4xl"}`}>{service.price}</p>
              <p className="mt-2 font-['DM_Sans'] text-xs font-light uppercase tracking-widest text-[#6B6560]">{service.duration}</p>
              <p className="mt-7 font-['DM_Sans'] text-base font-light leading-relaxed text-[#6B6560]">{service.description}</p>
              <ul className="mt-8 space-y-3 border-t border-[#D8D4CE] pt-7">
                {service.deliverables.map((item) => (
                  <li key={item} className="font-['DM_Sans'] text-sm font-light leading-relaxed text-[#1A1A18]">{item}</li>
                ))}
              </ul>
              <div className="mt-9">
                <BookingButton label={service.cta} variant={service.variant ?? "primary"} href={service.href} />
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-[#1A1A18] px-5 py-16 text-center sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <AnimatedText text="Every engagement runs through the same four-phase BT Diagnosis Framework." tag="h2" className="font-['Playfair_Display'] text-2xl font-normal italic leading-relaxed text-[#F5F3EF]" />
        </div>
      </Section>
    </PageShell>
  );
}
