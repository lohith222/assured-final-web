export type PlanNavPath =
  | "/insurance/health"
  | "/plans/travel"
  | "/insurance/ulip"
  | "/plans/children"
  | "/plans/whole-life"
  | "/plans/single-premium"
  | "/plans/pension"
  | "/plans/term"
  | "/plans/endowment"
  | "/plans/mahila"
  | "/plans/micro"
  | "/plans/moneyback";

export type PlanNavItem = {
  label: string;
  to: PlanNavPath;
  description?: string;
};


/**
 * Single source of truth for the Plans menu (desktop dropdown, mobile menu, footer).
 * Order is fixed: Health -> Mutual Funds/ULIP -> Children -> WholeLife -> Single Premium
 * -> Pension -> Term -> Endowment -> Mahila -> Micro -> MoneyBack -> Travel.
 */
export const planNavItems: PlanNavItem[] = [
  {
    label: "Health Plans",
    to: "/insurance/health",
    description: "Healthcare protection for you and your family.",
  },
  {
    label: "Mutual Funds / ULIP Plans",
    to: "/insurance/ulip",
    description: "Long-term financial planning options.",
  },
  {
    label: "Children Plans",
    to: "/plans/children",
    description: "Plan today for their tomorrow.",
  },
  {
    label: "WholeLife Plans",
    to: "/plans/whole-life",
    description: "A plan that stays for a lifetime.",
  },
  {
    label: "Single Premium Plans",
    to: "/plans/single-premium",
    description: "One thoughtful contribution for the road ahead.",
  },
  {
    label: "Pension Plans",
    to: "/plans/pension",
    description: "Plan thoughtfully for the years ahead.",
  },
  {
    label: "Term Plans",
    to: "/plans/term",
    description: "Protection planning for your future.",
  },
  {
    label: "Endowment Plans",
    to: "/plans/endowment",
    description: "Plan today for future goals.",
  },
  {
    label: "Mahila Plans",
    to: "/plans/mahila",
    description: "Thoughtful planning options for future priorities.",
  },
  {
    label: "Micro Plans",
    to: "/plans/micro",
    description: "Small steps towards thoughtful planning.",
  },
  {
    label: "MoneyBack Plans",
    to: "/plans/moneyback",
    description: "Plan for the milestones ahead.",
  },
  {
    label: "Travel Plans",
    to: "/plans/travel",
    description: "Travel with thoughtful protection in place.",
  },
];
