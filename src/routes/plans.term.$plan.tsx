import { createFileRoute, notFound } from "@tanstack/react-router";
import { FinancialPlanDetails, termConfig } from "@/components/plans/FinancialPlansExperience";
import { getFinancialPlan, termPlans } from "@/lib/financial-plans";
export const Route = createFileRoute("/plans/term/$plan")({ loader: ({ params }) => { const plan = getFinancialPlan(termPlans, params.plan); if (!plan) throw notFound(); return { plan }; }, head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.plan.name} | Assured Life` : "Plan unavailable | Assured Life" }] }), component: () => <FinancialPlanDetails plan={Route.useLoaderData().plan} config={termConfig} /> });
