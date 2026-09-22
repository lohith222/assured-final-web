import { useInView } from "@/components/site/sections";

const stages = [
  { title: "Early Years", text: "The longest runway, and the calmest time to start thinking ahead." },
  { title: "School Years", text: "Routine costs settle in and priorities become clearer." },
  { title: "Higher Education", text: "Often the most demanding stage of a family's planning." },
  { title: "Early Career", text: "Independence begins, and support gradually changes shape." },
  { title: "Future Goals", text: "The longer ambitions a family keeps in view throughout." },
];

export function PlanTimeline() {
  const { ref, inView } = useInView<HTMLOListElement>();

  return (
    <ol ref={ref} className="relative mt-14 grid gap-10 lg:grid-cols-5 lg:gap-6">
      <span
        aria-hidden="true"
        className="absolute left-[7px] top-2 w-px bg-border lg:left-0 lg:top-[7px] lg:h-px lg:w-full"
      />
      <span
        aria-hidden="true"
        className={`absolute left-[7px] top-2 w-px origin-top bg-gold transition-transform duration-[1400ms] ease-out lg:left-0 lg:top-[7px] lg:h-px lg:w-full lg:origin-left ${
          inView ? "scale-y-100 lg:scale-x-100" : "scale-y-0 lg:scale-x-0"
        }`}
        style={{ height: "100%" }}
      />
      {stages.map((stage, i) => (
        <li
          key={stage.title}
          className={`relative pl-9 transition-all duration-700 ease-out lg:pl-0 lg:pt-9 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: `${200 + i * 140}ms` }}
        >
          <span
            aria-hidden="true"
            className="absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-gold bg-background lg:top-0"
          />
          <p className="text-[0.68rem] font-bold tracking-[0.16em] text-navy-soft uppercase">
            Stage {String(i + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-lg font-semibold">{stage.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.text}</p>
        </li>
      ))}
    </ol>
  );
}
