import umangImg from "@/assets/plan-jeevan-umang.jpg";
import utsavImg from "@/assets/plan-jeevan-utsav.jpg";
import utsavSpImg from "@/assets/plan-jeevan-utsav-sp.jpg";

export type WholeLifeFocus = "lifelong-cover" | "family-security" | "legacy" | "single-payment";

export type WholeLifePlan = {
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
  focus: WholeLifeFocus[];
  comparison: {
    planType: string;
    suitableFor: string;
    paymentStructure: string;
    policyTerm: string;
    keyFeature: string;
  };
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

const TBC = "Details to be confirmed";

const sharedConsiderations = [
  "Plan features, eligibility and terms are governed entirely by the official policy document.",
  "Review the prospectus and benefit illustration before making a decision.",
  "Consider your household's overall long-term financial goals, not a single product in isolation.",
  "Speak with a licensed Assured Life advisor if anything is unclear.",
];

const sharedEligibility: { label: string; value: string }[] = [
  { label: "Entry age", value: TBC },
  { label: "Maturity age", value: TBC },
  { label: "Policy term", value: TBC },
  { label: "Premium paying term", value: TBC },
  { label: "Minimum sum assured", value: TBC },
  { label: "Premium payment modes", value: TBC },
];

export const wholeLifeFocusAreas: { id: WholeLifeFocus; title: string; text: string }[] = [
  {
    id: "lifelong-cover",
    title: "Lifelong Cover",
    text: "Planning that is intended to stay in place across the long term.",
  },
  {
    id: "family-security",
    title: "Family Security",
    text: "Keeping the household's stability at the centre of the decision.",
  },
  {
    id: "legacy",
    title: "Legacy & Continuity",
    text: "Thinking beyond one generation to what is carried forward.",
  },
  {
    id: "single-payment",
    title: "One-Time Contribution",
    text: "A single contribution rather than a recurring commitment.",
  },
];

export const wholeLifePlans: WholeLifePlan[] = [
  {
    slug: "jeevan-umang",
    planNumber: "745",
    name: "Jeevan Umang",
    category: "WholeLife Plans",
    tagline: "A long view, held steadily across the years.",
    purpose: "Long-term family security with a whole life orientation.",
    benefitArea: "Lifelong protection and long-term planning",
    short:
      "A whole life plan often discussed by households that want their planning to stay in place across decades.",
    intro:
      "Jeevan Umang is a plan within the WholeLife Plans category, generally considered by families whose planning horizon extends across their whole working life and beyond it.",
    image: umangImg,
    imageAlt:
      "An elderly Indian couple sitting on a veranda swing with their adult daughter beside them",
    focus: ["lifelong-cover", "family-security", "legacy"],
    comparison: {
      planType: "Whole life",
      suitableFor: "Households planning across the whole of life",
      paymentStructure: "Regular premium",
      policyTerm: TBC,
      keyFeature: "Whole life orientation with a long planning horizon",
    },
    about: [
      "Jeevan Umang sits within the WholeLife Plans category and is typically introduced to households that prefer their planning to run across decades rather than a fixed short horizon.",
      "The exact structure, options, benefits and conditions of the plan are set out in the official policy document, which should be read in full before any decision is made.",
      "Plan details to be confirmed. Figures are not shown here and are confirmed by a licensed Assured Life advisor.",
    ],
    whyConsider: [
      {
        title: "A whole-life horizon",
        text: "The plan is discussed in the context of planning that is intended to remain relevant well beyond a single life stage.",
      },
      {
        title: "Household stability",
        text: "Conversations usually centre on the household's steadiness rather than on short-term outcomes.",
      },
      {
        title: "Structured contributions",
        text: "A regular premium approach that fits families comfortable with a predictable commitment.",
      },
      {
        title: "Documented terms",
        text: "Every benefit and condition is read directly from the official policy document with an advisor.",
      },
    ],
    benefits: [
      "Positioned within the WholeLife Plans category",
      "Oriented toward long-term family security",
      "Regular premium payment approach",
      "Benefit structure as described in the official policy document",
      "Explained by a licensed advisor before application",
      "Reviewed alongside your wider financial picture",
    ],
    features: [
      "Whole life plan structure",
      "Long planning horizon",
      "Regular premium contributions",
      "Options and riders as specified in the policy document",
    ],
    whoMayConsider: [
      "Households planning across the whole of life rather than a fixed term",
      "Families who want continuity of planning between generations",
      "Earners who prefer regular, predictable contributions",
      "Anyone reviewing long-term stability alongside existing cover",
    ],
    considerations: sharedConsiderations,
    howItWorks: [
      {
        step: "01",
        title: "Set the horizon",
        text: "Clarify how far ahead you want your planning to reach and who it should support.",
      },
      {
        step: "02",
        title: "Review the structure",
        text: "Go through the plan's documented structure and options with a licensed advisor.",
      },
      {
        step: "03",
        title: "Decide with clarity",
        text: "Proceed only once the terms in the policy document and your own goals are aligned.",
      },
    ],
    eligibility: sharedEligibility,
    journey: [
      {
        stage: "Stage 01",
        title: "The decision years",
        text: "The plan is discussed, documentation reviewed, and the contribution pattern agreed.",
      },
      {
        stage: "Stage 02",
        title: "The contributing years",
        text: "Contributions continue as set out in the policy document while the household plans around them.",
      },
      {
        stage: "Stage 03",
        title: "The long middle",
        text: "The planning stays in place while family priorities change shape over time.",
      },
      {
        stage: "Stage 04",
        title: "The later years",
        text: "Benefits apply exactly as described in the policy document. Details to be confirmed.",
      },
    ],
    faqs: [
      {
        q: "What kind of plan is Jeevan Umang?",
        a: "It is a plan within the WholeLife Plans category, discussed with households planning across a long horizon. The full structure is set out in the official policy document.",
      },
      {
        q: "Are premium amounts or returns shown here?",
        a: "No. Premiums, returns and maturity values are not shown on this page. Plan details to be confirmed by a licensed Assured Life advisor using the official documentation.",
      },
      {
        q: "How do I know whether it suits my household?",
        a: "Review the policy documentation and discuss your household's timelines, existing cover and goals with a licensed advisor.",
      },
      {
        q: "How is it different from a fixed-term plan?",
        a: "It is presented as a whole life plan rather than one built around a single end date. The applicable terms are defined in the policy document.",
      },
    ],
  },
  {
    slug: "jeevan-utsav",
    planNumber: "771",
    name: "Jeevan Utsav",
    category: "WholeLife Plans",
    tagline: "Planning that keeps pace with the moments that matter.",
    purpose: "Whole life planning framed around family milestones.",
    benefitArea: "Long-term security with milestone-aware planning",
    short:
      "A whole life plan frequently discussed by families who want their long-term planning to sit alongside life's milestones.",
    intro:
      "Jeevan Utsav is a plan within the WholeLife Plans category, often considered by families who think about the long term while remaining conscious of the milestones arriving along the way.",
    image: utsavImg,
    imageAlt: "An Indian family laughing together around a table at home with flowers and tea",
    focus: ["lifelong-cover", "family-security"],
    comparison: {
      planType: "Whole life",
      suitableFor: "Families planning long term while milestones continue",
      paymentStructure: "Regular premium",
      policyTerm: TBC,
      keyFeature: "Whole life structure with milestone-aware planning",
    },
    about: [
      "Jeevan Utsav sits within the WholeLife Plans category and is usually introduced to families who want a long-term plan that still acknowledges the milestones ahead of them.",
      "How the plan is structured, what options exist and which conditions apply are all described in the official policy document.",
      "Plan details to be confirmed. No figures, returns or policy conditions are stated on this page.",
    ],
    whyConsider: [
      {
        title: "Milestone-aware long view",
        text: "Discussed by families who want continuity without losing sight of the events along the way.",
      },
      {
        title: "One plan, many stages",
        text: "The conversation covers several life stages rather than a single point in the future.",
      },
      {
        title: "Regular contribution rhythm",
        text: "Suited to households that plan around a steady annual or periodic commitment.",
      },
      {
        title: "Read from the document",
        text: "Everything an advisor explains is grounded in the official policy documentation.",
      },
    ],
    benefits: [
      "Positioned within the WholeLife Plans category",
      "Long-term orientation with milestones in view",
      "Regular premium payment approach",
      "Benefit structure as set out in the policy document",
      "Suited to multi-stage family planning conversations",
      "Advisor-guided review before application",
    ],
    features: [
      "Whole life plan structure",
      "Milestone-aware planning discussion",
      "Regular premium contributions",
      "Options and riders as specified in the policy document",
    ],
    whoMayConsider: [
      "Families balancing long-term planning with nearer commitments",
      "Households with several life stages still ahead of them",
      "Earners comfortable with periodic contributions",
      "Anyone consolidating a long-term view of family security",
    ],
    considerations: sharedConsiderations,
    howItWorks: [
      {
        step: "01",
        title: "List the milestones",
        text: "Identify the moments your household is already planning around.",
      },
      {
        step: "02",
        title: "Place them on a long horizon",
        text: "Review with an advisor how a whole life structure sits alongside them.",
      },
      {
        step: "03",
        title: "Confirm the documentation",
        text: "Read the prospectus and benefit illustration in full before applying.",
      },
    ],
    eligibility: sharedEligibility,
    journey: [
      {
        stage: "Stage 01",
        title: "Framing the plan",
        text: "Goals, milestones and documentation are reviewed together with an advisor.",
      },
      {
        stage: "Stage 02",
        title: "Contribution years",
        text: "Contributions continue in the pattern set out in the policy document.",
      },
      {
        stage: "Stage 03",
        title: "Milestones arrive",
        text: "The household's planning continues while life events take their course.",
      },
      {
        stage: "Stage 04",
        title: "The long term",
        text: "Benefits apply as described in the policy document. Details to be confirmed.",
      },
    ],
    faqs: [
      {
        q: "How is Jeevan Utsav positioned?",
        a: "As a plan within the WholeLife Plans category discussed by families who want a long-term structure that acknowledges milestones along the way.",
      },
      {
        q: "Does this page state benefit amounts?",
        a: "No. Amounts, returns and conditions are not stated here. Plan details to be confirmed from the official documentation.",
      },
      {
        q: "Can it be reviewed alongside other plans?",
        a: "Yes. Advisors commonly compare it structurally with other Assured Life plans before any decision is made.",
      },
      {
        q: "What should I read before applying?",
        a: "The prospectus, benefit illustration and policy terms and conditions, together with the eligibility conditions confirmed by your advisor.",
      },
    ],
  },
  {
    slug: "jeevan-utsav-single-premium",
    planNumber: "883",
    name: "Jeevan Utsav — Single Premium",
    category: "WholeLife Plans",
    tagline: "One considered contribution, a lifelong horizon.",
    purpose: "Whole life planning through a single, one-time contribution.",
    benefitArea: "Lifelong planning without recurring premiums",
    short:
      "The single premium route within the WholeLife Plans category, for households that prefer a one-time contribution.",
    intro:
      "Jeevan Utsav Single Premium is a plan within the WholeLife Plans category, generally explored by households that would rather make a single contribution than commit to a recurring one.",
    image: utsavSpImg,
    imageAlt: "An Indian couple standing at a large apartment window holding coffee cups",
    focus: ["single-payment", "lifelong-cover", "legacy"],
    comparison: {
      planType: "Whole life — single premium",
      suitableFor: "Households preferring a one-time contribution",
      paymentStructure: "Single premium",
      policyTerm: TBC,
      keyFeature: "One contribution, long planning horizon",
    },
    about: [
      "Jeevan Utsav Single Premium sits within the WholeLife Plans category and is typically discussed with households that have a lump sum available and prefer to settle the contribution once.",
      "The structure, options and applicable conditions are described in the official policy document and confirmed by a licensed advisor.",
      "Plan details to be confirmed. No premium, return or eligibility figures are stated on this page.",
    ],
    whyConsider: [
      {
        title: "A single decision",
        text: "One contribution rather than a recurring commitment across many years.",
      },
      {
        title: "Simplicity over time",
        text: "Nothing further to schedule once the plan is in force, as described in the policy document.",
      },
      {
        title: "Long horizon retained",
        text: "The whole life orientation of the category is retained despite the one-time payment.",
      },
      {
        title: "Suited to lump sums",
        text: "Commonly discussed when a household already has an amount set aside for long-term planning.",
      },
    ],
    benefits: [
      "Positioned within the WholeLife Plans category",
      "Single premium contribution approach",
      "No recurring premium schedule to manage",
      "Long-term orientation retained",
      "Benefit structure as set out in the policy document",
      "Reviewed with a licensed advisor before application",
    ],
    features: [
      "Whole life plan structure",
      "One-time contribution",
      "Suited to lump sum planning",
      "Options and riders as specified in the policy document",
    ],
    whoMayConsider: [
      "Households with a lump sum already set aside",
      "Those who prefer not to manage recurring premiums",
      "Families consolidating long-term planning into one decision",
      "Anyone comparing single premium and regular premium routes",
    ],
    considerations: sharedConsiderations,
    howItWorks: [
      {
        step: "01",
        title: "Confirm the lump sum route",
        text: "Discuss whether a single contribution suits your household's circumstances.",
      },
      {
        step: "02",
        title: "Understand the structure",
        text: "Review the documented benefits and conditions with a licensed advisor.",
      },
      {
        step: "03",
        title: "Complete once",
        text: "Apply after the terms are fully understood; there is no recurring schedule to set.",
      },
    ],
    eligibility: sharedEligibility,
    journey: [
      {
        stage: "Stage 01",
        title: "The single decision",
        text: "Documentation is reviewed and the one-time contribution route is confirmed.",
      },
      {
        stage: "Stage 02",
        title: "Plan in force",
        text: "The plan continues as described in the policy document with nothing further to schedule.",
      },
      {
        stage: "Stage 03",
        title: "The long middle",
        text: "Household priorities evolve while the planning remains in place.",
      },
      {
        stage: "Stage 04",
        title: "The later years",
        text: "Benefits apply exactly as documented. Details to be confirmed.",
      },
    ],
    faqs: [
      {
        q: "What does single premium mean here?",
        a: "It refers to a one-time contribution rather than a recurring one. The exact payment conditions are set out in the official policy document.",
      },
      {
        q: "Is the amount of the single premium shown?",
        a: "No. Plan details to be confirmed. A licensed advisor will confirm amounts and conditions from the official documentation.",
      },
      {
        q: "How does it differ from Jeevan Utsav?",
        a: "The two are presented separately here because of the payment structure. Structural differences are summarised in the comparison on the WholeLife Plans page.",
      },
      {
        q: "Can I compare it with a regular premium plan?",
        a: "Yes. An advisor can walk you through both routes side by side using the official documentation.",
      },
    ],
  },
];

export function getWholeLifePlan(slug: string) {
  return wholeLifePlans.find((p) => p.slug === slug);
}
