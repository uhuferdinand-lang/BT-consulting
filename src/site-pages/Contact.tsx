"use client";

import { Clock, Mail, MapPin } from "lucide-react";
import { AnimatedBlock } from "@/components/AnimatedBlock";
import { AnimatedText } from "@/components/AnimatedText";
import { BookingButton } from "@/components/BookingButton";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { GENERAL_HREF } from "@/constants";

const details = [
  [Mail, "EMAIL", "hello@btconsulting.co", "mailto:hello@btconsulting.co"],
  [MapPin, "STUDIO", "Lagos, Nigeria · By appointment", ""],
  [Clock, "HOURS", "Mon - Fri, 09:00 - 18:00 WAT", ""],
];

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#6B6560]">{children}</p>;
}

export default function Contact() {
  return (
    <PageShell>
      <Section className="bg-[#F5F3EF] px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_0.8fr]">
          <div>
            <AnimatedBlock><Label>Get in touch</Label></AnimatedBlock>
            <AnimatedText text="Start with a conversation." tag="h1" accentWords={["conversation"]} accentClassName="font-['Playfair_Display'] italic text-[#5F7447]" className="mt-6 max-w-3xl font-['Playfair_Display'] text-4xl font-normal leading-tight text-[#1A1A18] md:text-5xl" />
            <AnimatedBlock>
              <p className="mt-6 max-w-prose font-['DM_Sans'] text-lg font-light leading-relaxed text-[#6B6560]">
                Tell us where you&apos;re stuck. We&apos;ll reply within one business day
                with next steps, whether that&apos;s a diagnosis session or a
                different path entirely.
              </p>
            </AnimatedBlock>
          </div>

          <div>
            <div className="border-t border-[#D8D4CE]">
              {details.map(([Icon, label, value, href], index) => {
                const DetailIcon = Icon as typeof Mail;
                return (
                  <AnimatedBlock key={label as string} delay={index * 0.1} className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-[#D8D4CE] py-6">
                    <DetailIcon className="mt-1 h-5 w-5 text-[#748A55]" aria-hidden="true" />
                    <div>
                      <p className="font-['DM_Sans'] text-xs font-medium uppercase tracking-widest text-[#6B6560]">{label as string}</p>
                      {href ? (
                        <a href={href as string} aria-label="Email BT Consulting" className="mt-2 inline-block font-['DM_Sans'] text-base font-normal text-[#1A1A18] transition-colors hover:text-[#C65F8A]">
                          {value as string}
                        </a>
                      ) : (
                        <p className="mt-2 font-['DM_Sans'] text-base font-normal text-[#1A1A18]">{value as string}</p>
                      )}
                    </div>
                  </AnimatedBlock>
                );
              })}
            </div>
            <AnimatedBlock className="mt-8">
              <BookingButton label="Send us a message" href={GENERAL_HREF} ariaLabel="Send a general enquiry email to BT Consulting" />
              <p className="mt-4 font-['DM_Sans'] text-xs font-light text-[#6B6560]">We respond within one business day.</p>
            </AnimatedBlock>
          </div>
        </div>
      </Section>

      <Section className="bg-[#EDEAE4] px-5 py-12 text-center sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <AnimatedText text="No pitch decks. No discovery calls that lead nowhere. Just an honest reply." tag="h2" className="font-['Playfair_Display'] text-xl font-normal italic leading-relaxed text-[#6B6560]" />
        </div>
      </Section>
    </PageShell>
  );
}
