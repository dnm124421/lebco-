import os, re
from PIL import Image

print("=== 1. BUILD ASSET SIZES (.output/public) ===")
out_dir = '.output/public'
files = []
if os.path.exists(out_dir):
    for root, dirs, fnames in os.walk(out_dir):
        for f in fnames:
            fp = os.path.join(root, f)
            rel = os.path.relpath(fp, out_dir)
            files.append((rel, os.path.getsize(fp)))
    files.sort(key=lambda x: x[1], reverse=True)
    for rel, sz in files[:20]:
        print(f"  {rel:50} | {sz/1024:8.2f} KB")

print("\n=== 2. USED UI COMPONENTS ===")
used_ui = set()
for root, dirs, fnames in os.walk('src'):
    for f in fnames:
        if f.endswith(('.ts', '.tsx')):
            with open(os.path.join(root, f), 'r', encoding='utf-8') as handle:
                c = handle.read()
                matches = re.findall(r'from\s+["\']@/components/ui/([^"\']+)["\']', c)
                for m in matches:
                    used_ui.add(m)
for u in sorted(used_ui):
    print(f"  - {u}")

print("\n=== 3. FONTS LOADED ===")
# Check index.html, root.tsx, styles.css
for target in ['index.html', 'src/routes/__root.tsx', 'src/styles.css']:
    if os.path.exists(target):
        with open(target, 'r', encoding='utf-8') as handle:
            c = handle.read()
            font_matches = re.findall(r'(https://fonts\.[^\s"\'<>]+|font-family:[^;]+|@font-face[^{]+\{[^}]+\})', c)
            if font_matches:
                print(f"  In {target}:")
                for fm in font_matches:
                    print(f"    {fm[:80]}...")

print("\n=== 4. THIRD PARTY SCRIPTS / EMBEDS ===")
for target in ['index.html', 'src/routes/__root.tsx']:
    if os.path.exists(target):
        with open(target, 'r', encoding='utf-8') as handle:
            c = handle.read()
            scripts = re.findall(r'<script[^>]*src=["\']([^"\']+)["\'][^>]*>', c)
            links = re.findall(r'<link[^>]*href=["\']([^"\']+)["\'][^>]*>', c)
            print(f"  In {target} scripts:", scripts)
            print(f"  In {target} external links:", [l for l in links if l.startswith('http')])
