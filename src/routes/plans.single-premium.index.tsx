import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Landmark, PiggyBank, Scale, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Faq, Reveal, Section, SectionHeading } from "@/components/site/sections";
import { SinglePremiumPlanCard } from "@/components/plans/SinglePremiumPlanCard";
import { singlePremiumPlans } from "@/lib/single-premium-plans";
import heroImg from "@/assets/plan-jeevan-umang.jpg";
import introImg from "@/assets/hero-family.jpg";
import storyImg from "@/assets/wholelife-timeline.jpg";

export const Route = createFileRoute("/plans/single-premium/")({
  head: () => ({
    meta: [
      { title: "Single Premium Plans | Assured Life" },
      {
        name: "description",
        content:
          "Explore Assured Life Single Premium Plans for one-time contribution and longer-term financial planning conversations.",
      },
      { property: "og:title", content: "Single Premium Plans | Assured Life" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/plans/single-premium" },
    ],
    links: [{ rel: "canonical", href: "/plans/single-premium" }],
  }),
  component: SinglePremiumPlansPage,
});

const faqs = [
  {
    q: "What are Single Premium Plans?",
    a: "They are presented as plans involving a one-time contribution rather than recurring premiums. The exact structure of each plan is set out in its official policy document.",
  },
  {
    q: "How should I compare these plans?",
    a: "Start with the purpose and key benefit area shown on each card, then review the individual page and official documentation with a licensed advisor.",
  },
  {
    q: "Are premium, return or maturity amounts shown here?",
    a: "No. Plan details to be confirmed by a licensed Assured Life advisor from the official documentation.",
  },
  {
    q: "Can I talk to an advisor?",
    a: "Yes. An Assured Life advisor can explain the documented terms and help you consider the plans alongside your wider financial goals.",
  },
];

function SinglePremiumPlansPage() {
  const pillars = [
    {
      icon: WalletCards,
      title: "One-time contribution",
      text: "Explore a planning route built around one considered contribution.",
    },
    {
      icon: Landmark,
      title: "Long-term goals",
      text: "Bring future priorities into a focused financial conversation.",
    },
    {
      icon: Scale,
      title: "Thoughtful comparison",
      text: "Review plan structures in the context of your wider financial picture.",
    },
    {
      icon: PiggyBank,
      title: "Advisor-led clarity",
      text: "Read the official terms carefully before making a decision.",
    },
  ];
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-16 size-72 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-[1fr_0.95fr] lg:py-24">
          <div className="rise">
            <p className="eyebrow text-gold">Single Premium Plans</p>
            <h1 className="mt-4 text-4xl leading-[1.06] font-semibold text-balance text-primary-foreground sm:text-5xl lg:text-[3.4rem]">
              Make one thoughtful decision for the road ahead.
            </h1>
            <span aria-hidden="true" className="mt-7 block h-[3px] w-14 bg-gold" />
            <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              A single contribution can be a meaningful starting point for longer-term financial
              planning, especially when it is grounded in clarity about the goals ahead.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg">
                <a href="#plans">Explore Single Premium Plans</a>
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
            <div className="overflow-hidden rounded-xl shadow-lift">
              <img
                src={heroImg}
                alt="Indian couple reviewing their long-term financial plans together"
                width={1408}
                height={1600}
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-xl shadow-card">
              <img
                src={introImg}
                alt="Indian family sharing a relaxed moment at home"
                loading="lazy"
                width={1408}
                height={1104}
                className="w-full object-cover transition-transform duration-[1400ms] hover:scale-[1.03]"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Planning with purpose"
              title="One contribution. A considered longer view."
              intro="Single premium planning begins with a wider conversation: the financial goals you are working toward, the funds you have available, and the structure that feels right for your household."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {pillars.slice(0, 2).map((item) => (
                <div key={item.title} className="border-l-2 border-gold pl-4">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>
      <Section tone="surface" id="plans">
        <SectionHeading
          eyebrow="The collection"
          title="Explore Single Premium Plans"
          intro="Compare two distinct planning conversations, each built around a one-time contribution."
        />
        <div className="mt-12 grid gap-7 sm:grid-cols-2">
          {singlePremiumPlans.map((plan, index) => (
            <Reveal key={plan.slug} delay={100 + index * 100}>
              <SinglePremiumPlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeading
          eyebrow="A clearer financial story"
          title="Start with what you want your planning to hold."
          intro="The most useful starting point is not a figure. It is a clear picture of the people, plans and future priorities that a one-time contribution needs to sit alongside."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <div className="h-full rounded-xl border bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <item.icon className="size-6 text-gold" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <section className="relative overflow-hidden">
        <img
          src={storyImg}
          alt="Indian couple looking ahead together from their apartment balcony"
          loading="lazy"
          width={1600}
          height={912}
          className="absolute inset-0 size-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-navy-deep/85" />
        <div className="container-page relative py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">The value of perspective</p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold text-balance text-primary-foreground sm:text-4xl">
              Long-term goals deserve an honest, unhurried conversation.
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {[
                {
                  t: "Clarity",
                  d: "Start with the goals and the official documentation, not assumptions.",
                },
                {
                  t: "Perspective",
                  d: "Consider a single contribution alongside the rest of your financial life.",
                },
                { t: "Transparency", d: "Terms are explained as written in the policy documents." },
                {
                  t: "Guidance",
                  d: "A licensed advisor can take the time to walk through the details.",
                },
              ].map((item) => (
                <div key={item.t} className="border-l-2 border-gold/60 pl-4">
                  <h3 className="text-base font-semibold text-primary-foreground">{item.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Faq items={faqs} title="Single Premium Plans - questions people ask" />
      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        />
        <div className="container-page flex flex-col items-center text-center">
          <h2 className="max-w-2xl text-3xl leading-tight font-semibold text-balance text-primary-foreground sm:text-4xl">
            Bring your long-term plans into focus.
          </h2>
          <p className="mt-4 max-w-xl text-base text-primary-foreground/75">
            Explore the collection or speak with an Assured Life advisor about the path ahead.
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
                Talk to an Advisor <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
