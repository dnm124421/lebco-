import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

import { ProductGrid } from "@/components/site/ProductGrid";
import { SectionHeader } from "@/components/site/SectionHeader";
import { products, type ProductCategory } from "@/data/products";

const categories: ("All" | ProductCategory)[] = [
  "All",
  "Drawer Systems",
  "Hinges",
  "Kitchen Storage",
  "Furniture Fittings",
  "Accessories",
];

const warrantyList = [
  { product: "Telescopic Channels", warranty: "10 Years Warranty", category: "Drawer Systems" },
  { product: "Slim Tandem Box", warranty: "5 Years Warranty", category: "Drawer Systems" },
  { product: "Tall Pantry Unit", warranty: "5 Years Warranty", category: "Kitchen Storage" },
  { product: "Universal Magic Corner", warranty: "5 Years Warranty", category: "Kitchen Storage" },
  { product: "Bottle Pullout", warranty: "5 Years Warranty", category: "Kitchen Storage" },
  { product: "PVC Wicker Basket", warranty: "5 Years Warranty", category: "Kitchen Storage" },
  { product: "Folding Table Bracket", warranty: "5 Years Warranty", category: "Furniture Fittings" },
  { product: "PVC Cutlery Tray", warranty: "5 Years Warranty", category: "Kitchen Storage" },
  { product: "Lift-up Bed Fitting", warranty: "Lifetime Warranty", category: "Furniture Fittings" },
];

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Hardware Products Catalogue | LEBCO" },
      {
        name: "description",
        content:
          "Browse LEBCO's full hardware catalogue: telescopic channels, tandem boxes, pantry units, magic corners, wicker baskets, bed fittings, table brackets and hinges.",
      },
      { property: "og:title", content: "Hardware Products Catalogue | LEBCO" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content:
          "Browse LEBCO's full hardware catalogue: telescopic channels, tandem boxes, pantry units, magic corners, wicker baskets, bed fittings, table brackets and hinges.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProductCategory>("All");

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
            description="Explore LEBCO's range of practical hardware solutions. Select any product to view details and specifications."
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
                onClick={() => setActiveCategory(cat)}
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
        <div className="mt-6">
          <ProductGrid products={filteredProducts} />
        </div>
      </section>

      {/* Warranty at a Glance */}
      <section className="border-t border-border bg-catalogue-panel py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2">
            <ShieldCheck className="size-6 text-accent-strong" />
            <h2 className="text-2xl font-semibold text-foreground">Warranty at a Glance</h2>
          </div>
          <p className="mb-6 max-w-2xl text-sm text-muted-foreground">
            LEBCO hardware products are tested for long-lasting durability. Overview of manufacturer warranty periods across our product lineup:
          </p>

          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-catalogue-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th scope="col" className="px-5 py-3.5 font-semibold text-foreground">
                      Product Name
                    </th>
                    <th scope="col" className="px-5 py-3.5 font-semibold text-foreground">
                      Category
                    </th>
                    <th scope="col" className="px-5 py-3.5 font-semibold text-foreground">
                      Warranty Period
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {warrantyList.map((item, idx) => (
                    <tr
                      key={item.product}
                      className={`border-b border-border last:border-b-0 ${
                        idx % 2 === 1 ? "bg-muted/30" : ""
                      }`}
                    >
                      <td className="px-5 py-3.5 font-medium text-foreground">{item.product}</td>
                      <td className="px-5 py-3.5 text-muted-foreground">{item.category}</td>
                      <td className="px-5 py-3.5 font-medium text-accent-strong">{item.warranty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
