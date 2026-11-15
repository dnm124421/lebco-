import subprocess, sys

urls = [
    ("baseline-products.json", "https://lebco.netlify.app/products"),
    ("baseline-tandem.json", "https://lebco.netlify.app/products/tandem"),
    ("baseline-pvc-cutlery.json", "https://lebco.netlify.app/products/pvc-cutlery"),
    ("baseline-rolling-shutter.json", "https://lebco.netlify.app/products/rolling-shutter"),
]

for out_file, url in urls:
    print(f"\n>>> Running Lighthouse on {url} -> {out_file}...")
    cmd = [
        "npx.cmd", "lighthouse", url,
        "--view=false",
        "--output=json",
        f"--output-path={out_file}",
        '--chrome-flags="--headless=new --no-sandbox"'
    ]
    subprocess.run(" ".join(cmd), shell=True, check=True)
    print(f"Finished {out_file}")
