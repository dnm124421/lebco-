import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { whatsappHref } from "@/data/products";
import { productImages } from "@/data/product-images";

export function ProductCard({
  product,
  index = 99,
  priority = false,
}: {
  product: Product;
  index?: number;
  priority?: boolean;
}) {
  const isEager = priority || index < 2;
  const responsive = productImages[product.slug];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-catalogue-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-catalogue">
      <div className="relative">
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="block bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <picture>
            {responsive?.avifSrcset ? (
              <source
                type="image/avif"
                srcSet={responsive.avifSrcset}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
            ) : null}
            {responsive?.webpSrcset ? (
              <source
                type="image/webp"
                srcSet={responsive.webpSrcset}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
            ) : null}
            <img
              src={responsive?.src || product.image}
              srcSet={responsive?.fallbackSrcset}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              alt={product.imageAlt || product.name}
              width={400}
              height={300}
              loading={isEager ? "eager" : "lazy"}
              fetchPriority={isEager ? "high" : "low"}
              decoding={isEager ? "sync" : "async"}
              className={`aspect-[4/3] w-full ${
                product.slug === "2d-ss"
                  ? "object-contain bg-white"
                  : product.slug === "rolling-shutter"
                  ? "object-contain bg-[#f8f9fa] p-1"
                  : "object-cover"
              }`}
            />
          </picture>
        </Link>
      </div>
      <div className="flex flex-1 flex-col p-4 min-[390px]:p-5">
        <div className="mb-2">
          <span className="inline-block rounded bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
          {product.cardSummary}
        </p>
        <div className="mt-auto pt-4 grid grid-cols-1 min-[360px]:grid-cols-2 gap-2 sm:grid-cols-2">
          <Button asChild variant="outline" size="sm" className="w-full min-h-[44px]">
            <Link to="/products/$slug" params={{ slug: product.slug }}>
              View Details <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="sm" className="w-full min-h-[44px]">
            <a href={whatsappHref(product.name)} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" /> Enquire Now
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
