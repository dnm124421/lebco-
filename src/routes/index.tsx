import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, CheckCircle, MessageCircle, Package, ShieldCheck, Sparkles, Zap } from "lucide-react";

import { ProductGrid } from "@/components/site/ProductGrid";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { businessInfo, featuredProducts, heroImage, products, whatsappHref } from "@/data/products";

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
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-strong">{businessInfo.company}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Quality Hardware. Built for Everyday Use.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
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
            <img src={heroImage} alt="LEBCO Hardware Solutions" className="max-h-80 w-auto object-contain" />
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
                <h3 className="font-semibold text-foreground">SS 304 & Heavy MS</h3>
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

      <section className="border-y border-border bg-catalogue-panel">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeader
            title="Featured Products"
            description="Selected LEBCO hardware products with detailed specifications."
          />
          <div className="mt-9 space-y-8">
            {featuredProducts.map((product, index) => (
              <article key={product.slug} className="grid gap-6 rounded-lg border border-border bg-card p-5 shadow-catalogue-sm md:grid-cols-2 md:items-center md:p-6">
                <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                  <img
                    src={product.image}
                    alt={product.imageAlt || product.name}
                    className={`aspect-[4/3] w-full rounded-md border border-border ${
                      product.slug === "2d-ss"
                        ? "object-contain bg-white"
                        : product.slug === "rolling-shutter"
                        ? "object-contain bg-[#f8f9fa] p-2"
                        : "object-cover"
                    }`}
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-block rounded bg-muted px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{product.name}</h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{product.cardSummary}</p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="outline">
                      <Link to="/products/$slug" params={{ slug: product.slug }}>
                        View Details <ArrowRight aria-hidden="true" />
                      </Link>
                    </Button>
                    <Button asChild>
                      <a href={whatsappHref(product.name)} target="_blank" rel="noreferrer">
                        <MessageCircle aria-hidden="true" /> Enquire Now
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
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
      </section>
    </main>
  );
}
