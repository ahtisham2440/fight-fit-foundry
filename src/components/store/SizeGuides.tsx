import { ArrowRight, Ruler, Scale, Shield, Sparkles } from "lucide-react";
import { SectionHeading, cardClass } from "./ui";

const guides = [
  {
    icon: Ruler,
    title: "Boxing glove size guide",
    text: "Match glove weight to your body weight, hand size and training type.",
    href: "/pages/glove-size-guide",
  },
  {
    icon: Scale,
    title: "12oz vs 14oz vs 16oz",
    text: "Which weight is right for bag work, pad work and sparring.",
    href: "/pages/glove-weight-guide",
  },
  {
    icon: Shield,
    title: "Shin guard size guide",
    text: "Measure shin length and calf width for a guard that won't rotate.",
    href: "/pages/shin-guard-size-guide",
  },
  {
    icon: Sparkles,
    title: "Beginner's starter kit",
    text: "Everything you need for your first eight weeks of training.",
    href: "/collections/starter-kit",
  },
];

export function SizeGuides() {
  return (
    <section className="section-y" aria-labelledby="size-guides">
      <div className="container-store">
        <SectionHeading
          id="size-guides"
          eyebrow="Size &amp; buying guides"
          title="Get the fit right first time"
          description="Sizing is the number one reason gear gets returned. Two minutes here saves a swap."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map(({ icon: Icon, title, text, href }) => (
            <li key={title}>
              <a href={href} className={`${cardClass(true)} group flex h-full flex-col gap-3 p-6`}>
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="font-display text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground">{text}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs font-bold uppercase tracking-[0.12em] text-primary">
                  Read guide
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
