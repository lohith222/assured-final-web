import { createFileRoute, notFound } from "@tanstack/react-router";
import { FinancialPlanDetails, moneyBackConfig } from "@/components/plans/FinancialPlansExperience";
import { getFinancialPlan, moneyBackPlans } from "@/lib/financial-plans";
export const Route = createFileRoute("/plans/moneyback/$plan")({ loader: ({ params }) => { const plan = getFinancialPlan(moneyBackPlans, params.plan); if (!plan) throw notFound(); return { plan }; }, component: () => <FinancialPlanDetails plan={Route.useLoaderData().plan} config={moneyBackConfig} /> });
