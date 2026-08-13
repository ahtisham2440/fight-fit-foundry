import { Truck, Percent } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="border-b border-border bg-primary text-primary-foreground">
      <div className="container-store flex h-9 items-center justify-center gap-6 overflow-hidden text-[11px] font-bold uppercase tracking-[0.14em]">
        <span className="flex items-center gap-2">
          <Truck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          Free shipping over €99 · EU stock · No customs
        </span>
        <a href="/pages/newsletter" className="hidden items-center gap-2 underline md:flex">
          <Percent className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          Get 10% off your first order
        </a>
      </div>
    </div>
  );
}
