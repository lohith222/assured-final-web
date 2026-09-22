import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  HeartPulse,
  Hospital,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Faq, Reveal, Section, SectionHeading } from "@/components/site/sections";
import heroImg from "@/assets/health.jpg";
import introImg from "@/assets/health-intro.jpg";

const title = "Health Plans | Assured Life";
const description =
  "Explore Assured Life Health Plans — individual, family and senior health cover with clear terms, key benefits and advisor-led guidance. Get a quote today.";

export const Route = createFileRoute("/insurance/health")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/insurance/health" },
    ],
    links: [{ rel: "canonical", href: "/insurance/health" }],
  }),
  component: HealthPlansPage,
});

const coverage = [
  {
    icon: HeartPulse,
    title: "Individual Health Cover",
    text: "Personal protection designed around your healthcare needs and preferred level of cover.",
  },
  {
    icon: Users,
    title: "Family Health Cover",
    text: "Bring the people who matter under one considered plan, subject to product terms.",
  },
  {
    icon: Hospital,
    title: "Hospitalisation Expenses",
    text: "Support for eligible hospitalisation and treatment expenses covered by your policy.",
  },
  {
    icon: ShieldCheck,
    title: "Senior Citizen Protection",
    text: "Options for older adults with clear conversations around eligibility and waiting periods.",
  },
];

const benefits = [
  "Hospitalisation protection for eligible treatment expenses",
  "Support for covered medical expenses as set out in your policy",
  "A practical way to extend protection to your entire family",
  "Emergency support when a covered medical event needs attention",
  "Cashless hospitalisation where available for the selected product and network hospital",
  "Tax benefits on premiums as per prevailing income tax rules",
];

const audiences = [
  {
    title: "Working professionals",
    text: "Build a personal layer of protection that stays with you as your work situation changes.",
  },
  {
    title: "Young and growing families",
    text: "Plan for shared healthcare needs and make important decisions with more confidence.",
  },
  {
    title: "Older adults and caregivers",
    text: "Explore options early, understand waiting periods and keep key health details organised.",
  },
];

const steps = [
  ["01", "Choose Your Cover", "Tell us who you want to protect and what matters most."],
  ["02", "Share Details", "Provide the information needed to assess suitable options."],
  ["03", "Get Protected", "Review your policy terms and complete your application."],
  ["04", "Claim Support", "Reach out for help understanding the next steps when you need it."],
];

const faqs = [
  {
    q: "What does health insurance generally cover?",
    a: "Coverage depends on the product you choose. A policy may cover eligible hospitalisation, day-care procedures and related medical expenses, subject to limits, exclusions and waiting periods in the policy schedule.",
  },
  {
    q: "Are pre-existing conditions covered?",
    a: "Some pre-existing conditions may be covered after the waiting period stated in your policy. Share complete and accurate health details when applying so the terms are clear before you buy.",
  },
  {
    q: "Is cashless hospitalisation available?",
    a: "Cashless treatment may be available for selected products at participating network hospitals. Availability, authorisation and eligible expenses depend on the product terms and the hospital involved.",
  },
  {
    q: "How do I choose between individual and family cover?",
    a: "Consider who needs protection, their ages, existing health needs and the budget you want to set aside. An Assured Life advisor can help you compare suitable options and explain the policy terms.",
  },
  {
    q: "What documents do I need to get a quote?",
    a: "Basic identity and age details are usually enough to begin a quote conversation. Medical history or tests may be requested later, depending on the product and the sum insured you choose.",
  },
];

function HealthPlansPage() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="border-b bg-surface">
        <nav
          className="container-page flex items-center gap-2 py-4 text-sm text-muted-foreground"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="size-4" aria-hidden="true" />
          <span>Plans</span>
          <ChevronRight className="size-4" aria-hidden="true" />
          <span className="font-semibold text-foreground">Health Plans</span>
        </nav>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-16 size-72 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-[1fr_0.95fr] lg:py-24">
          <div className="rise">
            <p className="eyebrow text-gold">Health Plans</p>
            <h1 className="mt-4 text-4xl leading-[1.06] font-semibold text-balance text-primary-foreground sm:text-5xl lg:text-[3.4rem]">
              Protect Your Health. Secure Your Tomorrow.
            </h1>
            <span aria-hidden="true" className="mt-7 block h-[3px] w-14 bg-gold" />
            <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              Thoughtful health cover can help you focus on care when life takes an unexpected
              turn. Explore options for yourself, your family or the people you care for.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg">
                <Link to="/get-a-quote">Get a Quote</Link>
              </Button>
              <Button asChild variant="outlineOnDark" size="lg">
                <Link to="/contact">Talk to an Advisor</Link>
              </Button>
            </div>
          </div>

          <div className="relative rise" style={{ animationDelay: "160ms" }}>
            <span
              aria-hidden="true"
              className="absolute -left-6 -top-6 hidden size-32 border-l-2 border-t-2 border-gold/40 lg:block"
            />
            <img
              src={heroImg}
              alt="Indian family speaking with a healthcare professional"
              width={1408}
              height={1600}
              className="relative aspect-[4/5] w-full rounded-xl object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src={introImg}
              alt="An Indian family in a warm consultation with a doctor"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full rounded-xl object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Health insurance, made clear"
              title="Care first. Costs planned for."
              intro="Medical care can be difficult to plan for. Health insurance gives you a way to prepare for eligible costs while keeping your focus on recovery and the people around you. Every option is explained in plain language, with the terms shown as they are written."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                {
                  t: "Clear cover",
                  d: "Understand what a product includes, where limits apply and what to ask before you commit.",
                },
                {
                  t: "Support when it matters",
                  d: "Guidance on claims, documents and next steps from a licensed advisor.",
                },
              ].map((p) => (
                <div key={p.t} className="border-l-2 border-gold pl-4">
                  <h3 className="text-base font-semibold">{p.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Coverage / features */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Coverage and features"
          title="Protection shaped around real lives"
          intro="Different people need different kinds of protection. Start with the kind of cover that best reflects your life today."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coverage.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="h-full rounded-xl border bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <c.icon className="size-6 text-gold" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Key benefits */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading
            eyebrow="At a glance"
            title="Key Benefits"
            intro="The right policy depends on the terms of the product you select. These are the protection areas to look for."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 border-b pb-4 text-sm leading-relaxed">
                <Check className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Who it is suitable for */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="For every stage"
          title="Who Are Health Plans Suitable For?"
          intro="Health cover is worth considering whenever a medical expense could put pressure on your plans, savings or family responsibilities."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <article className="h-full border-l-2 border-gold bg-background p-6">
                <h3 className="text-xl font-semibold">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="A clear process"
          title="How It Works"
          intro="A straightforward journey from first conversation to ongoing support."
          onDark
        />
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {steps.map(([step, stepTitle, text]) => (
            <li key={step} className="border-t border-primary-foreground/20 pt-5">
              <span className="font-display text-3xl text-gold">{step}</span>
              <h3 className="mt-4 text-lg font-semibold text-primary-foreground">{stepTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Faq items={faqs} title="Health Plans — questions people ask" />

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        />
        <div className="container-page flex flex-col items-center text-center">
          <h2 className="max-w-2xl text-3xl leading-tight font-semibold text-balance text-primary-foreground sm:text-4xl">
            Health protection that starts with a clearer conversation.
          </h2>
          <p className="mt-4 max-w-xl text-base text-primary-foreground/75">
            Tell us what you are looking for and we will help you understand the options available
            to you.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="lg">
              <Link to="/get-a-quote">Get a Quote</Link>
            </Button>
            <Button asChild variant="outlineOnDark" size="lg">
              <Link to="/contact">
                Talk to an Advisor
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
