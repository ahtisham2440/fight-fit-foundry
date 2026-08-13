import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** One button system: solid accent (primary), outline (secondary), text (tertiary). */
export function buttonClass(
  variant: "primary" | "secondary" | "tertiary" = "primary",
  size: "md" | "lg" = "md",
) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-sans font-bold uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50";
  const sizes = {
    md: "h-11 px-5 text-xs",
    lg: "h-13 px-7 text-sm",
  };
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/85",
    secondary: "border border-border bg-transparent text-foreground hover:bg-surface-2",
    tertiary: "px-0 text-primary hover:text-primary/80",
  };
  return cn(base, sizes[size], variants[variant]);
}

/** One card system: same radius, same border, same surface. */
export function cardClass(interactive = false) {
  return cn(
    "rounded-md border border-border bg-surface overflow-hidden",
    interactive && "transition-colors hover:border-primary/60",
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  id?: string;
}) {
  return (
    <div className="mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
      <div className="min-w-0">
        {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
        <h2 id={id} className="text-3xl md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5">
          <defs>
            <linearGradient id={`s${i}-${Math.round(rating * 10)}`}>
              <stop offset={`${Math.max(0, Math.min(1, rating - i)) * 100}%`} stopColor="currentColor" />
              <stop
                offset={`${Math.max(0, Math.min(1, rating - i)) * 100}%`}
                stopColor="currentColor"
                stopOpacity="0.22"
              />
            </linearGradient>
          </defs>
          <path
            fill={`url(#s${i}-${Math.round(rating * 10)})`}
            className="text-primary"
            d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8z"
          />
        </svg>
      ))}
    </span>
  );
}
