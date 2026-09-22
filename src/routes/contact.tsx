import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, ExternalLink, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Section } from "@/components/site/sections";
import { contactDetails } from "@/lib/insurance";
import { submitToWeb3Forms } from "@/lib/web3forms";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(2, "Add a short subject").max(120),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

type FormValues = z.infer<typeof schema>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Assured Life | Talk to an Advisor" },
      {
        name: "description",
        content: "Contact Assured Life by phone or email for help with insurance plans.",
      },
      { property: "og:title", content: "Contact Assured Life | Talk to an Advisor" },
      {
        property: "og:description",
        content: "Get in touch with Assured Life about insurance plans and coverage.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);
    const result = await submitToWeb3Forms(
      {
        Name: values.name,
        Email: values.email,
        Subject: values.subject,
        Message: values.message,
      },
      `Contact form: ${values.subject}`,
    );
    if (result.ok) {
      setSent(true);
      reset();
    } else {
      setSubmitError(result.message);
    }
  });

  const err = (message?: string) =>
    message ? (
      <p role="alert" className="mt-1.5 text-xs text-destructive">
        {message}
      </p>
    ) : null;

  return (
    <>
      <section className="bg-surface">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-2xl rise">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl">
              Let's Talk About Your Protection
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Contact us by phone or email for help with insurance plans and coverage.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-8">
            <div id="help">
              <h2 className="text-lg font-semibold">Help Center</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-navy" aria-hidden="true" />
                  <a href="tel:+918688959939" className="hover:text-navy">
                    {contactDetails.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-navy" aria-hidden="true" />
                  <a href="mailto:hello@theassuredlife.com" className="hover:text-navy">
                    {contactDetails.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="rounded-lg border bg-card p-10 text-center shadow-card">
                <CheckCircle2 className="mx-auto size-10 text-gold" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-semibold">Message received</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Thank you for getting in touch. We will reply within one business day.
                </p>
                <Button className="mt-7" variant="outline" onClick={() => setSent(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="grid gap-5 rounded-lg border bg-card p-7 shadow-card sm:grid-cols-2"
              >
                <div className="sm:col-span-2">
                  <h2 className="text-lg font-semibold">Send us a message</h2>
                </div>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" className="mt-2" autoComplete="name" {...register("name")} />
                  {err(errors.name?.message)}
                </div>
                <div>
                  <Label htmlFor="cemail">Email</Label>
                  <Input
                    id="cemail"
                    type="email"
                    className="mt-2"
                    autoComplete="email"
                    {...register("email")}
                  />
                  {err(errors.email?.message)}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" className="mt-2" {...register("subject")} />
                  {err(errors.subject?.message)}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="cmessage">Message</Label>
                  <Textarea id="cmessage" rows={6} className="mt-2" {...register("message")} />
                  {err(errors.message?.message)}
                </div>
                <div className="sm:col-span-2">
                  {submitError && (
                    <p role="alert" className="mb-3 text-sm text-destructive">
                      {submitError}
                    </p>
                  )}
                  <Button type="submit" variant="gold" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>

      <Section tone="surface" id="location">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Location</p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              Visit Assured Life
            </h2>
            <p className="mt-4 flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 size-5 shrink-0 text-navy" aria-hidden="true" />
              <span>5H32+VXC, Madappanahalli, Karnataka</span>
            </p>
          </div>

          <div>
            <div className="overflow-hidden rounded-lg border bg-card shadow-card">
              <iframe
                title="Assured Life location in Madappanahalli, Karnataka"
                src="https://www.google.com/maps?q=5H32%2BVXC%2C%20Madappanahalli%2C%20Karnataka&output=embed"
                className="h-[320px] w-full border-0 sm:h-[380px]"
                loading="lazy"
              />
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=5H32%2BVXC%20Madappanahalli%2C%20Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions <Navigation className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=5H32%2BVXC%20Madappanahalli%2C%20Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface" id="privacy">
        <p className="text-xs text-muted-foreground" id="terms">
          Assured Life is a licensed insurance provider. Policy terms, conditions and exclusions
          apply and are set out in full in each policy document. Details on this site are for general
          information and do not constitute a contract of insurance.
        </p>
      </Section>
    </>
  );
}
