import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Infinity as InfinityIcon, HeartHandshake, Landmark, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Faq, Reveal, Section, SectionHeading } from "@/components/site/sections";
import { WholeLifePlanCard } from "@/components/plans/WholeLifePlanCard";
import { WholeLifeComparison } from "@/components/plans/WholeLifeComparison";
import { WholeLifeTimeline } from "@/components/plans/WholeLifeTimeline";
import {
  wholeLifePlans,
  wholeLifeFocusAreas,
  type WholeLifeFocus,
} from "@/lib/whole-life-plans";
import heroImg from "@/assets/wholelife-hero.jpg";
import introImg from "@/assets/wholelife-intro.jpg";
import trustImg from "@/assets/wholelife-trust.jpg";
import timelineImg from "@/assets/wholelife-timeline.jpg";

const title = "WholeLife Plans | Assured Life";
const description =
  "Explore Assured Life WholeLife Plans — Jeevan Umang (745), Jeevan Utsav (771) and Jeevan Utsav Single Premium (883) — and plan for long-term family security across generations.";

export const Route = createFileRoute("/plans/whole-life/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/plans/whole-life" },
    ],
    links: [{ rel: "canonical", href: "/plans/whole-life" }],
  }),
  component: WholeLifePlansPage,
});

const pillars = [
  {
    icon: InfinityIcon,
    title: "Lifelong Horizon",
    text: "Planning designed to remain relevant across decades, not a single term.",
  },
  {
    icon: Users,
    title: "Multigenerational",
    text: "Decisions that consider parents, children and the years between them.",
  },
  {
    icon: Landmark,
    title: "Long-Term Stability",
    text: "A steady financial framework for a household's future.",
  },
  {
    icon: HeartHandshake,
    title: "Continuity",
    text: "What a family carries forward, thought through in advance.",
  },
];

const faqs = [
  {
    q: "What are WholeLife Plans?",
    a: "WholeLife Plans are a category of plans discussed with households whose planning horizon extends across the whole of life rather than a fixed short term. Each plan's structure is defined in its official policy document.",
  },
  {
    q: "How do I compare the three WholeLife plans?",
    a: "Start with the structural comparison on this page, then open each plan's own page and review the official documentation with an advisor.",
  },
  {
    q: "Are premium or benefit figures shown on these pages?",
    a: "No. Premiums, returns, maturity values and eligibility figures are not stated here. Plan details to be confirmed from the official policy document.",
  },
  {
    q: "What is the difference between regular and single premium?",
    a: "Regular premium plans involve periodic contributions; a single premium plan involves one contribution. The exact conditions are set out in each policy document.",
  },
  {
    q: "Can I speak with an advisor before deciding?",
    a: "Yes. A licensed Assured Life advisor can explain each plan, walk through the documentation and answer your questions before you apply.",
  },
];

function WholeLifePlansPage() {
  const [activeFocus, setActiveFocus] = useState<WholeLifeFocus | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-16 size-72 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-[1fr_0.95fr] lg:py-24">
          <div className="rise">
            <p className="eyebrow text-gold">WholeLife Plans</p>
            <h1 className="mt-4 text-4xl leading-[1.06] font-semibold text-balance text-primary-foreground sm:text-5xl lg:text-[3.4rem]">
              A Plan That Stays for a Lifetime
            </h1>
            <span aria-hidden="true" className="mt-7 block h-[3px] w-14 bg-gold" />
            <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              Long-term planning is rarely about one moment. It is about the decades that follow, and
              the family that continues through them.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg">
                <a href="#plans">Explore WholeLife Plans</a>
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
            <div className="relative overflow-hidden rounded-xl shadow-lift">
              <img
                src={heroImg}
                alt="A multigenerational Indian family standing together on a sunlit terrace"
                width={1408}
                height={1600}
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-xl shadow-card">
              <img
                src={introImg}
                alt="An Indian father and his adult son reviewing documents together at home"
                loading="lazy"
                width={1408}
                height={1104}
                className="w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Planning for the long term"
              title="Security that does not expire with a term."
              intro="WholeLife Plans are discussed with households that want their planning to hold steady across working years, family years and the ones that follow."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {pillars.slice(0, 2).map((p) => (
                <div key={p.title} className="border-l-2 border-gold pl-4">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Discovery */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Guided discovery"
          title="What matters most in your long view?"
          intro="Choose a direction to highlight the plans most often discussed for it."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {wholeLifeFocusAreas.map((f, i) => {
            const active = activeFocus === f.id;
            return (
              <Reveal key={f.id} delay={i * 80}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveFocus(active ? null : f.id)}
                  className={`h-full w-full cursor-pointer rounded-xl border bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                    active ? "border-gold shadow-lift" : "shadow-card"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`block h-[3px] transition-all duration-300 ${
                      active ? "w-12 bg-gold" : "w-6 bg-border"
                    }`}
                  />
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </button>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Plan collection */}
      <Section id="plans">
        <SectionHeading
          eyebrow="The collection"
          title="Explore WholeLife Plans"
          intro="Three plans within the WholeLife category, each discussed for a slightly different long-term intent."
        />
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {wholeLifePlans.map((plan, i) => (
            <Reveal key={plan.slug} delay={100 + i * 90}>
              <WholeLifePlanCard
                plan={plan}
                dimmed={activeFocus !== null && !plan.focus.includes(activeFocus)}
              />
            </Reveal>
          ))}
        </div>
        {activeFocus ? (
          <p className="mt-8 text-sm text-muted-foreground">
            Showing plans highlighted for{" "}
            <span className="font-semibold text-foreground">
              {wholeLifeFocusAreas.find((f) => f.id === activeFocus)?.title}
            </span>
            .{" "}
            <button
              type="button"
              onClick={() => setActiveFocus(null)}
              className="cursor-pointer font-semibold text-primary underline-offset-4 hover:underline"
            >
              Clear selection
            </button>
          </p>
        ) : null}
      </Section>

      {/* Why whole life */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Why plan for the whole of life"
          title="A steadier foundation for the decades ahead."
          intro="General planning principles households weigh when they think in decades rather than years."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="group h-full rounded-xl border bg-card p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-lift">
                <p.icon className="size-6 text-gold" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="A long view"
              title="Planning Through Every Stage"
              intro="A household's needs change shape across a lifetime. Planning is easier when the whole arc is visible."
            />
            <WholeLifeTimeline />
          </div>
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-xl shadow-card">
              <img
                src={timelineImg}
                alt="An Indian grandfather teaching his grandson to ride a bicycle at golden hour"
                loading="lazy"
                width={1200}
                height={1408}
                className="w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Comparison */}
      <Section tone="surface" id="compare">
        <SectionHeading
          eyebrow="Side by side"
          title="Compare WholeLife Plans"
          intro="A structural comparison only. Premiums, returns and maturity values are set out in each plan's official policy document."
        />
        <WholeLifeComparison />
      </Section>

      {/* Trust */}
      <section className="relative overflow-hidden">
        <img
          src={trustImg}
          alt="An Indian multigenerational family walking together along a tree-lined avenue"
          loading="lazy"
          width={1600}
          height={912}
          className="absolute inset-0 size-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-navy-deep/85" />
        <div className="container-page relative py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Assured Life</p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold text-balance text-primary-foreground sm:text-4xl">
              A long horizon deserves an honest conversation.
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {[
                { t: "Trust", d: "Advice grounded in the documentation, not in promises." },
                { t: "Transparency", d: "Plain language, and terms shown as they are written." },
                { t: "Human guidance", d: "A licensed advisor who takes the time to explain." },
                { t: "Long-term thinking", d: "Decisions framed around decades, not quarters." },
              ].map((item) => (
                <div key={item.t} className="border-l-2 border-gold/60 pl-4">
                  <h3 className="text-base font-semibold text-primary-foreground">{item.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Faq items={faqs} title="WholeLife Plans — questions families ask" />

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        />
        <div className="container-page flex flex-col items-center text-center">
          <h2 className="max-w-2xl text-3xl leading-tight font-semibold text-balance text-primary-foreground sm:text-4xl">
            Plan once, for the whole of life.
          </h2>
          <p className="mt-4 max-w-xl text-base text-primary-foreground/75">
            Explore your options or speak with an Assured Life advisor.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="onDark" size="lg">
              <Link to="/" hash="plans">Explore Plans</Link>
            </Button>
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
