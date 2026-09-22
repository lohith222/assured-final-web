import { createFileRoute, notFound } from "@tanstack/react-router";
import { SinglePremiumPlanDetails } from "@/components/plans/SinglePremiumPlanDetails";
import { getSinglePremiumPlan } from "@/lib/single-premium-plans";

export const Route = createFileRoute("/plans/single-premium/$plan")({
  loader: ({ params }) => {
    const plan = getSinglePremiumPlan(params.plan);
    if (!plan) throw notFound();
    return { plan };
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.plan.name} | Assured Life` },
            {
              name: "description",
              content: `${loaderData.plan.name} (Plan ${loaderData.plan.planNumber}) is part of the Assured Life Single Premium Plans collection. ${loaderData.plan.short}`,
            },
            { property: "og:title", content: `${loaderData.plan.name} | Assured Life` },
            { property: "og:type", content: "article" },
            { property: "og:url", content: `/plans/single-premium/${params.plan}` },
          ],
          links: [{ rel: "canonical", href: `/plans/single-premium/${params.plan}` }],
        }
      : {
          meta: [
            { title: "Plan unavailable | Assured Life" },
            { name: "robots", content: "noindex" },
          ],
        },
  component: SinglePremiumPlanRoute,
});

function SinglePremiumPlanRoute() {
  const { plan } = Route.useLoaderData();
  return <SinglePremiumPlanDetails plan={plan} />;
}
