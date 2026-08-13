import { createFileRoute } from "@tanstack/react-router";

import { AnnouncementBar } from "@/components/store/AnnouncementBar";
import { SiteHeader } from "@/components/store/SiteHeader";
import { Hero } from "@/components/store/Hero";
import { TrustBar } from "@/components/store/TrustBar";
import { CategoryGrid } from "@/components/store/CategoryGrid";
import { ProductRail } from "@/components/store/ProductRail";
import { CampaignBanner } from "@/components/store/CampaignBanner";
import { BrandGrid } from "@/components/store/BrandGrid";
import { NewAndSale } from "@/components/store/NewAndSale";
import { SocialProof } from "@/components/store/SocialProof";
import { SizeGuides } from "@/components/store/SizeGuides";
import { WhyBuy } from "@/components/store/WhyBuy";
import { BlogTeaser } from "@/components/store/BlogTeaser";
import { Newsletter } from "@/components/store/Newsletter";
import { SiteFooter } from "@/components/store/SiteFooter";
import { MobileTabBar } from "@/components/store/MobileTabBar";
import { SectionHeading, buttonClass } from "@/components/store/ui";
import { bestsellers } from "@/lib/store-data";

const title = "Boxing, Muay Thai & MMA Equipment | Ironclad Fight Co.";
const description =
  "Combat sports gear shipped from our EU warehouse. Boxing gloves, wraps, protection, punch bags and fightwear. Fast delivery, no customs, easy 30-day returns.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />

      <main>
        <Hero />
        <TrustBar />
        <CategoryGrid />

        <section className="section-y bg-surface" aria-labelledby="bestsellers-heading">
          <div className="container-store" id="bestsellers">
            <SectionHeading
              id="bestsellers-heading"
              eyebrow="Bestsellers"
              title="What fighters are buying"
              description="Demo products shown for illustration — ratings from verified orders."
              action={
                <a href="/collections/bestsellers" className={buttonClass("tertiary")}>
                  View all
                </a>
              }
            />
            <ProductRail products={bestsellers} />
          </div>
        </section>

        <CampaignBanner />
        <BrandGrid />
        <NewAndSale />
        <SocialProof />
        <SizeGuides />
        <WhyBuy />
        <BlogTeaser />
        <Newsletter />
      </main>

      <SiteFooter />
      <MobileTabBar />
    </div>
  );
}
