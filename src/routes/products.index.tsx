import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { ProductGrid } from "@/components/site/ProductGrid";
import { SectionHeader } from "@/components/site/SectionHeader";
import { products, type ProductCategory } from "@/data/products";

const categories: ("All" | ProductCategory)[] = [
  "All",
  "Hinges",
  "Drawer Systems",
  "Kitchen Storage",
  "Accessories",
];

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Hardware Products Catalogue | LEBCO" },
      {
        name: "description",
        content:
          "Browse LEBCO's full hardware catalogue: hinges, telescopic channels, tandem boxes, cutlery trays, pullouts, pantry units, magic corners, rolling shutters and drawer mats.",
      },
      { property: "og:title", content: "Hardware Products Catalogue | LEBCO" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content:
          "Browse LEBCO's full hardware catalogue: hinges, telescopic channels, tandem boxes, cutlery trays, pullouts, pantry units, magic corners, rolling shutters and drawer mats.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProductCategory>("All");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get("category");
      const storedCat = sessionStorage.getItem("lebco_active_category");
      const initialCat = (catParam || storedCat) as "All" | ProductCategory | null;
      if (initialCat && categories.includes(initialCat)) {
        setActiveCategory(initialCat);
      }
    }
  }, []);

  const handleSelectCategory = (cat: "All" | ProductCategory) => {
    setActiveCategory(cat);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("lebco_active_category", cat);
      const url = new URL(window.location.href);
      if (cat === "All") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", cat);
      }
      window.history.replaceState({}, "", url.toString());
    }
  };

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main>
      <section className="border-b border-border bg-catalogue-panel">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeader
            eyebrow="LEBCO Catalogue"
            title="Our Product Range"
            description="Specifications, sizes and colours for every LEBCO product. Select a product for full details."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pb-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleSelectCategory(cat)}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="mt-6 pb-12">
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </main>
  );
}
