import os
import re

dir_path = r'c:\Users\dukeg\Downloads\Pure-Market\Pure-Market'
# Include all HTML and JS files
for root, dirs, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.html') or file.endswith('.js'):
            path = os.path.join(root, file)
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace 'Ksh ' or 'Ksh' with '$'
                # Also handle case variations and URL encoded versions if present
                new_content = re.sub(r'Ksh\s*', '$', content, flags=re.IGNORECASE)
                
                if content != new_content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated: {path}")
            except Exception as e:
                print(f"Error processing {path}: {e}")
