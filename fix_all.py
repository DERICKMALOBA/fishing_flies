import os
import re

dir_path = r'c:\Users\dukeg\Downloads\Pure-Market\Pure-Market'

# CSS fix to insert into each product page to ensure navbar items stay inline
navbar_fix_css = """
    /* Ensure navbar menu stays on same row as logo on all desktop screens */
    @media (min-width: 992px) {
      .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
      }
      .navbar-nav {
        flex-direction: row;
      }
    }
"""

product_pages = [
    'dry-flies.html',
    'nymphs.html',
    'parachutes.html',
    'streamers.html',
    'saltwater.html',
]

for filename in product_pages:
    path = os.path.join(dir_path, filename)
    if not os.path.exists(path):
        print(f"Not found: {filename}")
        continue

    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Replace Ksh with $
    new_content = re.sub(r'Ksh\s*', '$', content, flags=re.IGNORECASE)

    # 2. Inject navbar fix CSS before closing </style> tag (first occurrence)
    if navbar_fix_css.strip() not in new_content:
        new_content = new_content.replace('  </style>', navbar_fix_css + '\n  </style>', 1)

    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {filename}")
    else:
        print(f"No changes: {filename}")
