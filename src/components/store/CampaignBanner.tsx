import campaign from "@/assets/campaign-fighter.jpg";
import { buttonClass } from "./ui";

export function CampaignBanner() {
  return (
    <section className="section-y" aria-labelledby="campaign-heading">
      <div className="container-store">
        <div className="relative isolate overflow-hidden rounded-md border border-border">
          <img
            src={campaign}
            alt="Muay Thai fighter kicking a heavy bag in a dark gym"
            width={1920}
            height={1088}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20"
          />
          <div className="relative max-w-lg p-8 py-16 md:p-14 md:py-24">
            <p className="eyebrow mb-3">Ironclad Pro Series</p>
            <h2 id="campaign-heading" className="text-3xl md:text-5xl">
              Built for fighters
            </h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              Professional combat equipment designed for serious training — full-grain leather,
              multi-layer foam and stitching tested round after round.
            </p>
            <a href="/collections/pro-series" className={`${buttonClass("primary", "lg")} mt-7`}>
              Shop collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
