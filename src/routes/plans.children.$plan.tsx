import { createFileRoute, notFound } from "@tanstack/react-router";
import { PlanDetails } from "@/components/plans/PlanDetails";
import { getChildrenPlan } from "@/lib/children-plans";

export const Route = createFileRoute("/plans/children/$plan")({
  loader: ({ params }) => {
    const plan = getChildrenPlan(params.plan);
    if (!plan) throw notFound();
    return { plan };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Plan unavailable | Assured Life" }, { name: "robots", content: "noindex" }],
      };
    }
    const { plan } = loaderData;
    const title = `${plan.name} | Assured Life`;
    const description = `${plan.name} (Plan ${plan.planNumber}) is part of the Assured Life Children Plans collection. ${plan.short}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/plans/children/${params.plan}` },
      ],
      links: [{ rel: "canonical", href: `/plans/children/${params.plan}` }],
    };
  },
  component: PlanRoute,
});

function PlanRoute() {
  const { plan } = Route.useLoaderData();
  return <PlanDetails plan={plan} />;
}
