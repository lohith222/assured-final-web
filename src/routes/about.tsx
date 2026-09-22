import { createFileRoute } from "@tanstack/react-router";
import { Compass, Flag, Handshake, ShieldCheck } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/site/sections";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Assured Life" },
      {
        name: "description",
        content:
          "Learn about Assured Life's commitment to reliable, transparent, and customer-focused insurance solutions.",
      },
      { property: "og:title", content: "About Assured Life" },
      {
        property: "og:description",
        content: "Insurance made simple, accessible, and trustworthy for everyone.",
      },
    ],
  }),
  component: About,
});

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Insurance Solutions",
    text: "Plans designed with your protection in mind.",
  },
  {
    icon: Handshake,
    title: "Customer First",
    text: "We focus on understanding your needs and helping you choose the right coverage.",
  },
  {
    icon: Compass,
    title: "Simple & Transparent",
    text: "Clear information with no unnecessary complexity.",
  },
  {
    icon: Flag,
    title: "Reliable Support",
    text: "Our team is available to guide you whenever you need assistance.",
  },
  {
    icon: ShieldCheck,
    title: "Future Protection",
    text: "Helping you build greater financial security for tomorrow.",
  },
];

function About() {
  return (
    <>
      <section className="bg-surface">
        <div className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="rise">
            <p className="eyebrow">About Assured Life</p>
            <h1 className="mt-4 text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl">
              Your Protection. Our Commitment.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              At Assured Life, we believe insurance is more than just a policy — it is a promise to
              protect you, your family, and your future.
            </p>
          </div>
          <img
            src={aboutImg}
            alt="Assured Life insurance protection"
            width={1400}
            height={1000}
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-card"
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Our commitment" title="Insurance designed around your needs" />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              We are committed to providing reliable, transparent, and customer-focused insurance
              solutions designed to meet different protection and financial needs.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Why Choose Us?" title="Protection with clarity and care" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 70}>
              <article className="flex h-full gap-5 rounded-lg border bg-card p-7">
                <reason.icon className="mt-0.5 size-6 shrink-0 text-navy" aria-hidden="true" />
                <div className="min-w-0">
                  <h2 className="text-base font-semibold">{reason.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-lg border-t-2 border-t-gold bg-card p-8">
              <h2 className="text-xl font-semibold">Our Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our mission is to make insurance simple, accessible, and trustworthy for everyone.
                We aim to help individuals and families make confident decisions about their
                financial protection.
              </p>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="h-full rounded-lg border-t-2 border-t-navy bg-card p-8">
              <h2 className="text-xl font-semibold">Our Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To become a trusted insurance partner, known for exceptional customer service,
                transparency, and dependable protection.
              </p>
            </article>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
