import re

with open('.output/public/assets/index-XEuuAUvH.js', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Look for package names or distinct license/module markers
packages = [
    'react', 'react-dom', '@tanstack/react-router', '@tanstack/react-query',
    'lucide-react', 'tailwind-merge', 'clsx', 'class-variance-authority',
    'radix', 'sonner', 'cmdk', 'recharts'
]

for p in packages:
    count = content.count(p)
    print(f"Package mention '{p}': {count} occurrences")

