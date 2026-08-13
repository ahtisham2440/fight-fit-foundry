import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const columns = [
  {
    title: "Shop",
    links: [
      ["Boxing Gloves", "/collections/boxing-gloves"],
      ["Protection", "/collections/protection"],
      ["Punch Bags", "/collections/punch-bags"],
      ["Footwear", "/collections/footwear"],
      ["Clothing", "/collections/clothing"],
      ["Sale", "/collections/sale"],
    ],
  },
  {
    title: "Information",
    links: [
      ["About Us", "/pages/about"],
      ["Contact", "/pages/contact"],
      ["FAQ", "/pages/faq"],
      ["Brands", "/collections/brands"],
      ["Size Guide", "/pages/glove-size-guide"],
      ["Blog", "/blog"],
    ],
  },
  {
    title: "Policies",
    links: [
      ["Terms & Conditions", "/policies/terms"],
      ["Shipping & Returns", "/policies/shipping-returns"],
      ["Payment", "/policies/payment"],
      ["Privacy Policy", "/policies/privacy"],
    ],
  },
];

const payments = ["Visa", "Mastercard", "Amex", "Apple Pay", "Google Pay", "Klarna"];

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border py-2 md:border-0 md:py-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-2 text-left md:pointer-events-none md:py-0"
      >
        <h3 className="font-display text-base tracking-wide">{title}</h3>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform md:hidden", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>
      <ul className={cn("space-y-2 pb-3 pt-2 md:block md:pb-0", !open && "hidden")}>
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-sm text-muted-foreground hover:text-primary">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background pb-20 md:pb-0">
      <div className="container-store grid gap-4 border-b border-border py-6 md:grid-cols-2 md:items-center">
        <ul className="flex flex-wrap gap-2" aria-label="Accepted payment methods">
          {payments.map((p) => (
            <li
              key={p}
              className="rounded-sm border border-border bg-surface px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground"
            >
              {p}
            </li>
          ))}
        </ul>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground md:text-right">
          Shipped with GLS &amp; DHL · Tracked EU delivery in 2–4 working days
        </p>
      </div>

      <div className="container-store grid gap-6 py-10 md:grid-cols-4 md:gap-8">
        {columns.map((c) => (
          <FooterColumn key={c.title} title={c.title} links={c.links} />
        ))}

        <div className="py-2 md:py-0">
          <h3 className="font-display text-base tracking-wide">Contact</h3>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href="mailto:support@ironcladfight.eu" className="hover:text-primary">
                support@ironcladfight.eu
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href="tel:+3612345678" className="hover:text-primary">
                +36 1 234 5678
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>Ironclad Fight Co., Váci út 12, 1132 Budapest, Hungary</span>
            </li>
          </ul>
          <div className="mt-4 flex gap-2">
            {[
              [Instagram, "Instagram", "https://instagram.com"],
              [Facebook, "Facebook", "https://facebook.com"],
              [Youtube, "YouTube", "https://youtube.com"],
            ].map(([Icon, label, href]) => {
              const I = Icon as typeof Instagram;
              return (
                <a
                  key={label as string}
                  href={href as string}
                  aria-label={label as string}
                  className="grid h-10 w-10 place-items-center rounded-md border border-border hover:border-primary hover:text-primary"
                >
                  <I className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container-store border-t border-border py-6">
        <p className="max-w-4xl text-xs leading-relaxed text-muted-foreground">
          Ironclad Fight Co. supplies boxing, Muay Thai and MMA equipment across Europe. We stock
          gloves, hand wraps, head guards, shin guards, punch bags, pads, footwear and fightwear
          from Fairtex, Twins Special, Primo Fightwear, Rival, Sting and Hayabusa. All orders are
          dispatched from our EU warehouse, so there are no customs charges or import duties inside
          the EU, and returns are handled locally within 30 days.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ironclad Fight Co. · Company reg. 01-09-123456 · VAT
          HU12345678 · Demo products shown for illustration.
        </p>
      </div>
    </footer>
  );
}
