import {
  PackageCheck,
  BadgeEuro,
  Timer,
  RotateCcw,
  ShieldCheck,
  Headset,
  Ruler,
} from "lucide-react";
import { SectionHeading, cardClass } from "./ui";

const reasons = [
  { icon: PackageCheck, title: "EU stock", text: "Everything ships from our warehouse inside the EU." },
  { icon: BadgeEuro, title: "No customs", text: "No import duties, no surprise fees at the door." },
  { icon: Timer, title: "Fast dispatch", text: "Ordered before 14:00 on a weekday? It leaves today." },
  { icon: RotateCcw, title: "Easy returns", text: "30 days to return unused gear, no interrogation." },
  { icon: ShieldCheck, title: "Secure payments", text: "Card, Apple Pay, Google Pay and bank transfer." },
  { icon: Headset, title: "Expert support", text: "Answered by people who train, not a script." },
  { icon: Ruler, title: "Size guidance", text: "Send us your measurements and we'll pick the fit." },
];

export function WhyBuy() {
  return (
    <section className="section-y bg-surface" aria-labelledby="why-buy">
      <div className="container-store">
        <SectionHeading
          id="why-buy"
          eyebrow="Why buy from us"
          title="No customs. No guesswork."
          description="We stock combat sports gear in Europe so you get real delivery dates and real support."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <li key={title} className={`${cardClass()} flex gap-3 bg-background p-5`}>
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div className="min-w-0">
                <h3 className="font-display text-base">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
