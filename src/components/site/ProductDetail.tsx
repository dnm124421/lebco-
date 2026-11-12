import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle,
  Mail,
  MessageCircle,
  Minus,
  Package,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { ProductCard } from "@/components/site/ProductCard";
import { SpecTable } from "@/components/site/SpecTable";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { businessInfo, getProduct, whatsappHref } from "@/data/products";

function DetailList({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="rounded-lg border border-border bg-card p-5">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 leading-6">
            <CheckCircle aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent-strong" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Back to Products navigation button
function BackButton() {
  const getBackHref = () => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("lebco_active_category");
      if (stored && stored !== "All") {
        return `/products?category=${encodeURIComponent(stored)}`;
      }
    }
    return "/products";
  };

  return (
    <div className="border-b border-border/60 bg-catalogue-panel/50">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <Button asChild variant="outline" size="sm" aria-label="Back to Products">
          <Link to={getBackHref()}>
            <ArrowLeft aria-hidden="true" className="mr-1.5 size-4" /> Back to Products
          </Link>
        </Button>
      </div>
    </div>
  );
}

// SECTION 4.4: Illustrated cards for Thali and Cup Saucer Stand
function ThaliArrangementSection() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Types and Sample Arrangement</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Recommended placement configurations for modular cabinet drawers.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Card 1: Cup Saucer Stand */}
        <div className="flex flex-col rounded-lg border border-border bg-card p-5 shadow-catalogue-sm">
          <div className="flex aspect-[16/10] w-full items-center justify-center rounded-md border border-border bg-catalogue-panel p-4">
            <svg
              className="h-full w-full max-w-[200px]"
              viewBox="0 0 200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Cup saucer stand with 5 saucers and 5 cups"
            >
              {/* Wire rack base */}
              <line x1="20" y1="95" x2="180" y2="95" stroke="currentColor" strokeWidth="3" className="text-muted-foreground/50" />
              <line x1="30" y1="95" x2="30" y2="105" stroke="currentColor" strokeWidth="2.5" className="text-muted-foreground/50" />
              <line x1="170" y1="95" x2="170" y2="105" stroke="currentColor" strokeWidth="2.5" className="text-muted-foreground/50" />

              {/* 5 Saucers (left side) */}
              {[38, 52, 66, 80, 94].map((x) => (
                <g key={x}>
                  <line x1={x} y1="95" x2={x + 4} y2="40" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/60" />
                  <ellipse cx={x + 2} cy="65" rx="7" ry="24" stroke="currentColor" strokeWidth="2.5" className="text-accent-strong fill-accent/15" />
                </g>
              ))}

              {/* 5 Cups (right side) */}
              {[118, 134, 150, 166, 180].map((x) => (
                <g key={x}>
                  <rect x={x - 6} y="68" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="2" className="text-foreground fill-card" />
                  <path d={`M ${x + 6} 72 C ${x + 10} 72, ${x + 10} 80, ${x + 6} 80`} stroke="currentColor" strokeWidth="1.5" className="text-foreground fill-none" />
                </g>
              ))}
            </svg>
          </div>
          <h3 className="mt-4 font-semibold text-foreground">Cup Saucer Stand</h3>
          <p className="mt-1 text-sm text-muted-foreground">Sample arrangement: 5 saucers with 5 cups.</p>
          <p className="mt-3 text-xs font-medium text-accent-strong">Available sizes: 18 inch, 20 inch, 22 inch, 24 inch</p>
        </div>

        {/* Card 2: Thali Stand */}
        <div className="flex flex-col rounded-lg border border-border bg-card p-5 shadow-catalogue-sm">
          <div className="flex aspect-[16/10] w-full items-center justify-center rounded-md border border-border bg-catalogue-panel p-4">
            <svg
              className="h-full w-full max-w-[200px]"
              viewBox="0 0 200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Thali stand holding 5 thalis"
            >
              {/* Wire rack base */}
              <line x1="20" y1="105" x2="180" y2="105" stroke="currentColor" strokeWidth="3" className="text-muted-foreground/50" />
              <line x1="30" y1="105" x2="30" y2="112" stroke="currentColor" strokeWidth="2.5" className="text-muted-foreground/50" />
              <line x1="170" y1="105" x2="170" y2="112" stroke="currentColor" strokeWidth="2.5" className="text-muted-foreground/50" />

              {/* 5 Thalis (deeper rim / larger diameter) */}
              {[42, 70, 100, 130, 158].map((x) => (
                <g key={x}>
                  <line x1={x} y1="105" x2={x + 3} y2="15" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/60" />
                  <ellipse cx={x + 2} cy="58" rx="12" ry="44" stroke="currentColor" strokeWidth="2.5" className="text-accent-strong fill-accent/15" />
                  <ellipse cx={x + 2} cy="58" rx="7" ry="34" stroke="currentColor" strokeWidth="1.5" className="text-foreground/40 fill-none" />
                </g>
              ))}
            </svg>
          </div>
          <h3 className="mt-4 font-semibold text-foreground">Thali Stand</h3>
          <p className="mt-1 text-sm text-muted-foreground">Sample arrangement: 5 thalis.</p>
          <p className="mt-3 text-xs font-medium text-accent-strong">Available sizes: 18 inch, 20 inch, 22 inch, 24 inch</p>
        </div>
      </div>

      <p className="text-xs text-muted-foreground italic">Illustration for reference only.</p>
    </section>
  );
}

// SECTION 5.7: Dedicated layout for PVC Cutlery Tray
function PvcCutleryLayout({ product }: { product: Product }) {
  const relatedProducts = product.relatedSlugs
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p));

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 sm:space-y-16 lg:px-8">
      {/* 2-column layout: Left = Features & Specs, Right = Summary & Enquire */}
      <div className="grid gap-8 lg:grid-cols-[0.68fr_0.32fr]">
        <div className="space-y-6">
          {product.features && <DetailList title="Features" items={product.features} />}
          {product.specifications?.map((table) => (
            <SpecTable key={table.title} table={table} />
          ))}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-lg border border-border bg-card p-5 shadow-catalogue-sm">
            <h2 className="text-lg font-semibold text-foreground">Product Summary</h2>
            <dl className="mt-4 space-y-3.5 text-sm">
              <div>
                <dt className="font-medium text-foreground">Available Widths</dt>
                <dd className="mt-0.5 text-muted-foreground">400, 500, 600, 700, 800, 900 mm</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Depths</dt>
                <dd className="mt-0.5 text-muted-foreground">480 mm and 535 mm</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Material</dt>
                <dd className="mt-0.5 text-muted-foreground">Virgin Food Grade PVC</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Colour</dt>
                <dd className="mt-0.5 text-muted-foreground">Grey</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Finish</dt>
                <dd className="mt-0.5 text-muted-foreground">High Gloss Mirror Finish</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Packaging</dt>
                <dd className="mt-0.5 text-muted-foreground">10 Pcs (Per Carton)</dd>
              </div>
            </dl>

            <Button asChild className="mt-6 w-full">
              <a href={whatsappHref(product.name)} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> Enquire on WhatsApp
              </a>
            </Button>
          </section>

          <Button asChild variant="outline" className="w-full">
            <Link to="/products">
              View All Products <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </aside>
      </div>

      {/* Enquire Block */}
      <section className="rounded-lg border border-border bg-gradient-to-r from-catalogue-panel to-card p-6 shadow-catalogue-sm sm:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-foreground">Need bulk pricing or trade samples?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Contact our sales team directly for distributor pricing, carton quantities, and project orders. We provide fast response and dispatch information.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={whatsappHref(product.name)} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={businessInfo.phoneHref}>
                <Phone aria-hidden="true" /> Call
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={businessInfo.emailHref}>
                <Mail aria-hidden="true" /> Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="pb-12 sm:pb-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">Related Products</h2>
            <Button asChild variant="outline" size="sm">
              <Link to="/products">
                View Full Catalogue <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.slice(0, 3).map((rel) => (
              <ProductCard key={rel.slug} product={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

// Hinge detail layout with Product Summary sidebar
function HingeLayout({ product }: { product: Product }) {
  const relatedProducts = product.relatedSlugs
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p));

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 sm:space-y-16 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.68fr_0.32fr]">
        <div className="space-y-6">
          {product.features && <DetailList title="Features" items={product.features} />}
          {product.specifications?.map((table) => (
            <SpecTable key={table.title} table={table} />
          ))}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-lg border border-border bg-card p-5 shadow-catalogue-sm">
            <h2 className="text-lg font-semibold text-foreground">Product Summary</h2>
            <dl className="mt-4 space-y-3.5 text-sm">
              {product.sizes && (
                <div>
                  <dt className="font-medium text-foreground">Sizes</dt>
                  <dd className="mt-0.5 text-muted-foreground">{product.sizes.join(" / ")}</dd>
                </div>
              )}
              {product.materials && (
                <div>
                  <dt className="font-medium text-foreground">Materials</dt>
                  <dd className="mt-0.5 text-muted-foreground">{product.materials.join(", ")}</dd>
                </div>
              )}
              {product.colours && (
                <div>
                  <dt className="font-medium text-foreground">Colours</dt>
                  <dd className="mt-0.5 text-muted-foreground">{product.colours.join(", ")}</dd>
                </div>
              )}
              {product.packageContents && (
                <div>
                  <dt className="font-medium text-foreground">Package</dt>
                  <dd className="mt-0.5 text-muted-foreground">{product.packageContents}</dd>
                </div>
              )}
            </dl>

            <Button asChild className="mt-6 w-full">
              <a href={whatsappHref(product.name)} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> Enquire on WhatsApp
              </a>
            </Button>
          </section>

          <Button asChild variant="outline" className="w-full">
            <Link to="/products">
              View All Products <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </aside>
      </div>

      {/* Enquire Block */}
      <section className="rounded-lg border border-border bg-gradient-to-r from-catalogue-panel to-card p-6 shadow-catalogue-sm sm:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-foreground">Need bulk pricing or trade samples?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Contact our sales team directly for distributor pricing, carton quantities, and project orders.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={whatsappHref(product.name)} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={businessInfo.phoneHref}>
                <Phone aria-hidden="true" /> Call
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="pb-12 sm:pb-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">Related Products</h2>
            <Button asChild variant="outline" size="sm">
              <Link to="/products">
                View Full Catalogue <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.slice(0, 3).map((rel) => (
              <ProductCard key={rel.slug} product={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

// Standard detail layout for other products
function StandardProductLayout({ product }: { product: Product }) {
  const relatedProducts = product.relatedSlugs
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p));

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 sm:space-y-16 lg:px-8">
      {/* 2. KEY HIGHLIGHTS */}
      {product.highlights && product.highlights.length > 0 ? (
        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Key Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-lg border border-border bg-card p-4 shadow-catalogue-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {h.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">{h.value}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* COLOUR SWATCHES (if available) */}
      {product.swatches && product.swatches.length > 0 ? (
        <section className="rounded-lg border border-border bg-card p-5 shadow-catalogue-sm flex flex-wrap items-center gap-4">
          <span className="text-sm font-semibold text-foreground">Available Colours:</span>
          <div className="flex flex-wrap items-center gap-3">
            {product.swatches.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-2 rounded-full border border-border bg-catalogue-panel px-3 py-1.5 text-xs font-medium text-foreground shadow-xs"
              >
                <span
                  className={`size-4 rounded-full ${s.border ? "border border-border" : ""}`}
                  style={{ backgroundColor: s.color }}
                />
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* 3. FEATURES */}
      {product.features && product.features.length > 0 ? (
        <section className="rounded-lg border border-border bg-card p-6 shadow-catalogue-sm">
          <h2 className="text-xl font-semibold text-foreground">Features</h2>
          <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex gap-2.5 leading-6">
                <CheckCircle aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent-strong" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* 4. SPECIFICATIONS TABLE */}
      {product.specifications && product.specifications.length > 0 ? (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Specifications</h2>
          {product.specifications.map((table) => (
            <SpecTable key={table.title} table={table} />
          ))}
        </section>
      ) : null}

      {/* THALI ARRANGEMENT SECTION (only on thali-stand) */}
      {product.layoutVariant === "thali-stand" && <ThaliArrangementSection />}

      {/* 5. SIZES & VARIANTS TABLE */}
      {product.variantsTables && product.variantsTables.length > 0 ? (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Sizes & Variants</h2>
          {product.variantsTables.map((grid, gIdx) => (
            <div
              key={grid.title || gIdx}
              className="overflow-hidden rounded-lg border border-border bg-card shadow-catalogue-sm"
            >
              {grid.title ? (
                <h3 className="border-b border-border bg-muted px-4 py-3 text-base font-semibold text-foreground">
                  {grid.title}
                </h3>
              ) : null}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-catalogue-panel">
                      {grid.headers.map((h) => (
                        <th key={h} scope="col" className="px-4 py-3 font-semibold text-foreground">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {grid.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={`border-b border-border last:border-b-0 ${
                          rIdx % 2 === 1 ? "bg-muted/30" : "bg-card"
                        }`}
                      >
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-4 py-3 text-muted-foreground">
                            {typeof cell === "boolean" ? (
                              cell ? (
                                <span className="inline-flex items-center text-accent-strong font-bold">
                                  <Check className="size-4 mr-1" /> Yes
                                </span>
                              ) : (
                                <span className="inline-flex items-center text-muted-foreground/60">
                                  <Minus className="size-4 mr-1" /> —
                                </span>
                              )
                            ) : (
                              <span className={cIdx === 0 ? "font-medium text-foreground" : ""}>
                                {cell}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {grid.note && (
                <div className="border-t border-border bg-muted/20 px-4 py-3 text-xs text-muted-foreground">
                  {grid.note}
                </div>
              )}
            </div>
          ))}
        </section>
      ) : null}

      {/* 6. PACKING BLOCK */}
      {product.packing ? (
        <section className="rounded-lg border border-border bg-catalogue-panel p-5 shadow-catalogue-sm flex items-center gap-4">
          <div className="rounded-full bg-accent/20 p-3 text-accent-strong">
            <Package className="size-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Packaging Details
            </p>
            <p className="mt-0.5 text-base font-semibold text-foreground">
              Standard Packing: {product.packing}
            </p>
          </div>
        </section>
      ) : null}

      {/* 7. ENQUIRE BLOCK */}
      <section className="rounded-lg border border-border bg-gradient-to-r from-catalogue-panel to-card p-6 shadow-catalogue-sm sm:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-foreground">Need bulk pricing or trade samples?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Contact our sales team directly for distributor pricing, carton quantities, and project orders. We provide fast response and dispatch information.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={whatsappHref(product.name)} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={businessInfo.phoneHref}>
                <Phone aria-hidden="true" /> Call
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={businessInfo.emailHref}>
                <Mail aria-hidden="true" /> Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 8. RELATED PRODUCTS */}
      {relatedProducts.length > 0 ? (
        <section className="pb-12 sm:pb-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">Related Products</h2>
            <Button asChild variant="outline" size="sm">
              <Link to="/products">
                View Full Catalogue <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.slice(0, 3).map((rel) => (
              <ProductCard key={rel.slug} product={rel} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

export function ProductDetail({ product }: { product: Product }) {
  // Only Telescopic Channel keeps its 10 Years warranty
  const showWarranty = product.slug === "channel" && Boolean(product.warranty);

  return (
    <main>
      {/* SECTION 3.7: Back to Products button on every product page */}
      <BackButton />

      {/* 1. HERO SECTION */}
      <section className="border-b border-border bg-catalogue-panel">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-14">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-catalogue-sm">
              <img
                src={product.image}
                alt={product.imageAlt || product.name}
                className={`aspect-[4/3] w-full ${product.slug === "2d-ss" ? "object-contain bg-white" : "object-cover"}`}
              />
            </div>
            {product.gallery && product.gallery.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {product.gallery.map((item) => (
                  <div key={item.src} className="overflow-hidden rounded-md border border-border bg-card">
                    <img src={item.src} alt={item.alt} className="aspect-[4/3] w-full object-cover" />
                    {item.caption ? (
                      <p className="p-2 text-center text-xs font-semibold text-foreground">{item.caption}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block rounded bg-muted px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {product.category}
              </span>
              {showWarranty ? (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-strong">
                  <ShieldCheck className="size-3.5" />
                  {product.warranty}
                </span>
              ) : null}
            </div>

            <h1 className="mt-3 text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              {product.name}
            </h1>
            {product.title ? (
              <p className="mt-3 text-lg font-medium text-foreground">{product.title}</p>
            ) : null}
            <p className="mt-4 text-base leading-7 text-muted-foreground">{product.description}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={whatsappHref(product.name)} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" /> Enquire Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={businessInfo.phoneHref}>
                  <Phone aria-hidden="true" /> Call {businessInfo.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DETAIL LAYOUT BASED ON VARIANT */}
      {product.layoutVariant === "pvc-cutlery" ? (
        <PvcCutleryLayout product={product} />
      ) : product.layoutVariant === "hinge-summary" ? (
        <HingeLayout product={product} />
      ) : (
        <StandardProductLayout product={product} />
      )}
    </main>
  );
}
