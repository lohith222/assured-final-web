import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Globe2,
  HeartPulse,
  Luggage,
  Plane,
  ShieldCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/sections";
import travelImage from "@/assets/travel.jpg";

export const Route = createFileRoute("/plans/travel")({
  head: () => ({
    meta: [
      { title: "Travel Insurance | Assured Life" },
      {
        name: "description",
        content:
          "Explore travel insurance options from Assured Life for domestic and international journeys.",
      },
    ],
  }),
  component: TravelInsurancePage,
});

const solutions = [
  {
    icon: Plane,
    title: "Domestic Travel",
    text: "Considered protection for journeys across India, whether you are travelling for work, family or a break.",
  },
  {
    icon: Globe2,
    title: "International Travel",
    text: "Travel with a clearer view of eligible support when you are away from home and outside India.",
  },
  {
    icon: HeartPulse,
    title: "Medical Emergency Protection",
    text: "Cover for eligible emergency medical expenses, subject to the terms and limits of your selected policy.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Trip Protection",
    text: "Help protect covered travel arrangements against eligible disruption and unexpected events.",
  },
  {
    icon: Luggage,
    title: "Baggage Protection",
    text: "Support for eligible loss, delay or damage to baggage when the selected product includes it.",
  },
];

const benefits = [
  "Emergency medical support for eligible treatment expenses",
  "Protection options for domestic and international journeys",
  "Trip disruption support where included in the selected product",
  "Baggage protection subject to policy terms and limits",
  "Access to claims guidance when you need help with next steps",
];

const faqs = [
  {
    question: "When should I buy travel insurance?",
    answer:
      "It is sensible to review travel insurance when you begin arranging your journey. The cover, start date and eligibility depend on the product, so check the policy terms before travelling.",
  },
  {
    question: "Does travel insurance cover medical emergencies abroad?",
    answer:
      "Selected products may cover eligible emergency medical treatment abroad, subject to limits, exclusions, waiting conditions and the requirements for notifying the assistance or claims team.",
  },
  {
    question: "Can I get cover for domestic travel?",
    answer:
      "Some travel products are designed for journeys within India. The available cover and eligibility depend on the product selected and the details of your trip.",
  },
  {
    question: "What should I do if my baggage is delayed or lost?",
    answer:
      "Report the incident to the relevant carrier or authority as soon as possible, keep the supporting report and receipts, and contact the claims team for guidance on the documents required by your policy.",
  },
];

function TravelInsurancePage() {
  return (
    <div className="bg-background">
      <section className="border-b bg-surface">
        <div
          className="container-page flex items-center gap-2 py-4 text-sm text-muted-foreground"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="size-4" aria-hidden="true" />
          <span>Plans</span>
          <ChevronRight className="size-4" aria-hidden="true" />
          <span className="font-semibold text-foreground">Travel Insurance</span>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy-deep">
        <img
          src={travelImage}
          alt="Indian family preparing for a journey together"
          className="absolute inset-0 -z-20 size-full object-cover object-center opacity-35"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,42,80,0.98)_0%,rgba(14,42,80,0.87)_48%,rgba(14,42,80,0.42)_100%)]"
          aria-hidden="true"
        />
        <div className="container-page grid min-h-[34rem] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="max-w-2xl rise">
            <p className="eyebrow text-gold">Travel Insurance</p>
            <h1 className="mt-5 text-5xl leading-[1.03] font-semibold text-balance text-primary-foreground sm:text-6xl lg:text-7xl">
              Travel With Confidence. Explore Without Worry.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              A considered travel plan helps you prepare for the unexpected, from medical
              emergencies to covered trip and baggage disruptions, wherever your journey takes you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg">
                <Link to="/quote">
                  Get a Quote <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outlineOnDark" size="lg">
                <Link to="/contact">Talk to an Advisor</Link>
              </Button>
            </div>
          </div>
          <div className="hidden justify-self-end lg:block">
            <div className="max-w-xs border-l border-gold/60 pl-6 text-primary-foreground/80">
              <ShieldCheck className="size-7 text-gold" aria-hidden="true" />
              <p className="mt-5 font-display text-2xl leading-tight text-primary-foreground">
                Make room for the journey, not the uncertainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Protection for the journey"
            title="Travel Insurance Solutions"
            intro="Choose a level of travel protection that reflects where you are going, who is travelling with you and what you want to prepare for."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className="rounded-lg border bg-card p-6 shadow-card transition-transform duration-300 hover:-translate-y-1"
              >
                <solution.icon className="size-7 text-navy" aria-hidden="true" />
                <h2 className="mt-6 text-xl leading-tight font-semibold">{solution.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {solution.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading
            eyebrow="At a glance"
            title="Key Benefits"
            intro="The exact cover depends on the selected product. Review the policy wording, limits and exclusions before you travel."
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
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Before you go"
              title="Who Should Consider Travel Insurance?"
              intro="Anyone whose journey, health or travel arrangements would be difficult to manage alone if plans changed unexpectedly."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Families travelling together",
                  "Keep the practical details of a shared trip in one considered plan.",
                ],
                [
                  "International travellers",
                  "Prepare for medical and travel assistance needs while away from home.",
                ],
                [
                  "Business travellers",
                  "Reduce the uncertainty around frequent work journeys and changing schedules.",
                ],
                [
                  "Long-awaited holidays",
                  "Protect the arrangements that took time and planning to put together.",
                ],
              ].map(([title, text]) => (
                <article key={title} className="border-l-2 border-gold pl-5">
                  <h2 className="font-semibold">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
          <img
            src={travelImage}
            alt="Family enjoying a trip together"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-card"
          />
        </div>
      </section>

      <section className="bg-navy-deep py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="A simple journey"
            title="How It Works"
            intro="Start with your trip details, understand the cover and keep support within reach."
            onDark
          />
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              ["01", "Share Your Trip", "Tell us your destination, dates and who is travelling."],
              ["02", "Choose Cover", "Review suitable protection and the terms that apply."],
              [
                "03",
                "Get Protected",
                "Complete your application and keep your policy details accessible.",
              ],
              [
                "04",
                "Claim Support",
                "Reach out for guidance if a covered event affects your journey.",
              ],
            ].map(([step, title, text]) => (
              <li key={step} className="border-t border-primary-foreground/20 pt-5">
                <span className="font-display text-3xl text-gold">{step}</span>
                <h2 className="mt-4 text-lg font-semibold text-primary-foreground">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b bg-background py-16 sm:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Need help while travelling?</p>
            <h2 className="mt-2 text-3xl font-semibold">Claims support, clearly explained.</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Get practical guidance on documents, timelines and the next step for your request.
            </p>
          </div>
          <Button asChild variant="outline" size="lg">
            <Link to="/claims">
              Go to Claims Support <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="faq" className="bg-surface py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading
            eyebrow="Answers"
            title="Frequently Asked Questions"
            intro="A few useful starting points. Product-specific terms always take precedence."
          />
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-24">
        <div className="container-page flex flex-col items-center text-center">
          <p className="eyebrow text-gold">Take the next step</p>
          <h2 className="mt-3 max-w-2xl text-4xl leading-tight font-semibold text-balance text-primary-foreground sm:text-5xl">
            Plan your journey with more confidence.
          </h2>
          <p className="mt-5 max-w-xl text-primary-foreground/75">
            Tell us where you are going and we will help you understand the travel protection
            options available to you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="lg">
              <Link to="/quote">
                Get a Quote <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outlineOnDark" size="lg">
              <Link to="/contact">Contact Assured Life</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
