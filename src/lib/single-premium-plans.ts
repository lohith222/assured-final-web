import endowmentImg from "@/assets/plan-single-premium-endowment.jpg";
import sathiImg from "@/assets/plan-single-premium-sathi.jpg";

export type SinglePremiumPlan = {
  slug: string;
  planNumber: string;
  name: string;
  category: string;
  tagline: string;
  purpose: string;
  benefitArea: string;
  short: string;
  intro: string;
  image: string;
  imageAlt: string;
  about: string[];
  whyConsider: { title: string; text: string }[];
  benefits: string[];
  features: string[];
  whoMayConsider: string[];
  considerations: string[];
  howItWorks: { step: string; title: string; text: string }[];
  eligibility: { label: string; value: string }[];
  journey: { stage: string; title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

const TBC = "Plan details to be confirmed.";
const sharedConsiderations = [
  "Plan features, eligibility and terms are governed entirely by the official policy document.",
  "Review the prospectus and benefit illustration before making a decision.",
  "Consider your wider financial goals, not a single product in isolation.",
  "Speak with a licensed Assured Life advisor if anything is unclear.",
];
const eligibility = [
  { label: "Entry age", value: TBC },
  { label: "Policy term", value: TBC },
  { label: "Premium payment", value: "Single premium" },
  { label: "Minimum sum assured", value: TBC },
  { label: "Eligibility conditions", value: TBC },
];

export const singlePremiumPlans: SinglePremiumPlan[] = [
  {
    slug: "single-premium-endowment",
    planNumber: "717",
    name: "Single Premium Endowment",
    category: "Single Premium Plans",
    tagline: "One considered contribution, with your longer goals in view.",
    purpose: "A single premium route for long-term financial planning.",
    benefitArea: "One-time contribution and future-focused planning",
    short:
      "A single premium plan for people who prefer to make one considered contribution toward a longer financial horizon.",
    intro:
      "Single Premium Endowment is part of the Assured Life Single Premium Plans collection, for people exploring a one-time contribution instead of a recurring premium commitment.",
    image: endowmentImg,
    imageAlt: "Indian parents walking with their daughter in a sunlit park",
    about: [
      "Single Premium Endowment is presented within the Single Premium Plans category for people who want to explore long-term financial planning through one contribution.",
      "The precise structure, benefits, options and conditions are set out in the official policy document and should be reviewed in full before making a decision.",
      TBC,
    ],
    whyConsider: [
      {
        title: "One contribution",
        text: "A payment approach intended for people who prefer to make one considered contribution rather than manage a recurring schedule.",
      },
      {
        title: "Longer goals in view",
        text: "A conversation framed around the financial goals and milestones that may sit further ahead.",
      },
      {
        title: "A clearer planning moment",
        text: "Useful when you are reviewing a lump sum alongside your wider financial position.",
      },
      {
        title: "Advisor-led review",
        text: "Every benefit and condition should be read from the official policy documentation with a licensed advisor.",
      },
    ],
    benefits: [
      "Positioned within the Single Premium Plans category",
      "One-time contribution approach",
      "Long-term financial planning orientation",
      "Benefit structure as set out in the official policy document",
      "Advisor-guided review before application",
    ],
    features: [
      "Single premium payment structure",
      "Endowment plan structure",
      "Long-term goal-oriented planning",
      "Terms and conditions as specified in the policy document",
    ],
    whoMayConsider: [
      "People with a lump sum set aside for financial planning",
      "Those who prefer not to manage recurring premium payments",
      "Families planning thoughtfully around longer-term goals",
      "Anyone comparing single premium and regular premium routes",
    ],
    considerations: sharedConsiderations,
    howItWorks: [
      {
        step: "01",
        title: "Start with the goal",
        text: "Clarify the longer-term goal you want your financial planning to support.",
      },
      {
        step: "02",
        title: "Review the structure",
        text: "Go through the documented benefits, conditions and one-time contribution approach with an advisor.",
      },
      {
        step: "03",
        title: "Decide with clarity",
        text: "Proceed only once the official policy documentation and your wider financial picture are aligned.",
      },
    ],
    eligibility,
    journey: [
      {
        stage: "Stage 01",
        title: "The planning conversation",
        text: "Goals, available funds and official documentation are reviewed together.",
      },
      {
        stage: "Stage 02",
        title: "The single contribution",
        text: "The one-time contribution route is considered as described in the policy document.",
      },
      {
        stage: "Stage 03",
        title: "The long view",
        text: "The plan sits alongside the financial goals and changing priorities you have identified.",
      },
      {
        stage: "Stage 04",
        title: "The documented outcome",
        text: "Benefits apply exactly as described in the official policy document. Plan details to be confirmed.",
      },
    ],
    faqs: [
      {
        q: "What does single premium mean?",
        a: "It refers to a one-time contribution rather than recurring premium payments. The exact conditions are set out in the official policy document.",
      },
      {
        q: "Are premium or maturity amounts shown here?",
        a: "No. Plan details to be confirmed by a licensed Assured Life advisor using the official documentation.",
      },
      {
        q: "Who should review this plan?",
        a: "People exploring a one-time contribution for longer-term financial planning can discuss the documented structure with an advisor.",
      },
      {
        q: "What should I read before applying?",
        a: "Review the prospectus, benefit illustration and policy terms and conditions in full.",
      },
    ],
  },
  {
    slug: "new-jeevan-sathi",
    planNumber: "888",
    name: "New Jeevan Sathi",
    category: "Single Premium Plans",
    tagline: "A thoughtful financial conversation for the life you are building together.",
    purpose: "Single premium planning centred on shared long-term goals.",
    benefitArea: "Family security and future planning",
    short:
      "A single premium plan for people considering shared financial goals, family security and the years ahead.",
    intro:
      "New Jeevan Sathi is part of the Assured Life Single Premium Plans collection, for people exploring a one-time contribution while planning around shared financial goals.",
    image: sathiImg,
    imageAlt: "Indian couple enjoying tea together at home in a warmly lit living room",
    about: [
      "New Jeevan Sathi is presented within the Single Premium Plans category for people who want to bring shared long-term goals into a focused financial planning conversation.",
      "The exact plan structure, benefits, options and conditions are stated only in the official policy document and should be reviewed carefully before a decision is made.",
      TBC,
    ],
    whyConsider: [
      {
        title: "Shared planning",
        text: "A conversation shaped around the goals, priorities and responsibilities you are considering together.",
      },
      {
        title: "One-time contribution",
        text: "A route for people who prefer to make a considered contribution once rather than maintain a recurring payment schedule.",
      },
      {
        title: "Future-focused discussion",
        text: "A starting point for reviewing long-term financial intentions with the household's wider position in view.",
      },
      {
        title: "Documentation first",
        text: "An advisor can explain the official terms, conditions and options before you make any decision.",
      },
    ],
    benefits: [
      "Positioned within the Single Premium Plans category",
      "One-time contribution approach",
      "Shared long-term planning orientation",
      "Benefit structure as set out in the official policy document",
      "Advisor-guided review before application",
    ],
    features: [
      "Single premium payment structure",
      "Long-term financial planning orientation",
      "Shared goal-focused planning discussion",
      "Terms and conditions as specified in the policy document",
    ],
    whoMayConsider: [
      "People planning around shared financial goals",
      "Families reviewing future security alongside a lump sum",
      "Those who prefer not to manage recurring premium payments",
      "Anyone comparing single premium routes with other plan structures",
    ],
    considerations: sharedConsiderations,
    howItWorks: [
      {
        step: "01",
        title: "Discuss the horizon",
        text: "Identify the goals, responsibilities and time horizons that matter to you both.",
      },
      {
        step: "02",
        title: "Read the documentation",
        text: "Review the plan structure and conditions with a licensed advisor using the official documents.",
      },
      {
        step: "03",
        title: "Make an informed choice",
        text: "Decide only after the terms and your wider financial plan have been considered together.",
      },
    ],
    eligibility,
    journey: [
      {
        stage: "Stage 01",
        title: "Shared priorities",
        text: "The goals and responsibilities you are planning around are brought into focus.",
      },
      {
        stage: "Stage 02",
        title: "A considered decision",
        text: "The single contribution route and official documentation are reviewed with an advisor.",
      },
      {
        stage: "Stage 03",
        title: "Planning ahead",
        text: "The plan is considered alongside the household's evolving financial priorities.",
      },
      {
        stage: "Stage 04",
        title: "The documented outcome",
        text: "Benefits apply exactly as described in the official policy document. Plan details to be confirmed.",
      },
    ],
    faqs: [
      {
        q: "What is New Jeevan Sathi?",
        a: "It is a plan in the Assured Life Single Premium Plans collection. Its full structure is set out in the official policy document.",
      },
      {
        q: "Does this page show benefit amounts or returns?",
        a: "No. Plan details to be confirmed by a licensed Assured Life advisor using the official documentation.",
      },
      {
        q: "Can we review it together with other plans?",
        a: "Yes. An advisor can help you compare plan structures using the official documentation.",
      },
      {
        q: "What should we consider before applying?",
        a: "Review the prospectus, benefit illustration, policy terms and your wider financial goals before making a decision.",
      },
    ],
  },
];

export function getSinglePremiumPlan(slug: string) {
  return singlePremiumPlans.find((plan) => plan.slug === slug);
}
