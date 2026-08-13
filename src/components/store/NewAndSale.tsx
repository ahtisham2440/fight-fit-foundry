import { useState } from "react";
import { newArrivals, saleProducts } from "@/lib/store-data";
import { ProductRail } from "./ProductRail";
import { cn } from "@/lib/utils";

export function NewAndSale() {
  const [tab, setTab] = useState<"new" | "sale">("new");

  return (
    <section className="section-y" aria-labelledby="new-and-sale">
      <div className="container-store">
        <div className="mb-8">
          <p className="eyebrow mb-2">Fresh stock</p>
          <h2 id="new-and-sale" className="text-3xl md:text-4xl">
            New arrivals &amp; sale
          </h2>
          <div role="tablist" aria-label="Product lists" className="mt-5 flex gap-2">
            {(
              [
                ["new", "New arrivals"],
                ["sale", "Sale"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                role="tab"
                type="button"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={cn(
                  "h-11 rounded-md px-5 text-xs font-bold uppercase tracking-[0.12em] transition-colors",
                  tab === key
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground hover:bg-surface-2",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <ProductRail products={tab === "new" ? newArrivals : saleProducts} />
      </div>
    </section>
  );
}
