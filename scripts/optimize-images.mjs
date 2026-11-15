import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ORIG_DIR = 'original-images';
const ASSETS_DIR = 'src/assets';

// Product images config
const PRODUCT_IMAGES = [
  { slug: 'anti-slip-matt', orig: 'products/anti-slip-matt/hero.jpg', destDir: 'products/anti-slip-matt', base: 'hero', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: 'magic-corner', orig: 'products/magic-corner/hero.jpg', destDir: 'products/magic-corner', base: 'hero', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: 'pantry-unit', orig: 'products/pantry/hero.jpg', destDir: 'products/pantry', base: 'hero', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: 'pullout', orig: 'products/pullout/hero.jpg', destDir: 'products/pullout', base: 'hero', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: 'pullout-wire', orig: 'products/pullout/wire.jpg', destDir: 'products/pullout', base: 'wire', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: 'pvc-cutlery', orig: 'products/pvc-cutlery/hero.jpg', destDir: 'products/pvc-cutlery', base: 'hero', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: 'thali-stand', orig: 'products/thali-stand/hero.jpg', destDir: 'products/thali-stand', base: 'hero', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: 'wicker-basket', orig: 'products/wicker-basket/hero.jpg', destDir: 'products/wicker-basket', base: 'hero', widths: [320, 480, 640, 1024], ext: 'jpg' },
  { slug: 'tandem', orig: 'products/tandem/hero.jpg', destDir: 'products/tandem', base: 'hero', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: 'channel', orig: 'products/channel/hero.jpg', destDir: 'products/channel', base: 'hero', widths: [320, 480, 640, 1080], ext: 'jpg' },
  { slug: '2d-ss', orig: 'products/2d/2d-hinge-new.png', destDir: 'products/2d', base: '2d-hinge-new', widths: [320, 388], ext: 'png', isPng: true },
  { slug: '3d-ss', orig: 'products/3d/hero.jpg', destDir: 'products/3d', base: 'hero', widths: [320, 480, 640], ext: 'jpg' },
  { slug: 'short-arm', orig: 'products/short-arm/hero.jpg', destDir: 'products/short-arm', base: 'hero', widths: [320, 480, 560], ext: 'jpg' },
  { slug: 'rolling-shutter', orig: 'products/rolling-shutter/rolling-shutter-hero.jpg', destDir: 'products/rolling-shutter', base: 'rolling-shutter-hero', widths: [320, 385], ext: 'jpg' },
  { slug: 'hero-showcase', orig: 'hero/hardware-showcase.jpg', destDir: 'hero', base: 'hardware-showcase', widths: [480, 768, 1080, 1200], ext: 'jpg' },
];

function generateManifest() {
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

  for (const item of PRODUCT_IMAGES) {
    const varPrefix = 'img_' + item.slug.replace(/[^a-zA-Z0-9]/g, '_');
    for (const w of item.widths) {
      lines.push(`import ${varPrefix}_avif_${w} from "@/assets/${item.destDir}/${item.base}-${w}w.avif";`);
      lines.push(`import ${varPrefix}_webp_${w} from "@/assets/${item.destDir}/${item.base}-${w}w.webp";`);
      lines.push(`import ${varPrefix}_${item.ext}_${w} from "@/assets/${item.destDir}/${item.base}-${w}w.${item.ext}";`);
    }
    lines.push(`import ${varPrefix}_main from "@/assets/${item.destDir}/${item.base}.${item.ext}";`);
    lines.push('');
  }

  lines.push('export const productImages: Record<string, ResponsiveImage> = {');
  for (const item of PRODUCT_IMAGES) {
    const varPrefix = 'img_' + item.slug.replace(/[^a-zA-Z0-9]/g, '_');
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

async function optimize() {
  console.log('--- Checking & optimizing images with Sharp ---');
  let beforeTotal = 0;
  let afterTotal = 0;
  const report = [];

  // 1. Optimize Logo
  const logoSrc = path.join(ORIG_DIR, 'logo.png');
  if (fs.existsSync(logoSrc)) {
    const origStat = fs.statSync(logoSrc);
    const origSize = origStat.size;
    beforeTotal += origSize;

    const logoPngPath = path.join(ASSETS_DIR, 'logo.png');
    const logoWebpPath = path.join(ASSETS_DIR, 'logo.webp');
    const logoHero640 = path.join(ASSETS_DIR, 'logo-hero-640w.webp');
    const logoHero1280 = path.join(ASSETS_DIR, 'logo-hero-1280w.webp');

    if (!fs.existsSync(logoHero1280) || fs.statSync(logoHero1280).mtimeMs < origStat.mtimeMs) {
      const hero1280Buf = await sharp(logoSrc)
        .resize(1280)
        .webp({ quality: 85, effort: 6 })
        .toBuffer();
      fs.writeFileSync(logoHero1280, hero1280Buf);

      const hero640Buf = await sharp(logoSrc)
        .resize(640)
        .webp({ quality: 85, effort: 6 })
        .toBuffer();
      fs.writeFileSync(logoHero640, hero640Buf);

      const logoWebpBuf = await sharp(logoSrc)
        .resize(400)
        .webp({ quality: 85, effort: 6 })
        .toBuffer();
      fs.writeFileSync(logoWebpPath, logoWebpBuf);

      const logoPngBuf = await sharp(logoSrc)
        .resize(400)
        .png({ compressionLevel: 9, effort: 10 })
        .toBuffer();
      fs.writeFileSync(logoPngPath, logoPngBuf);
    }

    const currentWebpSize = fs.statSync(logoWebpPath).size;
    const currentPngSize = fs.statSync(logoPngPath).size;
    afterTotal += currentWebpSize;
    report.push({
      file: 'logo.png',
      before: `${(origSize / 1024).toFixed(1)} KB (PNG 875x803)`,
      after: `${(currentWebpSize / 1024).toFixed(1)} KB (WebP 240w) / ${(currentPngSize / 1024).toFixed(1)} KB (PNG 240w)`,
      saving: `${(((origSize - currentWebpSize) / origSize) * 100).toFixed(1)}%`
    });
  }

  // 2. Optimize Product & Hero Images
  for (const item of PRODUCT_IMAGES) {
    const origPath = path.join(ORIG_DIR, item.orig);
    if (!fs.existsSync(origPath)) {
      console.warn(`Missing: ${origPath}`);
      continue;
    }

    const origStat = fs.statSync(origPath);
    const origSize = origStat.size;
    beforeTotal += origSize;

    const meta = await sharp(origPath).metadata();
    const targetDir = path.join(ASSETS_DIR, item.destDir);
    fs.mkdirSync(targetDir, { recursive: true });

    for (const w of item.widths) {
      if (w > meta.width) continue;

      const avifPath = path.join(targetDir, `${item.base}-${w}w.avif`);
      const webpPath = path.join(targetDir, `${item.base}-${w}w.webp`);
      const fallbackExt = item.isPng ? 'png' : item.ext;
      const fallbackPath = path.join(targetDir, `${item.base}-${w}w.${fallbackExt}`);

      if (!fs.existsSync(avifPath) || fs.statSync(avifPath).mtimeMs < origStat.mtimeMs) {
        const avifBuf = await sharp(origPath)
          .rotate()
          .resize(w, null, { withoutEnlargement: true })
          .avif({ quality: 50, effort: 5 })
          .toBuffer();
        fs.writeFileSync(avifPath, avifBuf);
      }

      if (!fs.existsSync(webpPath) || fs.statSync(webpPath).mtimeMs < origStat.mtimeMs) {
        const webpBuf = await sharp(origPath)
          .rotate()
          .resize(w, null, { withoutEnlargement: true })
          .webp({ quality: 75, effort: 5 })
          .toBuffer();
        fs.writeFileSync(webpPath, webpBuf);
      }

      if (!fs.existsSync(fallbackPath) || fs.statSync(fallbackPath).mtimeMs < origStat.mtimeMs) {
        if (item.isPng) {
          const pngBuf = await sharp(origPath)
            .rotate()
            .resize(w, null, { withoutEnlargement: true })
            .png({ compressionLevel: 8 })
            .toBuffer();
          fs.writeFileSync(fallbackPath, pngBuf);
        } else {
          const jpgBuf = await sharp(origPath)
            .rotate()
            .resize(w, null, { withoutEnlargement: true })
            .jpeg({ quality: 75, mozjpeg: true })
            .toBuffer();
          fs.writeFileSync(fallbackPath, jpgBuf);
        }
      }
    }

    const targetPrimaryExt = item.isPng ? '.png' : '.jpg';
    const primaryPath = path.join(targetDir, `${item.base}${targetPrimaryExt}`);
    const primaryWebpPath = path.join(targetDir, `${item.base}.webp`);
    const standardWidth = Math.min(640, meta.width);

    if (!fs.existsSync(primaryWebpPath) || fs.statSync(primaryWebpPath).mtimeMs < origStat.mtimeMs) {
      const mainWebp = await sharp(origPath)
        .rotate()
        .resize(standardWidth, null, { withoutEnlargement: true })
        .webp({ quality: 75, effort: 5 })
        .toBuffer();
      fs.writeFileSync(primaryWebpPath, mainWebp);
    }

    if (!fs.existsSync(primaryPath) || fs.statSync(primaryPath).mtimeMs < origStat.mtimeMs) {
      let mainFallback;
      if (item.isPng) {
        mainFallback = await sharp(origPath)
          .rotate()
          .resize(standardWidth, null, { withoutEnlargement: true })
          .png({ compressionLevel: 8 })
          .toBuffer();
      } else {
        mainFallback = await sharp(origPath)
          .rotate()
          .resize(standardWidth, null, { withoutEnlargement: true })
          .jpeg({ quality: 75, mozjpeg: true })
          .toBuffer();
      }
      fs.writeFileSync(primaryPath, mainFallback);
    }

    const bestPrimarySize = fs.statSync(primaryWebpPath).size;
    const fallbackSize = fs.statSync(primaryPath).size;
    afterTotal += bestPrimarySize;

    report.push({
      file: item.orig,
      before: `${(origSize / 1024).toFixed(1)} KB (${meta.format?.toUpperCase()} ${meta.width}x${meta.height})`,
      after: `${(bestPrimarySize / 1024).toFixed(1)} KB (WebP ${standardWidth}w) / ${(fallbackSize / 1024).toFixed(1)} KB (${targetPrimaryExt.slice(1).toUpperCase()})`,
      saving: `${(((origSize - bestPrimarySize) / origSize) * 100).toFixed(1)}%`
    });
  }

  generateManifest();

  console.log('\n================ IMAGE OPTIMIZATION SUMMARY ================');
  console.table(report);
  console.log(`Total original image weight : ${(beforeTotal / 1024).toFixed(1)} KB (${(beforeTotal / (1024 * 1024)).toFixed(2)} MB)`);
  console.log(`Total optimized image weight: ${(afterTotal / 1024).toFixed(1)} KB (${(afterTotal / (1024 * 1024)).toFixed(2)} MB)`);
  console.log(`Overall reduction           : ${(((beforeTotal - afterTotal) / beforeTotal) * 100).toFixed(1)}% savings!`);
}

optimize().catch(err => {
  console.error(err);
  process.exit(1);
});
