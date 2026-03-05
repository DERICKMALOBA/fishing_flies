import os
import re

def check_image_paths(root_dir):
    image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp')
    
    # Get all files in the root_dir (recursive)
    all_files = {}
    for r, d, f in os.walk(root_dir):
        for file in f:
            rel_path = os.path.relpath(os.path.join(r, file), root_dir).replace('\\', '/')
            all_files[rel_path.lower()] = rel_path
            
    html_files = [f for f in os.listdir(root_dir) if f.endswith('.html')]
    
    mismatches = []
    
    # Regex to find paths in src attributes or url()
    path_regex = re.compile(r'(?:src="|url\([\'"]?)([^"\')]+\.(?:jpg|jpeg|png|gif|svg|webp))', re.IGNORECASE)
    
    for html_file in html_files:
        path = os.path.join(root_dir, html_file)
        with open(path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            matches = path_regex.findall(content)
            for match in matches:
                # Normalize the match path
                match_normalized = match.replace('\\', '/').lstrip('/')
                if match_normalized.lower() in all_files:
                    actual_path = all_files[match_normalized.lower()]
                    if match_normalized != actual_path:
                        mismatches.append({
                            'file': html_file,
                            'found': match_normalized,
                            'actual': actual_path
                        })
                else:
                    # Check if it's missing entirely or if the case is just off in the directory part
                    pass

    return mismatches

if __name__ == "__main__":
    root = "c:/Users/dukeg/Downloads/Pure-Market/Pure-Market"
    results = check_image_paths(root)
    if results:
        print("Found case mismatches:")
        for r in results:
            print(f"File: {r['file']}, Found: {r['found']}, Actual: {r['actual']}")
    else:
        print("No case mismatches found.")
