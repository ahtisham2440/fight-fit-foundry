import type { Product } from "@/lib/store-data";
import { ProductCard } from "./ProductCard";

export function ProductRail({ products }: { products: Product[] }) {
  return (
    <div className="no-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-4 xl:grid-cols-6">
      {products.map((p) => (
        <div key={p.id} className="w-[62vw] shrink-0 snap-start sm:w-[42vw] md:w-auto">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}
