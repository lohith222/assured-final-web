import { createFileRoute } from "@tanstack/react-router";
import { FinancialPlansCategory, moneyBackConfig } from "@/components/plans/FinancialPlansExperience";
import { moneyBackPlans } from "@/lib/financial-plans";
export const Route = createFileRoute("/plans/moneyback/")({ head: () => ({ meta: [{ title: "MoneyBack Plans | Assured Life" }] }), component: () => <FinancialPlansCategory config={moneyBackConfig} plans={moneyBackPlans} /> });
