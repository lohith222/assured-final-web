import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Compass, LineChart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Faq, Reveal, Section, SectionHeading } from "@/components/site/sections";
import { PlanCard } from "@/components/plans/PlanCard";
import { PlanComparison } from "@/components/plans/PlanComparison";
import { PlanTimeline } from "@/components/plans/PlanTimeline";
import { childrenPlans, planFocusAreas, type PlanFocus } from "@/lib/children-plans";
import heroImg from "@/assets/children-hero.jpg";
import introImg from "@/assets/children-intro.jpg";
import trustImg from "@/assets/children-trust.jpg";
import timelineImg from "@/assets/children-timeline.jpg";

const title = "Children Plans | Assured Life";
const description =
  "Explore Assured Life Children Plans — New Children MoneyBack, Jeevan Tarun, Amrit Baal and Amrit Baal Single Premium — and plan thoughtfully for education, milestones and the years ahead.";

export const Route = createFileRoute("/plans/children/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/plans/children" },
    ],
    links: [{ rel: "canonical", href: "/plans/children" }],
  }),
  component: ChildrenPlansPage,
});

const pillars = [
  {
    icon: BookOpen,
    title: "Education",
    text: "Prepare thoughtfully for important educational milestones.",
  },
  {
    icon: Compass,
    title: "Future Opportunities",
    text: "Create room for the opportunities your child may pursue.",
  },
  {
    icon: LineChart,
    title: "Long-Term Planning",
    text: "Build a financial approach around your family's longer-term goals.",
  },
  {
    icon: Sparkles,
    title: "Financial Discipline",
    text: "Encourage structured and purposeful financial planning.",
  },
];

const faqs = [
  {
    q: "What are Children Plans?",
    a: "Children Plans are a category of plans that families use to structure long-term financial planning connected to a child's future. The specific structure of each plan is set out in its official policy document.",
  },
  {
    q: "How do I compare Children Plans?",
    a: "Start with the comparison section on this page to understand the broad differences in structure and payment approach, then review each plan's own page and official documentation.",
  },
  {
    q: "What should I consider before choosing a plan?",
    a: "Consider your family's overall financial picture, the timelines you are planning for, and your comfort with the payment structure. Read the policy documentation in full before deciding.",
  },
  {
    q: "Can I speak with an advisor?",
    a: "Yes. A licensed Assured Life advisor can walk you through the plans, answer questions and explain the documentation. You can reach one from the Talk to an Advisor link on this page.",
  },
  {
    q: "What information should I review before applying?",
    a: "Review the prospectus, benefit illustration and policy terms and conditions, along with any eligibility requirements confirmed by your advisor.",
  },
];

function ChildrenPlansPage() {
  const [activeFocus, setActiveFocus] = useState<PlanFocus | null>(null);

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
            <p className="eyebrow text-gold">Children Plans</p>
            <h1 className="mt-4 text-4xl leading-[1.06] font-semibold text-balance text-primary-foreground sm:text-5xl lg:text-[3.4rem]">
              Plan Today for Their Tomorrow
            </h1>
            <span aria-hidden="true" className="mt-7 block h-[3px] w-14 bg-gold" />
            <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              Thoughtful financial planning can help you prepare for the milestones, opportunities
              and dreams that shape your child's future.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg">
                <a href="#plans">Explore Children Plans</a>
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
              alt="Indian parents laughing with their young son in a sunlit living room"
              width={1408}
              height={1600}
              className="relative aspect-[4/5] w-full rounded-xl object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src={introImg}
              alt="An Indian mother studying together with her daughter at a table"
              loading="lazy"
              width={1408}
              height={1104}
              className="w-full rounded-xl object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Planning for what matters most"
              title="Every milestone begins with a plan."
              intro="From education and future opportunities to the dreams you want to support, choosing an appropriate financial plan can help families prepare with greater clarity and confidence."
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
          title="Which direction are you planning for?"
          intro="Choose a direction to highlight the plans most often discussed for it."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {planFocusAreas.map((f, i) => {
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
          title="Explore Children Plans"
          intro="Choose from plans designed around different financial planning needs and family priorities."
        />
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {childrenPlans.map((plan, i) => (
            <Reveal key={plan.slug} delay={100 + i * 80}>
              <PlanCard
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
              {planFocusAreas.find((f) => f.id === activeFocus)?.title}
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

      {/* Why plan for children */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Why plan for children"
          title="Build a stronger foundation for tomorrow."
          intro="General planning principles families weigh when they think about a child's future."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="h-full rounded-xl border bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <p.icon className="size-6 text-gold" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
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
              intro="A child's needs change shape over two decades. Planning is easier when you can see the whole arc."
            />
            <PlanTimeline />
          </div>
          <Reveal delay={150}>
            <img
              src={timelineImg}
              alt="An Indian graduate standing proudly with her parents outside a university"
              loading="lazy"
              width={1200}
              height={1408}
              className="w-full rounded-xl object-cover shadow-card"
            />
          </Reveal>
        </div>
      </Section>

      {/* Comparison */}
      <Section tone="surface" id="compare">
        <SectionHeading
          eyebrow="Side by side"
          title="Compare Children Plans"
          intro="A structural comparison only. Premiums, returns and maturity values are set out in each plan's official policy document."
        />
        <PlanComparison />
      </Section>

      {/* Trust */}
      <section className="relative overflow-hidden">
        <img
          src={trustImg}
          alt="An Indian family looking out over a city skyline at sunset"
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
              Planning for tomorrow starts with clarity today.
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

      <Faq items={faqs} title="Children Plans — questions families ask" />

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        />
        <div className="container-page flex flex-col items-center text-center">
          <h2 className="max-w-2xl text-3xl leading-tight font-semibold text-balance text-primary-foreground sm:text-4xl">
            Give their future a thoughtful beginning.
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
