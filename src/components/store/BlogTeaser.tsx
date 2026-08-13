import gloves from "@/assets/cat-gloves.jpg";
import pads from "@/assets/cat-pads.jpg";
import wraps from "@/assets/cat-wraps.jpg";
import { SectionHeading, cardClass, buttonClass } from "./ui";

const posts = [
  {
    title: "Best boxing gloves for beginners",
    excerpt:
      "What actually matters in your first pair — padding, closure and weight — and five pairs worth the money.",
    image: gloves,
    alt: "Black and yellow beginner boxing gloves",
    href: "/blog/best-boxing-gloves-for-beginners",
    date: "12 Aug 2026",
  },
  {
    title: "12oz vs 16oz boxing gloves",
    excerpt:
      "Bag work, pad work or sparring — how glove weight changes protection, speed and gym rules.",
    image: pads,
    alt: "Thai kick pads used for pad work training",
    href: "/blog/12oz-vs-16oz-boxing-gloves",
    date: "28 Jul 2026",
  },
  {
    title: "Fairtex vs Twins vs Primo",
    excerpt:
      "Three legendary brands compared on fit, padding density, durability and long-term value.",
    image: wraps,
    alt: "Boxing hand wraps ready for training",
    href: "/blog/fairtex-vs-twins-vs-primo",
    date: "05 Jul 2026",
  },
];

export function BlogTeaser() {
  return (
    <section className="section-y" aria-labelledby="buying-guides">
      <div className="container-store">
        <SectionHeading
          id="buying-guides"
          eyebrow="Buying guides"
          title="Train smarter, buy once"
          action={
            <a href="/blog" className={buttonClass("tertiary")}>
              All articles
            </a>
          }
        />
        <ul className="grid gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <li key={p.title}>
              <a href={p.href} className={`${cardClass(true)} group block h-full`}>
                <div className="aspect-[16/9] overflow-hidden bg-surface-2">
                  <img
                    src={p.image}
                    alt={p.alt}
                    width={800}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {p.date}
                  </p>
                  <h3 className="mt-2 font-display text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.12em] text-primary">
                    Read more
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
