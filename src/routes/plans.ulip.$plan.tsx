import { createFileRoute, notFound } from "@tanstack/react-router";
import { FinancialPlanDetails, ulipConfig } from "@/components/plans/FinancialPlansExperience";
import { getFinancialPlan, ulipPlans } from "@/lib/financial-plans";
export const Route = createFileRoute("/plans/ulip/$plan")({ loader: ({ params }) => { const plan = getFinancialPlan(ulipPlans, params.plan); if (!plan) throw notFound(); return { plan }; }, head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.plan.name} | Assured Life` : "Plan unavailable | Assured Life" }] }), component: () => <FinancialPlanDetails plan={Route.useLoaderData().plan} config={ulipConfig} /> });
