import { createFileRoute } from "@tanstack/react-router";
import { FinancialPlansCategory, mahilaConfig } from "@/components/plans/FinancialPlansExperience";
import { mahilaPlans } from "@/lib/financial-plans";
export const Route = createFileRoute("/plans/mahila/")({ head: () => ({ meta: [{ title: "Mahila Plans | Assured Life" }] }), component: () => <FinancialPlansCategory config={mahilaConfig} plans={mahilaPlans} /> });
