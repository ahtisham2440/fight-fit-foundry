# Ironclad homepage as copy-paste Shopify code

Goal: same look and UX as the current Ironclad Fight Co. homepage, but as Liquid/HTML you can paste straight into a Shopify theme — no React, no build step.

## What you'll get

A new folder in this project, `shopify/`, containing plain files you copy into your theme via **Online Store > Themes > Edit code**:

```text
shopify/
  sections/
    ironclad-announcement.liquid
    ironclad-hero.liquid
    ironclad-trust-bar.liquid
    ironclad-category-grid.liquid
    ironclad-product-rail.liquid      (bestsellers / new / sale)
    ironclad-campaign-banner.liquid
    ironclad-brand-grid.liquid
    ironclad-social-proof.liquid
    ironclad-size-guides.liquid
    ironclad-why-buy.liquid
    ironclad-blog-teaser.liquid
    ironclad-newsletter.liquid
  assets/
    ironclad.css                       (the whole design system: charcoal/black/yellow, Anton + Barlow, buttons, cards, product stage)
  snippets/
    ironclad-product-card.liquid       (neutral near-black stage, colour swatches, stars, price, add to cart)
  INSTALL.md                           (step-by-step, in simple language)
  ALL-IN-ONE.liquid                    (optional: entire homepage in one paste, for a single "Custom Liquid" block)
```

## Design fidelity

- Exact same tokens: charcoal/black surfaces, one yellow accent, Anton display + Barlow body (loaded via `<link>` in the section, no @import).
- Same components: announcement bar, sticky header search behaviour is left to your theme header; hero, trust bar, category tiles, product rails, campaign banner, brand grid, social proof, size guides, why-buy, blog teaser, newsletter, mobile horizontal scroll rails.
- Product images keep their real colours: neutral near-black stage plus a very light ambient glow, exactly like the current React card.
- Written in plain CSS (one stylesheet), so it works on Dawn and most themes without Tailwind.

## Real store data

The product card and rails pull from your actual Shopify catalog:
- Rails read a collection chosen in the theme editor (`collection` setting), falling back to `all`.
- Card uses `product.featured_image`, `product.title`, `product.vendor`, `product.price`, `product.compare_at_price`, availability, and colour options rendered as swatches.
- Add to cart posts to `/cart/add` with the first available variant, so checkout works with no app.
- Categories, brands, trust items, size guides, blog teaser and banner text are all theme-editor settings (schema), so you edit them in Shopify, not in code.

## Notes

- Section files include a `{% schema %}` block, so after pasting they appear in **Customize > Add section**.
- Images: category/brand/hero images are uploaded in the theme editor (Shopify CDN), so nothing is hardcoded to this project.
- The React homepage in this project stays untouched — the Shopify files are additive.
- `ALL-IN-ONE.liquid` is included as a fallback if you'd rather do a single paste instead of 12 section files.

## Technical detail

Liquid 5, no external JS frameworks. A small inline `<script>` per section handles the swatch image swap and tab switching (New / Sale), matching the current behaviour. All CSS lives in `assets/ironclad.css`, referenced with `{{ 'ironclad.css' | asset_url | stylesheet_tag }}`; the all-in-one file inlines it instead.
