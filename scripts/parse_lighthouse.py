import json, sys

filepath = sys.argv[1] if len(sys.argv) > 1 else 'baseline-home.json'
with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)

cats = data.get('categories', {})
audits = data.get('audits', {})

print(f"=== LIGHTHOUSE REPORT: {filepath} ===")
perf = cats.get('performance', {}).get('score')
print(f"Performance Score: {int(perf * 100) if perf is not None else 'N/A'}")
print(f"FCP: {audits.get('first-contentful-paint', {}).get('displayValue', 'N/A')}")
print(f"LCP: {audits.get('largest-contentful-paint', {}).get('displayValue', 'N/A')}")
print(f"TBT: {audits.get('total-blocking-time', {}).get('displayValue', 'N/A')}")
print(f"CLS: {audits.get('cumulative-layout-shift', {}).get('displayValue', 'N/A')}")
sz = audits.get('total-byte-weight', {}).get('numericValue', 0)
print(f"Total Transfer Size: {sz/1024:.2f} KB ({sz/(1024*1024):.2f} MB)")
reqs = audits.get('network-requests', {}).get('details', {}).get('items', [])
print(f"Total Network Requests: {len(reqs)}")

