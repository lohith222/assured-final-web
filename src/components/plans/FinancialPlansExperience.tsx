import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Compass,
  LineChart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Faq, QuoteCta, Reveal, Section, SectionHeading } from "@/components/site/sections";
import type { FinancialPlan } from "@/lib/financial-plans";
import termHero from "@/assets/plans/term-hero.jpg";
import termIntro from "@/assets/plans/term-intro.jpg";
import ulipHero from "@/assets/plans/ulip-hero.jpg";
import ulipIntro from "@/assets/plans/ulip-intro.jpg";
import pensionHero from "@/assets/plans/pension-hero.jpg";
import pensionIntro from "@/assets/plans/pension-intro.jpg";
import mahilaHero from "@/assets/plans/mahila-hero.jpg";
import mahilaIntro from "@/assets/plans/mahila-intro.jpg";
import microHero from "@/assets/plans/micro-hero.jpg";
import microIntro from "@/assets/plans/micro-intro.jpg";
import moneybackHero from "@/assets/plans/moneyback-hero.jpg";
import moneybackIntro from "@/assets/plans/moneyback-intro.jpg";
import endowmentHero from "@/assets/plans/endowment-hero.jpg";
import endowmentIntro from "@/assets/plans/endowment-intro.jpg";

type CategoryConfig = {
  name: string;
  eyebrow: string;
  heroTitle: string;
  heroText: string;
  introTitle: string;
  introText: string;
  whyTitle: string;
  exploreTitle: string;
  exploreText: string;
  journeyTitle: string;
  journey: string[];
  route:
    | "/plans/term"
    | "/insurance/ulip"
    | "/plans/pension"
    | "/plans/mahila"
    | "/plans/micro"
    | "/plans/moneyback"
    | "/plans/endowment";
  detailRoute:
    | "/plans/term/$plan"
    | "/plans/ulip/$plan"
    | "/plans/pension/$plan"
    | "/plans/mahila/$plan"
    | "/plans/micro/$plan"
    | "/plans/moneyback/$plan"
    | "/plans/endowment/$plan";
  heroImage: string;
  introImage: string;
  heroAlt: string;
  introAlt: string;
  pillars: { title: string; text: string }[];
};
const icons = [ShieldCheck, Compass, LineChart, Sparkles];
const faq = [
  {
    q: "Where can I find exact plan details?",
    a: "Details to be updated. Please review the official documentation and speak with a licensed advisor before deciding.",
  },
  {
    q: "Are premiums, returns or benefits shown here?",
    a: "No. Specific financial figures and policy terms are not shown unless confirmed in the official documentation.",
  },
  {
    q: "Can I request a quote?",
    a: "Yes. Use Get a Quote to share your details with an Assured Life advisor.",
  },
];

export function FinancialPlansCategory({
  config,
  plans,
}: {
  config: CategoryConfig;
  plans: FinancialPlan[];
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep">
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="rise">
            <nav
              aria-label="Breadcrumb"
              className="mb-7 text-xs font-semibold tracking-[.14em] text-primary-foreground/65 uppercase"
            >
              <Link to="/" className="hover:text-gold">
                Home
              </Link>{" "}
              / Plans / {config.name}
            </nav>
            <p className="eyebrow text-gold">{config.eyebrow}</p>
            <h1 className="mt-4 text-4xl leading-[1.06] font-semibold text-primary-foreground sm:text-5xl">
              {config.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              {config.heroText}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg">
                <a href="#plans">Explore {config.eyebrow}</a>
              </Button>
              <Button asChild variant="outlineOnDark" size="lg">
                <Link to="/get-a-quote">Get a Quote</Link>
              </Button>
            </div>
          </div>
          <Reveal>
            <img
              src={config.heroImage}
              alt={config.heroAlt}
              className="aspect-[4/5] w-full rounded-xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={config.introImage}
              alt={config.introAlt}
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-card"
            />
          </Reveal>
          <div>
            <SectionHeading eyebrow="A considered approach" title={config.introTitle} />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {config.introText}
            </p>
          </div>
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeading eyebrow="Why consider" title={config.whyTitle} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {config.pillars.map((pillar, i) => {
            const Icon = icons[i] ?? ShieldCheck;
            return (
              <Reveal key={pillar.title} delay={i * 80}>
                <div className="h-full rounded-xl border bg-card p-6 shadow-card">
                  <Icon className="size-5 text-gold" />
                  <span className="mt-7 block text-xs font-bold tracking-[.16em] text-navy-soft">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <Section id="plans">
        <SectionHeading
          eyebrow="Our collection"
          title={config.exploreTitle}
          intro={config.exploreText}
        />
        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.slug} delay={i * 80}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card ring-1 ring-border/40 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-gold/70 hover:shadow-lift hover:ring-gold/30">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.imageAlt}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-navy-deep/5 to-transparent transition-opacity duration-500 group-hover:from-navy-deep/70" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.68rem] font-bold tracking-[.15em] text-primary uppercase backdrop-blur">
                    Plan {plan.planNumber}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="h-[3px] w-8 bg-gold transition-all duration-500 ease-out group-hover:w-16" />
                  <h3 className="mt-5 text-2xl font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-xs font-semibold tracking-[.12em] text-navy-soft uppercase">
                    {plan.category}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{plan.short}</p>
                  <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                    {plan.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-7">
                    <Link
                      to={config.detailRoute}
                      params={{ plan: plan.slug }}
                      preload="intent"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Explore Plan{" "}
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <Link
                      to="/get-a-quote"
                      search={{ plan: plan.name }}
                      className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <Comparison plans={plans} category={config.name} />
      <Journey title={config.journeyTitle} stages={config.journey} />
      <Faq items={faq} title={`${config.name} — frequently asked questions`} />
      <QuoteCta
        title="Take the next step with clarity."
        text="Speak with an advisor and review the official details before you decide."
      />
    </>
  );
}

function Journey({ title, stages }: { title: string; stages: string[] }) {
  return (
    <Section>
      <SectionHeading eyebrow="Your journey" title={title} />
      <ol className="mt-12 grid gap-7 lg:grid-cols-5">
        {stages.map((stage, i) => (
          <Reveal key={stage} delay={i * 100}>
            <li className="border-l-2 border-gold pl-5 lg:border-l-0 lg:border-t-2 lg:pt-5 lg:pl-0">
              <span className="text-xs font-bold text-navy-soft">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold">{stage}</h3>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
function Comparison({ plans, category }: { plans: FinancialPlan[]; category: string }) {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="Compare"
        title={`Compare ${category}`}
        intro="Specific plan terms and benefits are details to be updated from official documentation."
      />
      <div className="mt-10 overflow-x-auto rounded-xl border bg-card shadow-card">
        <table className="w-full min-w-[44rem] text-left text-sm">
          <thead className="bg-surface-strong">
            <tr>
              <th className="p-5">Plan</th>
              <th className="p-5">Category</th>
              <th className="p-5">Plan type</th>
              <th className="p-5">Key purpose</th>
              <th className="p-5">Details</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.slug} className="border-t">
                <td className="p-5 font-semibold">
                  {plan.planNumber} — {plan.name}
                </td>
                <td className="p-5 text-muted-foreground">{plan.category}</td>
                <td className="p-5 text-muted-foreground">Details to be updated</td>
                <td className="p-5 text-muted-foreground">Long-term financial planning</td>
                <td className="p-5 text-muted-foreground">Details to be updated</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export function FinancialPlanDetails({
  plan,
  config,
}: {
  plan: FinancialPlan;
  config: CategoryConfig;
}) {
  return (
    <>
      <section className="bg-navy-deep">
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="rise">
            <Link
              to={config.route}
              preload="intent"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[.14em] text-primary-foreground/70 uppercase hover:text-gold"
            >
              <ArrowLeft className="size-4" /> Back to {config.name}
            </Link>
            <p className="mt-8 eyebrow text-gold">Plan {plan.planNumber}</p>
            <h1 className="mt-4 text-4xl font-semibold text-primary-foreground sm:text-5xl">
              {plan.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/75">{plan.short}</p>
            <div className="mt-8 flex gap-3">
              <Button asChild variant="gold" size="lg">
                <Link to="/get-a-quote" search={{ plan: plan.name }}>
                  Get a Quote
                </Link>
              </Button>
              <Button asChild variant="outlineOnDark" size="lg">
                <Link to="/contact">Talk to an Advisor</Link>
              </Button>
            </div>
          </div>
          <img
            src={plan.image}
            alt={plan.imageAlt}
            className="aspect-[4/5] w-full rounded-xl object-cover shadow-lift"
          />
        </div>
      </section>
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border p-4">
            <p className="eyebrow">Plan number</p>
            <p className="mt-2 font-semibold">{plan.planNumber}</p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="eyebrow">Category</p>
            <p className="mt-2 font-semibold">{plan.category}</p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="eyebrow">Plan type</p>
            <p className="mt-2 text-sm">Details to be updated</p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="eyebrow">Suitable for</p>
            <p className="mt-2 text-sm">Details to be updated</p>
          </div>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="About this plan" title="About the plan" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{plan.overview}</p>
          </div>
          <div>
            <SectionHeading eyebrow="Plan highlights" title="What to review" />
            <ul className="mt-6 space-y-3">
              {plan.highlights.map((x) => (
                <li key={x} className="flex gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-gold" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who is it for" title="Consider it in context" />
            <ul className="mt-6 space-y-3">
              {plan.audience.map((x) => (
                <li key={x} className="text-sm text-muted-foreground">
                  • {x}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="How it works" title="Three careful steps" />
            <ol className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li>01 — Understand the plan structure.</li>
              <li>02 — Review the official documentation.</li>
              <li>03 — Discuss suitability with a licensed advisor.</li>
            </ol>
          </div>
        </div>
      </Section>
      <Journey title={config.journeyTitle} stages={config.journey} />
      <Section>
        <SectionHeading
          eyebrow="Important information"
          title="Details to be updated"
          intro="Premiums, returns, charges, eligibility, policy terms and other specific benefits must be confirmed from the official documentation."
        />
      </Section>
      <Faq items={faq} title={`${plan.name} — questions to ask`} />
      <QuoteCta title="Ready to discuss your options?" />
    </>
  );
}

export const termConfig: CategoryConfig = {
  name: "Term Plans",
  eyebrow: "Term Plans",
  heroTitle: "Protect What Matters Most",
  heroText:
    "Create a stronger financial safety net for the people and goals that matter to you with thoughtful life protection planning.",
  introTitle: "Protection That Helps You Plan Ahead",
  introText:
    "Thoughtful protection planning can help you consider the financial needs of the people who depend on you, alongside the responsibilities and goals that shape your future.",
  whyTitle: "Why Consider Term Protection?",
  exploreTitle: "Explore Our Term Plans",
  exploreText: "Explore protection-focused options for different stages of your financial journey.",
  journeyTitle: "Protection journey",
  journey: [
    "Starting Your Career",
    "Building Responsibilities",
    "Family & Financial Goals",
    "Long-Term Protection",
    "Future Planning",
  ],
  route: "/plans/term",
  detailRoute: "/plans/term/$plan",
  heroImage: termHero,
  introImage: termIntro,
  heroAlt: "Indian family planning confidently together",
  introAlt: "Indian family considering their future",
  pillars: [
    {
      title: "Family Protection",
      text: "Help plan for the financial needs of those who depend on you.",
    },
    {
      title: "Future Responsibilities",
      text: "Consider protection alongside long-term family and financial goals.",
    },
    {
      title: "Financial Preparedness",
      text: "Build protection into your broader financial planning strategy.",
    },
    {
      title: "Long-Term Confidence",
      text: "Plan ahead with greater clarity about your family's future.",
    },
  ],
};
export const ulipConfig: CategoryConfig = {
  name: "Mutual Funds / ULIP Plans",
  eyebrow: "Mutual Funds / ULIP Plans",
  heroTitle: "Plan for Tomorrow. Grow With Purpose.",
  heroText:
    "Explore long-term financial planning options designed around your future goals and investment needs.",
  introTitle: "Build a Financial Future With Purpose",
  introText:
    "A structured approach can help keep longer-term financial goals in view. Review available options carefully and consider how they may fit your broader financial picture.",
  whyTitle: "Plan Around Your Long-Term Goals",
  exploreTitle: "Explore Our Mutual Funds / ULIP Plans",
  exploreText:
    "Explore available options and understand how they may fit into your broader financial planning journey.",
  journeyTitle: "Financial planning journey",
  journey: [
    "Financial Goal",
    "Explore Options",
    "Choose Suitable Plan",
    "Long-Term Planning",
    "Future Goals",
  ],
  route: "/insurance/ulip",
  detailRoute: "/plans/ulip/$plan",
  heroImage: ulipHero,
  introImage: ulipIntro,
  heroAlt: "Indian couple reviewing long-term financial goals",
  introAlt: "Indian professional planning their future",
  pillars: [
    {
      title: "Long-Term Planning",
      text: "Think ahead about your financial goals and future needs.",
    },
    { title: "Goal-Based Planning", text: "Align financial planning with important milestones." },
    {
      title: "Financial Growth Potential",
      text: "Explore options designed around long-term financial planning.",
    },
    { title: "Future Readiness", text: "Build a structured approach toward your financial goals." },
  ],
};
export const pensionConfig: CategoryConfig = {
  name: "Pension Plans",
  eyebrow: "Pension Plans",
  heroTitle: "Plan Today for the Years Ahead",
  heroText:
    "Explore thoughtful pension-planning options that can support a clearer conversation about your future financial needs.",
  introTitle: "A More Considered Future",
  introText:
    "Planning for later life begins with understanding the goals, responsibilities and choices that matter to you. Review the official documentation before deciding.",
  whyTitle: "Why Consider Pension Planning?",
  exploreTitle: "Explore Our Pension Plans",
  exploreText:
    "Explore available pension-planning options and discuss how they may fit into your broader financial journey.",
  journeyTitle: "Pension planning journey",
  journey: [
    "Future Goals",
    "Explore Options",
    "Understand the Plan",
    "Long-Term Planning",
    "The Years Ahead",
  ],
  route: "/plans/pension",
  detailRoute: "/plans/pension/$plan",
  heroImage: pensionHero,
  introImage: pensionIntro,
  heroAlt: "Indian couple considering their future together",
  introAlt: "Indian family planning ahead",
  pillars: [
    { title: "Future Planning", text: "Think ahead about the years and goals that matter to you." },
    { title: "Goal-Based Approach", text: "Bring important future priorities into view." },
    {
      title: "Financial Preparedness",
      text: "Consider pension planning within your broader financial picture.",
    },
    {
      title: "Advisor-Led Clarity",
      text: "Review official details carefully with a licensed advisor.",
    },
  ],
};
const planningPillars = [
  {
    title: "Future Planning",
    text: "Think ahead about the goals and responsibilities that matter to you.",
  },
  {
    title: "Structured Approach",
    text: "Explore planning options within your broader financial picture.",
  },
  { title: "Thoughtful Review", text: "Review official documentation carefully before deciding." },
  { title: "Advisor-Led Clarity", text: "Discuss your needs with a licensed advisor." },
];
export const mahilaConfig: CategoryConfig = {
  name: "Mahila Plans",
  eyebrow: "Mahila Plans",
  heroTitle: "Plan With Confidence",
  heroText:
    "Explore thoughtful financial planning options designed to support the goals that matter to you.",
  introTitle: "A Thoughtful Financial Future",
  introText:
    "A clear plan begins with considering your own priorities and reviewing options carefully within your wider financial picture.",
  whyTitle: "Why Consider Mahila Plans?",
  exploreTitle: "Explore Our Mahila Plans",
  exploreText: "Explore available options and discuss how they may fit your planning journey.",
  journeyTitle: "Planning journey",
  journey: [
    "Your Goals",
    "Explore Options",
    "Understand the Plan",
    "Plan Ahead",
    "Future Priorities",
  ],
  route: "/plans/mahila",
  detailRoute: "/plans/mahila/$plan",
  heroImage: mahilaHero,
  introImage: mahilaIntro,
  heroAlt: "Indian woman planning for her future",
  introAlt: "Indian woman considering financial goals",
  pillars: planningPillars,
};
export const microConfig: CategoryConfig = {
  name: "Micro Plans",
  eyebrow: "Micro Plans",
  heroTitle: "Small Steps. Thoughtful Planning.",
  heroText:
    "Explore accessible financial planning options with a clear view of your future priorities.",
  introTitle: "Start With What Matters",
  introText:
    "Every financial journey begins with understanding your needs. Explore options carefully and review official documentation with an advisor.",
  whyTitle: "Why Consider Micro Plans?",
  exploreTitle: "Explore Our Micro Plans",
  exploreText:
    "Explore available options and understand how they may fit into your planning journey.",
  journeyTitle: "Planning journey",
  journey: ["Your Needs", "Explore Options", "Understand the Plan", "Build a Plan", "Future Goals"],
  route: "/plans/micro",
  detailRoute: "/plans/micro/$plan",
  heroImage: microHero,
  introImage: microIntro,
  heroAlt: "Indian family planning together",
  introAlt: "Indian family discussing future goals",
  pillars: planningPillars,
};
export const moneyBackConfig: CategoryConfig = {
  name: "MoneyBack Plans",
  eyebrow: "MoneyBack Plans",
  heroTitle: "Plan for the Milestones Ahead",
  heroText: "Explore thoughtful planning options that keep your future goals in view.",
  introTitle: "Planning With Purpose",
  introText:
    "A considered approach begins with your financial priorities. Review the official plan details carefully before making a decision.",
  whyTitle: "Why Consider MoneyBack Plans?",
  exploreTitle: "Explore Our MoneyBack Plans",
  exploreText:
    "Explore available options and discuss how they may fit your broader planning journey.",
  journeyTitle: "Planning journey",
  journey: [
    "Your Goals",
    "Explore Options",
    "Understand the Plan",
    "Long-Term Planning",
    "Future Priorities",
  ],
  route: "/plans/moneyback",
  detailRoute: "/plans/moneyback/$plan",
  heroImage: moneybackHero,
  introImage: moneybackIntro,
  heroAlt: "Indian family planning their future",
  introAlt: "Indian couple discussing future goals",
  pillars: planningPillars,
};
export const endowmentConfig: CategoryConfig = {
  name: "Endowment Plans",
  eyebrow: "Endowment Plans",
  heroTitle: "Plan Today. Build Tomorrow.",
  heroText:
    "Explore endowment plans designed to support long-term financial planning, protection and important future goals.",
  introTitle: "Plan Around the Moments That Matter",
  introText:
    "A considered financial foundation begins with the goals and responsibilities most important to you. Review every option against the official plan documentation.",
  whyTitle: "Build a Stronger Financial Foundation",
  exploreTitle: "Explore Our Endowment Plans",
  exploreText:
    "Explore different plans and choose the option that best fits your financial planning needs.",
  journeyTitle: "Plan for Today. Prepare for Tomorrow.",
  journey: [
    "Starting Your Career",
    "Building Your Family",
    "Planning Major Goals",
    "Preparing for the Future",
    "Long-Term Financial Planning",
  ],
  route: "/plans/endowment",
  detailRoute: "/plans/endowment/$plan",
  heroImage: endowmentHero,
  introImage: endowmentIntro,
  heroAlt: "Indian family planning their financial future",
  introAlt: "Indian family considering important future goals",
  pillars: [
    { title: "Long-Term Planning", text: "Plan ahead for important financial goals." },
    { title: "Family Protection", text: "Support your family's financial planning needs." },
    { title: "Future Milestones", text: "Prepare for significant stages and aspirations." },
    { title: "Financial Discipline", text: "Encourage structured long-term financial planning." },
  ],
};
