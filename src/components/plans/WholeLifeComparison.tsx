import { wholeLifePlans, type WholeLifePlan } from "@/lib/whole-life-plans";

const rows: { label: string; get: (p: WholeLifePlan) => string }[] = [
  { label: "Category", get: (p) => p.category },
  { label: "Plan type", get: (p) => p.comparison.planType },
  { label: "Suitable for", get: (p) => p.comparison.suitableFor },
  { label: "Payment structure", get: (p) => p.comparison.paymentStructure },
  { label: "Policy term", get: (p) => p.comparison.policyTerm },
  { label: "Key feature", get: (p) => p.comparison.keyFeature },
];

export function WholeLifeComparison() {
  return (
    <>
      {/* Desktop / tablet table */}
      <div className="mt-12 hidden overflow-x-auto rounded-xl border bg-card shadow-card md:block">
        <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
          <caption className="sr-only">Comparison of Assured Life WholeLife plans</caption>
          <thead>
            <tr className="bg-surface-strong">
              <th
                scope="col"
                className="w-44 p-5 text-xs tracking-[0.14em] uppercase text-navy-soft"
              >
                Plan
              </th>
              {wholeLifePlans.map((p) => (
                <th key={p.slug} scope="col" className="p-5 align-bottom">
                  <span className="block text-[0.68rem] font-bold tracking-[0.16em] text-navy-soft uppercase">
                    Plan {p.planNumber}
                  </span>
                  <span className="mt-1 block font-display text-base font-semibold text-foreground">
                    {p.name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t">
                <th scope="row" className="p-5 align-top text-sm font-semibold text-foreground">
                  {row.label}
                </th>
                {wholeLifePlans.map((p) => (
                  <td key={p.slug} className="p-5 align-top text-muted-foreground">
                    {row.get(p)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="mt-10 grid gap-5 md:hidden">
        {wholeLifePlans.map((p) => (
          <div key={p.slug} className="rounded-xl border bg-card p-5 shadow-card">
            <p className="text-[0.68rem] font-bold tracking-[0.16em] text-navy-soft uppercase">
              Plan {p.planNumber}
            </p>
            <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
            <dl className="mt-4 divide-y">
              {rows.map((row) => (
                <div key={row.label} className="flex justify-between gap-6 py-2.5">
                  <dt className="text-sm font-medium text-foreground">{row.label}</dt>
                  <dd className="text-right text-sm text-muted-foreground">{row.get(p)}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </>
  );
}
