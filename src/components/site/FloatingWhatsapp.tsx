import { MessageCircle } from "lucide-react";

import { whatsappHref } from "@/data/products";

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact LEBCO on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex size-12 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-catalogue whatsapp-pulse transition hover:-translate-y-0.5 hover:shadow-catalogue-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="pointer-events-none absolute right-14 hidden whitespace-nowrap rounded-md bg-foreground/90 px-2.5 py-1 text-xs font-medium text-background shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:inline-block">
        Chat on WhatsApp
      </span>
      <MessageCircle aria-hidden="true" className="size-6" />
    </a>
  );
}
