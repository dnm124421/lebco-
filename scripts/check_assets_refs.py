import os, re

matches_found = []
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.ts', '.tsx', '.css', '.html')):
            fp = os.path.join(root, f)
            with open(fp, 'r', encoding='utf-8') as handle:
                c = handle.read()
                matches = re.findall(r'["\']/(?:assets|public)/[^"\']+["\']', c)
                if matches:
                    matches_found.append((fp, matches))

print(f"References to /assets/ or /public/ in src/: {len(matches_found)}")
for fp, m in matches_found:
    print(f"  {fp}: {m}")
