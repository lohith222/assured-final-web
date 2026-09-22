import { createFileRoute } from "@tanstack/react-router";
import { FinancialPlansCategory, microConfig } from "@/components/plans/FinancialPlansExperience";
import { microPlans } from "@/lib/financial-plans";
export const Route = createFileRoute("/plans/micro/")({ head: () => ({ meta: [{ title: "Micro Plans | Assured Life" }] }), component: () => <FinancialPlansCategory config={microConfig} plans={microPlans} /> });
