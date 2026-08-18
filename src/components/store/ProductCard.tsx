import { useState } from "react";
import { Heart, ShoppingCart, BellRing } from "lucide-react";
import type { Product } from "@/lib/store-data";
import { buttonClass, cardClass, Stars } from "./ui";
import { cn } from "@/lib/utils";

/**
 * Single product-card system. Every commerce state (AVAILABLE, OUT OF STOCK,
 * SALE, NEW, BESTSELLER, LOW STOCK, NOTIFY ME) reuses the exact same layout,
 * ratio, spacing and typography — only chips, copy and the CTA change.
 *
 * SHOPIFY HANDOFF: product fields, variants, price, rating and stock are demo
 * data (src/lib/store-data.ts) and must be mapped to real product data later.
 */
export function ProductCard({ product }: { product: Product }) {
  const variants = product.variants ?? [];
  const [active, setActive] = useState(0);
  const [wished, setWished] = useState(false);
  const variant = variants[active];

  const image = variant?.image ?? product.image;
  const alt = variant?.alt ?? product.alt;
  /** Very restrained studio ambience derived from the product colour.
   *  Never used as a UI accent — purely a soft light behind the product. */
  const ambient = variant?.swatch;

  const discount =
    product.compareAt && product.compareAt > product.price
      ? Math.round((1 - product.price / product.compareAt) * 100)
      : 0;
  const lowStock =
    product.inStock && typeof product.stockLeft === "number" && product.stockLeft <= 5;

  return (
    <article className={`${cardClass(true)} group flex h-full flex-col`}>
      <div className="relative">
        <a
          href={`/products/${product.id}`}
          className="relative block aspect-square overflow-hidden bg-[oklch(0.16_0_0)]"
        >
          {/* Neutral near-black product stage with optional ~8% ambient light */}
          {ambient ? (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.09] transition-opacity duration-300 group-hover:opacity-[0.14]"
              style={{
                background: `radial-gradient(120% 80% at 50% 42%, ${ambient} 0%, transparent 68%)`,
              }}
            />
          ) : null}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_110%,oklch(0_0_0/0.55)_0%,transparent_60%)]"
          />
          <img
            src={image}
            alt={alt}
            width={800}
            height={800}
            loading="lazy"
            decoding="async"
            className={cn(
              "relative h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
              !product.inStock && "opacity-70",
            )}
          />

          {/* State chips — one stack, one style, never restyled per state */}
          <div className="absolute left-2 top-2 z-10 flex flex-col items-start gap-1">
            {product.badge ? (
              <span className="rounded-sm bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground">
                {product.badge}
              </span>
            ) : null}
            {discount > 0 ? (
              <span className="rounded-sm bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground">
                Sale −{discount}%
              </span>
            ) : null}
            {!product.inStock ? (
              <span className="rounded-sm border border-border bg-background/85 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
                Out of stock
              </span>
            ) : null}
          </div>
        </a>

        <button
          type="button"
          aria-label={wished ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          aria-pressed={wished}
          onClick={() => setWished((v) => !v)}
          className="absolute right-2 top-2 z-10 grid h-9 w-9 place-items-center rounded-md border border-border bg-background/70 backdrop-blur transition-colors hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Heart
            className={cn("h-4 w-4", wished ? "fill-primary text-primary" : "text-foreground")}
            aria-hidden="true"
          />
        </button>
      </div>

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

        {variants.length > 1 ? (
          <div className="flex items-center gap-2 pt-0.5">
            <span className="sr-only" id={`color-label-${product.id}`}>
              Colour
            </span>
            <div
              role="radiogroup"
              aria-labelledby={`color-label-${product.id}`}
              className="flex items-center gap-1.5"
            >
              {variants.map((v, i) => (
                <button
                  key={v.name}
                  type="button"
                  role="radio"
                  aria-checked={i === active}
                  aria-label={v.name}
                  title={v.name}
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-5 w-5 rounded-full border border-border p-[2px] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    i === active && "ring-2 ring-primary ring-offset-2 ring-offset-card",
                  )}
                >
                  <span
                    className="block h-full w-full rounded-full"
                    style={{ backgroundColor: v.swatch }}
                  />
                </button>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">{variant?.name}</span>
          </div>
        ) : null}

        <div className="mt-auto flex items-baseline gap-2 pt-1">
          <span className="font-display text-xl">€{product.price}</span>
          {product.compareAt ? (
            <span className="text-sm text-muted-foreground line-through">€{product.compareAt}</span>
          ) : null}
        </div>

        <p className="text-xs font-semibold">
          {!product.inStock ? (
            <span className="text-muted-foreground">Back in stock soon</span>
          ) : lowStock ? (
            <span className="text-primary">Low stock · only {product.stockLeft} left</span>
          ) : (
            <span className="text-primary">In EU stock · ships today</span>
          )}
        </p>

        <button
          type="button"
          className={`${buttonClass(product.inStock ? "primary" : "secondary")} mt-1 w-full`}
        >
          {product.inStock ? (
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
          ) : (
            <BellRing className="h-4 w-4" aria-hidden="true" />
          )}
          {product.inStock ? "Add to cart" : "Notify me"}
        </button>
      </div>
    </article>
  );
}
