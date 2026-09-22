import moneybackImg from "@/assets/plan-moneyback.jpg";
import jeevanTarunImg from "@/assets/plan-jeevan-tarun.jpg";
import amritBaalImg from "@/assets/plan-amrit-baal.jpg";
import amritBaalSpImg from "@/assets/plan-amrit-baal-sp.jpg";

export type PlanFocus = "education" | "long-term" | "family-planning" | "milestones";

export type ChildrenPlan = {
  slug: string;
  planNumber: string;
  name: string;
  category: string;
  tagline: string;
  short: string;
  intro: string;
  image: string;
  imageAlt: string;
  focus: PlanFocus[];
  comparison: {
    planType: string;
    suitableFor: string;
    paymentStructure: string;
    policyTerm: string;
    keyFeature: string;
  };
  about: string[];
  features: string[];
  whoMayConsider: string[];
  considerations: string[];
  howItWorks: { step: string; title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

const TBC = "Details to be confirmed";

const sharedConsiderations = [
  "Plan features, eligibility and terms are governed entirely by the official policy document.",
  "Review the prospectus and benefit illustration before making a decision.",
  "Consider your family's overall financial goals, not a single product in isolation.",
  "Speak with a licensed Assured Life advisor if anything is unclear.",
];

export const childrenPlans: ChildrenPlan[] = [
  {
    slug: "new-children-moneyback",
    planNumber: "732",
    name: "New Children MoneyBack",
    category: "Children Plans",
    tagline: "Planning aligned to milestones along the way.",
    short:
      "A children's plan structured around periodic milestones rather than a single end point.",
    intro:
      "New Children MoneyBack is a children's plan often considered by families who prefer their planning to align with milestones that arrive during a child's growing years.",
    image: moneybackImg,
    imageAlt: "Indian parents walking hand in hand with their young daughter in a sunlit park",
    focus: ["milestones", "family-planning"],
    comparison: {
      planType: "Money back",
      suitableFor: "Families planning around periodic milestones",
      paymentStructure: "Regular premium",
      policyTerm: TBC,
      keyFeature: "Structured around staged milestones",
    },
    about: [
      "This plan sits within the Children Plans category and is generally discussed with families who want a structured, milestone-oriented approach to planning for a child.",
      "The precise structure, terms and conditions are set out in the official policy document, which should be reviewed in full before any decision is made.",
    ],
    features: [
      "Positioned within the Children Plans category",
      "Money-back style structure",
      "Regular premium payment approach",
      "Discussed and explained by a licensed advisor before application",
    ],
    whoMayConsider: [
      "Parents who prefer planning around staged milestones",
      "Families beginning to plan early in a child's life",
      "Households that prefer regular, predictable contributions",
    ],
    considerations: sharedConsiderations,
    howItWorks: [
      {
        step: "01",
        title: "Understand the structure",
        text: "Review how the plan is designed and what the policy document sets out.",
      },
      {
        step: "02",
        title: "Discuss with an advisor",
        text: "Talk through your family's goals and timelines with a licensed advisor.",
      },
      {
        step: "03",
        title: "Review the documentation",
        text: "Read the prospectus and benefit illustration carefully before applying.",
      },
    ],
    faqs: [
      {
        q: "What kind of plan is New Children MoneyBack?",
        a: "It is a plan within the Children Plans category with a money-back style structure. Full details are set out in the official policy document.",
      },
      {
        q: "How do I know if it suits my family?",
        a: "The most reliable way is to review the policy documentation and discuss your specific goals and timelines with a licensed Assured Life advisor.",
      },
    ],
  },
  {
    slug: "jeevan-tarun",
    planNumber: "734",
    name: "Jeevan Tarun",
    category: "Children Plans",
    tagline: "Planning that follows a child toward higher education.",
    short:
      "A children's plan frequently discussed by families planning around education and early adulthood.",
    intro:
      "Jeevan Tarun is a children's plan commonly considered by families whose planning horizon centres on schooling, higher education and the years that follow.",
    image: jeevanTarunImg,
    imageAlt: "An Indian student in school uniform studying at a desk beside a bright window",
    focus: ["education", "long-term"],
    comparison: {
      planType: "Children's endowment style",
      suitableFor: "Families planning around education years",
      paymentStructure: "Regular premium",
      policyTerm: TBC,
      keyFeature: "Oriented toward the education stage",
    },
    about: [
      "Jeevan Tarun sits within the Children Plans category and is generally introduced to families planning across the education years.",
      "All benefits, options and conditions are governed by the official policy document, which should be reviewed before applying.",
    ],
    features: [
      "Positioned within the Children Plans category",
      "Commonly discussed for education-stage planning",
      "Regular premium payment approach",
      "Advisor-guided explanation before application",
    ],
    whoMayConsider: [
      "Parents planning ahead for schooling and higher education",
      "Families who want a longer planning horizon",
      "Households that prefer a structured annual commitment",
    ],
    considerations: sharedConsiderations,
    howItWorks: [
      {
        step: "01",
        title: "Map the education horizon",
        text: "Identify the years that matter most in your child's education journey.",
      },
      {
        step: "02",
        title: "Review the plan structure",
        text: "Go through the official documentation with a licensed advisor.",
      },
      {
        step: "03",
        title: "Decide with clarity",
        text: "Proceed only once the terms and your own goals are fully understood.",
      },
    ],
    faqs: [
      {
        q: "Is Jeevan Tarun only for education planning?",
        a: "It is often discussed in the context of education-stage planning, but suitability depends on your family's circumstances and the terms in the policy document.",
      },
      {
        q: "Where can I see the exact terms?",
        a: "The official policy document and benefit illustration set out the exact terms. An advisor can walk you through them.",
      },
    ],
  },
  {
    slug: "amrit-baal",
    planNumber: "774",
    name: "Amrit Baal",
    category: "Children Plans",
    tagline: "A considered start for the youngest members of the family.",
    short: "A children's plan often explored by families beginning to plan in a child's early years.",
    intro:
      "Amrit Baal is a children's plan that families frequently explore when they want to begin planning early in a child's life.",
    image: amritBaalImg,
    imageAlt: "A joyful young Indian girl running toward her grandparents in a bright home courtyard",
    focus: ["long-term", "family-planning"],
    comparison: {
      planType: "Children's plan",
      suitableFor: "Families beginning to plan in the early years",
      paymentStructure: "Regular premium",
      policyTerm: TBC,
      keyFeature: "Early-start planning approach",
    },
    about: [
      "Amrit Baal sits within the Children Plans category and is typically discussed with families who prefer to start planning early.",
      "The applicable terms, eligibility and options are described in the official policy document.",
    ],
    features: [
      "Positioned within the Children Plans category",
      "Suited to conversations about early-stage planning",
      "Regular premium payment approach",
      "Reviewed with a licensed advisor before application",
    ],
    whoMayConsider: [
      "Parents of young children starting to plan",
      "Families who value a long planning runway",
      "Households comfortable with periodic contributions",
    ],
    considerations: sharedConsiderations,
    howItWorks: [
      {
        step: "01",
        title: "Start the conversation early",
        text: "Discuss what you would like to prepare for and by when.",
      },
      {
        step: "02",
        title: "Understand the plan",
        text: "Review the official documentation in detail with an advisor.",
      },
      {
        step: "03",
        title: "Apply with confidence",
        text: "Proceed once the structure and your expectations are aligned.",
      },
    ],
    faqs: [
      {
        q: "Why is Amrit Baal listed twice?",
        a: "Amrit Baal is available in a regular premium version and a single premium version. Both share a plan number but are presented separately here for clarity.",
      },
      {
        q: "How early can planning begin?",
        a: "Eligibility conditions are defined in the official policy document. An advisor can confirm what applies to your family.",
      },
    ],
  },
  {
    slug: "amrit-baal-single-premium",
    planNumber: "774",
    name: "Amrit Baal — Single Premium",
    category: "Children Plans",
    tagline: "One considered contribution, a long planning horizon.",
    short:
      "The single premium version of Amrit Baal, for families who prefer a one-time contribution.",
    intro:
      "Amrit Baal (Single Premium) is the single premium version of the plan, explored by families who prefer to make one considered contribution rather than recurring payments.",
    image: amritBaalSpImg,
    imageAlt: "An Indian couple reviewing financial documents together at their dining table",
    focus: ["family-planning", "long-term"],
    comparison: {
      planType: "Children's plan (single premium)",
      suitableFor: "Families who prefer a one-time contribution",
      paymentStructure: "Single premium",
      policyTerm: TBC,
      keyFeature: "One-time payment structure",
    },
    about: [
      "This is the single premium variant of Amrit Baal, within the Children Plans category.",
      "As with every plan, the official policy document is the definitive source for terms, eligibility and conditions.",
    ],
    features: [
      "Positioned within the Children Plans category",
      "Single premium payment structure",
      "Suited to one-time planning decisions",
      "Explained by a licensed advisor before application",
    ],
    whoMayConsider: [
      "Families who prefer a single, one-time contribution",
      "Households planning after a one-off financial event",
      "Parents who want to avoid recurring payment commitments",
    ],
    considerations: sharedConsiderations,
    howItWorks: [
      {
        step: "01",
        title: "Assess the approach",
        text: "Consider whether a one-time contribution fits your circumstances.",
      },
      {
        step: "02",
        title: "Review with an advisor",
        text: "Work through the official documentation together.",
      },
      {
        step: "03",
        title: "Complete the application",
        text: "Proceed once you are satisfied with the structure and terms.",
      },
    ],
    faqs: [
      {
        q: "How does this differ from Amrit Baal?",
        a: "The difference presented here is the payment structure: this version uses a single premium rather than regular premiums. The policy document sets out all other differences.",
      },
      {
        q: "Can I switch between versions later?",
        a: "Any such option would be defined in the official policy document. Please confirm with a licensed advisor.",
      },
    ],
  },
];

export const planFocusAreas: { id: PlanFocus; title: string; text: string }[] = [
  {
    id: "education",
    title: "Education",
    text: "Planning around schooling and higher education years.",
  },
  {
    id: "long-term",
    title: "Long-Term Future",
    text: "A longer horizon that stretches well past the school years.",
  },
  {
    id: "family-planning",
    title: "Family Financial Planning",
    text: "Fitting a child's plan into the household's wider approach.",
  },
  {
    id: "milestones",
    title: "Future Milestones",
    text: "Preparing for the staged moments that arrive along the way.",
  },
];

export function getChildrenPlan(slug: string) {
  return childrenPlans.find((p) => p.slug === slug);
}
