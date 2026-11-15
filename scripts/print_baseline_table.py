import json

files = [
    ("Home", "baseline-home.json"),
    ("Products", "baseline-products.json"),
    ("Slim Tandem Box", "baseline-tandem.json"),
    ("PVC Cutlery Tray", "baseline-pvc-cutlery.json"),
    ("PVC Rolling Shutter", "baseline-rolling-shutter.json"),
]

row_fmt = "| %-20s | %-12s | %-10s | %-10s | %-10s | %-10s | %-15s | %-12s |"
print(row_fmt % ("Page", "Score", "LCP", "FCP", "TBT", "CLS", "Transfer Size", "Requests"))
print("|" + "-"*22 + "|" + "-"*14 + "|" + "-"*12 + "|" + "-"*12 + "|" + "-"*12 + "|" + "-"*12 + "|" + "-"*17 + "|" + "-"*14 + "|")

for name, fname in files:
    with open(fname, 'r', encoding='utf-8') as f:
        data = json.load(f)
    perf = data.get('categories', {}).get('performance', {}).get('score')
    audits = data.get('audits', {})
    score = f"{int(perf * 100)}" if perf is not None else "N/A"
    lcp = audits.get('largest-contentful-paint', {}).get('displayValue', 'N/A')
    fcp = audits.get('first-contentful-paint', {}).get('displayValue', 'N/A')
    tbt = audits.get('total-blocking-time', {}).get('displayValue', 'N/A')
    cls = audits.get('cumulative-layout-shift', {}).get('displayValue', 'N/A')
    sz = audits.get('total-byte-weight', {}).get('numericValue', 0)
    transfer = f"{sz/1024:.1f} KB"
    reqs = str(len(audits.get('network-requests', {}).get('details', {}).get('items', [])))
    print(row_fmt % (name, score, lcp, fcp, tbt, cls, transfer, reqs))

