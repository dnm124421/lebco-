import heroHardware from "@/assets/hero/hardware-showcase.jpg";
import antiSlipMattImage from "@/assets/products/anti-slip-matt/hero.jpg";
import bedFittingImage from "@/assets/products/bed-fitting/hero.jpg";
import magicCornerImage from "@/assets/products/magic-corner/hero.jpg";
import pantryImage from "@/assets/products/pantry/hero.jpg";
import pulloutImage from "@/assets/products/pullout/hero.jpg";
import pulloutWireImage from "@/assets/products/pullout/wire.jpg";
import pvcCutleryImage from "@/assets/products/pvc-cutlery/hero.jpg";
import tableBracketImage from "@/assets/products/table-bracket/hero.jpg";
import tableBracketInstalledImage from "@/assets/products/table-bracket/installed.jpg";
import thaliStandImage from "@/assets/products/thali-stand/hero.jpg";
import wickerBasketImage from "@/assets/products/wicker-basket/hero.jpg";
import tandemImage from "@/assets/products/tandem/hero.jpg";
import channelImage from "@/assets/products/channel/hero.jpg";
import model202Image from "@/assets/products/model-202/hero.jpg";
import twoDHingesImage from "@/assets/products/2d/hero.jpg";
import threeDHingesImage from "@/assets/products/3d/hero.jpg";
import threeDBlackImage from "@/assets/products/3d/black-3d.jpg";
import threeDBlackCatImage from "@/assets/products/3d/black-3d-cat.jpg";
import shortArmImage from "@/assets/products/short-arm/hero.jpg";
import shortArmRealImage from "@/assets/products/short-arm/real.jpg";
import shortArm304Image from "@/assets/products/short-arm/304.jpg";

export const businessInfo = {
  company: "LEBCO",
  tagline: "Hardware Solutions for Modern Spaces",
  phone: "+91 95187 65434",
  secondaryPhone: "+91 90236 38770",
  phoneHref: "tel:+919518765434",
  secondaryPhoneHref: "tel:+919023638770",
  whatsapp: "+91 79772 68987",
  whatsappNumber: "917977268987",
  email: "lebcohardware.marketing@gmail.com",
  emailHref: "mailto:lebcohardware.marketing@gmail.com",
  address:
    "Dharam Phase 2 Complex, Ground Floor, Gala No. 12, Near by Vell Garam Pasayad, Bhiwandi, Pin - 421 308",
  footerAddress:
    "Dharam Phase 2 Complex, Ground Floor, Gala No. 12, Near by Vell Garam Pasayad, Bhiwandi, 421 308",
  hours: "10:00 AM – 7:00 PM",
};

export const heroImage = heroHardware;

export function whatsappHref(productName?: string) {
  const text = productName
    ? `Hello LEBCO, I am interested in ${productName}. Please share more details.`
    : "Hello LEBCO, I would like to enquire about your hardware products.";

  return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export type SpecRow = {
  label: string;
  value: string;
};

export type SpecTable = {
  title: string;
  rows: SpecRow[];
};

export type HighlightCard = {
  label: string;
  value: string;
};

export type TableGrid = {
  title?: string;
  headers: string[];
  rows: (string | boolean)[][];
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProductCategory =
  | "Drawer Systems"
  | "Hinges"
  | "Kitchen Storage"
  | "Furniture Fittings"
  | "Accessories";

export type Product = {
  slug: string;
  name: string;
  title?: string;
  category: ProductCategory;
  image: string;
  gallery?: GalleryItem[];
  cardSummary: string;
  description: string;
  warranty?: string;
  packing?: string;
  highlights?: HighlightCard[];
  features?: string[];
  specifications?: SpecTable[];
  variantsTables?: TableGrid[];
  relatedSlugs: string[];
  featured?: boolean;
  // Specific fields for hinges preservation:
  cardDescription?: string;
  sizes?: string[];
  materials?: string[];
  colours?: string[];
  packageContents?: string;
  keySpecification?: string;
};

export const products: Product[] = [
  {
    slug: "thali-stand",
    name: "Thali, Plate and Saucer Stand",
    title: "Kitchen Cabinet Organising Inserts",
    category: "Kitchen Storage",
    image: thaliStandImage,
    cardSummary: "Stand inserts for thali, plates and saucers. 18\", 20\" and 22\".",
    description: "Stand inserts for thali, plates and saucers designed for practical and neat kitchen cabinet organisation.",
    packing: "5 pcs / box",
    highlights: [
      { label: "Types Available", value: "Saucer, Plate & Thali" },
      { label: "Available Sizes", value: "18\", 20\", 22\"" },
      { label: "Trade Packing", value: "5 pcs / box" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Types Available", value: "Saucer Stand, Plate Stand, Thali Stand" },
          { label: "Available Sizes", value: "18\", 20\", 22\"" },
          { label: "Packing", value: "5 pcs / box" },
        ],
      },
    ],
    variantsTables: [
      {
        title: "Size & Packing Details",
        headers: ["Size", "Qty per Box"],
        rows: [
          ["18\"", "5 pcs"],
          ["20\"", "5 pcs"],
          ["22\"", "5 pcs"],
        ],
      },
    ],
    relatedSlugs: ["pvc-cutlery", "tandem", "anti-slip-matt"],
    featured: false,
  },
  {
    slug: "pvc-cutlery",
    name: "PVC Cutlery Tray (Grey PVC / Anti-skid Matt Dark Grey)",
    title: "Modular Kitchen Drawer Cutlery Organizer",
    category: "Kitchen Storage",
    image: pvcCutleryImage,
    warranty: "5 Years Warranty",
    cardSummary: "Grey PVC cutlery tray for 450 to 900 mm drawers. Cut-to-size and full-size models.",
    description: "Grey PVC cutlery tray for 450 to 900 mm drawers in cut-to-size and full-size models with 55 mm tray height.",
    highlights: [
      { label: "Tray Height", value: "55 mm" },
      { label: "Finishes", value: "Grey PVC / Anti-skid Matt Dark Grey" },
      { label: "Models", value: "Cut Size & Full Size" },
      { label: "Warranty", value: "5 Years Warranty" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Finish", value: "Grey PVC / anti-skid matt dark grey" },
          { label: "Tray Height", value: "55 mm" },
          { label: "Models", value: "Cut Size and Full Size" },
          { label: "Drawer Sizes", value: "450 mm to 900 mm" },
          { label: "Warranty", value: "5 Years" },
        ],
      },
    ],
    variantsTables: [
      {
        title: "Cut Size Model",
        headers: ["Size", "Width", "Depth"],
        rows: [
          ["450 mm", "390 mm", "480 mm"],
          ["500 mm", "430 mm", "480 mm"],
          ["600 mm", "530 mm", "480 mm"],
          ["700 mm", "630 mm", "480 mm"],
          ["800 mm", "730 mm", "480 mm"],
          ["900 mm", "830 mm", "480 mm"],
        ],
      },
      {
        title: "Full Size Model",
        headers: ["Size", "Width", "Depth"],
        rows: [
          ["450 mm", "450 mm", "535 mm"],
          ["500 mm", "500 mm", "535 mm"],
          ["600 mm", "600 mm", "535 mm"],
          ["700 mm", "700 mm", "535 mm"],
          ["800 mm", "800 mm", "535 mm"],
          ["900 mm", "900 mm", "535 mm"],
        ],
      },
    ],
    relatedSlugs: ["tandem", "anti-slip-matt", "thali-stand"],
    featured: false,
  },
  {
    slug: "pullout",
    name: "Bottle Pullout (Glass / Flatline)",
    title: "2-Layer & 3-Layer Kitchen Storage Pullout System",
    category: "Kitchen Storage",
    image: pulloutImage,
    gallery: [
      { src: pulloutWireImage, alt: "LEBCO Bottle Pullout Flatline Basket Variant", caption: "Flatline Basket Variant" },
    ],
    warranty: "5 Years Warranty",
    cardSummary: "Glass or flatline bottle pullout. 2 and 3 layer. Cabinet widths 200, 250, 300 mm.",
    description: "Glass or flatline bottle pullout in 2 and 3 layer formats for cabinet widths 200 mm, 250 mm, and 300 mm.",
    highlights: [
      { label: "Styles", value: "Glass / Flatline" },
      { label: "Layers", value: "2 & 3 Layer Configurations" },
      { label: "Cabinet Widths", value: "200, 250, 300 mm" },
      { label: "Warranty", value: "5 Years Warranty" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Styles", value: "Glass / Flatline" },
          { label: "Layers Available", value: "2 Layer and 3 Layer" },
          { label: "Cabinet Widths", value: "200 mm, 250 mm, 300 mm" },
          { label: "200 mm Basket Size", value: "18.5\" L x 4.5\" W" },
          { label: "250 mm Basket Size", value: "18.5\" L x 6\" W" },
          { label: "300 mm Basket Size", value: "18.5\" L x 8\" W" },
          { label: "Warranty", value: "5 Years" },
        ],
      },
    ],
    variantsTables: [
      {
        title: "2 Layer Dimensions (mm)",
        headers: ["Cabinet T", "Width", "Depth", "Height"],
        rows: [
          ["200 mm", "164 mm", "500 mm", "500 mm"],
          ["250 mm", "214 mm", "500 mm", "500 mm"],
          ["300 mm", "264 mm", "500 mm", "500 mm"],
        ],
      },
      {
        title: "3 Layer Dimensions (mm)",
        headers: ["Cabinet T", "Width", "Depth", "Height"],
        rows: [
          ["200 mm", "164 mm", "500 mm", "600 mm"],
          ["250 mm", "214 mm", "500 mm", "600 mm"],
          ["300 mm", "264 mm", "500 mm", "600 mm"],
        ],
      },
    ],
    relatedSlugs: ["pantry", "magic-corner", "wicker-basket"],
    featured: false,
  },
  {
    slug: "pantry",
    name: "Pantry Unit (Glass / Flatline)",
    title: "Tall Pantry Pullout Storage Unit",
    category: "Kitchen Storage",
    image: pantryImage,
    warranty: "5 Years Warranty",
    cardSummary: "Tall pantry pullout. 6 ft (6 layers) and 4 ft (4 layers). 450 and 600 mm cabinets.",
    description: "Tall pantry pullout unit in Glass and Flatline styles across 6 ft (6 layers) and 4 ft (4 layers) for 450 mm and 600 mm cabinets.",
    highlights: [
      { label: "Styles", value: "Glass / Flatline" },
      { label: "Height Options", value: "6 ft (6 Layers) & 4 ft (4 Layers)" },
      { label: "Cabinets", value: "450 mm & 600 mm" },
      { label: "Warranty", value: "5 Years Warranty" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Styles", value: "Glass / Flatline" },
          { label: "Heights Available", value: "6 ft (1820 mm) & 4 ft (1200 mm)" },
          { label: "Layer Configurations", value: "6 Layers (6 ft) / 4 Layers (4 ft)" },
          { label: "Cabinet Widths", value: "450 mm, 600 mm" },
          { label: "Cabinet Requirement (6 ft)", value: "Minimum 550 mm depth and minimum 1830 mm height" },
          { label: "Warranty", value: "5 Years" },
        ],
      },
    ],
    variantsTables: [
      {
        title: "Available Sizes & Configurations (mm)",
        headers: ["Cabinet T", "Width", "Depth", "Height", "Layers"],
        rows: [
          ["450 mm", "414 mm", "510 mm", "1820 mm (6 ft)", "6 layers"],
          ["600 mm", "564 mm", "510 mm", "1820 mm (6 ft)", "6 layers"],
          ["450 mm", "414 mm", "510 mm", "1200 mm (4 ft)", "4 layers"],
          ["600 mm", "564 mm", "510 mm", "1200 mm (4 ft)", "4 layers"],
        ],
      },
    ],
    relatedSlugs: ["pullout", "magic-corner", "wicker-basket"],
    featured: true,
  },
  {
    slug: "anti-slip-matt",
    name: "Anti Skid Drawer Mat",
    title: "Protective Surface Grip Roll for Drawers & Cabinets",
    category: "Accessories",
    image: antiSlipMattImage,
    cardSummary: "Anti-skid drawer mat roll. 500 and 550 mm wide, 5 m rolls.",
    description: "Anti-skid drawer mat roll in 500 mm and 550 mm widths, supplied in 5 m rolls.",
    packing: "10 pcs / box",
    highlights: [
      { label: "Roll Length", value: "5 m" },
      { label: "Width Options", value: "500 mm & 550 mm" },
      { label: "Trade Packing", value: "10 pcs / box" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Roll Length", value: "5 m" },
          { label: "Widths Available", value: "500 mm, 550 mm" },
          { label: "Packing", value: "10 pcs / box" },
        ],
      },
    ],
    variantsTables: [
      {
        title: "Size & Packing Details",
        headers: ["Size", "Length", "Qty per Box"],
        rows: [
          ["500 mm", "5 m", "10 pcs"],
          ["550 mm", "5 m", "10 pcs"],
        ],
      },
    ],
    relatedSlugs: ["pvc-cutlery", "tandem", "thali-stand"],
    featured: false,
  },
  {
    slug: "magic-corner",
    name: "Universal Magic Corner (Glass / Flatline)",
    title: "Universal Soft Close Corner Storage Organizer",
    category: "Kitchen Storage",
    image: magicCornerImage,
    warranty: "5 Years Warranty",
    cardSummary: "Universal corner unit for 800-900 mm cabinets. 20 kg load, 5 kg per basket recommended.",
    description: "Universal corner unit for 800-900 mm cabinets in Glass and Flatline styles. 20 kg total load capacity, maximum 5 kg per basket recommended.",
    highlights: [
      { label: "Styles", value: "Glass / Flatline" },
      { label: "Load Capacity", value: "20 kg total (5 kg / basket recommended)" },
      { label: "Cabinet Range", value: "800 - 900 mm" },
      { label: "Warranty", value: "5 Years Warranty" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Styles", value: "Glass / Flatline" },
          { label: "Cabinet T", value: "800-900 mm" },
          { label: "Width", value: "660 mm" },
          { label: "Depth", value: "520 mm" },
          { label: "Height", value: "620 mm" },
          { label: "Door Opening", value: "350-400 mm" },
          { label: "Load Capacity", value: "20 kg total; maximum 5 kg per basket recommended" },
          { label: "Cabinet Requirement", value: "Minimum 500 mm and minimum 368 mm clearances" },
          { label: "Warranty", value: "5 Years" },
        ],
      },
    ],
    variantsTables: [
      {
        title: "Dimensions & Clearances",
        headers: ["Cabinet T", "Width", "Depth", "Height", "Door Opening"],
        rows: [
          ["800-900 mm", "660 mm", "520 mm", "620 mm", "350-400 mm"],
        ],
      },
    ],
    relatedSlugs: ["pullout", "pantry", "wicker-basket"],
    featured: true,
  },
  {
    slug: "wicker-basket",
    name: "Wicker Basket (PVC)",
    title: "Ventilated Modular Kitchen Storage Baskets",
    category: "Kitchen Storage",
    image: wickerBasketImage,
    warranty: "5 Years Warranty",
    cardSummary: "PVC wicker basket, Premium and Regular. 450 and 600 mm cabinets.",
    description: "PVC wicker basket available in Premium and Regular variants for 450 mm and 600 mm cabinets.",
    highlights: [
      { label: "Material", value: "PVC Wicker" },
      { label: "Variants", value: "Premium & Regular" },
      { label: "Cabinets", value: "450 mm & 600 mm" },
      { label: "Warranty", value: "5 Years Warranty" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Variants", value: "Premium, Regular" },
          { label: "Cabinet Widths", value: "450 mm, 600 mm" },
          { label: "Heights Available", value: "100 mm, 150 mm, 200 mm" },
          { label: "Depth", value: "500 mm" },
          { label: "Warranty", value: "5 Years" },
        ],
      },
    ],
    variantsTables: [
      {
        title: "Available Sizes (mm)",
        headers: ["Size", "Width", "Depth", "Height"],
        rows: [
          ["450 mm", "414 mm", "500 mm", "100 mm"],
          ["450 mm", "414 mm", "500 mm", "150 mm"],
          ["450 mm", "414 mm", "500 mm", "200 mm"],
          ["600 mm", "564 mm", "500 mm", "100 mm"],
          ["600 mm", "564 mm", "500 mm", "150 mm"],
          ["600 mm", "564 mm", "500 mm", "200 mm"],
        ],
      },
    ],
    relatedSlugs: ["channel", "pantry", "pvc-cutlery"],
    featured: true,
  },
  {
    slug: "bed-fitting",
    name: "Bed Fitting (Lift-up)",
    title: "Heavy-Duty Lift-Up Storage Bed Mechanism",
    category: "Furniture Fittings",
    image: bedFittingImage,
    warranty: "Lifetime Warranty",
    cardSummary: "Lift-up bed fitting. 17\" pump, 100 to 250 kg capacity. Lifetime warranty.",
    description: "Lift-up bed fitting featuring a 17\" pump with 100 to 250 kg capacity and lifetime warranty.",
    packing: "4 pcs / box",
    highlights: [
      { label: "Pump Size", value: "17\"" },
      { label: "Capacities", value: "100 to 250 kg" },
      { label: "Trade Packing", value: "4 pcs / box" },
      { label: "Warranty", value: "Lifetime Warranty" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Mechanism", value: "Lift-up bed fitting" },
          { label: "Pump Size", value: "17\"" },
          { label: "Weight Capacities", value: "100 kg, 125 kg, 150 kg, 175 kg, 200 kg, 225 kg, 250 kg" },
          { label: "Packing", value: "4 pcs / box" },
          { label: "Warranty", value: "Lifetime Warranty" },
        ],
      },
    ],
    variantsTables: [
      {
        title: "Models & Box Quantities",
        headers: ["Model", "Qty per Box"],
        rows: [
          ["5 mm 5 ft Heavy", "4 pcs"],
          ["4 mm 4 ft Heavy", "4 pcs"],
          ["4 mm 3 ft Heavy", "4 pcs"],
        ],
      },
    ],
    relatedSlugs: ["table-bracket", "channel", "tandem"],
    featured: false,
  },
  {
    slug: "table-bracket",
    name: "Table Bracket (Folding)",
    title: "Wall-Mounted Folding Table & Shelf Support Bracket",
    category: "Furniture Fittings",
    image: tableBracketImage,
    gallery: [
      { src: tableBracketInstalledImage, alt: "LEBCO Folding Table Bracket Installed Mechanism", caption: "90° Folding Wall Support" },
    ],
    warranty: "5 Years Warranty",
    cardSummary: "Wall-mounted folding bracket. 12\" to 24\" sizes.",
    description: "Wall-mounted folding bracket in 12\" to 24\" sizes with smooth lift-up and drop-down movement and reliable locking and unlocking.",
    features: [
      "Wall-mounted self-bracket mechanism",
      "Space-saving model",
      "Easy installation",
      "Smooth lift-up and drop-down movement",
      "Reliable locking and unlocking",
      "Optimal product weight for easy mobility",
    ],
    highlights: [
      { label: "Mechanism", value: "Wall-Mounted Self-Bracket" },
      { label: "Sizes", value: "12\" to 24\"" },
      { label: "Operation", value: "Smooth Lift-Up & Drop-Down" },
      { label: "Warranty", value: "5 Years Warranty" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Mechanism", value: "Wall-mounted self-bracket mechanism" },
          { label: "Movement", value: "Smooth lift-up and drop-down movement" },
          { label: "Locking", value: "Reliable locking and unlocking" },
          { label: "Sizes Available", value: "12\", 14\", 16\", 18\", 20\", 24\"" },
          { label: "Warranty", value: "5 Years" },
        ],
      },
    ],
    variantsTables: [
      {
        title: "Sizes & Box Quantities",
        headers: ["Size (inch)", "Size (mm)", "Qty per Box"],
        rows: [
          ["12\"", "300 mm", "20 sets"],
          ["14\"", "355 mm", "20 sets"],
          ["16\"", "400 mm", "16 sets"],
          ["18\"", "400 mm", "16 sets"],
          ["20\"", "500 mm", "12 sets"],
          ["24\"", "600 mm", "16 sets"],
        ],
      },
    ],
    relatedSlugs: ["bed-fitting", "tandem", "anti-slip-matt"],
    featured: true,
  },
  {
    slug: "tandem",
    name: "Slim Tandem Box",
    title: "Soft-Close, Full Extension Tandem Drawer System",
    category: "Drawer Systems",
    image: tandemImage,
    warranty: "5 Years Warranty",
    cardSummary: "Soft-close, full extension tandem drawer system. Up to 45 kg. 12\" to 24\" depths.",
    description: "Soft-close, full extension tandem drawer system rated up to 45 kg across 12\" to 24\" depths.",
    features: [
      "Full extension slides",
      "High load capacity up to 45 kg",
      "Smooth and silent mechanism",
      "Panel up/down adjustment of +/- 2 mm",
      "Clip-on installation",
    ],
    highlights: [
      { label: "Load Capacity", value: "Up to 45 kg" },
      { label: "Mechanism", value: "Soft-Close Full Extension" },
      { label: "Panel Adjustment", value: "+/- 2 mm" },
      { label: "Warranty", value: "5 Years Warranty" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Load capacity", value: "Up to 45 kg" },
          { label: "Panel adjustment", value: "+/- 2 mm" },
          { label: "Installation", value: "Clip-on" },
          { label: "Warranty", value: "5 Years" },
        ],
      },
    ],
    variantsTables: [
      {
        title: "Height Codes & Packing",
        headers: ["Height Code", "Height", "Packing"],
        rows: [
          ["Code 4", "88 mm", "6 sets/box"],
          ["Code 6", "120 mm", "6 sets/box"],
          ["Code 8", "168 mm", "6 sets/box"],
          ["Code 10", "199 mm", "5 sets/box"],
        ],
      },
      {
        title: "Availability Matrix (Depth x Height)",
        headers: ["Depth", "88 mm (Code 4)", "120 mm (Code 6)", "168 mm (Code 8)", "199 mm (Code 10)"],
        rows: [
          ["12\" (300 mm)", true, true, true, false],
          ["14\" (350 mm)", true, true, true, false],
          ["16\" (400 mm)", true, true, true, false],
          ["18\" (450 mm)", true, true, true, true],
          ["20\" (500 mm)", true, true, true, true],
          ["22\" (550 mm)", true, true, true, true],
          ["24\" (600 mm)", true, true, true, true],
        ],
      },
    ],
    relatedSlugs: ["channel", "anti-slip-matt", "pvc-cutlery"],
    featured: false,
  },
  {
    slug: "channel",
    name: "Telescopic Channel (Regular and Soft Close)",
    title: "Full Extension Ball-Bearing Drawer Slides",
    category: "Drawer Systems",
    image: channelImage,
    warranty: "10 Years Warranty",
    cardSummary: "Full extension ball-bearing channel. Up to 45 kg. Regular and soft close.",
    description: "Full extension ball-bearing channel rated up to 45 kg in regular and soft close variants.",
    packing: "15 sets/box",
    features: [
      "Big nylon lock for better grip, designed to reduce noise while the drawer opens and closes",
      "2-ball cage for heavy-duty, smooth long-term running",
      "High-carbon MS balls for durable, smooth flow",
      "European anti-rust coating",
      "1,00,000 cycle tested",
      "1.2 x 1.2 x 1.2 mm thick material gives high load capacity up to 45 kg",
      "Anti-rust ball bearing",
      "Extra heavy and full extension",
    ],
    highlights: [
      { label: "Load Capacity", value: "Up to 45 kg" },
      { label: "Cycle Testing", value: "1,00,000 Cycles" },
      { label: "Packing", value: "15 sets/box" },
      { label: "Warranty", value: "10 Years Warranty" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Load Capacity", value: "Up to 45 kg" },
          { label: "Finishes", value: "Black and Zinc (soft close version: Zinc only)" },
          { label: "Variants", value: "35 kg (55 gm) | 45 kg (72 gm) | 45 kg Soft Close (Zinc only)" },
          { label: "Testing", value: "1,00,000 cycle tested" },
          { label: "Material Thickness", value: "1.2 x 1.2 x 1.2 mm" },
          { label: "Packing", value: "15 sets/box" },
          { label: "Warranty", value: "10 Years" },
        ],
      },
    ],
    variantsTables: [
      {
        title: "Availability by Size & Variant",
        headers: ["Size", "35 kg (55 gm)", "45 kg (72 gm)", "45 kg Soft Close (Zinc only)"],
        rows: [
          ["10\" (250 mm)", true, true, false],
          ["12\" (300 mm)", true, true, true],
          ["14\" (350 mm)", true, true, true],
          ["16\" (400 mm)", true, true, true],
          ["18\" (450 mm)", true, true, true],
          ["20\" (500 mm)", true, true, true],
          ["22\" (550 mm)", true, true, true],
          ["24\" (600 mm)", true, true, true],
        ],
      },
    ],
    relatedSlugs: ["tandem", "anti-slip-matt", "wicker-basket"],
    featured: false,
  },
  // HINGES ARE OFF-LIMITS - Exact preservation character-for-character
  {
    slug: "model-202",
    name: "Model 202",
    category: "Hinges",
    image: model202Image,
    cardDescription: "Soft close hinge model 202, MS material, 160 grams.",
    cardSummary: "Soft close hinge model 202, MS material, 160 grams.",
    description: "Model 202 is a soft close hinge made from MS (Mild Steel). Lightweight at 160 grams with reliable soft close mechanism.",
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Weight", value: "160 grams" },
          { label: "Material", value: "MS" },
          { label: "Type", value: "Soft Close" },
        ],
      },
    ],
    relatedSlugs: ["channel"],
    featured: false,
  },
  {
    slug: "2d-ss",
    name: "2D Hydraulic Auto Hinges",
    title: "Model LB-102 | Soft Close Hydraulic Clip-On & Fix Variants (180g & 220g)",
    category: "Hinges",
    image: twoDHingesImage,
    cardDescription: "Model LB-102 soft close hydraulic clip-on & fix hinges in 180g & 220g (MS & SS).",
    cardSummary: "Model LB-102 soft close hydraulic clip-on & fix hinges in 180g & 220g (MS & SS).",
    description: "LEBCO 2D Hydraulic Auto Hinges (Model LB-102) deliver smooth hydraulic damping and silent, controlled cabinet door closing. Built with precision two-way adjustment (height and overlay alignment), available in 180 grams and 220 grams weight options, in Clip-On and Fix mounting styles across Mild Steel (MS) and Stainless Steel (SS) options. Tested for durable performance in modern kitchens and furniture.",
    features: [
      "Hydraulic Soft-Close Damper (Smooth & Silent)",
      "2-Way Alignment Adjustment (Vertical & Depth)",
      "Two Weight Grades: 180 Grams & 220 Grams (Heavy-Duty)",
      "Clip-On Quick Release & Fix Mounting Plate Options",
      "0° (Full Overlay) & 8° (Half Overlay) Crank Angles",
      "Corrosion-Resistant Nickel Plating / SS Polish",
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Model Number", value: "LB-102" },
          { label: "Weight Options", value: "180 grams & 220 grams" },
          { label: "Mechanism", value: "Hydraulic Soft Close (Clip On / Fix)" },
          { label: "Types / Overlays", value: "0° (Full Overlay), 8° (Half Overlay)" },
          { label: "Material", value: "Mild Steel (MS) / Stainless Steel (SS)" },
          { label: "Standard Packing", value: "100 Sets (Per Carton)" },
          { label: "Finish", value: "Nickel Plated / SS Polished" },
        ],
      },
    ],
    materials: ["Mild Steel (MS)", "Stainless Steel (SS)"],
    colours: ["Nickel Plated Silver", "SS Mirror Polish"],
    sizes: ["0° Full Overlay", "8° Half Overlay", "180g", "220g"],
    packageContents: "Hinge pair + Mounting Plates + Screws (100 Sets / Carton)",
    relatedSlugs: ["channel"],
    featured: false,
  },
  {
    slug: "3d",
    name: "3D Auto Hinges",
    title: "Models LB-103 (Silver MS/SS) & LB-105 (Matte Black 3D) | 250g Heavy-Duty Soft Close",
    category: "Hinges",
    image: threeDHingesImage,
    gallery: [
      { src: threeDBlackImage, alt: "LEBCO Black 3D Auto Hinge", caption: "Matte Black Luxury 3D" },
      { src: threeDBlackCatImage, alt: "LEBCO Black 3D Hinge Catalogue Details", caption: "LB-105 Details" },
    ],
    cardDescription: "Model LB-103 & LB-105 (250g) with 3-way eccentric cam adjustment in Silver & Matte Black.",
    cardSummary: "Model LB-103 & LB-105 (250g) with 3-way eccentric cam adjustment in Silver & Matte Black.",
    description: "LEBCO 3D Hydraulic Auto Hinges deliver state-of-the-art 3-way eccentric cam adjustment (height, depth, and side alignment) for seamless cabinet door alignment without removing the hinge. Built with an ultra-heavy 250 grams chassis, available in classic Silver Nickel/SS (Model LB-103) and premium Matte Black 3D finish (Model LB-105). Designed for high-end modular kitchens and designer cabinetry.",
    features: [
      "3-Way Eccentric Cam 3D Adjustment (Height, Depth & Lateral)",
      "Heavy-Duty 250 Grams Solid Steel Construction",
      "Premium Integrated Hydraulic Soft-Close Piston",
      "Available in Classic Silver & Luxury Matte Black (LB-105)",
      "Clip-On Base Plate for Quick Tool-Free Installation",
      "0° (Full Overlay) & 8° (Half Overlay) Configurations",
    ],
    specifications: [
      {
        title: "3D Auto Hinges (Model LB-103)",
        rows: [
          { label: "Model Number", value: "LB-103" },
          { label: "Weight", value: "250 grams" },
          { label: "Mechanism", value: "Hydraulic Soft Close (3-Way Adjustment)" },
          { label: "Material", value: "Mild Steel (MS) / Stainless Steel (SS)" },
          { label: "Types / Angles", value: "0° (Full Overlay), 8° (Half Overlay)" },
          { label: "Standard Packing", value: "100 Sets (Per Carton)" },
          { label: "Finish", value: "Nickel Plated / Chrome / SS Polished" },
        ],
      },
      {
        title: "3D Black Auto Hinges (Model LB-105)",
        rows: [
          { label: "Model Number", value: "LB-105 (Black 3D)" },
          { label: "Weight", value: "250 grams" },
          { label: "Mechanism", value: "Hydraulic Soft Close (3-Way Adjustment)" },
          { label: "Material", value: "Mild Steel (MS)" },
          { label: "Finish / Colour", value: "Matte Black Luxury Coating" },
          { label: "Types / Angles", value: "0° (Full Overlay), 8° (Half Overlay)" },
          { label: "Standard Packing", value: "100 Sets (Per Carton)" },
        ],
      },
    ],
    materials: ["Heavy MS", "Stainless Steel Grade (LB-103)"],
    colours: ["Silver Nickel", "Matte Black (LB-105 Exclusive)"],
    sizes: ["0° Full Overlay", "8° Half Overlay", "250 Grams"],
    packageContents: "100 Sets per Master Carton",
    relatedSlugs: ["channel"],
    featured: false,
  },
  {
    slug: "short-arm",
    name: "Short Arm Hydraulic Hinges",
    title: "Model LB-104 | Grade SS 304 Stainless Steel Soft Close (125g)",
    category: "Hinges",
    image: shortArmImage,
    gallery: [
      { src: shortArmRealImage, alt: "LEBCO Short Arm SS 304 Real Hinge", caption: "SS 304 Soft Close" },
      { src: shortArm304Image, alt: "Grade 304 Stainless Steel Short Arm", caption: "Grade 304 Heavy Duty" },
    ],
    cardDescription: "Model LB-104 (125g) Grade SS 304 compact soft-close cabinet hinges (0° & 8°).",
    cardSummary: "Model LB-104 (125g) Grade SS 304 compact soft-close cabinet hinges (0° & 8°).",
    description: "LEBCO Short Arm Hydraulic Hinges (Model LB-104) are specially designed for compact cabinet profiles, narrow face frames, bathroom vanities, and tight modular cabinetry where standard long-arm hinges cannot fit. Forged from genuine Grade 304 Stainless Steel (SS 304) with high anti-rust performance in humid kitchen and bathroom environments. Weighs 125 grams per piece with integrated hydraulic soft-close damping.",
    features: [
      "Compact Short-Arm Design for Narrow Frames & Shallow Cabinets",
      "Genuine Food-Grade SS 304 Stainless Steel Construction",
      "Built-in Hydraulic Soft Close Mechanism",
      "125 Grams Engineered Solid Weight",
      "Rust-Proof & Moisture-Proof for Kitchens & Bathrooms",
      "0° (Full Overlay) & 8° (Half Overlay) Variants Available",
      "Universal Mounting Holes with Heavy Screw Grip",
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Model Number", value: "LB-104" },
          { label: "Product Type", value: "Short Arm Hydraulic Hinge" },
          { label: "Material", value: "Stainless Steel Grade 304 (SS 304)" },
          { label: "Weight", value: "125 grams" },
          { label: "Mechanism", value: "Hydraulic Cylinder Soft Close" },
          { label: "Crank Angles", value: "0° (Full Overlay) & 8° (Half Overlay)" },
          { label: "Standard Packaging", value: "100 Sets (Per Carton)" },
          { label: "Finish", value: "Mirror SS 304 Polish" },
          { label: "Applications", value: "Compact Cabinets, Modular Kitchens, Narrow Frames, Vanities" },
        ],
      },
    ],
    materials: ["Stainless Steel Grade 304 (SS 304)"],
    colours: ["Mirror Polished SS 304"],
    sizes: ["0° Full Overlay", "8° Half Overlay", "125g Short Arm"],
    packageContents: "100 Sets per Carton + Screws",
    relatedSlugs: ["channel"],
    featured: false,
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
