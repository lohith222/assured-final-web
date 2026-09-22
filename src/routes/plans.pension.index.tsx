import { createFileRoute } from "@tanstack/react-router";
import { FinancialPlansCategory, pensionConfig } from "@/components/plans/FinancialPlansExperience";
import { pensionPlans } from "@/lib/financial-plans";
export const Route = createFileRoute("/plans/pension/")({ head: () => ({ meta: [{ title: "Pension Plans | Assured Life" }, { name: "description", content: "Explore Assured Life Pension Plans: Jeevan Shanti, Jeevan Akshay and Smart Pension." }], links: [{ rel: "canonical", href: "/plans/pension" }] }), component: () => <FinancialPlansCategory config={pensionConfig} plans={pensionPlans} /> });
