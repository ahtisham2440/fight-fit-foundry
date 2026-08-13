import { brands } from "@/lib/store-data";
import { SectionHeading, cardClass, buttonClass } from "./ui";

export function BrandGrid() {
  return (
    <section className="section-y bg-surface" aria-labelledby="shop-by-brand">
      <div className="container-store">
        <SectionHeading
          id="shop-by-brand"
          eyebrow="Shop by brand"
          title="Official stockist"
          description="Authentic gear only — sourced direct and held in our EU warehouse."
          action={
            <a href="/collections/brands" className={buttonClass("tertiary")}>
              All brands
            </a>
          }
        />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {brands.map((brand) => (
            <li key={brand}>
              <a
                href={`/collections/${brand.toLowerCase().replace(/\s+/g, "-")}`}
                className={`${cardClass(true)} grid h-24 place-items-center bg-background px-4 text-center`}
              >
                <span className="font-display text-lg tracking-wide">{brand}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
