import img714NewEndowment from "@/assets/plans/714-new-endowment.jpg";
import img715NewJeevanAnand from "@/assets/plans/715-new-jeevan-anand.jpg";
import img720NewMoneyback20yrs from "@/assets/plans/720-new-moneyback-20yrs.jpg";
import img721NewMoneyback25yrs from "@/assets/plans/721-new-moneyback-25yrs.jpg";
import img733JeevanLakshya from "@/assets/plans/733-jeevan-lakshya.jpg";
import img736JeevanLabh from "@/assets/plans/736-jeevan-labh.jpg";
import img748BimaShree from "@/assets/plans/748-bima-shree.jpg";
import img749NiveshPlus from "@/assets/plans/749-nivesh-plus.jpg";
import img751MicroBachat from "@/assets/plans/751-micro-bachat.jpg";
import img752Siip from "@/assets/plans/752-siip.jpg";
import img758JeevanShanti from "@/assets/plans/758-jeevan-shanti.jpg";
import img760BimaJyoti from "@/assets/plans/760-bima-jyoti.jpg";
import img857JeevanAkshay from "@/assets/plans/857-jeevan-akshay.jpg";
import img873IndexPlus from "@/assets/plans/873-index-plus.jpg";
import img875YuvaTerm from "@/assets/plans/875-yuva-term.jpg";
import img879SmartPension from "@/assets/plans/879-smart-pension.jpg";
import img880JanSuraksha from "@/assets/plans/880-jan-suraksha.jpg";
import img881BimaLakshmi from "@/assets/plans/881-bima-lakshmi.jpg";
import img886ProtectionPlus from "@/assets/plans/886-protection-plus.jpg";
import img887BimaKavach from "@/assets/plans/887-bima-kavach.jpg";
import img888NewJeevanSathi from "@/assets/plans/888-new-jeevan-sathi.jpg";
import img889NewJeevanSathi from "@/assets/plans/889-new-jeevan-sathi.jpg";
import img912NavJeevanShree from "@/assets/plans/912-nav-jeevan-shree.jpg";
import img955NewJeevanAmar from "@/assets/plans/955-new-jeevan-amar.jpg";

export type FinancialPlan = {
  planNumber: string; name: string; slug: string; category: string; short: string; overview: string;
  image: string; imageAlt: string; highlights: string[]; audience: string[];
};

const common = ["Details to be updated", "Review the official plan documentation", "Discuss your needs with a licensed advisor"];

export const termPlans: FinancialPlan[] = [
  { planNumber: "955", name: "New Jeevan Amar", slug: "955-new-jeevan-amar", category: "Term Plans", short: "A protection-focused option for family financial planning.", overview: "New Jeevan Amar is part of the Term Plans collection, for people considering life protection within their wider financial planning.", image: img955NewJeevanAmar, imageAlt: "Indian family spending time together outdoors", highlights: common, audience: ["Families planning for financial responsibilities", "People building a long-term protection approach", "Anyone seeking advisor-led clarity"] },
  { planNumber: "875", name: "Yuva Term", slug: "875-yuva-term", category: "Term Plans", short: "A protection-focused option for an early financial journey.", overview: "Yuva Term is part of the Term Plans collection, for people exploring thoughtful protection planning as responsibilities grow.", image: img875YuvaTerm, imageAlt: "Young Indian couple planning their future together", highlights: common, audience: ["Young professionals beginning to plan ahead", "People considering future responsibilities", "Anyone seeking advisor-led clarity"] },
  { planNumber: "887", name: "Bima Kavach", slug: "887-bima-kavach", category: "Term Plans", short: "A plan in the term protection collection for financial preparedness.", overview: "Bima Kavach is part of the Term Plans collection, for people considering protection alongside family and financial goals.", image: img887BimaKavach, imageAlt: "Indian family sharing a relaxed moment at home", highlights: common, audience: ["Families reviewing their protection needs", "People planning for long-term goals", "Anyone seeking advisor-led clarity"] },
];

export const ulipPlans: FinancialPlan[] = [
  { planNumber: "873", name: "Index Plus", slug: "873-index-plus", category: "Mutual Funds / ULIP Plans", short: "A market-linked planning option for long-term financial conversations.", overview: "Index Plus is part of the Mutual Funds / ULIP Plans collection for people considering long-term financial planning options.", image: img873IndexPlus, imageAlt: "Indian professional considering long-term financial plans", highlights: common, audience: ["People planning around future goals", "Households exploring long-term options", "Anyone seeking advisor-led clarity"] },
  { planNumber: "886", name: "Protection Plus", slug: "886-protection-plus", category: "Mutual Funds / ULIP Plans", short: "A market-linked planning option for broader financial goals.", overview: "Protection Plus is part of the Mutual Funds / ULIP Plans collection for people exploring structured long-term planning.", image: img886ProtectionPlus, imageAlt: "Indian couple discussing plans together", highlights: common, audience: ["Couples considering shared goals", "People exploring long-term planning", "Anyone seeking advisor-led clarity"] },
  { planNumber: "752", name: "SIIP", slug: "752-siip", category: "Mutual Funds / ULIP Plans", short: "A market-linked planning option for future-focused conversations.", overview: "SIIP is part of the Mutual Funds / ULIP Plans collection for people considering their future financial goals.", image: img752Siip, imageAlt: "Indian professional planning for the future", highlights: common, audience: ["Professionals planning future goals", "People comparing planning options", "Anyone seeking advisor-led clarity"] },
  { planNumber: "749", name: "Nivesh Plus", slug: "749-nivesh-plus", category: "Mutual Funds / ULIP Plans", short: "A market-linked planning option for long-term financial planning.", overview: "Nivesh Plus is part of the Mutual Funds / ULIP Plans collection for people considering long-term financial goals.", image: img749NiveshPlus, imageAlt: "Indian family talking together about their future", highlights: common, audience: ["Families discussing long-term goals", "People seeking a structured approach", "Anyone seeking advisor-led clarity"] },
];

export const pensionPlans: FinancialPlan[] = [
  { planNumber: "758", name: "Jeevan Shanti", slug: "758-jeevan-shanti", category: "Pension Plans", short: "A pension-planning option for long-term financial conversations.", overview: "Jeevan Shanti is part of the Pension Plans collection for people considering how future income needs may fit within their financial planning.", image: img758JeevanShanti, imageAlt: "Indian family considering their long-term future", highlights: common, audience: ["People planning for future financial needs", "Families reviewing retirement planning", "Anyone seeking advisor-led clarity"] },
  { planNumber: "857", name: "Jeevan Akshay", slug: "857-jeevan-akshay", category: "Pension Plans", short: "A pension-planning option for future-focused financial planning.", overview: "Jeevan Akshay is part of the Pension Plans collection for people exploring longer-term financial planning options.", image: img857JeevanAkshay, imageAlt: "Indian couple discussing their future plans", highlights: common, audience: ["People reviewing retirement goals", "Families considering future planning", "Anyone seeking advisor-led clarity"] },
  { planNumber: "879", name: "Smart Pension", slug: "879-smart-pension", category: "Pension Plans", short: "A pension-planning option for a considered long-term approach.", overview: "Smart Pension is part of the Pension Plans collection for people considering a structured approach to future financial planning.", image: img879SmartPension, imageAlt: "Indian couple planning for the years ahead", highlights: common, audience: ["People planning ahead", "Households considering long-term priorities", "Anyone seeking advisor-led clarity"] },
];

export const mahilaPlans: FinancialPlan[] = [
  { planNumber: "881", name: "Bima Lakshmi", slug: "881-bima-lakshmi", category: "Mahila Plans", short: "A plan in the Mahila Plans collection for thoughtful financial planning.", overview: "Bima Lakshmi is part of the Mahila Plans collection for people considering their wider financial planning needs.", image: img881BimaLakshmi, imageAlt: "Indian woman planning confidently for her future", highlights: common, audience: ["Women considering long-term financial planning", "Families reviewing future priorities", "Anyone seeking advisor-led clarity"] },
];

export const microPlans: FinancialPlan[] = [
  { planNumber: "751", name: "Micro Bachat", slug: "751-micro-bachat", category: "Micro Plans", short: "A plan in the Micro Plans collection for accessible financial planning conversations.", overview: "Micro Bachat is part of the Micro Plans collection for people considering a structured financial planning approach.", image: img751MicroBachat, imageAlt: "Indian family reviewing their plans together", highlights: common, audience: ["People beginning to explore financial planning", "Families considering future priorities", "Anyone seeking advisor-led clarity"] },
  { planNumber: "880", name: "Jan Suraksha", slug: "880-jan-suraksha", category: "Micro Plans", short: "A plan in the Micro Plans collection for future-focused planning.", overview: "Jan Suraksha is part of the Micro Plans collection for people considering their broader financial planning needs.", image: img880JanSuraksha, imageAlt: "Indian family spending time together", highlights: common, audience: ["Families reviewing their needs", "People considering future planning", "Anyone seeking advisor-led clarity"] },
];

export const moneyBackPlans: FinancialPlan[] = [
  { planNumber: "720", name: "New MoneyBack (20yrs)", slug: "720-new-moneyback-20yrs", category: "MoneyBack Plans", short: "A money-back plan for a considered long-term planning conversation.", overview: "New MoneyBack (20yrs) is part of the MoneyBack Plans collection. Exact plan details are to be updated from official documentation.", image: img720NewMoneyback20yrs, imageAlt: "Indian family considering long-term plans", highlights: common, audience: ["Families considering structured planning", "People reviewing future goals", "Anyone seeking advisor-led clarity"] },
  { planNumber: "721", name: "New MoneyBack (25yrs)", slug: "721-new-moneyback-25yrs", category: "MoneyBack Plans", short: "A money-back plan for longer-term financial planning conversations.", overview: "New MoneyBack (25yrs) is part of the MoneyBack Plans collection. Exact plan details are to be updated from official documentation.", image: img721NewMoneyback25yrs, imageAlt: "Indian couple planning the years ahead", highlights: common, audience: ["Families planning across the long term", "People reviewing future goals", "Anyone seeking advisor-led clarity"] },
  { planNumber: "748", name: "Bima Shree", slug: "748-bima-shree", category: "MoneyBack Plans", short: "A plan in the MoneyBack Plans collection for thoughtful financial planning.", overview: "Bima Shree is part of the MoneyBack Plans collection. Exact plan details are to be updated from official documentation.", image: img748BimaShree, imageAlt: "Indian family discussing future goals", highlights: common, audience: ["Families considering financial planning", "People reviewing future priorities", "Anyone seeking advisor-led clarity"] },
];

export const endowmentPlans: FinancialPlan[] = [
  { planNumber: "714", name: "New Endowment", slug: "714-new-endowment", category: "Endowment Plans", short: "A plan in the Endowment Plans collection for long-term financial planning.", overview: "New Endowment is part of the Endowment Plans collection. Product details to be updated from official documentation.", image: img714NewEndowment, imageAlt: "Young Indian couple planning their financial future", highlights: common, audience: ["Working professionals", "Couples planning future goals", "Families considering long-term planning"] },
  { planNumber: "715", name: "New Jeevan Anand", slug: "715-new-jeevan-anand", category: "Endowment Plans", short: "A plan in the Endowment Plans collection for future-focused planning.", overview: "New Jeevan Anand is part of the Endowment Plans collection. Product details to be updated from official documentation.", image: img715NewJeevanAnand, imageAlt: "Indian family in a comfortable home setting", highlights: common, audience: ["Families", "Parents planning for future milestones", "Working professionals"] },
  { planNumber: "733", name: "Jeevan Lakshya", slug: "733-jeevan-lakshya", category: "Endowment Plans", short: "An endowment plan for considering important future milestones.", overview: "Jeevan Lakshya is part of the Endowment Plans collection. Product details to be updated from official documentation.", image: img733JeevanLakshya, imageAlt: "Indian family considering an important future milestone", highlights: common, audience: ["Families", "Parents", "People planning long-term goals"] },
  { planNumber: "736", name: "Jeevan Labh", slug: "736-jeevan-labh", category: "Endowment Plans", short: "An endowment plan for long-term financial planning conversations.", overview: "Jeevan Labh is part of the Endowment Plans collection. Product details to be updated from official documentation.", image: img736JeevanLabh, imageAlt: "Mature Indian couple discussing their financial plans", highlights: common, audience: ["Couples", "People planning for the future", "Families"] },
  { planNumber: "760", name: "Bima Jyoti", slug: "760-bima-jyoti", category: "Endowment Plans", short: "An endowment plan for a confident future-focused approach.", overview: "Bima Jyoti is part of the Endowment Plans collection. Product details to be updated from official documentation.", image: img760BimaJyoti, imageAlt: "Professional Indian family with a confident outlook", highlights: common, audience: ["Working professionals", "Families", "People planning future goals"] },
  { planNumber: "912", name: "Nav Jeevan Shree", slug: "912-nav-jeevan-shree", category: "Endowment Plans", short: "An endowment plan for established long-term financial planning.", overview: "Nav Jeevan Shree is part of the Endowment Plans collection. Product details to be updated from official documentation.", image: img912NavJeevanShree, imageAlt: "Established Indian family enjoying time together", highlights: common, audience: ["Established families", "Working professionals", "People reviewing future priorities"] },
  { planNumber: "888", name: "New Jeevan Sathi", slug: "888-new-jeevan-sathi", category: "Endowment Plans", short: "An endowment plan for couples considering their future together.", overview: "New Jeevan Sathi is part of the Endowment Plans collection. Product details to be updated from official documentation.", image: img888NewJeevanSathi, imageAlt: "Indian married couple planning their future together", highlights: common, audience: ["Couples", "Families", "People planning long-term goals"] },
  { planNumber: "889", name: "New Jeevan Sathi", slug: "889-new-jeevan-sathi", category: "Endowment Plans", short: "An endowment plan for thoughtful long-term financial planning.", overview: "New Jeevan Sathi is part of the Endowment Plans collection. Product details to be updated from official documentation.", image: img889NewJeevanSathi, imageAlt: "Indian couple considering a shared financial future", highlights: common, audience: ["Couples", "Working professionals", "People planning future priorities"] },
];

export const allFinancialPlans = [...termPlans, ...ulipPlans, ...pensionPlans, ...mahilaPlans, ...microPlans, ...moneyBackPlans, ...endowmentPlans];
export const getFinancialPlan = (collection: FinancialPlan[], slug: string) => collection.find((plan) => plan.slug === slug);
