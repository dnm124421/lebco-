import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, CheckCircle, Package, ShieldCheck, Sparkles, Zap } from "lucide-react";

import { ProductGrid } from "@/components/site/ProductGrid";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { businessInfo, products } from "@/data/products";
import heroLogo1280 from "@/assets/logo-hero-1280w.webp";
import heroLogo640 from "@/assets/logo-hero-640w.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LEBCO Hardware | Modular Kitchen & Furniture Hardware" },
      {
        name: "description",
        content:
          "Explore LEBCO’s range of hinges, telescopic channels, tandem boxes, cutlery trays, pullouts, pantry units, magic corners, rolling shutters and drawer mats. Direct enquiry via WhatsApp.",
      },
      { property: "og:title", content: "LEBCO Hardware | Modular Kitchen & Furniture Hardware" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content:
          "Explore LEBCO’s range of hinges, telescopic channels, tandem boxes, cutlery trays, pullouts, pantry units, magic corners, rolling shutters and drawer mats. Direct enquiry via WhatsApp.",
      },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: heroLogo1280,
        fetchPriority: "high",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold tracking-[0.08em] leading-none text-foreground uppercase">
              LEBCO
            </h1>
            <h2 className="mt-4 text-[clamp(1.375rem,3.2vw,2.125rem)] font-medium leading-snug text-foreground">
              Quality Hardware. Built for Everyday Use.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Explore our range of premium modular kitchen, architectural furniture and utility hardware solutions designed for smooth motion and long-lasting durability.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/products">
                  View Products <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-lg border border-border bg-card p-6 shadow-catalogue sm:p-10">
            <picture className="w-full flex justify-center">
              <source
                type="image/webp"
                srcSet={`${heroLogo640} 640w, ${heroLogo1280} 1280w`}
                sizes="(max-width: 640px) 80vw, 480px"
              />
              <img
                src={heroLogo1280}
                alt="LEBCO - Believe To Make It Possible"
                width={480}
                height={440}
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                className="w-[80%] max-w-[420px] h-auto object-contain"
              />
            </picture>
          </div>
        </div>

        {/* Hero Badges */}
        <div className="border-t border-border bg-catalogue-panel py-6">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
            <div className="flex items-start gap-3.5">
              <ShieldCheck className="mt-0.5 size-6 shrink-0 text-accent-strong" />
              <div>
                <h3 className="font-semibold text-foreground">50,000+ Cycles</h3>
                <p className="mt-1 text-xs text-muted-foreground">Hydraulic Tested</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Zap className="mt-0.5 size-6 shrink-0 text-accent-strong" />
              <div>
                <h3 className="font-semibold text-foreground">Heavy MS & SS</h3>
                <p className="mt-1 text-xs text-muted-foreground">Rust-Proof Coated</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Package className="mt-0.5 size-6 shrink-0 text-accent-strong" />
              <div>
                <h3 className="font-semibold text-foreground">Pan-India Supply</h3>
                <p className="mt-1 text-xs text-muted-foreground">Direct Manufacturer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            title="Our Product Range"
            description="Explore LEBCO's range of practical hardware solutions."
          />
          <Button asChild variant="outline" className="md:shrink-0">
            <Link to="/products">View Complete Catalogue</Link>
          </Button>
        </div>
        <ProductGrid products={products} />
      </section>

      <section className="border-t border-border bg-catalogue-panel">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeader
            title="Why LEBCO"
            description="Practical hardware choices for modular kitchens, furniture and everyday utility needs."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sparkles, text: "Soft-close drawer and hinge systems" },
              { icon: Boxes, text: "Exact sizes and dimensions listed for each product" },
              { icon: Package, text: "Clear box packing quantities for bulk orders" },
              { icon: CheckCircle, text: "Enquire in one tap on WhatsApp" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3.5 rounded-lg border border-border bg-card p-5 shadow-catalogue-sm">
                <item.icon aria-hidden="true" className="size-5 shrink-0 text-accent-strong" />
                <p className="font-medium text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
