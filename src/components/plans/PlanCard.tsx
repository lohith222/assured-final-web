import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ChildrenPlan } from "@/lib/children-plans";

export function PlanCard({
  plan,
  delay = 0,
  dimmed = false,
}: {
  plan: ChildrenPlan;
  delay?: number;
  dimmed?: boolean;
}) {
  return (
    <Link
      to="/plans/children/$plan"
      params={{ plan: plan.slug }}
      aria-label={`Explore ${plan.name}`}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card ring-1 ring-border/40 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-gold/70 hover:shadow-lift hover:ring-gold/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
        dimmed ? "opacity-40 saturate-50" : "opacity-100"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={plan.image}
          alt={plan.imageAlt}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-navy-deep/5 to-transparent transition-opacity duration-500 group-hover:from-navy-deep/70" />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.68rem] font-bold tracking-[0.16em] text-primary uppercase backdrop-blur">
          Plan {plan.planNumber}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <span className="absolute left-0 top-0 h-[3px] w-0 bg-gold transition-all duration-500 ease-out group-hover:w-16" />
        <h3 className="text-xl leading-snug font-semibold text-balance">{plan.name}</h3>
        <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-navy-soft uppercase">
          {plan.category}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{plan.short}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Explore Plan
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
