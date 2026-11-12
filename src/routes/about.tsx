import { createFileRoute, Link } from "@tanstack/react-router";
import { Bed, Boxes, LayoutGrid } from "lucide-react";

import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/data/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About LEBCO | Kitchen & Furniture Hardware" },
      {
        name: "description",
        content:
          "Learn about LEBCO, offering hinges, drawer systems, kitchen storage fittings and anti-skid drawer mats for modern interiors.",
      },
      { property: "og:title", content: "About LEBCO | Kitchen & Furniture Hardware" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content:
          "Learn about LEBCO, offering hinges, drawer systems, kitchen storage fittings and anti-skid drawer mats for modern interiors.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <section className="border-b border-border bg-catalogue-panel">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeader
            eyebrow="About LEBCO"
            title="Hardware Solutions for Modern Spaces"
            description="LEBCO supplies practical hardware solutions for kitchens, wardrobes, furniture and utility applications."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_0.3fr]">
          <div className="space-y-6 text-base leading-8 text-muted-foreground">
            <p>
              LEBCO offers hinges, drawer systems (tandem box and telescopic channel), kitchen storage fittings (bottle pullouts, pantry units, corner units, baskets, cutlery trays, thali and cup saucer stands and rolling shutters) and anti-skid drawer mats.
            </p>
            <p>
              The product catalogue provides trade-accurate dimensions, weight ratings, finishes, and carton packing quantities to help modular kitchen manufacturers, carpenters, and interior designers specify the right hardware with confidence.
            </p>
            <div className="pt-2">
              <Button asChild>
                <Link to="/products">Explore Complete Catalogue</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-lg border border-border bg-card p-5 shadow-catalogue-sm">
            <h2 className="text-lg font-semibold text-foreground">Applications</h2>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              {[
                {
                  icon: Boxes,
                  title: "Modular kitchens",
                  desc: "Tandem boxes, pantry units, magic corners, wicker baskets, cutlery trays, thali stands and rolling shutters",
                },
                {
                  icon: Bed,
                  title: "Wardrobes and bedroom furniture",
                  desc: "Cabinet hinges and telescopic channels",
                },
                {
                  icon: LayoutGrid,
                  title: "Drawer and cabinet organisation",
                  desc: "Anti-skid mats, cutlery trays and thali stands",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <item.icon aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent-strong" />
                  <div>
                    <span className="font-medium text-foreground">{item.title}:</span>{" "}
                    <span>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-catalogue-panel">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-card p-6 shadow-catalogue-sm">
            <h2 className="text-xl font-semibold text-foreground">Contact LEBCO</h2>
            <p className="mt-3 text-muted-foreground">Phone: {businessInfo.phone} / {businessInfo.secondaryPhone}</p>
            <p className="mt-2 text-muted-foreground">WhatsApp: {businessInfo.whatsapp}</p>
            <p className="mt-2 break-all text-muted-foreground">Email: {businessInfo.email}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
