import os, re

def check():
    with open('src/data/products.ts', 'r', encoding='utf-8') as f:
        products_code = f.read()

    with open('src/routes/index.tsx', 'r', encoding='utf-8') as f:
        home_code = f.read()

    with open('src/styles.css', 'r', encoding='utf-8') as f:
        css_code = f.read()

    # 1. Home hero check
    assert 'LEBCO' in home_code
    assert 'Quality Hardware. Built for Everyday Use.' in home_code
    assert 'Heavy MS & SS' in home_code
    assert 'SS 304' not in home_code
    print('[PASS] Requirement 1: Home hero brand wordmark and Heavy MS & SS badge')

    # 2. 304 grade check
    assert 'SS 304' not in products_code
    assert '304' not in products_code
    print('[PASS] Requirement 1.4: Zero 304 matches in products.ts')

    # 3. Short arm check
    short_arm_match = re.search(r'slug: "short-arm".*?description:\s*"(.*?)"', products_code, re.DOTALL)
    assert short_arm_match
    assert 'Each carton holds 100 sets with screws.' not in short_arm_match.group(1)
    print('[PASS] Requirement 2: Short arm description cleaned')

    # 4. Telescopic channel check
    channel_match = re.search(r'slug: "channel".*?variantsTables:\s*\[(.*?)\]', products_code, re.DOTALL)
    assert channel_match
    assert 'warranty' not in channel_match.group(0).lower()
    assert 'warranty' not in products_code.lower()
    assert 'soft close' not in channel_match.group(0).lower()
    assert 'regular and' not in channel_match.group(0).lower()
    assert 'european' not in channel_match.group(0).lower()
    assert 'anti-rust' not in channel_match.group(0).lower()
    assert '45 kg (Black and Zinc)' in channel_match.group(0)
    print('[PASS] Requirement 3: Telescopic channel cleaned, 0 warranty on site')

    # 5. Plate cup saucer stand check
    thali_match = re.search(r'slug: "thali-stand".*?name:\s*"Plate, Cup and Saucer Stand"', products_code, re.DOTALL)
    assert thali_match
    assert '4 pcs / box' in products_code
    print('[PASS] Requirement 4: Plate, Cup and Saucer Stand updated')

    # 6. PVC Cutlery tray check
    pvc_match = re.search(r'slug: "pvc-cutlery".*?specifications:.*?"Available Widths",\s*value:\s*"(.*?)"', products_code, re.DOTALL)
    assert pvc_match
    assert '450mm' in pvc_match.group(1)
    assert '400mm' not in pvc_match.group(1)
    print('[PASS] Requirement 5: PVC Cutlery Tray starts at 450mm')

    # 7. Pantry Unit check
    pantry_chunk = products_code[products_code.find('slug: "pantry"'):products_code.find('slug: "magic-corner"')]
    assert '1820 mm (6 ft)' in pantry_chunk
    assert '1200 mm (4 ft)' in pantry_chunk
    assert '4 layers' in pantry_chunk
    assert '6 layers' in pantry_chunk
    print('[PASS] Requirement 6: Pantry Unit has both 6 ft and 4 ft (4 rows)')

    # 8. Mobile fonts check
    assert 'font-synthesis: none' in css_code
    assert 'Source Sans 3' in css_code
    assert '-webkit-text-size-adjust: 100%' in css_code
    assert 'button, input, select, textarea, table, th, td' in css_code or 'button,\n  input,' in css_code
    print('[PASS] Requirement 7: Mobile fonts CSS configured properly')

    print('\nALL 7 CORE REQUIREMENTS VERIFIED AND PASSING!')

if __name__ == '__main__':
    check()
