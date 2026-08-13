import { PackageCheck, Truck, BadgeEuro, ShieldCheck, RotateCcw } from "lucide-react";

const items = [
  { icon: PackageCheck, label: "EU Stock" },
  { icon: Truck, label: "Fast Delivery" },
  { icon: BadgeEuro, label: "No Customs" },
  { icon: ShieldCheck, label: "Secure Payments" },
  { icon: RotateCcw, label: "Easy Returns" },
];

export function TrustBar() {
  return (
    <section aria-label="Store guarantees" className="border-y border-border bg-surface">
      <div className="container-store no-scrollbar flex snap-x gap-8 overflow-x-auto py-4 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex shrink-0 snap-start items-center gap-2 md:justify-center"
          >
            <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.14em]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
