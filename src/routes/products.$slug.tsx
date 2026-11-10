import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

import { ProductDetail } from "@/components/site/ProductDetail";
import { getProduct } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  beforeLoad: ({ params }) => {
    // 301 redirects for removed products
    if (["model-202", "bed-fitting", "table-bracket"].includes(params.slug)) {
      throw redirect({
        to: "/products",
        statusCode: 301,
      });
    }
  },
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

    const title =
      product.slug === "channel"
        ? `${product.name} - Sizes, Specifications & Warranty | LEBCO`
        : `${product.name} - Sizes & Specifications | LEBCO`;

    const description = product.cardSummary;

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
