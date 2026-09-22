
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Section,
  SectionHeading,
} from "@/components/site/sections";

import { allFinancialPlans } from "@/lib/financial-plans";
import { childrenPlans } from "@/lib/children-plans";
import { wholeLifePlans } from "@/lib/whole-life-plans";
import { singlePremiumPlans } from "@/lib/single-premium-plans";
import { submitToWeb3Forms } from "@/lib/web3forms";

const quoteOptions = [
  { slug: "health-insurance", name: "Health Insurance" },
  { slug: "travel-insurance", name: "Travel Insurance" },
  ...childrenPlans,
  ...wholeLifePlans,
  ...singlePremiumPlans,
];

const schema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(100),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(255),

  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(
      /^[+\d][\d\s()-]*$/,
      "Use digits, spaces and + only",
    ),

  insuranceType: z
    .string()
    .min(1, "Select an insurance type"),

  age: z.coerce
    .number({
      invalid_type_error: "Enter your age",
    })
    .int()
    .min(18, "Must be 18 or older")
    .max(100),

  city: z
    .string()
    .trim()
    .min(2, "Enter your city")
    .max(80),

  coverage: z
    .string()
    .trim()
    .min(2, "Tell us the coverage you need")
    .max(120),

  message: z
    .string()
    .trim()
    .max(1000)
    .optional(),
});

type FormValues = z.input<typeof schema>;

export const Route = createFileRoute("/get-a-quote")({
  validateSearch: z.object({
    plan: z.string().optional(),
  }),

  head: () => ({
    meta: [
      {
        title: "Get an Insurance Quote | Assured Life",
      },
      {
        name: "description",
        content:
          "Request a personalised insurance quote from Assured Life. Tell us about your cover needs and an advisor responds within one business day.",
      },
      {
        property: "og:title",
        content: "Get an Insurance Quote | Assured Life",
      },
      {
        property: "og:description",
        content:
          "Share a few details and a licensed advisor will prepare your quote.",
      },
    ],
  }),

  component: GetAQuote,
});

function GetAQuote() {
  const { plan: selectedPlan } = Route.useSearch();

  const [submitted, setSubmitted] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),

    defaultValues: {
      insuranceType: selectedPlan ?? "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);

    const result = await submitToWeb3Forms(
      {
        "Full Name": values.fullName,
        Email: values.email,
        Phone: values.phone,
        "Insurance Type": values.insuranceType,
        Age: String(values.age),
        City: values.city,
        "Coverage Requirement": values.coverage,
        Message: values.message || "—",
      },

      `Quote request: ${values.insuranceType}`,
    );

    if (result.ok) {
      setSubmitted(values.fullName);

      reset();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      setSubmitError(result.message);
    }
  });

  const err = (message?: string) => {
    if (!message) return null;

    return (
      <p
        role="alert"
        className="mt-1.5 text-xs text-destructive"
      >
        {message}
      </p>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy-deep">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-2xl rise">
            <p className="eyebrow text-gold">
              Get a Quote
            </p>

            <h1 className="mt-4 text-4xl leading-[1.08] font-semibold text-balance text-primary-foreground sm:text-5xl">
              A quote built on your details, not an average.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-primary-foreground/80">
              Share a few specifics and a licensed advisor will
              come back within one business day with options and
              honest guidance on what you do — and don't — need.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <Section>
        {submitted ? (
          <div className="mx-auto max-w-xl rounded-lg border bg-card p-10 text-center shadow-card">
            <CheckCircle2
              className="mx-auto size-10 text-gold"
              aria-hidden="true"
            />

            <h2 className="mt-5 text-2xl font-semibold">
              Thank you, {submitted}.
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Your request has been received. A licensed Assured
              Life advisor will contact you within one business
              day. Your reference number is{" "}
              <span className="font-semibold text-foreground">
                AL-{Date.now().toString().slice(-6)}
              </span>
              .
            </p>

            <Button
              className="mt-7"
              variant="outline"
              onClick={() => setSubmitted(null)}
            >
              Submit another request
            </Button>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionHeading
              eyebrow="Request"
              title="Tell us what you need protected"
              intro="All fields except the message are required. We never share your details with third parties."
            />

            <form
              onSubmit={onSubmit}
              noValidate
              className="grid gap-5 sm:grid-cols-2"
            >
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName">
                  Full Name
                </Label>

                <Input
                  id="fullName"
                  className="mt-2"
                  autoComplete="name"
                  {...register("fullName")}
                />

                {err(errors.fullName?.message)}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">
                  Email
                </Label>

                <Input
                  id="email"
                  type="email"
                  className="mt-2"
                  autoComplete="email"
                  {...register("email")}
                />

                {err(errors.email?.message)}
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone">
                  Phone Number
                </Label>

                <Input
                  id="phone"
                  type="tel"
                  className="mt-2"
                  autoComplete="tel"
                  {...register("phone")}
                />

                {err(errors.phone?.message)}
              </div>

              {/* Insurance Type */}
              <div>
                <Label htmlFor="insuranceType">
                  Insurance Type
                </Label>

                <select
                  id="insuranceType"
                  className="mt-2 h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                  defaultValue=""
                  {...register("insuranceType")}
                >
                  <option value="" disabled>
                    Select a product
                  </option>

                  {[
                    ...quoteOptions,
                    ...allFinancialPlans,
                  ].map((plan) => (
                    <option
                      key={plan.slug}
                      value={plan.name}
                    >
                      {plan.name}
                    </option>
                  ))}
                </select>

                {err(errors.insuranceType?.message)}
              </div>

              {/* Age */}
              <div>
                <Label htmlFor="age">
                  Age
                </Label>

                <Input
                  id="age"
                  type="number"
                  min={18}
                  max={100}
                  className="mt-2"
                  {...register("age")}
                />

                {err(errors.age?.message)}
              </div>

              {/* City */}
              <div>
                <Label htmlFor="city">
                  City
                </Label>

                <Input
                  id="city"
                  className="mt-2"
                  autoComplete="address-level2"
                  {...register("city")}
                />

                {err(errors.city?.message)}
              </div>

              {/* Coverage */}
              <div className="sm:col-span-2">
                <Label htmlFor="coverage">
                  Coverage Requirement
                </Label>

                <Input
                  id="coverage"
                  className="mt-2"
                  placeholder="e.g. $500,000 term life over 20 years"
                  {...register("coverage")}
                />

                {err(errors.coverage?.message)}
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <Label htmlFor="message">
                  Message (optional)
                </Label>

                <Textarea
                  id="message"
                  rows={5}
                  className="mt-2"
                  {...register("message")}
                />

                {err(errors.message?.message)}
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                {submitError && (
                  <p
                    role="alert"
                    className="mb-3 text-sm text-destructive"
                  >
                    {submitError}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Sending…"
                    : "Request a Quote"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </Section>
    </>
  );
}