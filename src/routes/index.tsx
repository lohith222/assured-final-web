import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, HeartHandshake, Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteCta, Reveal, Section, SectionHeading } from "@/components/site/sections";
import { childrenPlans } from "@/lib/children-plans";
import { wholeLifePlans } from "@/lib/whole-life-plans";
import { singlePremiumPlans } from "@/lib/single-premium-plans";
import {
  endowmentPlans,
  mahilaPlans,
  microPlans,
  moneyBackPlans,
  pensionPlans,
  termPlans,
  ulipPlans,
  type FinancialPlan,
} from "@/lib/financial-plans";
import heroImg from "@/assets/hero-family.jpg";
import healthImg from "@/assets/health.jpg";
import ulipImg from "@/assets/ulip-hero.jpg";

type HomePlan = {
  planNumber: string;
  name: string;
  short: string;
  image: string;
  imageAlt: string;
  slug: string;
};

type CategoryRoute =
  | "/plans/children"
  | "/plans/whole-life"
  | "/plans/single-premium"
  | "/plans/pension"
  | "/plans/term"
  | "/plans/endowment"
  | "/plans/mahila"
  | "/plans/micro"
  | "/plans/moneyback";

type DetailRoute =
  | "/plans/children/$plan"
  | "/plans/whole-life/$plan"
  | "/plans/single-premium/$plan"
  | "/plans/pension/$plan"
  | "/plans/term/$plan"
  | "/plans/endowment/$plan"
  | "/plans/mahila/$plan"
  | "/plans/micro/$plan"
  | "/plans/moneyback/$plan";

type FeaturedRoute = "/insurance/health" | "/insurance/ulip";

type FeaturedCategory = {
  id: string;
  name: string;
  headline: string;
  description: string;
  items: { number: string; name: string; slug?: string }[];
  route: FeaturedRoute;
  image: string;
  imageAlt: string;
};

const featured: FeaturedCategory[] = [
  {
    id: "health",
    name: "Health Plans",
    headline: "Protect your health. Secure your tomorrow.",
    description:
      "Individual, family and senior health cover explained in plain language, with clear terms and advisor-led guidance.",
    items: [
      { number: "01", name: "Individual & Family Floater Cover" },
      { number: "02", name: "Senior Citizen Cover" },
      { number: "03", name: "Cashless Hospitalisation" },
      { number: "04", name: "Pre & Post Hospitalisation" },
    ],
    route: "/insurance/health",
    image: healthImg,
    imageAlt: "Indian doctor consulting a patient in a modern clinic",
  },
  {
    id: "ulip",
    name: "Mutual Funds / ULIP Plans",
    headline: "Plan for tomorrow. Grow with purpose.",
    description:
      "Market-linked plans that bring protection and long-term investing together, with charges and fund choices shown clearly.",
    items: ulipPlans.map((plan) => ({
      number: plan.planNumber,
      name: plan.name,
      slug: plan.slug,
    })),
    route: "/insurance/ulip",
    image: ulipImg,
    imageAlt: "Indian couple reviewing long-term investment plans with a financial advisor",
  },
];

type Category = {
  id: string;
  name: string;
  description: string;
  headline: string;
  route: CategoryRoute;
  detailRoute: DetailRoute;
  plans: HomePlan[];
};

const mapPlans = (plans: HomePlan[]): HomePlan[] => plans;
const financial = (plans: FinancialPlan[]): HomePlan[] => plans;

const categories: Category[] = [
  {
    id: "children",
    name: "Children Plans",
    headline: "Plan today for their tomorrow",
    description:
      "Planning solutions designed around children's future milestones and long-term financial goals.",
    route: "/plans/children",
    detailRoute: "/plans/children/$plan",
    plans: mapPlans(childrenPlans),
  },
  {
    id: "whole-life",
    name: "WholeLife Plans",
    headline: "A plan that stays for a lifetime",
    description: "Long-term planning for family security across the years ahead.",
    route: "/plans/whole-life",
    detailRoute: "/plans/whole-life/$plan",
    plans: mapPlans(wholeLifePlans),
  },
  {
    id: "single-premium",
    name: "Single Premium Plans",
    headline: "One contribution. A considered longer view.",
    description: "One considered contribution for longer-term financial planning.",
    route: "/plans/single-premium",
    detailRoute: "/plans/single-premium/$plan",
    plans: mapPlans(singlePremiumPlans),
  },
  {
    id: "pension",
    name: "Pension Plans",
    headline: "Plan today for the years ahead",
    description: "Thoughtful options for future financial planning conversations.",
    route: "/plans/pension",
    detailRoute: "/plans/pension/$plan",
    plans: financial(pensionPlans),
  },
  {
    id: "term",
    name: "Term Plans",
    headline: "Protect what matters most",
    description: "Protection-focused options for the people and goals that matter to you.",
    route: "/plans/term",
    detailRoute: "/plans/term/$plan",
    plans: financial(termPlans),
  },
  {
    id: "endowment",
    name: "Endowment Plans",
    headline: "Plan today. Build tomorrow.",
    description: "Plans for long-term financial planning and important future goals.",
    route: "/plans/endowment",
    detailRoute: "/plans/endowment/$plan",
    plans: financial(endowmentPlans),
  },
  {
    id: "mahila",
    name: "Mahila Plans",
    headline: "Plan with confidence",
    description: "Thoughtful planning options for future priorities.",
    route: "/plans/mahila",
    detailRoute: "/plans/mahila/$plan",
    plans: financial(mahilaPlans),
  },
  {
    id: "micro",
    name: "Micro Plans",
    headline: "Small steps. Thoughtful planning.",
    description: "Accessible financial planning conversations for changing needs.",
    route: "/plans/micro",
    detailRoute: "/plans/micro/$plan",
    plans: financial(microPlans),
  },
  {
    id: "moneyback",
    name: "MoneyBack Plans",
    headline: "Plan for the milestones ahead",
    description: "Planning options for family milestones and longer-term goals.",
    route: "/plans/moneyback",
    detailRoute: "/plans/moneyback/$plan",
    plans: financial(moneyBackPlans),
  },
];

const reasons = [
  {
    icon: Compass,
    title: "Thoughtful guidance",
    text: "Explore options with your goals and wider financial picture in view.",
  },
  {
    icon: Layers,
    title: "A wide range of plans",
    text: "Discover solutions designed around different life stages and priorities.",
  },
  {
    icon: HeartHandshake,
    title: "Advisor support",
    text: "Speak with an advisor before making a considered decision.",
  },
  {
    icon: Sparkles,
    title: "Long-term thinking",
    text: "Keep future milestones and responsibilities at the centre of your planning.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Assured Life | Plan Today. Protect Tomorrow." },
      {
        name: "description",
        content:
          "Explore Assured Life plans designed around long-term financial goals, protection needs and life stages.",
      },
      { property: "og:title", content: "Assured Life | Plan Today. Protect Tomorrow." },
      {
        property: "og:description",
        content:
          "Health, children, whole life, pension, term and savings plans guided by licensed Assured Life advisors.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-deep">
        <img
          src={heroImg}
          alt="Indian family planning their future together"
          className="absolute inset-0 -z-10 size-full object-cover opacity-40"
        />
        <span className="absolute inset-0 -z-10 bg-navy-deep/75" />
        <div className="container-page py-14 sm:py-16">
          <div className="rise max-w-2xl">
            <p className="eyebrow text-gold">Assured Life</p>
            <h1 className="mt-3 text-3xl leading-[1.06] font-semibold text-primary-foreground sm:text-5xl">
              Plan Today.
              <br />
              Protect Tomorrow.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              Assured Life helps families, individuals and businesses choose plans designed around
              their long-term financial goals.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg">
                <a href="#plans">Explore Plans</a>
              </Button>
              <Button asChild variant="outlineOnDark" size="lg">
                <Link to="/contact">Talk to an Advisor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section id="plans" className="!py-12 sm:!py-14">
        <SectionHeading
          compact
          eyebrow="Plan discovery"
          title="Plans designed for every stage of life"
          intro="Explore carefully structured plans for children, families, retirement, protection, wealth and long-term financial goals."
        />
      </Section>

      {featured.map((category, index) => (
        <FeaturedShowcase key={category.id} category={category} index={index} />
      ))}

      {categories.map((category, index) => (
        <PlanShowcase key={category.id} category={category} index={index} />
      ))}

      <Section tone="surface">
        <SectionHeading
          eyebrow="Assured Life"
          title="Planning that starts with what matters to you"
          intro="Explore the available options, review official documentation and make your decision with clear, advisor-led guidance."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 80}>
              <div className="h-full rounded-xl border bg-card p-6 shadow-card">
                <reason.icon className="size-5 text-gold" />
                <h3 className="mt-5 font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <QuoteCta
        title="Plan With Confidence"
        text="Speak with an Assured Life advisor to understand your options and choose a plan aligned with your goals."
      />
    </>
  );
}

function FeaturedShowcase({ category, index }: { category: FeaturedCategory; index: number }) {
  return (
    <section id={category.id} className={index % 2 ? "bg-surface" : "bg-background"}>
      <div className="container-page grid min-h-[65vh] items-stretch lg:grid-cols-2">
        <Reveal className={index % 2 ? "lg:order-2" : ""}>
          <div className="h-full overflow-hidden">
            <img
              src={category.image}
              alt={category.imageAlt}
              loading="lazy"
              className="h-[34vh] w-full object-cover transition-transform duration-700 hover:scale-[1.03] lg:h-full"
            />
          </div>
        </Reveal>
        <Reveal delay={120} className="flex items-center">
          <div className="max-w-xl px-0 py-8 lg:px-10 lg:py-10">
            <p className="eyebrow">
              {category.items.length} {category.items.length === 1 ? "plan" : "plans"}
            </p>
            <h2 className="mt-3 text-2xl leading-tight font-semibold sm:text-4xl">
              {category.headline}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {category.description}
            </p>
            <ul className="mt-6 space-y-2">
              {category.items.map((item, itemIndex) => (
                <li
                  key={`${item.number}-${item.name}`}
                  className="transition-all duration-500"
                  style={{ transitionDelay: `${itemIndex * 70}ms` }}
                >
                  {item.slug ? (
                    <Link
                      to="/plans/ulip/$plan"
                      params={{ plan: item.slug }}
                      preload="intent"
                      className="group/plan inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <span className="font-semibold text-foreground">{item.number}</span>
                      <span>— {item.name}</span>
                      <ArrowRight className="size-3.5 opacity-0 transition-all group-hover/plan:translate-x-1 group-hover/plan:opacity-100" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">{item.number}</span>
                      <span>— {item.name}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <Link
              to={category.route}
              preload="intent"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Explore {category.name}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PlanShowcase({ category, index }: { category: Category; index: number }) {
  const image = category.plans[0];

  return (
    <section id={category.id} className={index % 2 ? "bg-surface" : "bg-background"}>
      <div className="container-page grid min-h-[65vh] items-stretch lg:grid-cols-2">
        <Reveal className={index % 2 ? "lg:order-2" : ""}>
          <div className="h-full overflow-hidden">
            <img
              src={image?.image}
              alt={image?.imageAlt ?? ""}
              loading="lazy"
              className="h-[34vh] w-full object-cover transition-transform duration-700 hover:scale-[1.03] lg:h-full"
            />
          </div>
        </Reveal>
        <Reveal delay={120} className="flex items-center">
          <div className="max-w-xl px-0 py-8 lg:px-10 lg:py-10">
            <p className="eyebrow">
              {category.plans.length} {category.plans.length === 1 ? "plan" : "plans"}
            </p>
            <h2 className="mt-3 text-2xl leading-tight font-semibold sm:text-4xl">
              {category.headline}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {category.description}
            </p>
            <ul className="mt-6 space-y-2">
              {category.plans.map((plan, planIndex) => (
                <li
                  key={`${plan.planNumber}-${plan.slug}`}
                  className="transition-all duration-500"
                  style={{ transitionDelay: `${planIndex * 70}ms` }}
                >
                  <Link
                    to={category.detailRoute}
                    params={{ plan: plan.slug }}
                    preload="intent"
                    className="group/plan inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="font-semibold text-foreground">{plan.planNumber}</span>
                    <span>— {plan.name}</span>
                    <ArrowRight className="size-3.5 opacity-0 transition-all group-hover/plan:translate-x-1 group-hover/plan:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to={category.route}
              preload="intent"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Explore {category.name}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
