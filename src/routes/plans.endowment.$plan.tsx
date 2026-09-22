import { createFileRoute, notFound } from "@tanstack/react-router";
import { endowmentConfig, FinancialPlanDetails } from "@/components/plans/FinancialPlansExperience";
import { endowmentPlans, getFinancialPlan } from "@/lib/financial-plans";
export const Route = createFileRoute("/plans/endowment/$plan")({ loader: ({ params }) => { const plan = getFinancialPlan(endowmentPlans, params.plan); if (!plan) throw notFound(); return { plan }; }, head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.plan.name} | Assured Life` : "Plan unavailable | Assured Life" }] }), component: () => <FinancialPlanDetails plan={Route.useLoaderData().plan} config={endowmentConfig} /> });
