#!/usr/bin/env python

import os

def generate_golden_forest_tree(target_dir):
    # Ensure target_dir exists
    if not os.path.exists(target_dir):
        print(f"Error: Path '{target_dir}' not found.")
        return

    print(f"📂 Current File Structure ({target_dir}/)")
    for root, dirs, files in os.walk(target_dir):
        # Filter out hidden directories and node_modules
        dirs[:] = [d for d in dirs if not d.startswith(('.', 'node_modules'))]
        dirs.sort()  # Keep structure predictable

        # Calculate indentation based on depth relative to target_dir
        level = root.replace(target_dir, '').count(os.sep)
        indent = '  ' * level

        # Print the current directory
        folder_name = os.path.basename(root) if root != target_dir else target_dir
        if folder_name != "docs":
            print(f"{indent}📁 {folder_name}/")

        # Print files within that directory
        subindent = '  ' * (level + 1)
        for f in sorted(files):
            if f.startswith('.'):
                break
            if f.endswith(('.md', '.mdx')):
                print(f"{subindent}📝 {f}")
                break
            if f.endswith(('.yml', '.yaml')):
                print(f"{subindent}📓 {f}")
                break
            print(f"{subindent}📄 {f}")

# Execute targeting the /docs folder
generate_golden_forest_tree('docs')
