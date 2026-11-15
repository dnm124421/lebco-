import urllib.request, os, re

os.makedirs('public/fonts', exist_ok=True)
url = 'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&display=swap'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'})

with urllib.request.urlopen(req) as resp:
    css = resp.read().decode('utf-8')

blocks = css.split('@font-face')
latin_fonts = {}

for block in blocks:
    if '/* latin */' in block:
        weight_m = re.search(r'font-weight:\s*(\d+);', block)
        url_m = re.search(r'url\((https://[^)]+\.woff2)\)', block)
        if weight_m and url_m:
            weight = weight_m.group(1)
            font_url = url_m.group(1)
            latin_fonts[weight] = font_url

print("Found Latin weights:", list(latin_fonts.keys()))

local_css_rules = []
for weight, font_url in sorted(latin_fonts.items()):
    filename = f"source-sans-3-latin-{weight}.woff2"
    filepath = os.path.join('public/fonts', filename)
    print(f"Downloading {font_url} -> {filepath}...")
    urllib.request.urlretrieve(font_url, filepath)
    sz = os.path.getsize(filepath)
    print(f"  Downloaded {filename}: {sz/1024:.2f} KB")

    rule = f"""@font-face {{
  font-family: 'Source Sans 3';
  font-style: normal;
  font-weight: {weight};
  font-display: swap;
  src: url('/fonts/{filename}') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}}"""
    local_css_rules.append(rule)

with open('public/fonts/fonts.css', 'w', encoding='utf-8') as f:
    f.write("\n\n".join(local_css_rules) + "\n")

print("Created public/fonts/fonts.css successfully!")

