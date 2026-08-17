# Ironclad homepage — single Custom Liquid paste

Aap Shopify theme editor mein **Customize > Add section > Custom Liquid** mein jo code paste karte hain, wahi banega. Ek hi file, ek hi paste — koi theme code editing nahi, koi app nahi.

## Kya milega

Project mein ek nayi file: `shopify/ironclad-homepage.liquid`

Us file mein sab kuch inline hoga:
- Poora CSS (charcoal/black surfaces, ek yellow accent, Anton + Barlow fonts) — `<style>` block ke andar, scoped class prefix `ic-` taake aapke theme se clash na ho.
- Poora homepage markup, current design ke mutabiq:
  1. Announcement bar (free shipping / discount)
  2. Hero (image + heading + 2 buttons)
  3. Trust bar (4 icons)
  4. Category grid (5 tiles, mobile par horizontal scroll)
  5. Bestsellers product rail
  6. Campaign banner
  7. Brand grid
  8. New + Sale (tabs)
  9. Social proof / reviews
  10. Size guides
  11. Why buy from us
  12. Blog teaser
  13. Newsletter signup (Shopify customer form)
- Chhota inline `<script>`: colour swatch image swap aur New/Sale tabs.

## Product data — asli catalog se

Rails Liquid loops use karengi:
- `collections['bestsellers'].products`, `collections['new-arrivals']`, `collections['sale']` — collection handles file ke top par variables mein hongi, aap easily badal sakein.
- Product card: featured image, vendor, title, price, compare-at price, availability, colour options as swatches.
- Add to cart `/cart/add` form se — checkout seedha kaam karega.
- Agar collection khali/na mile to demo placeholder cards dikhengi taake layout na toote.

## Text aur images

Custom Liquid block mein schema settings nahi hoti, is liye:
- Saara editable text (headings, trust items, brands, size guides, banner copy) file ke shuru mein saaf-suthre Liquid variables mein hoga, comments ke saath — aap wahin edit karein.
- Images ke liye do options file mein comment karke diye jayenge: Shopify Files se URL paste karna (`https://cdn.shopify.com/...`), ya `{{ 'name.jpg' | asset_url }}` agar aap assets mein upload karein.

## Notes

- Fonts Google Fonts `<link>` se load honge; agar aap chahein to system fonts ka fallback bhi maujood hoga.
- Mobile-first: rails horizontal scroll, tiles 2-column, buttons full width.
- Is project ka React homepage waise ka waisa rahega — Liquid file sirf additive hai.
- Ek `shopify/INSTALL.md` bhi banega: 5 step, aasan zubaan mein paste karne ka tareeqa.
