import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { whatsappHref } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  // Warranty chip only on the Telescopic Channel card ("10 Years Warranty")
  const showWarranty = product.slug === "channel" && Boolean(product.warranty);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-catalogue-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-catalogue">
      <div className="relative">
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="block bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <img
            src={product.image}
            alt={product.imageAlt || product.name}
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </Link>
        {showWarranty ? (
          <div className="absolute top-3 right-3 rounded-md bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground shadow-sm flex items-center gap-1">
            <ShieldCheck className="size-3.5" />
            <span>{product.warranty}</span>
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2">
          <span className="inline-block rounded bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
          {product.cardSummary}
        </p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <Button asChild variant="outline" size="sm">
            <Link to="/products/$slug" params={{ slug: product.slug }}>
              View Details <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="sm">
            <a href={whatsappHref(product.name)} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" /> Enquire Now
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
