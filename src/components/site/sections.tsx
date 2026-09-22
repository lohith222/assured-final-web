import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  onDark = false,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  onDark?: boolean;
  compact?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className={onDark ? "eyebrow text-gold" : "eyebrow"}>{eyebrow}</p>
      ) : null}
      <h2
        className={`mt-3 ${compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"} leading-tight font-semibold text-balance ${
          onDark ? "text-primary-foreground" : ""
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-4 ${compact ? "text-sm" : "text-base"} leading-relaxed ${
            onDark ? "text-primary-foreground/75" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function Section({
  children,
  tone = "default",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "default" | "surface" | "navy";
  className?: string;
  id?: string;
}) {
  const toneClass =
    tone === "surface" ? "bg-surface" : tone === "navy" ? "bg-navy-deep" : "bg-background";
  return (
    <section id={id} className={`${toneClass} py-20 sm:py-24 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export type FaqItem = { q: string; a: string };

export function Faq({ items, title = "Frequently asked questions" }: { items: FaqItem[]; title?: string }) {
  return (
    <Section tone="surface" id="faq">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="Answers" title={title} />
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

export function QuoteCta({
  title = "Protect What Matters Most",
  text = "Your future deserves a stronger foundation.",
  compact = false,
}: {
  title?: string;
  text?: string;
  compact?: boolean;
}) {
  return (
    <section className={`bg-navy ${compact ? "py-12 sm:py-14" : "py-20 sm:py-24"}`}>
      <div className="container-page flex flex-col items-center text-center">
        <h2 className={`max-w-2xl leading-tight font-semibold text-balance text-primary-foreground ${compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"}`}>
          {title}
        </h2>
        <p className={`mt-4 max-w-xl text-primary-foreground/75 ${compact ? "text-sm" : "text-base"}`}>{text}</p>
        <div className={`${compact ? "mt-6" : "mt-8"} flex flex-col gap-3 sm:flex-row`}>
          <Button asChild variant="gold" size="lg">
            <Link to="/get-a-quote">Get a Quote</Link>
          </Button>
          <Button asChild variant="outlineOnDark" size="lg">
            <Link to="/contact">Talk to an Advisor</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
