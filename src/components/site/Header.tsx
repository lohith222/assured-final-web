import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BrandLink, BrandMark } from "./BrandMark";
import { contactDetails } from "@/lib/insurance";
import { planNavItems } from "@/lib/nav";

const linkClass =
  "text-sm font-medium text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary";

export function Header() {
  const [open, setOpen] = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const plansRef = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus whenever navigation happens.
  useEffect(() => {
    setPlansOpen(false);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!plansOpen) return;
    const onDown = (event: MouseEvent) => {
      if (!plansRef.current?.contains(event.target as Node)) setPlansOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPlansOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [plansOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_var(--border),0_8px_24px_-20px_rgba(14,42,80,0.5)]" : ""
      }`}
    >
      <div className="hidden border-b bg-navy-deep py-1.5 text-primary-foreground lg:block">
        <div className="container-page flex items-center justify-between text-xs">
          <p className="text-primary-foreground/80">
            Licensed protection advisors. Claims support available 24/7.
          </p>
          <a
            href={`tel:${contactDetails.phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center gap-2 font-medium hover:text-gold"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {contactDetails.phone}
          </a>
        </div>
      </div>

      <div className="container-page flex h-[4.5rem] items-center justify-between gap-4">
        <BrandLink className="min-w-0 shrink-0" />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <Link to="/" className={linkClass} activeOptions={{ exact: true }} preload="intent">
            Home
          </Link>

          <div
            ref={plansRef}
            className="group relative"
            onMouseEnter={() => setPlansOpen(true)}
            onMouseLeave={() => setPlansOpen(false)}
          >
            <button
              type="button"
              className={`${linkClass} inline-flex items-center gap-1`}
              aria-haspopup="true"
              aria-expanded={plansOpen}
              onClick={() => setPlansOpen((value) => !value)}
            >
              Plans
              <ChevronDown
                className={`size-3.5 transition-transform ${plansOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            <div
              className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 transition-all duration-150 ${
                plansOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <ul className="max-h-[26rem] overflow-y-auto rounded-lg border bg-popover p-2 shadow-lift">
                {planNavItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      preload="intent"
                      onClick={() => setPlansOpen(false)}
                      className="block rounded-md px-3 py-2.5 transition-colors hover:bg-surface-strong"
                    >
                      <span className="block text-sm font-semibold">{item.label}</span>
                      {item.description ? (
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {item.description}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/about" className={linkClass} preload="intent">
            About
          </Link>
          <Link to="/contact" className={linkClass} preload="intent">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="gold" className="hidden sm:inline-flex">
            <Link to="/get-a-quote" preload="intent">
              Get a Quote
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto p-0">
              <SheetHeader className="flex-row items-center justify-between border-b p-5 text-left">
                <SheetTitle asChild>
                  <span>
                    <BrandMark />
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 p-5">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-base font-medium hover:bg-surface-strong"
                >
                  Home
                </Link>

                <p className="eyebrow mt-3 px-2">Plans</p>
                {planNavItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-3 text-base font-medium hover:bg-surface-strong"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="my-3 h-px bg-border" />
                <Link
                  to="/about"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-base font-medium hover:bg-surface-strong"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-base font-medium hover:bg-surface-strong"
                >
                  Contact
                </Link>
                <Link
                  to="/claims"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-base font-medium hover:bg-surface-strong"
                >
                  Claims
                </Link>
                <Button asChild variant="gold" size="lg" className="mt-4">
                  <Link to="/get-a-quote" onClick={() => setOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
                <a
                  href={`tel:${contactDetails.phone.replace(/[^+\d]/g, "")}`}
                  className="mt-4 inline-flex items-center gap-2 px-2 text-sm text-muted-foreground"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {contactDetails.phone}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
