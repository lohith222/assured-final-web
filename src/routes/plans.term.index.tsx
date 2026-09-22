import { createFileRoute } from "@tanstack/react-router";
import { FinancialPlansCategory, termConfig } from "@/components/plans/FinancialPlansExperience";
import { termPlans } from "@/lib/financial-plans";
export const Route = createFileRoute("/plans/term/")({ head: () => ({ meta: [{ title: "Term Plans | Assured Life" }, { name: "description", content: "Explore Assured Life Term Plans: New Jeevan Amar, Yuva Term and Bima Kavach." }], links: [{ rel: "canonical", href: "/plans/term" }] }), component: () => <FinancialPlansCategory config={termConfig} plans={termPlans} /> });
