import heroImage from "@/assets/hero-boxer.jpg";
import { buttonClass } from "./ui";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <img
        src={heroImage}
        alt="Boxer in a training stance wearing yellow boxing gloves in a dark gym"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[72%_center] opacity-70 md:opacity-100"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40 md:bg-gradient-to-r md:from-background md:via-background/85 md:to-transparent"
      />
      <div className="container-store relative flex min-h-[520px] items-end py-12 md:min-h-[600px] md:items-center md:py-20">
        <div className="max-w-xl">
          <p className="eyebrow mb-3">Boxing · Muay Thai · MMA</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl">
            Boxing &amp; combat sports equipment
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Premium gear from Fairtex, Twins Special, Rival and more. Shipped from our EU
            warehouse — fast delivery, no customs charges, easy 30-day returns.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#bestsellers" className={buttonClass("primary", "lg")}>
              Shop bestsellers
            </a>
            <a href="/collections/all" className={buttonClass("secondary", "lg")}>
              Shop all
            </a>
          </div>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Order before 14:00 — dispatched today
          </p>
        </div>
      </div>
    </section>
  );
}
