import { createFileRoute } from "@tanstack/react-router";
import { endowmentConfig, FinancialPlansCategory } from "@/components/plans/FinancialPlansExperience";
import { endowmentPlans } from "@/lib/financial-plans";
export const Route = createFileRoute("/plans/endowment/")({ head: () => ({ meta: [{ title: "Endowment Plans | Assured Life" }, { name: "description", content: "Explore Assured Life Endowment Plans for long-term financial planning." }], links: [{ rel: "canonical", href: "/plans/endowment" }] }), component: () => <FinancialPlansCategory config={endowmentConfig} plans={endowmentPlans} /> });
