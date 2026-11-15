import fs from 'node:fs';
import path from 'node:path';

// Products to image mapping
const PRODUCT_SLUGS = [
  { slug: 'anti-slip-matt', dir: 'products/anti-slip-matt', base: 'hero', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: 'magic-corner', dir: 'products/magic-corner', base: 'hero', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: 'pantry-unit', dir: 'products/pantry', base: 'hero', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: 'pullout', dir: 'products/pullout', base: 'hero', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: 'pullout-wire', dir: 'products/pullout', base: 'wire', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: 'pvc-cutlery', dir: 'products/pvc-cutlery', base: 'hero', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: 'thali-stand', dir: 'products/thali-stand', base: 'hero', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: 'wicker-basket', dir: 'products/wicker-basket', base: 'hero', widths: [320, 480, 640, 1024], ext: 'jpg' },
  { slug: 'tandem', dir: 'products/tandem', base: 'hero', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: 'channel', dir: 'products/channel', base: 'hero', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: '2d-ss', dir: 'products/2d', base: '2d-hinge-new', widths: [320, 388], ext: 'png', isPng: true },
  { slug: '3d-ss', dir: 'products/3d', base: 'hero', widths: [320, 480, 640], ext: 'jpg' },
  { slug: 'short-arm', dir: 'products/short-arm', base: 'hero', widths: [320, 480, 560], ext: 'jpg' },
  { slug: 'rolling-shutter', dir: 'products/rolling-shutter', base: 'rolling-shutter-hero', widths: [320, 385], ext: 'jpg' },
];

export function generateProductImageManifest() {
  const lines = [
    '// Generated automatically by scripts/optimize-images.mjs - DO NOT EDIT MANUALLY',
    'export interface ResponsiveImage {',
    '  src: string;',
    '  avifSrcset: string;',
    '  webpSrcset: string;',
    '  fallbackSrcset: string;',
    '  width: number;',
    '  height: number;',
    '}',
    '',
  ];

  // Imports
  for (const item of PRODUCT_SLUGS) {
    const varPrefix = item.slug.replace(/[^a-zA-Z0-9]/g, '_');
    for (const w of item.widths) {
      lines.push(`import ${varPrefix}_avif_${w} from "@/assets/${item.dir}/${item.base}-${w}w.avif";`);
      lines.push(`import ${varPrefix}_webp_${w} from "@/assets/${item.dir}/${item.base}-${w}w.webp";`);
      lines.push(`import ${varPrefix}_${item.ext}_${w} from "@/assets/${item.dir}/${item.base}-${w}w.${item.ext}";`);
    }
    // Main fallback
    lines.push(`import ${varPrefix}_main from "@/assets/${item.dir}/${item.base}.${item.ext}";`);
    lines.push('');
  }

  lines.push('export const productImages: Record<string, ResponsiveImage> = {');
  for (const item of PRODUCT_SLUGS) {
    const varPrefix = item.slug.replace(/[^a-zA-Z0-9]/g, '_');
    const avifSrcset = item.widths.map(w => `\${${varPrefix}_avif_${w}} ${w}w`).join(', ');
    const webpSrcset = item.widths.map(w => `\${${varPrefix}_webp_${w}} ${w}w`).join(', ');
    const fallbackSrcset = item.widths.map(w => `\${${varPrefix}_${item.ext}_${w}} ${w}w`).join(', ');

    lines.push(`  "${item.slug}": {`);
    lines.push(`    src: ${varPrefix}_main,`);
    lines.push(`    avifSrcset: \`${avifSrcset}\`,`);
    lines.push(`    webpSrcset: \`${webpSrcset}\`,`);
    lines.push(`    fallbackSrcset: \`${fallbackSrcset}\`,`);
    lines.push(`    width: 640,`);
    lines.push(`    height: 480,`);
    lines.push('  },');
  }
  lines.push('};');
  lines.push('');

  fs.writeFileSync('src/data/product-images.ts', lines.join('\n'), 'utf-8');
  console.log('Generated src/data/product-images.ts successfully!');
}

generateProductImageManifest();
