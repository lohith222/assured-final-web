import { createFileRoute, notFound } from "@tanstack/react-router";
import { WholeLifePlanDetails } from "@/components/plans/WholeLifePlanDetails";
import { getWholeLifePlan } from "@/lib/whole-life-plans";

export const Route = createFileRoute("/plans/whole-life/$plan")({
  loader: ({ params }) => {
    const plan = getWholeLifePlan(params.plan);
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
    const description = `${plan.name} (Plan ${plan.planNumber}) is part of the Assured Life WholeLife Plans collection. ${plan.short}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/plans/whole-life/${params.plan}` },
      ],
      links: [{ rel: "canonical", href: `/plans/whole-life/${params.plan}` }],
    };
  },
  component: WholeLifePlanRoute,
});

function WholeLifePlanRoute() {
  const { plan } = Route.useLoaderData();
  return <WholeLifePlanDetails plan={plan} />;
}
