import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Faq, QuoteCta, Reveal, Section, SectionHeading } from "@/components/site/sections";
import { PlanCard } from "@/components/plans/PlanCard";
import { childrenPlans, type ChildrenPlan } from "@/lib/children-plans";

export function PlanDetails({ plan }: { plan: ChildrenPlan }) {
  const others = childrenPlans.filter((p) => p.slug !== plan.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep">
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="rise">
            <nav aria-label="Breadcrumb" className="mb-8">
              <Link
                to="/plans/children"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-primary-foreground/70 uppercase transition-colors hover:text-gold"
              >
                <ArrowLeft className="size-3.5" aria-hidden="true" />
                Children Plans
              </Link>
            </nav>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-gold/50 px-3 py-1 text-[0.68rem] font-bold tracking-[0.16em] text-gold uppercase">
                Plan {plan.planNumber}
              </span>
              <span className="text-[0.68rem] font-bold tracking-[0.16em] text-primary-foreground/60 uppercase">
                {plan.category}
              </span>
            </div>
            <h1 className="mt-5 text-4xl leading-[1.08] font-semibold text-balance text-primary-foreground sm:text-5xl">
              {plan.name}
            </h1>
            <p className="mt-3 text-lg text-gold-soft/90">{plan.tagline}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/75">
              {plan.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg">
                <Link to="/get-a-quote">Get a Quote</Link>
              </Button>
              <Button asChild variant="outlineOnDark" size="lg">
                <Link to="/contact">Talk to an Advisor</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-5 -top-5 hidden size-28 border-l-2 border-t-2 border-gold/40 lg:block"
            />
            <img
              src={plan.image}
              alt={plan.imageAlt}
              width={1200}
              height={900}
              className="relative w-full rounded-xl object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="Overview" title="About the plan" />
          <div className="space-y-5">
            {plan.about.map((para) => (
              <Reveal key={para}>
                <p className="text-base leading-relaxed text-muted-foreground">{para}</p>
              </Reveal>
            ))}
            <Reveal delay={120}>
              <div className="mt-4 flex gap-3 rounded-lg border border-gold/40 bg-gold-soft/25 p-4">
                <Info className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-accent-foreground">
                  Figures such as premiums, returns and maturity values are not shown here. They are
                  set out in the official policy document and confirmed by a licensed advisor.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Key features" title="What defines this plan" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {plan.features.map((f, i) => (
            <Reveal key={f} delay={i * 90}>
              <div className="flex h-full items-start gap-3 rounded-xl border bg-card p-5 shadow-card transition-shadow duration-300 hover:shadow-lift">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <p className="text-sm leading-relaxed">{f}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Suitability" title="Who may consider it" />
            <ul className="mt-8 space-y-4">
              {plan.whoMayConsider.map((w) => (
                <li key={w} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"
                  />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Before you decide" title="Important considerations" />
            <ul className="mt-8 space-y-4">
              {plan.considerations.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-navy-soft"
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="How it works" title="Three steps, taken carefully" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plan.howItWorks.map((s, i) => (
            <Reveal key={s.step} delay={i * 120}>
              <div className="h-full rounded-xl border bg-card p-6 shadow-card">
                <span className="font-display text-3xl font-semibold text-gold">{s.step}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Faq items={plan.faqs} title={`${plan.name} — questions families ask`} />

      <Section>
        <SectionHeading
          eyebrow="Continue exploring"
          title="Other children plans"
          intro="Compare this plan with the rest of the Children Plans collection."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p, i) => (
            <PlanCard key={p.slug} plan={p} delay={i * 80} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/plans/children"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            View all Children Plans
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Section>

      <QuoteCta
        title="Give their future a thoughtful beginning."
        text="Explore your options or speak with an Assured Life advisor."
      />
    </>
  );
}
