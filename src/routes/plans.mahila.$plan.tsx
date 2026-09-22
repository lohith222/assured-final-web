import { createFileRoute, notFound } from "@tanstack/react-router";
import { FinancialPlanDetails, mahilaConfig } from "@/components/plans/FinancialPlansExperience";
import { getFinancialPlan, mahilaPlans } from "@/lib/financial-plans";
export const Route = createFileRoute("/plans/mahila/$plan")({ loader: ({ params }) => { const plan = getFinancialPlan(mahilaPlans, params.plan); if (!plan) throw notFound(); return { plan }; }, component: () => <FinancialPlanDetails plan={Route.useLoaderData().plan} config={mahilaConfig} /> });
