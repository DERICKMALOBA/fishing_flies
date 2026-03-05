import os
import re

directory = "c:\\Users\\dukeg\\Downloads\\Pure-Market\\Pure-Market"
files = ["contact.html", "dry-flies.html", "nymphs.html", "parachutes.html", "streamers.html", "saltwater.html"]

for filename in files:
    path = os.path.join(directory, filename)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace 'Ksh ' or 'Ksh' with '$'
        new_content = re.sub(r'Ksh\s*', '$', content)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filename}")
    else:
        print(f"File not found: {path}")
