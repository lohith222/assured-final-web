import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, FileText, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/sections";

export const Route = createFileRoute("/claims")({
  head: () => ({ meta: [{ title: "Claims Support | Assured Life" }] }),
  component: ClaimsSupport,
});

function ClaimsSupport() {
  return (
    <div>
      <section className="bg-navy-deep py-20 sm:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-gold">Claims support</p>
          <h1 className="mt-4 text-5xl leading-tight font-semibold text-primary-foreground sm:text-6xl">
            A clearer next step when you need it.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
            We can help you understand the documents, timelines and information your claim may
            require. Start with a conversation and keep your policy schedule close at hand.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">
                Contact Support <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outlineOnDark" size="lg">
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Start here"
            title="Prepare for your claims conversation"
            intro="The exact process depends on your policy and the event. These simple steps can help you begin."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [
                FileText,
                "Find your policy",
                "Keep your policy number and schedule available so we can identify the right cover.",
              ],
              [
                CheckCircle2,
                "Gather details",
                "Note the date, place and nature of the event, along with relevant supporting documents.",
              ],
              [
                LifeBuoy,
                "Ask for guidance",
                "Reach out to Assured Life support for help understanding the next step.",
              ],
            ].map(([Icon, title, text]) => {
              const SupportIcon = Icon as typeof FileText;
              return (
                <article
                  key={title as string}
                  className="rounded-lg border bg-card p-6 shadow-card"
                >
                  <SupportIcon className="size-7 text-gold" aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-semibold">{title as string}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {text as string}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
