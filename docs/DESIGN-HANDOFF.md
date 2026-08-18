# Ironclad Fight Co. — Design Handoff (Visual Source of Truth)

This Lovable app is the **visual source of truth** for the future Shopify Online Store 2.0 theme.
Preserve the design exactly; change only the underlying implementation where Shopify requires it.
Do not redesign, re-color, re-type, re-space, or re-order sections.

---

## 1. Design system

Single source: `src/styles.css` (Tailwind v4 `@theme inline` + CSS variables).
Never hardcode colors in components — always use tokens/semantic classes.

### Color tokens (dark-first, one accent)

| Token | Value | Use |
| --- | --- | --- |
| `--background` | `oklch(0.145 0 0)` | page near-black |
| `--surface` / `--card` / `--popover` | `oklch(0.185 0 0)` | cards, panels, menus |
| `--surface-2` / `--secondary` / `--muted` | `oklch(0.225 0 0)` | hover, chips, alt sections |
| `--foreground` | `oklch(0.97 0 0)` | off-white text |
| `--muted-foreground` | `oklch(0.68 0 0)` | secondary text |
| `--primary` / `--accent` / `--ring` | `oklch(0.845 0.175 92)` | **yellow brand accent** (CTAs, active states, links) |
| `--primary-foreground` | `oklch(0.145 0 0)` | text on yellow |
| `--destructive` | `oklch(0.6 0.21 27)` | errors only |
| `--border` / `--input` | `oklch(1 0 0 / 12%)` / `16%` | hairline borders |

Rules: yellow is the **only** accent. No secondary brand hues, no colored card
backgrounds, no gradients built from product colors.

### Typography

- Display: **Anton** (`--font-display`) — uppercase, `line-height: 0.95`, `letter-spacing: 0.01em`. Applied automatically to `h1,h2,h3,.font-display`.
- Body/UI: **Barlow** (`--font-sans`).
- Eyebrow: `.eyebrow` utility — 12px, 700, `0.18em` tracking, uppercase, yellow.
- Buttons/nav/labels: uppercase, bold, `0.12em`–`0.16em` tracking.
- Loaded via `<link>` in `src/routes/__root.tsx` (never `@import` in CSS).

### Spacing / layout tokens

- Container: `.container-store` — `max-width: 80rem`, padding `1rem` mobile / `2rem` ≥768px.
- Section rhythm: `.section-y` — `3rem` mobile / `4.5rem` desktop vertical padding.
- Grid gaps: `1rem` (cards) / `1.5rem`–`2rem` (major blocks).
- Radius: single `--radius: 0.25rem` scale (`rounded-sm|md`).
- Shadows: `--shadow-card` (1px hairline) and `--shadow-lift` (menus/overlays) only.

### Buttons (one system — `src/components/store/ui.tsx`)

`buttonClass(variant, size)`:
- `primary` — solid yellow, black label (all main CTAs).
- `secondary` — bordered, transparent (alt/disabled-state CTAs like Notify me).
- `tertiary` — yellow text link.
Sizes: `md` (h-11) and `lg` (h-13). No other button styles.

### Cards (one system)

`cardClass(interactive)` — `rounded-md`, `border-border`, `bg-surface`, overflow hidden,
hover → `border-primary/60`. Product image ratio is always **1:1**.

---

## 2. Component structure (`src/components/store/`)

| Component | Role |
| --- | --- |
| `AnnouncementBar` | rotating shipping/returns promises |
| `SiteHeader` | logo, big search, account/wishlist/cart, desktop mega-nav, mobile drawer |
| `Hero` | product-led hero, real HTML headline + CTAs |
| `TrustBar` | shipping / returns / stock / support signals |
| `CategoryGrid` | shop by category tiles (horizontal rail on mobile) |
| `ProductCard` | the single card system (all states) |
| `ProductRail` | responsive rail → grid wrapper |
| `CampaignBanner` | featured editorial campaign |
| `BrandGrid` | shop by brand |
| `NewAndSale` | tabbed New arrivals / Sale rails |
| `SocialProof` | customer reviews + rating summary |
| `SizeGuides` | glove/shin/wrap sizing help |
| `WhyBuy` | USP block |
| `BlogTeaser` | buying guides / editorial |
| `Newsletter` | email capture |
| `SiteFooter` | nav columns, payment/shipping icons, legal |
| `MobileTabBar` | fixed mobile quick nav (search / categories / account / cart) |
| `ui.tsx` | `buttonClass`, `cardClass`, `SectionHeading`, `Stars` |

## 3. Page structure

`src/routes/index.tsx` renders, in order: Announcement → Header (search + nav) → Hero →
Trust bar → Shop by category → Bestsellers → Campaign → Brands → New/Sale → Reviews →
Size guides → Why buy → Blog/guides → Newsletter → Footer → Mobile tab bar.

One `<h1>` (Hero); every section has an `<h2>` and `aria-labelledby`.

---

## 4. Product-card states (must stay one layout)

Rendered by `ProductCard`; only chips, stock copy and the CTA change.

| State | Trigger | Visual |
| --- | --- | --- |
| AVAILABLE | `inStock: true` | "In EU stock · ships today" + yellow **Add to cart** |
| LOW STOCK | `inStock` and `stockLeft <= 5` | "Low stock · only N left" (yellow) + Add to cart |
| OUT OF STOCK / NOTIFY ME | `inStock: false` | image at 70% opacity, "Out of stock" chip, "Back in stock soon", secondary **Notify me** |
| SALE | `compareAt > price` | yellow "Sale −N%" chip + struck-through compare-at price |
| NEW | `badge: "New"` | yellow chip |
| BESTSELLER | `badge: "Bestseller"` | yellow chip |
| WISHLIST | user toggle | heart button top-right, filled yellow when saved |

**Product color rule:** the image sits on a fixed near-black stage
(`oklch(0.16 0 0)`) with a floor vignette and an optional ambient glow derived
from the selected variant color at ~9% opacity (14% on hover). Product photos are
never filtered, tinted or recolored, and variant colors never touch UI accents.

### Variants

`product.variants[]` = `{ name, swatch, image, alt }`. Swatch dots are true product
colors; the **active** swatch uses a yellow ring (`ring-primary` + offset). Selecting a
swatch swaps image + alt only.

---

## 5. Responsive behavior

- **Mobile (<768px):** dedicated search row under the header, hamburger drawer nav,
  horizontal snap rails for products/categories, fixed bottom tab bar, single-column
  sections, 44px+ touch targets.
- **Tablet (768–1023px):** 2–3 column grids, inline header search, drawer nav retained.
- **Desktop (≥1024px):** full mega-menu category bar, 4–6 column product grids,
  hover states and lift shadows.

## 6. Interaction design

Variant swatch select, New/Sale tab switch, wishlist toggle, mega-menu hover/focus,
mobile drawer open/close, newsletter submit. Transitions are ≤300ms color/transform only.
Everything is keyboard reachable with visible `ring-ring` focus.

## 7. Assets (`src/assets/`)

`hero-boxer.jpg`, `campaign-fighter.jpg`, category tiles (`cat-gloves`, `cat-wraps`,
`cat-pads`, `cat-shinguards`, `cat-headguard`, `cat-bags`, `cat-clothing`, `cat-footwear`,
`cat-gym`, `cat-accessories`), variant shots (`var-gloves-red|blue|white`).
All imported as ES modules, `loading="lazy"` below the fold, explicit `width`/`height`,
descriptive alt text. Replace with real catalog photography on identical 1:1 / 16:9 crops.

## 8. Navigation structure

`navigation` in `src/lib/store-data.ts`: top-level entries (Boxing, Muay Thai, MMA,
Protection, Bags & Pads, Clothing, Brands, Sale) each with `href` and optional `children`
used by the desktop mega-menu and mobile drawer. Sale is yellow.

---

## 9. STATIC UI DATA vs REAL COMMERCE DATA

Everything in `src/lib/store-data.ts` is **static demo data** and must be replaced.

| Element | Replace with |
| --- | --- |
| `bestsellers`, `newArrivals`, `saleProducts` | Shopify collections (`bestsellers`, `new-arrivals`, `sale`) |
| Product `price` / `compareAt` | `product.price` / `compare_at_price` (money filters, real currency) |
| `variants[]` swatches | Shopify variant options (Color) + variant images |
| `inStock` / `stockLeft` | `variant.available` / `inventory_quantity` |
| `rating` / `reviews` | review app metafields |
| `navigation` | Shopify linklists / menus |
| Brands, categories | collections |
| Reviews, size guides, blog teasers, USPs, announcement text | section settings / blog articles / metaobjects |
| Add to cart, Notify me, Wishlist, Newsletter, Search, Cart count | cart AJAX API, back-in-stock app, wishlist app, customer marketing, `/search`, cart drawer |

Business assumptions baked into copy: EU warehouse, ships today, free EU shipping over
threshold, 30-day returns, prices in EUR, no customs fees. Change these in copy only —
not in layout.

## 10. Conversion rules for the Shopify build

Keep section order, one H1, real HTML text (no text baked into images), yellow-only
accent, single card/button system, 1:1 product images, and the neutral product stage.
