import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { contactDetails } from "@/lib/insurance";
import { planNavItems } from "@/lib/nav";

import { BrandMark } from "./BrandMark";

const company = [
  { label: "About Us", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

const insuranceLeft = planNavItems.slice(0, 6);
const insuranceRight = planNavItems.slice(6);
const whatsappUrl =
  "https://wa.me/918688959939?text=Hi%20Assured%20Life%20%F0%9F%91%8B%0A%0AI%E2%80%99m%20interested%20in%20your%20insurance%20plans.%0AI%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20the%20available%20plans%2C%20coverage%20and%20pricing.%0A%0APlease%20assist%20me.%0A%0AThank%20you.";

export function Footer() {
  return (
    <footer className="mt-auto bg-navy-deep text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr_0.8fr]">
        <div>
          <div className="rounded-md bg-background px-3 py-2 inline-flex">
            <BrandMark className="text-foreground" />
          </div>

          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Protecting what matters today and tomorrow.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2.5">
              <Phone
                className="mt-0.5 size-4 shrink-0 text-gold"
                aria-hidden="true"
              />

              <a
                href={`tel:${contactDetails.phone.replace(/[^+\d]/g, "")}`}
                className="hover:text-gold"
              >
                {contactDetails.phone}
              </a>
            </li>

            <li className="flex items-start gap-2.5">
              <Mail
                className="mt-0.5 size-4 shrink-0 text-gold"
                aria-hidden="true"
              />

              <a
                href={`mailto:${contactDetails.email}`}
                className="hover:text-gold"
              >
                {contactDetails.email}
              </a>
            </li>

          </ul>
        </div>

        <nav aria-label="Plan categories, first group">
          <h2 className="text-sm font-semibold tracking-[0.14em] uppercase text-gold">
            Plans
          </h2>

          <ul className="mt-5 space-y-3 text-sm">
            {insuranceLeft.map((category) => (
              <li key={category.label}>
                <Link
                  to={category.to}
                  className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Plan categories, second group">
          <h2 className="text-sm font-semibold tracking-[0.14em] uppercase text-gold">
            Plans
          </h2>

          <ul className="mt-5 space-y-3 text-sm">
            {insuranceRight.map((category) => (
              <li key={category.label}>
                <Link
                  to={category.to}
                  className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-sm font-semibold tracking-[0.14em] uppercase text-gold">
            Company
          </h2>

          <ul className="mt-5 space-y-3 text-sm">
            {company.map((c) => (
              <li key={c.label}>
                <Link
                  to={c.to}
                  className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Support">
          <h2 className="text-sm font-semibold tracking-[0.14em] uppercase text-gold">
            Support
          </h2>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link
                to="/contact"
                hash="help"
                className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
              >
                Help Center
              </Link>
            </li>

            <li>
              <Link
                to="/claims"
                className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
              >
                Claims
              </Link>
            </li>

            <li>
              <Link
                to="/insurance/health"
                hash="faq"
                className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
              >
                FAQs
              </Link>
            </li>

            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-3 py-2 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold/90"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Chat with us on WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Assured Life Insurance. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              to="/contact"
              hash="privacy"
              className="hover:text-primary-foreground"
            >
              Privacy Policy
            </Link>

            <Link
              to="/contact"
              hash="terms"
              className="hover:text-primary-foreground"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
