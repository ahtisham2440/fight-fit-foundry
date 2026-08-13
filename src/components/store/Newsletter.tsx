import { buttonClass } from "./ui";

export function Newsletter() {
  return (
    <section className="section-y bg-surface" aria-labelledby="newsletter-heading">
      <div className="container-store max-w-3xl text-center">
        <p className="eyebrow mb-3">Newsletter</p>
        <h2 id="newsletter-heading" className="text-3xl md:text-4xl">
          Get 10% off your first order
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Join our newsletter for new arrivals, exclusive offers and combat-sports buying guides.
        </p>
        <form
          className="mx-auto mt-7 grid max-w-lg gap-3 sm:grid-cols-[minmax(0,1fr)_auto]"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@example.com"
            className="h-13 w-full rounded-md border border-input bg-background px-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <button type="submit" className={buttonClass("primary", "lg")}>
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground">
          One email a week. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}
