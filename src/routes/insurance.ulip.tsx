import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Compass,
  LineChart,
  PiggyBank,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Faq, Reveal, Section, SectionHeading } from "@/components/site/sections";
import { ulipPlans } from "@/lib/financial-plans";
import heroImg from "@/assets/ulip-hero.jpg";
import introImg from "@/assets/ulip-intro.jpg";

const title = "Mutual Funds / ULIP Plans | Assured Life";
const description =
  "Explore Assured Life Mutual Funds / ULIP Plans — Index Plus, Protection Plus, SIIP and Nivesh Plus — market-linked options for long-term financial planning. Get a quote today.";

export const Route = createFileRoute("/insurance/ulip")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/insurance/ulip" },
    ],
    links: [{ rel: "canonical", href: "/insurance/ulip" }],
  }),
  component: UlipPlansPage,
});

const benefits = [
  {
    icon: TrendingUp,
    title: "Market-Linked Growth",
    text: "Participate in market-linked opportunities aligned with your chosen fund options.",
  },
  {
    icon: ShieldCheck,
    title: "Protection Component",
    text: "ULIPs combine a life cover element with market-linked investment, as set out in the policy.",
  },
  {
    icon: LineChart,
    title: "Fund Flexibility",
    text: "Choose and switch between available fund options, subject to product terms and conditions.",
  },
  {
    icon: PiggyBank,
    title: "Long-Term Discipline",
    text: "Structured premium payments encourage purposeful, goal-oriented financial planning.",
  },
];

const keyPoints = [
  "Market-linked plans with a choice of fund options",
  "Life cover element combined with long-term investing (ULIPs)",
  "Flexibility to switch between available funds, subject to terms",
  "Lock-in and charge structures explained clearly before you decide",
  "Potential tax benefits as per prevailing income tax rules",
  "Advisor-led guidance at every step of the decision",
];

const steps = [
  ["01", "Share Your Goals", "Tell us what you are planning for and your preferred time horizon."],
  ["02", "Compare Options", "Review suitable plans, fund choices and illustrations together."],
  ["03", "Choose & Invest", "Complete the documentation and begin your premium contributions."],
  ["04", "Review Regularly", "Revisit your plan with an advisor as your goals evolve."],
];

const faqs = [
  {
    q: "What is a ULIP?",
    a: "A Unit Linked Insurance Plan (ULIP) combines a life insurance cover with market-linked investment. Part of your premium goes towards life cover and the rest is invested in the fund options you choose, as set out in the policy document.",
  },
  {
    q: "Are returns guaranteed in these plans?",
    a: "No. Market-linked plans do not guarantee returns. The value of your investment moves with the performance of the chosen funds. Review the benefit illustration and fund details carefully before deciding.",
  },
  {
    q: "What charges apply to ULIPs?",
    a: "ULIPs may include premium allocation, fund management, policy administration and mortality charges, among others. All applicable charges are disclosed in the plan's official documentation.",
  },
  {
    q: "Is there a lock-in period?",
    a: "ULIPs generally have a five-year lock-in period. Partial withdrawals or surrender before that period may be restricted or subject to conditions. Your advisor can explain the specifics for each plan.",
  },
  {
    q: "Who should consider these plans?",
    a: "People comfortable with market-linked risk who are planning for long-term goals — such as education, wealth creation or retirement — and who value combining protection with investment in one plan.",
  },
];

function UlipPlansPage() {
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
          <span className="font-semibold text-foreground">Mutual Funds / ULIP Plans</span>
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
            <p className="eyebrow text-gold">Mutual Funds / ULIP Plans</p>
            <h1 className="mt-4 text-4xl leading-[1.06] font-semibold text-balance text-primary-foreground sm:text-5xl lg:text-[3.4rem]">
              Plan for Tomorrow. Grow with Purpose.
            </h1>
            <span aria-hidden="true" className="mt-7 block h-[3px] w-14 bg-gold" />
            <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              Market-linked plans that bring protection and long-term investing together —
              explained clearly, with an advisor by your side.
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
              alt="An Indian couple reviewing long-term investment plans with a financial advisor"
              width={1024}
              height={1280}
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
              alt="An Indian professional reviewing mutual fund growth on a tablet at home"
              loading="lazy"
              width={1280}
              height={1024}
              className="w-full rounded-xl object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Investing with a longer view"
              title="Protection and growth, in one considered plan."
              intro="Mutual fund and ULIP options let you participate in market-linked opportunities while keeping your wider responsibilities in view. We focus on clarity — fund choices, charges, lock-ins and illustrations shown as they are written."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: Compass,
                  t: "Goal-led approach",
                  d: "Start from what you are planning for, not from a product.",
                },
                {
                  icon: LineChart,
                  t: "Transparent structure",
                  d: "Charges, funds and terms explained before you commit.",
                },
              ].map((p) => (
                <div key={p.t} className="border-l-2 border-gold pl-4">
                  <p.icon className="size-5 text-gold" aria-hidden="true" />
                  <h3 className="mt-2 text-base font-semibold">{p.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Available plans */}
      <Section tone="surface" id="plans">
        <SectionHeading
          eyebrow="The collection"
          title="Available Plans"
          intro="Choose from market-linked plans designed around different goals and planning horizons."
        />
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {ulipPlans.map((plan, i) => (
            <Reveal key={plan.slug} delay={100 + i * 80}>
              <Link
                to="/plans/ulip/$plan"
                params={{ plan: plan.slug }}
                preload="intent"
                className="group block h-full overflow-hidden rounded-xl border bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.imageAlt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <p className="eyebrow">Plan {plan.planNumber}</p>
                  <h3 className="mt-2 text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.short}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    View plan
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Key benefits */}
      <Section>
        <SectionHeading
          eyebrow="Why consider them"
          title="Key Benefits"
          intro="What draws people to market-linked plans — weighed carefully alongside the risks and charges."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <div className="h-full rounded-xl border bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <b.icon className="size-6 text-gold" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {keyPoints.map((point) => (
            <li key={point} className="flex gap-3 border-b pb-4 text-sm leading-relaxed">
              <Check className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* How it works */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="A clear process"
          title="How It Works"
          intro="A straightforward journey from first conversation to a plan you understand."
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

      <Faq items={faqs} title="Mutual Funds / ULIP Plans — common questions" />

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        />
        <div className="container-page flex flex-col items-center text-center">
          <h2 className="max-w-2xl text-3xl leading-tight font-semibold text-balance text-primary-foreground sm:text-4xl">
            Give your long-term goals a considered beginning.
          </h2>
          <p className="mt-4 max-w-xl text-base text-primary-foreground/75">
            Explore your options or speak with an Assured Life advisor before you decide.
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
