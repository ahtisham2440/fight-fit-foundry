import { Quote } from "lucide-react";
import { SectionHeading, cardClass, Stars } from "./ui";

const reviews = [
  {
    quote: "Excellent quality and very fast delivery — gloves arrived in two days, no customs.",
    name: "Mateo R.",
    meta: "Verified buyer · Fairtex BGV1",
    rating: 5,
  },
  {
    quote: "Great gloves and arrived exactly when promised. The size guide got the fit spot on.",
    name: "Hanna K.",
    meta: "Verified buyer · Twins BGVL3",
    rating: 5,
  },
  {
    quote: "Ordered shin guards for the gym. Solid padding and honest pricing for the brand.",
    name: "Luca B.",
    meta: "Verified buyer · Primo shin guards",
    rating: 4,
  },
  {
    quote: "Returned a pair for a bigger size and it was handled in three days. Painless.",
    name: "Sofia D.",
    meta: "Verified buyer · Rival wraps",
    rating: 5,
  },
];

export function SocialProof() {
  return (
    <section className="section-y bg-surface" aria-labelledby="reviews-heading">
      <div className="container-store">
        <SectionHeading
          id="reviews-heading"
          eyebrow="Customer reviews"
          title="Trusted by 12,000+ fighters"
          description="Independently collected reviews from verified orders across the EU."
        />

        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className={`${cardClass()} flex flex-col items-center justify-center gap-2 p-8`}>
            <span className="font-display text-6xl text-primary">4.8</span>
            <Stars rating={4.8} className="scale-125" />
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Based on 3,412 reviews
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {reviews.map((r) => (
              <li key={r.name} className={`${cardClass()} p-5`}>
                <Quote className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                <p className="text-sm">{r.quote}</p>
                <div className="mt-4 flex items-center gap-2">
                  <Stars rating={r.rating} />
                  <span className="text-xs text-muted-foreground">
                    {r.name} — {r.meta}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <blockquote className={`${cardClass()} mt-6 p-6 md:p-8`}>
          <p className="font-display text-xl md:text-2xl">
            “Our whole squad kits out here. Gear turns up before fight camp starts — every time.”
          </p>
          <footer className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Coach D. Almeida — Head coach, Northside Boxing Gym
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
