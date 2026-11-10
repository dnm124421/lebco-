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

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type Product = {
  slug: string;
  name: string;
  title?: string;
  image: string;
  gallery?: GalleryItem[];
  cardDescription: string;
  description: string;
  features?: string[];
  specifications?: SpecTable[];
  sizes?: string[];
  materials?: string[];
  colours?: string[];
  warranty?: string;
  packageContents?: string;
  keySpecification?: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "thali-stand",
    name: "Thali Stand",
    image: thaliStandImage,
    cardDescription: "Strong kitchen storage for thalis, plates, and utensils.",
    description: "Premium Thali Stand – Strong, durable, and designed for neat and organized kitchen storage. Perfect for keeping thalis, plates, and utensils safely arranged while saving valuable space.",
    specifications: [
      {
            "title": "Small",
            "rows": [
                  {
                        "label": "Length",
                        "value": "25 cm / 10 inch"
                  },
                  {
                        "label": "Breadth",
                        "value": "20 cm / 8 inch"
                  },
                  {
                        "label": "Height",
                        "value": "25 cm / 10 inch"
                  }
            ]
      },
      {
            "title": "Medium",
            "rows": [
                  {
                        "label": "Length",
                        "value": "30 cm / 12 inch"
                  },
                  {
                        "label": "Breadth",
                        "value": "22 cm / 9 inch"
                  },
                  {
                        "label": "Height",
                        "value": "30 cm / 12 inch"
                  },
                  {
                        "label": "Capacity",
                        "value": "8 Thali / Plates"
                  }
            ]
      },
      {
            "title": "Large",
            "rows": [
                  {
                        "label": "Length",
                        "value": "35 cm / 14 inch"
                  },
                  {
                        "label": "Breadth",
                        "value": "25 cm / 10 inch"
                  },
                  {
                        "label": "Height",
                        "value": "35 cm / 14 inch"
                  },
                  {
                        "label": "Capacity",
                        "value": "12 Thali / Plates"
                  }
            ]
      }
],
    featured: true,
  },
  {
    slug: "pvc-cutlery",
    name: "PVC Cutlery Tray",
    title: "High-Gloss Modular Kitchen Drawer Organizer (400mm, 500mm, 600mm, 700mm, 800mm, 900mm)",
    image: pvcCutleryImage,
    cardDescription: "Food-grade high gloss cutlery tray for 400, 500, 600, 700, 800, 900 mm drawer sizes.",
    description: "A practical, durable, and food-safe storage solution designed for organizing spoons, forks, knives, and kitchen gadgets neatly. Crafted from 100% food-grade virgin PVC with a lustrous high-gloss mirror grey finish, designed to fit standard drawer widths from 400mm up to 900mm in both 480mm and 535mm depths.",
    features: [
      "Wide Drawer Width Range: 400, 500, 600, 700, 800, 900 mm",
      "Dual Depth Compatibility: 480 MM & 535 MM",
      "100% Food-Grade Virgin PVC Material",
      "High-Gloss Mirror Finish in Designer Grey",
      "Non-Toxic, Odor-Free & Easy to Wipe Clean",
      "Multi-Compartment Layout for Cutlery & Utensils",
      "Trimmable Edge Flanges for Perfect Drawer Fit",
      "10 Pcs Standard Carton Packaging"
],
    specifications: [
      {
            "title": "General Specifications",
            "rows": [
                  {
                        "label": "Available Widths",
                        "value": "400mm, 500mm, 600mm, 700mm, 800mm, 900mm"
                  },
                  {
                        "label": "Depths Available",
                        "value": "480 MM & 535 MM"
                  },
                  {
                        "label": "Material",
                        "value": "Food Grade Virgin PVC"
                  },
                  {
                        "label": "Finish / Colour",
                        "value": "High Gloss Mirror Finish (Grey)"
                  },
                  {
                        "label": "Standard Packaging",
                        "value": "10 Pcs (Per Carton)"
                  }
            ]
      },
      {
            "title": "Catalogue Model Series",
            "rows": [
                  {
                        "label": "Anti-Scratch Series (LB-114)",
                        "value": "Height: 50 MM | Available Widths: 450, 500, 600, 700, 800, 900 mm"
                  },
                  {
                        "label": "Standard 480 MM Depth (LB-115)",
                        "value": "Models 430, 530, 630, 730, 830 (Fits 400mm, 500mm, 600mm, 700mm, 800mm drawers)"
                  },
                  {
                        "label": "Standard 535 MM Depth (LB-116)",
                        "value": "Models 500, 600, 700, 800, 900 (Fits 500mm, 600mm, 700mm, 800mm, 900mm drawers)"
                  }
            ]
      }
],
    featured: true,
  },
  {
    slug: "pullout",
    name: "Pullout",
    image: pulloutImage,
    gallery: [
      { src: pulloutWireImage, alt: "LEBCO Wire Basket Pullout", caption: "Heavy 2 & 3 Layer Basket" },
    ],
    cardDescription: "Cabinet pullout options available in 2 layer and 3 layer formats.",
    description: "Premium high-gloss formula designed to give you a flawless, mirror-like shine in seconds. Its lightweight, long-lasting formula glides smoothly and leaves a luxurious finish that stands out.",
    specifications: [
      {
            "title": "2 Layer Cabinet",
            "rows": [
                  {
                        "label": "200 mm",
                        "value": "200 mm width / 164 mm depth / 500 mm height"
                  },
                  {
                        "label": "250 mm",
                        "value": "250 mm width / 214 mm depth / 500 mm height"
                  },
                  {
                        "label": "300 mm",
                        "value": "300 mm width / 264 mm depth / 500 mm height"
                  }
            ]
      },
      {
            "title": "3 Layer Cabinet",
            "rows": [
                  {
                        "label": "200 mm",
                        "value": "200 mm width / 164 mm depth / 500 mm / 600 mm height"
                  },
                  {
                        "label": "250 mm",
                        "value": "250 mm width / 214 mm depth / 500 mm / 600 mm height"
                  },
                  {
                        "label": "300 mm",
                        "value": "300 mm width / 264 mm depth / 500 mm / 600 mm height"
                  }
            ]
      }
],
    featured: true,
  },
  {
    slug: "pantry",
    name: "Pantry",
    title: "Stainless Steel Kitchen Pantry Unit | Modular Kitchen Pull Out Pantry Trolley | Grocery Storage Rack - 150mm / 200mm / 300mm",
    image: pantryImage,
    cardDescription: "Stainless steel pull out pantry trolley for modular kitchen storage.",
    description: "This Modular Kitchen Pantry Unit is made of Premium Grade Stainless Steel 202 with heavy chrome plating. It is designed to utilize maximum storage space in your kitchen cabinet. The unit comes with smooth sliding channels and provides easy access to all your grocery, jars, and kitchen items. It is rust-proof, durable and has high load bearing capacity. Perfect solution for modern modular kitchens.",
    specifications: [
      {
            "title": "Width Options",
            "rows": [
                  {
                        "label": "100mm",
                        "value": "4 inch"
                  },
                  {
                        "label": "150mm",
                        "value": "6 inch"
                  },
                  {
                        "label": "200mm",
                        "value": "8 inch"
                  },
                  {
                        "label": "300mm",
                        "value": "12 inch"
                  }
            ]
      },
      {
            "title": "Dimensions",
            "rows": [
                  {
                        "label": "Length / Depth",
                        "value": "20 inch / 500mm"
                  },
                  {
                        "label": "Breadth / Width",
                        "value": "6 inch / 150mm"
                  },
                  {
                        "label": "Height",
                        "value": "40 inch / 1000mm — 4 basket"
                  },
                  {
                        "label": "Height",
                        "value": "60 inch / 1500mm — 5-6 basket"
                  }
            ]
      },
      {
            "title": "Specifications",
            "rows": [
                  {
                        "label": "Material",
                        "value": "Stainless Steel 202"
                  },
                  {
                        "label": "Finish",
                        "value": "Chrome Plated, Mirror Polish"
                  },
                  {
                        "label": "Installation Type",
                        "value": "Floor Mounted / Cabinet Mounted"
                  },
                  {
                        "label": "Slide",
                        "value": "Telescopic Channel Included"
                  },
                  {
                        "label": "Load Capacity",
                        "value": "40-50 KG"
                  },
                  {
                        "label": "Sheet Thickness",
                        "value": "1.2mm Heavy"
                  },
                  {
                        "label": "Wire Thickness",
                        "value": "3mm + 6mm"
                  },
                  {
                        "label": "Colour",
                        "value": "Steel Silver"
                  }
            ]
      }
],
    featured: true,
  },
  {
    slug: "anti-slip-matt",
    name: "Anti Slip Matt",
    image: antiSlipMattImage,
    cardDescription: "Dark grey surface protection roll for drawers and shelves.",
    description: "Durable and practical solution for protecting kitchen drawers, cabinets, shelves, and surfaces. It provides a firm grip, helps prevent items from sliding, and keeps your storage areas clean and organized.",
    specifications: [
      {
            "title": "Product Details",
            "rows": [
                  {
                        "label": "Colour",
                        "value": "Grey"
                  },
                  {
                        "label": "Finish",
                        "value": "Dark Grey"
                  },
                  {
                        "label": "Length",
                        "value": "20 meter"
                  },
                  {
                        "label": "Thickness",
                        "value": "1MM"
                  },
                  {
                        "label": "Sizes",
                        "value": "500 / 550 / 600"
                  }
            ]
      }
],
    featured: true,
  },
  {
    slug: "magic-corner",
    name: "Magic Corner",
    title: "Stainless Steel Magic Corner for Kitchen | Soft Close Magic Corner Basket for Modular Kitchen | L Shape Corner Storage Organizer | SS, Right Hand (900mm)",
    image: magicCornerImage,
    cardDescription: "Soft close L-shape corner storage organizer for modular kitchens.",
    description: "Magic Corner is a smart storage solution for your L-shaped modular kitchen. It utilizes your dead corner space with sliding baskets that come out smoothly. Made with Stainless Steel wire, it is rust-proof and heavy-duty. Best for storing heavy utensils, pots, and kitchen items.",
    specifications: [
      {
            "title": "Specifications",
            "rows": [
                  {
                        "label": "Finish",
                        "value": "Glass"
                  },
                  {
                        "label": "Material",
                        "value": "SS + MS Frame"
                  },
                  {
                        "label": "Colour",
                        "value": "Silver (Chrome Finish)"
                  },
                  {
                        "label": "Cabinet Required",
                        "value": "900mm x 900mm (W x D)"
                  },
                  {
                        "label": "Actual Product Size",
                        "value": "860mm x 480mm x 530mm"
                  },
                  {
                        "label": "Basket Size",
                        "value": "2 Baskets - Inner 400mm + Outer 860mm"
                  },
                  {
                        "label": "Weight",
                        "value": "14 KG Approx"
                  },
                  {
                        "label": "Weight Capacity",
                        "value": "50 KG Total (25KG Each Basket)"
                  },
                  {
                        "label": "Finish",
                        "value": "Chrome Plated & SS"
                  },
                  {
                        "label": "Type",
                        "value": "Soft Close Magic Corner"
                  },
                  {
                        "label": "Hand",
                        "value": "Right Hand / Left Hand"
                  },
                  {
                        "label": "Warranty",
                        "value": "2 Years"
                  }
            ]
      }
],
    featured: true,
  },
  {
    slug: "wicker-basket",
    name: "Wicker Basket",
    image: wickerBasketImage,
    cardDescription: "Ventilated wicker basket for utensils, vegetables, and kitchen essentials.",
    description: "Wicker Basket is made for modern modular kitchens. Its perforated wicker design allows air circulation, keeping your vegetables and utensils fresh. Made with Stainless Steel and PVC coated wicker sheet, it is rust-proof and long-lasting. Perfect for storing utensils, vegetables, and kitchen essentials.",
    specifications: [
      {
            "title": "Sizes",
            "rows": [
                  {
                        "label": "Height",
                        "value": "4 inch / 6 inch / 8 inch"
                  },
                  {
                        "label": "Width",
                        "value": "400mm / 15 inch, 450mm / 18 inch, 500mm / 20 inch, 600mm / 24 inch"
                  },
                  {
                        "label": "Depth",
                        "value": "500mm / 20 inch"
                  },
                  {
                        "label": "Length",
                        "value": "20 inch standard"
                  }
            ]
      },
      {
            "title": "Types",
            "rows": [
                  {
                        "label": "Plain Wicker Basket",
                        "value": "4 inch"
                  },
                  {
                        "label": "Partition Wicker Basket",
                        "value": "Plate"
                  },
                  {
                        "label": "Perforated Wicker Basket",
                        "value": "Available"
                  },
                  {
                        "label": "Cup & Saucer Wicker Basket",
                        "value": "Available"
                  }
            ]
      },
      {
            "title": "Weight Capacity",
            "rows": [
                  {
                        "label": "Capacity",
                        "value": "25-30 KG"
                  }
            ]
      }
],
    featured: true,
  },
  {
    slug: "bed-fitting",
    name: "Bed Fitting",
    title: "Heavy Duty Bed Fitting Set for Wooden Bed | Stainless Steel Bed Joint Connector | Bed Corner Bracket for Double Bed & Single Bed (4 Pcs Set)",
    image: bedFittingImage,
    cardDescription: "Heavy duty 5mm bed joint corner connector set for wooden beds.",
    description: "Heavy Duty Bed Fitting is used to joint wooden bed frames strongly. It connects headboard, footboard and side panels without any gap. Made with High Quality Mild Steel with Nickel Plating, it is rust-proof and long-lasting. Supports heavy weight and prevents bed noise. Suitable for Single, Double, King and Queen Size Wooden Beds.",
    specifications: [
      {
            "title": "Specifications",
            "rows": [
                  {
                        "label": "Material",
                        "value": "Mild Steel + Nickel Plating"
                  },
                  {
                        "label": "Colour",
                        "value": "Grey"
                  },
                  {
                        "label": "Size",
                        "value": "120mm x 55mm"
                  },
                  {
                        "label": "Thickness",
                        "value": "5mm"
                  },
                  {
                        "label": "Type",
                        "value": "Heavy Type / Bed Joint Connector / Bed Fitting Clamp Set"
                  },
                  {
                        "label": "Contains",
                        "value": "4 Pcs"
                  },
                  {
                        "label": "Weight",
                        "value": "1100 grams"
                  },
                  {
                        "label": "Weight Capacity",
                        "value": "300 KG Full Bed"
                  },
                  {
                        "label": "Finish",
                        "value": "Grey"
                  },
                  {
                        "label": "Use",
                        "value": "Wooden Bed, Double Bed, Single Bed, Box Bed"
                  },
                  {
                        "label": "Warranty",
                        "value": "1 Year"
                  }
            ]
      },
      {
            "title": "Types",
            "rows": [
                  {
                        "label": "L-Type Bed Fitting",
                        "value": "For single bed - 2 inch size"
                  },
                  {
                        "label": "Bed Joint Fitting (Interlock)",
                        "value": "For double bed - Most Selling Hydraulic"
                  },
                  {
                        "label": "Hydraulic Bed Fitting",
                        "value": "For box bed storage"
                  }
            ]
      }
],
    featured: true,
  },
  {
    slug: "table-bracket",
    name: "Table Bracket / Folding Dining Table Bracket",
    title: "Heavy Duty Folding Dining Table Bracket | Stainless Steel Wall Mount Table Bracket | 90 Degree Space-Saving Mechanism for Wall Tables & Folding Dining Sets",
    image: tableBracketImage,
    gallery: [
      { src: tableBracketInstalledImage, alt: "LEBCO Folding Table Bracket Installed Mechanism", caption: "90° Folding Wall Support" },
    ],
    cardDescription: "Heavy-duty folding wall bracket for tables, shelves, and study tables.",
    description: "Table Bracket is a heavy-duty L-shape support bracket used for wall-mounted tables, shelves, study tables, and kitchen platforms. Made with Premium Mild Steel with powder coating, it provides strong support without bending. It has a 90-degree folding option to save space when not in use. Rust-proof and long-lasting.",
    specifications: [
      {
            "title": "Specifications",
            "rows": [
                  {
                        "label": "Material",
                        "value": "MS"
                  },
                  {
                        "label": "Colours",
                        "value": "Grey"
                  },
                  {
                        "label": "Sizes",
                        "value": "8 Inch, 10 Inch, 12 Inch, 14 Inch, 16 Inch, 20 Inch"
                  },
                  {
                        "label": "Standard Size",
                        "value": "8 Inch / 200mm x 130mm"
                  },
                  {
                        "label": "Thickness",
                        "value": "2.5mm to 3mm"
                  },
                  {
                        "label": "Type",
                        "value": "Folding Table Bracket / L Shape Bracket"
                  },
                  {
                        "label": "Weight Capacity",
                        "value": "50 KG Single, 100 KG Pair"
                  },
                  {
                        "label": "Finish",
                        "value": "Powder Coated Matte"
                  },
                  {
                        "label": "Use",
                        "value": "Wall Table, Folding Table, Shelf Support, Study Table"
                  },
                  {
                        "label": "Warranty",
                        "value": "1 Year"
                  }
            ]
      },
      {
            "title": "Types",
            "rows": [
                  {
                        "label": "Folding Bracket",
                        "value": "Foldable, space saving"
                  },
                  {
                        "label": "Fixed L Bracket",
                        "value": "Simple L shape, for heavy load"
                  },
                  {
                        "label": "Stainless Steel Bracket",
                        "value": "For kitchen"
                  }
            ]
      }
],
    featured: true,
  },
  {
    slug: "tandem",
    name: "Slim Tandem Box System",
    title: "Ultra-Slim Double-Wall Soft Close Modular Kitchen Drawer System (45 KG Dynamic Loading)",
    image: tandemImage,
    cardDescription: "45 KG dynamic loading, 4 heights (84mm to 199mm), sizes 12\" to 24\" (300-600mm).",
    description: "LEBCO Slim Tandem Box System is an ultra-modern modular kitchen drawer solution engineered with a straight 13mm ultra-slim double-wall profile and heavy-duty concealed synchronized soft-close runners. Rated for a 45 KG dynamic loading capacity and available in 4 height configurations (84mm, 116mm, 167mm, 199mm) across sizes 12\" to 24\" (300mm to 600mm) with elegant high-durability grey finish.",
    features: [
      "45 KG Heavy-Duty Dynamic Loading Capacity",
      "Synchronized Full-Extension Soft-Close Runners",
      "Ultra-Slim 13mm Straight Internal & External Walls",
      "4 Available Heights: 84mm, 116mm, 167mm, 199mm",
      "Full Depth Sizes: 12\" to 24\" (300mm to 600mm)",
      "2D / 3D Cam Front Panel Alignment Adjustment",
      "50,000+ Cycles Durability & Smooth Movement",
      "Tool-Free Drawer Assembly & Quick Release"
],
    specifications: [
      {
            "title": "System Overview",
            "rows": [
                  {
                        "label": "Product Type",
                        "value": "Slim Tandem Box System (Double-Wall Drawer)"
                  },
                  {
                        "label": "Dynamic Load Capacity",
                        "value": "45 KG"
                  },
                  {
                        "label": "Wall Profile",
                        "value": "13 MM Ultra-Slim Straight Side Panels"
                  },
                  {
                        "label": "Runner Mechanism",
                        "value": "Concealed Synchronized Full-Extension Soft Close"
                  },
                  {
                        "label": "Available Lengths / Sizes",
                        "value": "12\", 14\", 16\", 18\", 20\", 22\", 24\" (300mm – 600mm)"
                  },
                  {
                        "label": "Finish / Colour",
                        "value": "Grey"
                  },
                  {
                        "label": "Material",
                        "value": "Premium Cold-Rolled Steel & Galvanized Slides"
                  },
                  {
                        "label": "Cycles Tested",
                        "value": "50,000+ Cycles"
                  },
                  {
                        "label": "Applications",
                        "value": "Modular Kitchens, Wardrobe Drawers, Living Room & Office Furniture"
                  }
            ]
      },
      {
            "title": "Height Models & Configurations",
            "rows": [
                  {
                        "label": "LB-110 (Low Height)",
                        "value": "Height: 84 MM (3.3\") | Sizes: 12\" - 24\" (300 - 600mm) | Packing: 6 Sets / Carton"
                  },
                  {
                        "label": "LB-111 (Medium Height)",
                        "value": "Height: 116 MM (4.5\") | Sizes: 12\" - 24\" (300 - 600mm) | Packing: 6 Sets / Carton"
                  },
                  {
                        "label": "LB-112 (High Height)",
                        "value": "Height: 167 MM (6.5\") | Sizes: 12\" - 24\" (300 - 600mm) | Packing: 5 Sets / Carton"
                  },
                  {
                        "label": "LB-113 (Extra High Height)",
                        "value": "Height: 199 MM (7.8\") | Sizes: 12\" - 24\" (300 - 600mm) | Packing: 5 Sets / Carton"
                  }
            ]
      }
],
    featured: true,
  },
  {
    slug: "channel",
    name: "Telescopic Drawer Channels",
    title: "Heavy-Duty Ball Bearing Drawer Slides (55g & 72g Variants | Sizes 8\" to 24\")",
    image: channelImage,
    cardDescription: "55g (35 KG load) and 72g (45 KG load) telescopic slides from 8\" to 24\" (15 sets/box).",
    description: "LEBCO Telescopic Drawer Channels provide silent, frictionless movement for modular kitchen drawers, wardrobes, and office storage. Available in two distinct heavy-duty weight types: 55 Gram (35 KG load capacity) and 72 Gram (45 KG load capacity). Both types are precision-manufactured from high-grade Mild Steel (MS) in complete size runs from 8\" to 24\", securely packaged 15 sets per box with premium Zinc and Black finishes.",
    features: [
      "Two Weight Grades: 55 Gram (35 KG) & 72 Gram (45 KG)",
      "Complete Size Range: 8\", 10\", 12\", 14\", 16\", 18\", 20\", 22\", 24\"",
      "Heavy-Duty Mild Steel (MS) Solid Construction",
      "Precision Hardened Steel Ball Bearings for Silent Glide",
      "Standard Packaging: 15 Sets (1 Box / Carton)",
      "Corrosion Resistant Zinc Plated & Matte Black Finishes",
      "Full Extension 3-Fold Telescopic Motion",
      "Quick Disconnect Lever for Effortless Drawer Removal"
],
    specifications: [
      {
            "title": "55 Gram Telescopic Channel (Model LB-106)",
            "rows": [
                  {
                        "label": "Model Number",
                        "value": "LB-106"
                  },
                  {
                        "label": "Weight Specification",
                        "value": "55 Gram (per inch)"
                  },
                  {
                        "label": "Load Capacity",
                        "value": "35 KG"
                  },
                  {
                        "label": "Material",
                        "value": "Mild Steel (MS)"
                  },
                  {
                        "label": "Standard Packing",
                        "value": "15 Sets (1 Box / Carton)"
                  },
                  {
                        "label": "Available Sizes",
                        "value": "8\", 10\", 12\", 14\", 16\", 18\", 20\", 22\", 24\""
                  },
                  {
                        "label": "Finish / Colour",
                        "value": "Zinc Plated, Matte Black"
                  }
            ]
      },
      {
            "title": "72 Gram Heavy-Duty Telescopic Channel (Model LB-107)",
            "rows": [
                  {
                        "label": "Model Number",
                        "value": "LB-107"
                  },
                  {
                        "label": "Weight Specification",
                        "value": "72 Gram (per inch)"
                  },
                  {
                        "label": "Load Capacity",
                        "value": "45 KG (Heavy-Duty)"
                  },
                  {
                        "label": "Material",
                        "value": "Mild Steel (MS) / Stainless Steel (SS)"
                  },
                  {
                        "label": "Standard Packing",
                        "value": "15 Sets (1 Box / Carton)"
                  },
                  {
                        "label": "Available Sizes",
                        "value": "8\", 10\", 12\", 14\", 16\", 18\", 20\", 22\", 24\""
                  },
                  {
                        "label": "Finish / Colour",
                        "value": "Zinc Plated, Matte Black"
                  }
            ]
      }
],
    featured: true,
  },
  {
    slug: "model-202",
    name: "Model 202",
    image: model202Image,
    cardDescription: "Soft close hinge model 202, MS material, 160 grams.",
    description: "Model 202 is a soft close hinge made from MS (Mild Steel). Lightweight at 160 grams with reliable soft close mechanism.",
    specifications: [
      {
            "title": "Specifications",
            "rows": [
                  {
                        "label": "Weight",
                        "value": "160 grams"
                  },
                  {
                        "label": "Material",
                        "value": "MS"
                  },
                  {
                        "label": "Type",
                        "value": "Soft Close"
                  }
            ]
      }
],
    featured: true,
  },
  {
    slug: "2d-ss",
    name: "2D Hydraulic Auto Hinges",
    title: "Model LB-102 | Soft Close Hydraulic Clip-On & Fix Variants (180g & 220g)",
    image: twoDHingesImage,
    cardDescription: "Model LB-102 soft close hydraulic clip-on & fix hinges in 180g & 220g (MS & SS).",
    description: "LEBCO 2D Hydraulic Auto Hinges (Model LB-102) deliver smooth hydraulic damping and silent, controlled cabinet door closing. Built with precision two-way adjustment (height and overlay alignment), available in 180 grams and 220 grams weight options, in Clip-On and Fix mounting styles across Mild Steel (MS) and Stainless Steel (SS).",
    features: [
      "Two Weight Variants: 180 Grams & 220 Grams",
      "Integrated Hydraulic Cylinder for Silent Soft Closing",
      "Clip-On & Fix Mounting Options",
      "Angle Options: 0° (Full Overlay) & 8° (Half Overlay)",
      "High-Grade Mild Steel (MS) and Stainless Steel (SS)",
      "Standard Packaging: 100 Sets (Per Carton)"
],
    specifications: [
      {
            "title": "Specifications",
            "rows": [
                  {
                        "label": "Model Number",
                        "value": "LB-102"
                  },
                  {
                        "label": "Weight Options",
                        "value": "180 grams & 220 grams"
                  },
                  {
                        "label": "Mechanism",
                        "value": "Hydraulic Soft Close (Clip On / Fix)"
                  },
                  {
                        "label": "Types / Overlays",
                        "value": "0° (Full Overlay), 8° (Half Overlay)"
                  },
                  {
                        "label": "Material",
                        "value": "Mild Steel (MS) / Stainless Steel (SS)"
                  },
                  {
                        "label": "Standard Packing",
                        "value": "100 Sets (Per Carton)"
                  },
                  {
                        "label": "Finish",
                        "value": "Nickel Plated / SS Polished"
                  }
            ]
      }
],
    materials: ["MS & SS"],
    featured: true,
  },
  {
    slug: "3d",
    name: "3D Auto Hinges",
    title: "Models LB-103 (Silver MS/SS) & LB-105 (Matte Black 3D) | 250g Heavy-Duty Soft Close",
    image: threeDHingesImage,
    gallery: [
      { src: threeDBlackImage, alt: "LEBCO Black 3D Auto Hinge", caption: "Matte Black Luxury 3D" },
      { src: threeDBlackCatImage, alt: "LEBCO Black 3D Hinge Catalogue Details", caption: "LB-105 Details" },
    ],
    cardDescription: "Model LB-103 & LB-105 (250g) with 3-way eccentric cam adjustment in Silver & Matte Black.",
    description: "LEBCO 3D Hydraulic Auto Hinges deliver state-of-the-art 3-way eccentric cam adjustment (vertical, horizontal, and depth) for seamless door alignment. Weighing a solid 250 grams, available in classic Silver (Mild Steel & Stainless Steel) as LB-103, and luxury Matte Black finish as LB-105, with silent hydraulic soft-close damping in 0° and 8° angles.",
    features: [
      "3-Way Eccentric Cam Adjustment (Up/Down, Left/Right, In/Out)",
      "Heavy-Duty 250 Grams Solid Hinge Body",
      "Integrated Hydraulic Damping for Whisper Soft-Close",
      "Available in Silver (MS/SS) and Luxury Matte Black (LB-105)",
      "Angle Options: 0° (Full Overlay) & 8° (Half Overlay)",
      "Standard Packaging: 100 Sets (Per Carton)"
],
    specifications: [
      {
            "title": "3D Auto Hinges (Model LB-103)",
            "rows": [
                  {
                        "label": "Model Number",
                        "value": "LB-103"
                  },
                  {
                        "label": "Weight",
                        "value": "250 grams"
                  },
                  {
                        "label": "Mechanism",
                        "value": "Hydraulic Soft Close (3-Way Adjustment)"
                  },
                  {
                        "label": "Material",
                        "value": "Mild Steel (MS) / Stainless Steel (SS)"
                  },
                  {
                        "label": "Types / Angles",
                        "value": "0° (Full Overlay), 8° (Half Overlay)"
                  },
                  {
                        "label": "Standard Packing",
                        "value": "100 Sets (Per Carton)"
                  },
                  {
                        "label": "Finish",
                        "value": "Nickel Plated / Chrome / SS Polished"
                  }
            ]
      },
      {
            "title": "3D Black Auto Hinges (Model LB-105)",
            "rows": [
                  {
                        "label": "Model Number",
                        "value": "LB-105 (Black 3D)"
                  },
                  {
                        "label": "Weight",
                        "value": "250 grams"
                  },
                  {
                        "label": "Mechanism",
                        "value": "Hydraulic Soft Close (3-Way Adjustment)"
                  },
                  {
                        "label": "Material",
                        "value": "Mild Steel (MS)"
                  },
                  {
                        "label": "Finish / Colour",
                        "value": "Matte Black Luxury Coating"
                  },
                  {
                        "label": "Types / Angles",
                        "value": "0° (Full Overlay), 8° (Half Overlay)"
                  },
                  {
                        "label": "Standard Packing",
                        "value": "100 Sets (Per Carton)"
                  }
            ]
      }
],
    materials: ["MS & SS"],
    featured: true,
  },
  {
    slug: "short-arm",
    name: "Short Arm Hydraulic Hinges",
    title: "Model LB-104 | Grade SS 304 Stainless Steel Soft Close (125g)",
    image: shortArmImage,
    gallery: [
      { src: shortArmRealImage, alt: "LEBCO Short Arm SS 304 Real Hinge", caption: "SS 304 Soft Close" },
      { src: shortArm304Image, alt: "Grade 304 Stainless Steel Short Arm", caption: "Grade 304 Heavy Duty" },
    ],
    cardDescription: "Model LB-104 (125g) Grade SS 304 compact soft-close cabinet hinges (0° & 8°).",
    description: "LEBCO Short Arm Hydraulic Hinges (Model LB-104) are specially designed for compact cabinetry, narrow frames, and specialized furniture doors requiring robust performance and whisper-quiet soft closing. Fabricated from premium Grade SS 304 Stainless Steel with a 125g build weight, providing superior rust and moisture resistance for modern kitchens, bathrooms, and wardrobes.",
    features: [
      "Premium Grade SS 304 Stainless Steel Construction",
      "Short Arm Compact Geometry for Tight Cabinet Spaces",
      "Integrated Hydraulic Cylinder for Silent Soft Closing",
      "Solid 125 Grams Weight Build for Rigidity",
      "Crank Angle Options: 0° (Full Overlay) & 8° (Half Overlay)",
      "100% Rust-Proof & Corrosion Resistant Mirror Finish",
      "Standard Packaging: 100 Sets (Per Carton)"
],
    specifications: [
      {
            "title": "Specifications",
            "rows": [
                  {
                        "label": "Model Number",
                        "value": "LB-104"
                  },
                  {
                        "label": "Product Type",
                        "value": "Short Arm Hydraulic Hinge"
                  },
                  {
                        "label": "Material",
                        "value": "Stainless Steel Grade 304 (SS 304)"
                  },
                  {
                        "label": "Weight",
                        "value": "125 grams"
                  },
                  {
                        "label": "Mechanism",
                        "value": "Hydraulic Cylinder Soft Close"
                  },
                  {
                        "label": "Crank Angles",
                        "value": "0° (Full Overlay) & 8° (Half Overlay)"
                  },
                  {
                        "label": "Standard Packaging",
                        "value": "100 Sets (Per Carton)"
                  },
                  {
                        "label": "Finish",
                        "value": "Mirror SS 304 Polish"
                  },
                  {
                        "label": "Applications",
                        "value": "Compact Cabinets, Modular Kitchens, Narrow Frames, Vanities"
                  }
            ]
      }
],
    featured: true,
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
