import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Faq, Reveal, Section, SectionHeading } from "@/components/site/sections";
import { WholeLifePlanCard } from "@/components/plans/WholeLifePlanCard";
import { wholeLifePlans, type WholeLifePlan } from "@/lib/whole-life-plans";

export function WholeLifePlanDetails({ plan }: { plan: WholeLifePlan }) {
  const others = wholeLifePlans.filter((p) => p.slug !== plan.slug);

  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="rise">
            <nav aria-label="Breadcrumb" className="mb-8">
              <Link
                to="/plans/whole-life"
                className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-primary-foreground/70 uppercase transition-colors hover:text-gold"
              >
                <ArrowLeft
                  className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
                WholeLife Plans
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
            <span aria-hidden="true" className="mt-7 block h-[3px] w-14 bg-gold" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75">
              {plan.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="outlineOnDark" size="lg">
                <Link to="/contact">Talk to an Advisor</Link>
              </Button>
              <Button asChild variant="gold" size="lg">
                <Link to="/get-a-quote">Get a Quote</Link>
              </Button>
            </div>
          </div>

          <div className="relative rise" style={{ animationDelay: "160ms" }}>
            <span
              aria-hidden="true"
              className="absolute -left-5 -top-5 hidden size-28 border-l-2 border-t-2 border-gold/40 lg:block"
            />
            <div className="relative overflow-hidden rounded-xl shadow-lift">
              <img
                src={plan.image}
                alt={plan.imageAlt}
                width={1200}
                height={900}
                className="w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Plan overview */}
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

      {/* 3. Who is this plan for? */}
      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Suitability" title="Who is this plan for?" />
            <ul className="mt-8 space-y-4">
              {plan.whoMayConsider.map((w) => (
                <li key={w} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
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

      {/* 4. Why consider this plan */}
      <Section>
        <SectionHeading
          eyebrow="Why consider it"
          title="Reasons families discuss this plan"
          intro="General planning considerations only. All terms are governed by the official policy document."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {plan.whyConsider.map((w, i) => (
            <Reveal key={w.title} delay={i * 90}>
              <div className="group h-full rounded-xl border bg-card p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-lift">
                <span
                  aria-hidden="true"
                  className="block h-[3px] w-6 bg-border transition-all duration-500 group-hover:w-12 group-hover:bg-gold"
                />
                <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. Key benefits */}
      <Section tone="surface">
        <SectionHeading eyebrow="Key benefits" title="What this plan is built around" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {plan.benefits.map((f, i) => (
            <Reveal key={f} delay={i * 80}>
              <div className="flex h-full items-start gap-3 rounded-xl border bg-card p-5 shadow-card transition-shadow duration-300 hover:shadow-lift">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <p className="text-sm leading-relaxed">{f}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6. How the plan works */}
      <Section>
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

      {/* 7 + 8. Important features and eligibility */}
      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Important features" title="At a glance" />
            <ul className="mt-8 space-y-4">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={120}>
            <SectionHeading eyebrow="Basic information" title="Eligibility" />
            <dl className="mt-8 divide-y rounded-xl border bg-card px-5 shadow-card">
              {plan.eligibility.map((e) => (
                <div key={e.label} className="flex justify-between gap-6 py-4">
                  <dt className="text-sm font-medium text-foreground">{e.label}</dt>
                  <dd className="text-right text-sm text-muted-foreground">{e.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Plan details to be confirmed. Eligibility conditions are defined in the official policy
              document and confirmed by a licensed Assured Life advisor.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* 9. Illustrative journey */}
      <Section>
        <SectionHeading
          eyebrow="Illustrative journey"
          title="How the plan sits across a lifetime"
          intro="An illustrative sequence for understanding only. It contains no figures and is not a benefit illustration."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plan.journey.map((j, i) => (
            <Reveal key={j.stage} delay={i * 110}>
              <li className="relative h-full rounded-xl border bg-card p-6 shadow-card">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-6 h-8 w-[3px] bg-gold"
                />
                <p className="text-[0.68rem] font-bold tracking-[0.16em] text-navy-soft uppercase">
                  {j.stage}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{j.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{j.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* 10. FAQ */}
      <Faq items={plan.faqs} title={`${plan.name} — questions families ask`} />

      {/* 11. Related WholeLife plans */}
      <Section>
        <SectionHeading
          eyebrow="Continue exploring"
          title="Other WholeLife plans"
          intro="Compare this plan with the rest of the WholeLife Plans collection."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {others.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <WholeLifePlanCard plan={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-8">
          <Link
            to="/plans/whole-life"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            View all WholeLife Plans
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
              aria-hidden="true"
            />
          </Link>
          <Link
            to="/" hash="plans"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-navy-soft"
          >
            Back to all Plans
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Section>

      {/* 12. Strong CTA */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        />
        <div className="container-page flex flex-col items-center text-center">
          <h2 className="max-w-2xl text-3xl leading-tight font-semibold text-balance text-primary-foreground sm:text-4xl">
            Plan for the long term, with clarity.
          </h2>
          <p className="mt-4 max-w-xl text-base text-primary-foreground/75">
            Speak with an Assured Life advisor about {plan.name}, or request a quote.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="outlineOnDark" size="lg">
              <Link to="/contact">Talk to an Advisor</Link>
            </Button>
            <Button asChild variant="gold" size="lg">
              <Link to="/get-a-quote">
                Get a Quote
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
