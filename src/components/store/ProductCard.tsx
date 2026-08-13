import { ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/store-data";
import { buttonClass, cardClass, Stars } from "./ui";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`${cardClass(true)} group flex h-full flex-col`}>
      <a href={`/products/${product.id}`} className="relative block aspect-square bg-surface-2">
        <img
          src={product.image}
          alt={product.alt}
          width={800}
          height={800}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.badge ? (
          <span className="absolute left-2 top-2 rounded-sm bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground">
            {product.badge}
          </span>
        ) : null}
      </a>

      <div className="flex flex-1 flex-col gap-2 p-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
          {product.brand}
        </p>
        <h3 className="line-clamp-2 font-sans text-sm font-semibold normal-case tracking-normal">
          <a href={`/products/${product.id}`}>{product.name}</a>
        </h3>

        <div className="flex items-center gap-2">
          <Stars rating={product.rating} />
          <span className="text-xs text-muted-foreground">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>

        <div className="mt-auto flex items-baseline gap-2 pt-1">
          <span className="font-display text-xl">€{product.price}</span>
          {product.compareAt ? (
            <span className="text-sm text-muted-foreground line-through">€{product.compareAt}</span>
          ) : null}
        </div>

        <p className="text-xs font-semibold">
          {product.inStock ? (
            <span className="text-primary">In EU stock · ships today</span>
          ) : (
            <span className="text-muted-foreground">Back in stock soon</span>
          )}
        </p>

        <button
          type="button"
          disabled={!product.inStock}
          className={`${buttonClass("primary")} mt-1 w-full`}
        >
          <ShoppingCart className="h-4 w-4" aria-hidden="true" />
          {product.inStock ? "Add to cart" : "Notify me"}
        </button>
      </div>
    </article>
  );
}
