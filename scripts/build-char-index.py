#!/usr/bin/env python3
"""Build a JSON index of all Fantasy Grounds character XML files."""

import json
import os
from pathlib import Path
import xml.etree.ElementTree as ET

CHARS_DIR = Path(__file__).parent.parent / "static" / "fg" / "chars"
OUTPUT_FILE = CHARS_DIR / "index.json"


def extract_element_text(xml_str, tag):
    """Extract text content of the first occurrence of <tag>...</tag>.
    
    This is a fallback for simple cases; main parsing uses ElementTree.
    """
    # Not used in current implementation but kept as utility
    return None


def parse_character_xml(filepath):
    """Parse a single character XML file and extract metadata."""
    try:
        tree = ET.parse(str(filepath))
        root = tree.getroot()
        char_elem = root.find('.//character')
        
        if char_elem is None:
            return None
        
        # Extract name (direct child of character)
        name_el = char_elem.find('name')
        name = name_el.text.strip() if name_el is not None and name_el.text else ''
        
        # Extract race (direct child of character)
        race_el = char_elem.find('race')
        race = race_el.text.strip() if race_el is not None and race_el.text else ''
        
        # Extract all class names from <classes> children that have a <name> sub-element
        classes = []
        classes_el = char_elem.find('classes')
        if classes_el is not None:
            for cls_child in classes_el:
                name_el_inner = cls_child.find('name')
                if name_el_inner is not None and name_el_inner.text:
                    classes.append(name_el_inner.text.strip())
        
        # Extract overall character level (direct child of <character>)
        level_el = char_elem.find('level')
        level = int(level_el.text) if (level_el is not None and level_el.text) else None

        return {
            'filename': os.path.splitext(os.path.basename(filepath))[0],
            'name': name,
            'race': race,
            'classes': classes,
            'level': level,
        }
    except Exception as e:
        print(f"Warning: Could not parse {filepath}: {e}")
        return None


def main():
    xml_files = sorted(CHARS_DIR.glob('*.xml'))
    
    index = []
    for filepath in xml_files:
        result = parse_character_xml(filepath)
        if result:
            index.append(result)
    
    OUTPUT_FILE.write_text(json.dumps(index, indent=2))
    print(f"Indexed {len(index)} characters to {OUTPUT_FILE}")


if __name__ == '__main__':
    main()
