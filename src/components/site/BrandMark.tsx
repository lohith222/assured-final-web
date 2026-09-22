
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        width={40}
        height={40}
        className="h-10 w-10 rounded-sm object-cover object-[50%_38%]"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-semibold tracking-tight">
          Assured Life
        </span>
        <span className="mt-0.5 text-[0.6rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          Insurance
        </span>
      </span>
    </span>
  );
}

export function BrandLink({ className = "" }: { className?: string }) {
  return (
    <Link to="/" aria-label="Assured Life — home" className={className}>
      <BrandMark />
    </Link>
  );
}