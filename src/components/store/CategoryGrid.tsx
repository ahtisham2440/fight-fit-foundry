import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/store-data";
import { SectionHeading, cardClass } from "./ui";

export function CategoryGrid() {
  return (
    <section className="section-y" aria-labelledby="shop-by-category">
      <div className="container-store">
        <SectionHeading
          id="shop-by-category"
          eyebrow="Shop by category"
          title="Find your gear"
          description="Every discipline, every level — from first pair of wraps to competition kit."
        />
      </div>
      <div className="container-store no-scrollbar flex snap-x gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 lg:grid-cols-5">
        {categories.map((c) => (
          <a
            key={c.name}
            href={c.href}
            className={`${cardClass(true)} group w-[45vw] shrink-0 snap-start sm:w-auto`}
          >
            <div className="aspect-square overflow-hidden bg-surface-2">
              <img
                src={c.image}
                alt={c.alt}
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between gap-2 px-3 py-3">
              <span className="min-w-0 truncate font-display text-sm tracking-wide">{c.name}</span>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
