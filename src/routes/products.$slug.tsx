import { createFileRoute, notFound } from "@tanstack/react-router";

import { ProductDetail } from "@/components/site/ProductDetail";
import { getProduct } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    if (!product) {
      return {
        meta: [{ title: "Product Details — LEBCO" }],
      };
    }

    const isHinge = product.category === "Hinges";
    if (isHinge) {
      const title = `${product.name} — LEBCO Product Details`;
      const description = `View ${product.name} details, specifications and enquiry options from LEBCO.`;
      return {
        meta: [
          { title },
          { name: "description", content: description },
          { property: "og:title", content: title },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
          { property: "og:description", content: description },
        ],
      };
    }

    const title = `${product.name} - Sizes, Specifications & Warranty | LEBCO`;
    const description = `${product.cardSummary} ${product.warranty ? `Backed by ${product.warranty}.` : ""}`.trim();

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:description", content: description },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            brand: {
              "@type": "Brand",
              name: "LEBCO",
            },
            category: product.category,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          }),
        },
      ],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  return <ProductDetail product={product} />;
}
