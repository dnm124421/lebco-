import heroHardware from "@/assets/logo.png";
import antiSlipMattImage from "@/assets/products/anti-slip-matt/hero.jpg";
import magicCornerImage from "@/assets/products/magic-corner/hero.jpg";
import pantryImage from "@/assets/products/pantry/hero.jpg";
import pulloutImage from "@/assets/products/pullout/hero.jpg";
import pulloutWireImage from "@/assets/products/pullout/wire.jpg";
import pvcCutleryImage from "@/assets/products/pvc-cutlery/hero.jpg";
import thaliStandImage from "@/assets/products/thali-stand/hero.jpg";
import wickerBasketImage from "@/assets/products/wicker-basket/hero.jpg";
import tandemImage from "@/assets/products/tandem/hero.jpg";
import channelImage from "@/assets/products/channel/hero.jpg";
import twoDHingesImage from "@/assets/products/2d/2d-hinge-new.png";
import threeDHingesImage from "@/assets/products/3d/hero.jpg";
import shortArmImage from "@/assets/products/short-arm/hero.jpg";
import rollingShutterImage from "@/assets/products/rolling-shutter/rolling-shutter-hero.jpg";

export const businessInfo = {
  company: "LEBCO",
  tagline: "Hardware Solutions for Modern Spaces",
  phone: "+91 79772 68987",
  secondaryPhone: "+91 79772 68987",
  phoneHref: "tel:+917977268987",
  secondaryPhoneHref: "tel:+917977268987",
  whatsapp: "+91 79772 68987",
  whatsappNumber: "917977268987",
  email: "lebcohardware.marketing@gmail.com",
  emailHref: "mailto:lebcohardware.marketing@gmail.com",
  address:
    "Shop no. 02, BLDG no. 20, Hari Om APT PH-2, Ramchandra Nagar, Phoolpada Road, Vasai, Palghar, Vasai-Virar (East)",
  footerAddress:
    "Shop no. 02, BLDG no. 20, Hari Om APT PH-2, Ramchandra Nagar, Phoolpada Road, Vasai, Palghar, Vasai-Virar (East)",
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
  note?: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type ColorSwatch = {
  name: string;
  color: string;
  border?: boolean;
};

export type ProductCategory =
  | "Hinges"
  | "Drawer Systems"
  | "Kitchen Storage"
  | "Accessories";

export type Product = {
  slug: string;
  name: string;
  title?: string;
  category: ProductCategory;
  image: string;
  imageAlt: string;
  gallery?: GalleryItem[];
  cardSummary: string;
  description: string;
  warranty?: string;
  packing?: string;
  highlights?: HighlightCard[];
  features?: string[];
  specifications?: SpecTable[];
  variantsTables?: TableGrid[];
  swatches?: ColorSwatch[];
  relatedSlugs: string[];
  featured?: boolean;
  // Specific summary attributes:
  sizes?: string[];
  materials?: string[];
  colours?: string[];
  packageContents?: string;
  layoutVariant?: "standard" | "pvc-cutlery" | "thali-stand" | "hinge-summary";
};

export const products: Product[] = [
  // 1. 2D Hydraulic Auto Hinges
  {
    slug: "2d-ss",
    name: "2D Hydraulic Auto Hinges",
    title: "Soft Close Hydraulic Clip-On & Fix Variants (180g)",
    category: "Hinges",
    image: twoDHingesImage,
    imageAlt: "2D Hydraulic Auto Hinge with LEBCO marking",
    cardSummary:
      "Hydraulic soft-close clip-on and fix hinges in 180 g weight, with 0 degree full overlay and 8 degree half overlay.",
    description:
      "2D Hydraulic Auto Hinges are soft-close cabinet hinges with a built-in hydraulic damper that closes the door smoothly and silently. They are available in clip-on and fix mounting options, in Mild Steel (MS) and Stainless Steel (SS), with 0 degree (full overlay) and 8 degree (half overlay) crank angles. Each carton holds 100 sets supplied as hinge pair with mounting plates and screws.",
    features: [
      "Hydraulic Soft-Close Damper (Smooth and Silent)",
      "2-Way Alignment Adjustment (Vertical and Depth)",
      "Weight: 180 Grams (Heavy-Duty)",
      "Clip-On Quick Release and Fix Mounting Plate Options",
      "0 degree (Full Overlay) and 8 degree (Half Overlay) Crank Angles",
      "Corrosion-Resistant Nickel Plating / SS Polish",
    ],
    highlights: [
      { label: "Weight", value: "180 Grams" },
      { label: "Mechanism", value: "Hydraulic Soft Close" },
      { label: "Overlays", value: "0° & 8°" },
      { label: "Packaging", value: "100 Sets / Carton" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Weight", value: "180 grams" },
          { label: "Mechanism", value: "Hydraulic Soft Close (Clip On / Fix)" },
          { label: "Types / Overlays", value: "0 degree (Full Overlay), 8 degree (Half Overlay)" },
          { label: "Material", value: "Mild Steel (MS) / Stainless Steel (SS)" },
          { label: "Standard Packing", value: "100 Sets (Per Carton)" },
          { label: "Finish", value: "Nickel Plated / SS Polished" },
        ],
      },
    ],
    sizes: ["0 degree Full Overlay / 8 degree Half Overlay / 180g"],
    materials: ["MS", "SS"],
    colours: ["Nickel Plated Silver", "SS Mirror Polish"],
    packageContents: "Hinge pair + Mounting Plates + Screws (100 Sets / Carton)",
    layoutVariant: "hinge-summary",
    relatedSlugs: ["3d", "short-arm", "tandem"],
    featured: false,
  },

  // 2. 3D Auto Hinges
  {
    slug: "3d",
    name: "3D Auto Hinges",
    title: "3-Way Eccentric Cam Soft Close Hinges",
    category: "Hinges",
    image: threeDHingesImage,
    imageAlt: "3D Auto Hinges with 3-way eccentric cam adjustment in silver finish",
    cardSummary:
      "3D auto hinges with 3-way eccentric cam adjustment in silver finish.",
    description:
      "3D Auto Hinges are soft-close cabinet hinges with 3-way eccentric cam adjustment, so the door can be fine-tuned after installation. They are supplied in silver finish and carton packed for bulk orders.",
    features: [
      "3-Way Eccentric Cam 3D Adjustment (Height, Depth & Lateral)",
      "Heavy-Duty 250 Grams Solid Steel Construction",
      "Premium Integrated Hydraulic Soft-Close Piston",
      "Clip-On Base Plate for Quick Tool-Free Installation",
      "0 degree (Full Overlay) Configuration",
    ],
    highlights: [
      { label: "Weight", value: "250 Grams" },
      { label: "Adjustment", value: "3-Way Eccentric Cam" },
      { label: "Finish", value: "Silver Finish" },
      { label: "Packaging", value: "100 Sets / Carton" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Weight", value: "250 grams" },
          { label: "Mechanism", value: "Hydraulic Soft Close (3-Way Adjustment)" },
          { label: "Material", value: "Mild Steel (MS) / Stainless Steel (SS)" },
          { label: "Types / Angles", value: "0 degree (Full Overlay)" },
          { label: "Standard Packing", value: "100 Sets (Per Carton)" },
          { label: "Finish", value: "Nickel Plated / Chrome / SS Polished" },
        ],
      },
    ],
    sizes: ["0 degree Full Overlay / 250 Grams"],
    materials: ["Heavy MS", "Stainless Steel Grade"],
    colours: ["Silver Nickel"],
    packageContents: "100 Sets per Master Carton",
    layoutVariant: "hinge-summary",
    relatedSlugs: ["2d-ss", "short-arm", "magic-corner"],
    featured: false,
  },

  // 3. Short Arm Hydraulic Hinges
  {
    slug: "short-arm",
    name: "Short Arm Hydraulic Hinges",
    title: "Stainless Steel (SS) Soft Close (150g)",
    category: "Hinges",
    image: shortArmImage,
    imageAlt: "Short Arm Hydraulic Hinges compact cabinet hinge in stainless steel (SS)",
    cardSummary:
      "Compact short arm hydraulic soft-close hinge in stainless steel (SS), 150 g, 0 degree full overlay.",
    description:
      "Short Arm Hydraulic Hinges are compact soft-close hinges built in Stainless Steel (SS) with a hydraulic cylinder mechanism. At 150 grams they suit compact cabinets, modular kitchens, narrow frames and vanities, in 0 degree (full overlay). Each carton holds 100 sets with screws.",
    features: [
      "Compact Short-Arm Design for Narrow Frames & Shallow Cabinets",
      "Built-in Hydraulic Soft Close Mechanism",
      "150 Grams Engineered Solid Weight",
      "Rust-Proof and Moisture-Proof for Kitchens and Bathrooms",
      "0 degree (Full Overlay) Variant",
      "Universal Mounting Holes",
    ],
    highlights: [
      { label: "Weight", value: "150 Grams" },
      { label: "Material", value: "Stainless Steel (SS)" },
      { label: "Overlay", value: "0° (Full Overlay)" },
      { label: "Packaging", value: "100 Sets / Carton" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Product Type", value: "Short Arm Hydraulic Hinge" },
          { label: "Material", value: "Stainless Steel (SS)" },
          { label: "Weight", value: "150 grams" },
          { label: "Mechanism", value: "Hydraulic Cylinder Soft Close" },
          { label: "Crank Angle", value: "0 degree (Full Overlay)" },
          { label: "Standard Packaging", value: "100 Sets (Per Carton)" },
          { label: "Finish", value: "Mirror SS Polish" },
          { label: "Applications", value: "Compact Cabinets, Modular Kitchens, Narrow Frames, Vanities" },
        ],
      },
    ],
    sizes: ["0 degree Full Overlay / 150g Short Arm"],
    materials: ["Stainless Steel (SS)"],
    colours: ["Mirror Polished SS"],
    packageContents: "100 Sets per Carton + Screws",
    layoutVariant: "hinge-summary",
    relatedSlugs: ["2d-ss", "3d", "tandem"],
    featured: false,
  },

  // 4. Telescopic Channel (Regular and Soft Close)
  {
    slug: "channel",
    name: "Telescopic Channel (Regular and Soft Close)",
    title: "Full Extension Ball-Bearing Drawer Slides",
    category: "Drawer Systems",
    image: channelImage,
    imageAlt: "Telescopic Channel full extension ball-bearing drawer slides",
    cardSummary:
      "Full extension ball-bearing channel. Up to 45 kg. Regular and soft close. 10 years warranty.",
    description:
      "Telescopic Channel is an extra heavy, full extension ball-bearing drawer channel rated up to 45 kg, in regular and soft-close versions. A big nylon lock reduces noise, the 2-ball cage with high-carbon MS balls gives smooth long-term running, and the European anti-rust coating protects the finish. It is tested for 1,00,000 cycles and available in depths from 10 inch to 24 inch.",
    warranty: "10 Years Warranty",
    packing: "15 sets/box",
    features: [
      "Big nylon lock for better grip, designed to reduce noise while the drawer opens and closes",
      "2-ball cage for heavy duty and smooth running",
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
          { label: "Variants", value: "45 kg (72 gm) and 45 kg Soft Close (Zinc only)" },
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
        headers: ["Size", "45 kg (Black and Zinc)", "45 kg Soft Close (Zinc only)"],
        rows: [
          ['10" (250 mm)', true, false],
          ['12" (300 mm)', true, true],
          ['14" (350 mm)', true, true],
          ['16" (400 mm)', true, true],
          ['18" (450 mm)', true, true],
          ['20" (500 mm)', true, true],
          ['22" (550 mm)', true, true],
          ['24" (600 mm)', true, true],
        ],
      },
    ],
    relatedSlugs: ["tandem", "anti-slip-matt", "wicker-basket"],
    featured: false,
  },

  // 5. Slim Tandem Box
  {
    slug: "tandem",
    name: "Slim Tandem Box",
    title: "Soft-close, full extension tandem drawer system rated up to 45 kg across 16 inch to 24 inch depths.",
    category: "Drawer Systems",
    image: tandemImage,
    imageAlt: "Slim Tandem Box soft-close drawer system",
    cardSummary:
      "Soft-close, full extension tandem drawer system. Up to 45 kg. 16 inch to 24 inch depths.",
    description:
      "Slim Tandem Box is a soft-close, full extension tandem drawer system rated up to 45 kg. It comes in three heights (88, 116 and 168 mm) for 16 inch to 24 inch depths, with clip-on installation and 2 mm up/down panel adjustment for easy fitting and alignment.",
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
      { label: "Depths Available", value: '16" to 24"' },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Load capacity", value: "Up to 45 kg" },
          { label: "Panel adjustment", value: "+/- 2 mm" },
          { label: "Installation", value: "Clip-on" },
          { label: "Depths Available", value: '16", 18", 20", 22", 24"' },
        ],
      },
    ],
    variantsTables: [
      {
        title: "Height Codes & Packing",
        headers: ["Height Code", "Height", "Packing"],
        rows: [
          ["Code 4", "88 mm", "6 sets/box"],
          ["Code 6", "116 mm", "6 sets/box"],
          ["Code 8", "168 mm", "6 sets/box"],
        ],
      },
      {
        title: "Availability Matrix (Depth x Height)",
        headers: ["Depth", "88 mm (Code 4)", "116 mm (Code 6)", "168 mm (Code 8)"],
        rows: [
          ['16" (400 mm)', true, true, true],
          ['18" (450 mm)', true, true, true],
          ['20" (500 mm)', true, true, true],
          ['22" (550 mm)', true, true, true],
          ['24" (600 mm)', true, true, true],
        ],
      },
    ],
    relatedSlugs: ["channel", "anti-slip-matt", "pvc-cutlery"],
    featured: false,
  },

  // 6. Thali and Cup Saucer Stand
  {
    slug: "thali-stand",
    name: "Thali and Cup Saucer Stand",
    title: "Kitchen Cabinet Organising Inserts",
    category: "Kitchen Storage",
    image: thaliStandImage,
    imageAlt: "Thali and cup saucer stand inserts for kitchen cabinets",
    cardSummary:
      "Cup saucer and thali stand inserts in 18, 20, 22 and 24 inch sizes, 5 pcs per box.",
    description:
      "Stand inserts for cup saucers and thalis designed for practical and neat kitchen cabinet organisation. Available as Cup Saucer Stand and Thali Stand in 18 inch, 20 inch, 22 inch and 24 inch sizes, packed 5 pcs per box. Each stand keeps your crockery upright and separated so every piece is easy to pick up.",
    packing: "5 pcs / box",
    highlights: [
      { label: "Types Available", value: "Cup Saucer & Thali" },
      { label: "Available Sizes", value: '18", 20", 22", 24"' },
      { label: "Trade Packing", value: "5 pcs / box" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Types Available", value: "Cup Saucer Stand, Thali Stand" },
          { label: "Available Sizes", value: "18 inch, 20 inch, 22 inch, 24 inch" },
          { label: "Packing", value: "5 pcs / box" },
        ],
      },
    ],
    variantsTables: [
      {
        title: "Size & Packing Details",
        headers: ["Size", "Qty per Box"],
        rows: [
          ["18 inch", "5 pcs"],
          ["20 inch", "5 pcs"],
          ["22 inch", "5 pcs"],
          ["24 inch", "5 pcs"],
        ],
      },
    ],
    layoutVariant: "thali-stand",
    relatedSlugs: ["pvc-cutlery", "tandem", "anti-slip-matt"],
    featured: false,
  },

  // 7. PVC Cutlery Tray
  {
    slug: "pvc-cutlery",
    name: "PVC Cutlery Tray",
    title: "Modular Kitchen Drawer Cutlery Organizer",
    category: "Kitchen Storage",
    image: pvcCutleryImage,
    imageAlt: "PVC Cutlery Tray food-grade virgin PVC drawer organizer in grey high-gloss",
    cardSummary:
      "Food-grade virgin PVC cutlery tray in grey high-gloss finish. Widths 450 to 900 mm, depths 480 mm and 535 mm.",
    description:
      "PVC Cutlery Tray is made from 100% food-grade virgin PVC and is non-toxic, odour-free and easy to wipe clean. The multi-compartment layout keeps cutlery and utensils sorted, and trimmable edge flanges give a perfect fit in the drawer. Available in widths from 450 mm to 900 mm and in 480 mm and 535 mm depths, in a high-gloss mirror finish in designer grey. Standard packing is 10 pcs per carton.",
    packing: "10 pcs / carton",
    features: [
      "Wide Drawer Width Range: 450, 500, 600, 700, 800, 900 mm",
      "Dual Depth Compatibility: 480 mm and 535 mm",
      "100% Food-Grade Virgin PVC Material",
      "High-Gloss Mirror Finish in Designer Grey",
      "Non-Toxic, Odor-Free and Easy to Wipe Clean",
      "Multi-Compartment Layout for Cutlery and Utensils",
      "Trimmable Edge Flanges for Perfect Drawer Fit",
      "10 Pcs Standard Carton Packaging",
    ],
    highlights: [
      { label: "Width Range", value: "450 to 900 mm" },
      { label: "Depths", value: "480 mm & 535 mm" },
      { label: "Material", value: "Food-Grade Virgin PVC" },
      { label: "Standard Packing", value: "10 pcs / carton" },
    ],
    specifications: [
      {
        title: "General Specifications",
        rows: [
          { label: "Available Widths", value: "450mm, 500mm, 600mm, 700mm, 800mm, 900mm" },
          { label: "Depths Available", value: "480 mm and 535 mm" },
          { label: "Material", value: "Food Grade Virgin PVC" },
          { label: "Finish / Colour", value: "High Gloss Mirror Finish (Grey)" },
          { label: "Standard Packaging", value: "10 Pcs (Per Carton)" },
        ],
      },
    ],
    sizes: ["450, 500, 600, 700, 800, 900 mm"],
    materials: ["Virgin Food Grade PVC"],
    colours: ["Grey"],
    packageContents: "10 Pcs (Per Carton)",
    layoutVariant: "pvc-cutlery",
    relatedSlugs: ["tandem", "anti-slip-matt", "thali-stand"],
    featured: false,
  },

  // 8. Bottle Pullout (Glass / Flatline)
  {
    slug: "pullout",
    name: "Bottle Pullout (Glass / Flatline)",
    title: "2-Layer & 3-Layer Kitchen Storage Pullout System",
    category: "Kitchen Storage",
    image: pulloutImage,
    imageAlt: "Bottle Pullout 2-layer and 3-layer kitchen storage system",
    gallery: [
      { src: pulloutWireImage, alt: "LEBCO Bottle Pullout Flatline Basket Variant", caption: "Flatline Basket Variant" },
    ],
    cardSummary:
      "Glass or flatline bottle pullout. 2 and 3 layer. Cabinet widths 150, 250 and 300 mm.",
    description:
      "Bottle Pullout is a pullout organiser for base cabinets, available in glass and flatline basket styles. It comes in 2-layer and 3-layer configurations for 150, 250 and 300 mm cabinet widths, with 18.5 inch long baskets, 6 inch wide for the 250 mm cabinet and 8 inch wide for the 300 mm cabinet, so bottles, jars and packs stay within easy reach.",
    highlights: [
      { label: "Styles", value: "Glass / Flatline" },
      { label: "Layers", value: "2 & 3 Layer Configurations" },
      { label: "Cabinet Widths", value: "150, 250, 300 mm" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Styles", value: "Glass / Flatline" },
          { label: "Layers Available", value: "2 Layer and 3 Layer" },
          { label: "Cabinet Widths", value: "150 mm, 250 mm, 300 mm" },
          { label: "250 mm Basket Size", value: '18.5" L x 6" W' },
          { label: "300 mm Basket Size", value: '18.5" L x 8" W' },
        ],
      },
    ],
    variantsTables: [
      {
        title: "2 Layer Dimensions (mm)",
        headers: ["Cabinet T", "Width", "Depth", "Height"],
        rows: [
          ["150 mm", "114 mm", "500 mm", "500 mm"],
          ["250 mm", "214 mm", "500 mm", "500 mm"],
          ["300 mm", "264 mm", "500 mm", "500 mm"],
        ],
      },
      {
        title: "3 Layer Dimensions (mm)",
        headers: ["Cabinet T", "Width", "Depth", "Height"],
        rows: [
          ["150 mm", "114 mm", "500 mm", "600 mm"],
          ["250 mm", "214 mm", "500 mm", "600 mm"],
          ["300 mm", "264 mm", "500 mm", "600 mm"],
        ],
      },
    ],
    relatedSlugs: ["pantry", "magic-corner", "wicker-basket"],
    featured: false,
  },

  // 9. Pantry Unit (Glass / Flatline)
  {
    slug: "pantry",
    name: "Pantry Unit (Glass / Flatline)",
    title: "Tall Pantry Pullout Storage Unit",
    category: "Kitchen Storage",
    image: pantryImage,
    imageAlt: "Tall Pantry Unit 6 ft pullout with 6 layers",
    cardSummary:
      "Tall 6 ft pantry pullout with 6 layers. 450 and 600 mm cabinets.",
    description:
      "Pantry Unit is a tall 6 ft pullout with 6 layers, available in glass and flatline styles for 450 mm and 600 mm cabinet widths. The unit is 1820 mm high and 510 mm deep, and needs a cabinet of at least 550 mm depth and 1830 mm height.",
    highlights: [
      { label: "Styles", value: "Glass / Flatline" },
      { label: "Height Option", value: "6 ft (6 Layers)" },
      { label: "Cabinets", value: "450 mm & 600 mm" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Styles", value: "Glass / Flatline" },
          { label: "Height Available", value: "6 ft (1820 mm)" },
          { label: "Layer Configuration", value: "6 Layers" },
          { label: "Cabinet Widths", value: "450 mm, 600 mm" },
          { label: "Cabinet Requirement", value: "Minimum 550 mm depth and minimum 1830 mm height" },
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
        ],
      },
    ],
    relatedSlugs: ["pullout", "magic-corner", "wicker-basket"],
    featured: true,
  },

  // 10. Universal Magic Corner (Glass / Flatline)
  {
    slug: "magic-corner",
    name: "Universal Magic Corner (Glass / Flatline)",
    title: "Universal Soft Close Corner Storage Organizer",
    category: "Kitchen Storage",
    image: magicCornerImage,
    imageAlt: "Universal Magic Corner pullout corner organizer for 800-900 mm cabinets",
    cardSummary:
      "Universal corner unit for 800 to 900 mm cabinets. 20 kg load, 5 kg per basket recommended.",
    description:
      "Universal Magic Corner is a pullout corner organiser for 800 to 900 mm corner cabinets, available in glass and flatline styles. The unit is 660 mm wide, 520 mm deep and 620 mm high with a 350 to 400 mm door opening. It carries 20 kg in total, with a maximum of 5 kg per basket recommended.",
    highlights: [
      { label: "Styles", value: "Glass / Flatline" },
      { label: "Load Capacity", value: "20 kg total (5 kg / basket recommended)" },
      { label: "Cabinet Range", value: "800 - 900 mm" },
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
    relatedSlugs: ["pullout", "pantry", "rolling-shutter"],
    featured: true,
  },

  // 11. PVC Rolling Shutter (NEW)
  {
    slug: "rolling-shutter",
    name: "PVC Rolling Shutter",
    title: "Roll-Up PVC Shutter for Kitchen Cabinets",
    category: "Kitchen Storage",
    image: rollingShutterImage,
    imageAlt: "PVC rolling shutter on a kitchen cabinet",
    cardSummary:
      "Roll-up PVC cabinet shutter in 450 and 600 mm widths. 1320 mm height. Black, silver and grey.",
    description:
      "PVC Rolling Shutter is a roll-up shutter for kitchen cabinets that rolls up inside the cabinet instead of swinging open, so no door-swing space is needed in front. It is available in 450 mm and 600 mm widths with a 310 mm depth and a 1320 mm height, in black, silver and grey.",
    highlights: [
      { label: "Widths", value: "450 mm and 600 mm" },
      { label: "Height", value: "1320 mm" },
      { label: "Depth", value: "310 mm" },
      { label: "Colours", value: "Black, Silver, Grey" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Material", value: "PVC" },
          { label: "Colours", value: "Black, Silver, Grey" },
          { label: "Available Sizes", value: "450 mm, 600 mm" },
          { label: "Depth", value: "310 mm" },
          { label: "Height", value: "1320 mm" },
          {
            label: "Cabinet Requirement (600 mm unit)",
            value: "overall width 600 mm (inner 564 mm) | overall depth 306 mm (inner 288 mm) | height 1320 mm",
          },
        ],
      },
    ],
    variantsTables: [
      {
        title: "Available Sizes & Dimensions",
        headers: ["Size", "Depth", "Height"],
        rows: [
          ["450 mm", "310 mm", "1320 mm"],
          ["600 mm", "310 mm", "1320 mm"],
        ],
      },
    ],
    swatches: [
      { name: "Black", color: "#1A1A1A" },
      { name: "Silver", color: "#D1D5DB" },
      { name: "Grey", color: "#6B7280" },
    ],
    relatedSlugs: ["pantry", "magic-corner", "pullout"],
    featured: true,
  },

  // 12. Anti Skid Drawer Mat
  {
    slug: "anti-slip-matt",
    name: "Anti Skid Drawer Mat",
    title: "Protective Surface Grip Roll for Drawers & Cabinets",
    category: "Accessories",
    image: antiSlipMattImage,
    imageAlt: "Anti Skid Drawer Mat protective surface grip roll",
    cardSummary:
      "Anti-skid drawer mat rolls in 5 m and 20 m lengths. 500, 550 and 600 mm widths.",
    description:
      "Anti Skid Drawer Mat is a roll that keeps items from sliding inside kitchen and furniture drawers. It is available in 500 mm, 550 mm and 600 mm widths and in two roll lengths, 5 m and 20 m. The 5 m rolls are packed 10 pcs per box.",
    packing: "10 pcs / box (5 m rolls)",
    highlights: [
      { label: "Roll Length", value: "5 m and 20 m" },
      { label: "Width Options", value: "500 mm, 550 mm and 600 mm" },
      { label: "Trade Packing", value: "10 pcs / box (5 m rolls)" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Roll Length", value: "5 m and 20 m" },
          { label: "Widths Available", value: "500 mm, 550 mm, 600 mm" },
          { label: "Packing", value: "10 pcs / box (5 m rolls)" },
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
          ["600 mm", "5 m", "10 pcs"],
        ],
        note: "20 m rolls are also available. Please enquire for width and packing details.",
      },
    ],
    relatedSlugs: ["pvc-cutlery", "tandem", "thali-stand"],
    featured: false,
  },

  // 13. Wicker Basket (Wooden and PVC)
  {
    slug: "wicker-basket",
    name: "Wicker Basket (Wooden and PVC)",
    title: "Pullout Storage Basket for Kitchen and Wardrobe Cabinets",
    category: "Kitchen Storage",
    image: wickerBasketImage,
    imageAlt: "Wicker Basket Wooden and PVC pullout storage basket",
    cardSummary:
      "Wooden and PVC wicker baskets in brown, light brown and white. 450 and 600 mm cabinets.",
    description:
      "Wicker Basket is a pullout storage basket for kitchen and wardrobe cabinets, available in two variants, Wooden and PVC. Choose from brown, light brown and white colours for 450 mm and 600 mm cabinets, in 100, 150 and 200 mm heights with a 500 mm depth.",
    highlights: [
      { label: "Material", value: "Wooden and PVC" },
      { label: "Variants", value: "Wooden and PVC" },
      { label: "Colours", value: "Brown, Light Brown, White" },
      { label: "Cabinets", value: "450 mm and 600 mm" },
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Variants", value: "Wooden, PVC" },
          { label: "Colours", value: "Brown, Light Brown, White" },
          { label: "Cabinet Widths", value: "450 mm, 600 mm" },
          { label: "Heights Available", value: "100 mm, 150 mm, 200 mm" },
          { label: "Depth", value: "500 mm" },
        ],
      },
    ],
    swatches: [
      { name: "Brown", color: "#5C4033" },
      { name: "Light Brown", color: "#C4A482" },
      { name: "White", color: "#F5F5F5", border: true },
    ],
    variantsTables: [
      {
        title: "Available Sizes (mm) - Applies to Wooden and PVC",
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
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
