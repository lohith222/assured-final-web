import { createFileRoute, notFound } from "@tanstack/react-router";
import { FinancialPlanDetails, pensionConfig } from "@/components/plans/FinancialPlansExperience";
import { getFinancialPlan, pensionPlans } from "@/lib/financial-plans";
export const Route = createFileRoute("/plans/pension/$plan")({ loader: ({ params }) => { const plan = getFinancialPlan(pensionPlans, params.plan); if (!plan) throw notFound(); return { plan }; }, head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.plan.name} | Assured Life` : "Plan unavailable | Assured Life" }] }), component: () => <FinancialPlanDetails plan={Route.useLoaderData().plan} config={pensionConfig} /> });
