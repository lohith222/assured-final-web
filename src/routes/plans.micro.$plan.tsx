import { createFileRoute, notFound } from "@tanstack/react-router";
import { FinancialPlanDetails, microConfig } from "@/components/plans/FinancialPlansExperience";
import { getFinancialPlan, microPlans } from "@/lib/financial-plans";
export const Route = createFileRoute("/plans/micro/$plan")({ loader: ({ params }) => { const plan = getFinancialPlan(microPlans, params.plan); if (!plan) throw notFound(); return { plan }; }, component: () => <FinancialPlanDetails plan={Route.useLoaderData().plan} config={microConfig} /> });
