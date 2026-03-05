import os
import re

def fix_image_paths(root_dir):
    # 1. Rename Streamers directory if it exists with wrong case
    img_dir = os.path.join(root_dir, 'images')
    if os.path.exists(img_dir):
        for item in os.listdir(img_dir):
            if item.lower() == 'streamers' and item != 'streamers':
                old_path = os.path.join(img_dir, item)
                new_path = os.path.join(img_dir, 'streamers')
                print(f"Renaming directory {old_path} to {new_path}")
                os.rename(old_path, new_path)

    # 2. Get all files in the root_dir (recursive) with exact case mapping
    all_files = {}
    for r, d, f in os.walk(root_dir):
        for file in f:
            full_path = os.path.join(r, file)
            rel_path = os.path.relpath(full_path, root_dir).replace('\\', '/')
            all_files[rel_path.lower()] = rel_path
            
    html_files = [f for f in os.listdir(root_dir) if f.endswith('.html')]
    
    # Regex to find paths in src attributes or url() or image: "path" in JS
    path_regex = re.compile(r'((?:src="|url\([\'"]?|image:\s*[\'"])([^"\'\)]+\.(?:jpg|jpeg|png|gif|svg|webp))([\'"\)]?))', re.IGNORECASE)
    
    for html_file in html_files:
        path = os.path.join(root_dir, html_file)
        with open(path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        new_content = content
        matches = path_regex.findall(content)
        
        changed = False
        for full_match, match_path, suffix in matches:
            # Normalize the match path
            match_normalized = match_path.replace('\\', '/').lstrip('/')
            
            # Check if it's relative to images/ or root
            lookup_bases = [match_normalized, f"images/{match_normalized}"]
            for base in lookup_bases:
                if base.lower() in all_files:
                    actual_path = all_files[base.lower()]
                    if match_normalized != actual_path:
                        print(f"Fixing in {html_file}: {match_normalized} -> {actual_path}")
                        # Escape match_path for literal replacement if needed, 
                        # but we can try direct substitute if it's unique enough
                        new_content = new_content.replace(match_path, actual_path)
                        changed = True
                    break
        
        if changed:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)

if __name__ == "__main__":
    root = "c:/Users/dukeg/Downloads/Pure-Market/Pure-Market"
    fix_image_paths(root)
    print("Optimization and fix complete.")
