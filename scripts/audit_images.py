import os, re
from PIL import Image

print("=== Checking all image imports across src ===")
all_images = {}
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            fp = os.path.join(root, f)
            with open(fp, 'r', encoding='utf-8') as handle:
                c = handle.read()
                matches = re.findall(r'import\s+.*from\s+["\']([^"\']+\.(?:png|jpg|jpeg|webp|svg))["\']', c)
                if matches:
                    for m in matches:
                        resolved = os.path.normpath(os.path.join(os.path.dirname(fp), m)) if m.startswith('.') else m.replace('@/', 'src/')
                        all_images[resolved] = all_images.get(resolved, []) + [fp]

for img, files in sorted(all_images.items()):
    if os.path.exists(img):
        sz = os.path.getsize(img) / 1024
        dims = "SVG"
        if not img.endswith('.svg'):
            with Image.open(img) as im:
                dims = f"{im.format} {im.width}x{im.height}"
        print(f"{img:55} | {dims:15} | {sz:8.2f} KB | used in: {', '.join(os.path.basename(x) for x in files)}")
