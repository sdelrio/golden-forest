import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const charsDir = './static/fg/chars';
const files = readdirSync(charsDir).filter(f => f.endsWith('.xml'));

// Extract text content of first matching tag (ignoring whitespace before it)
function parseText(xml, tag) {
  const regex = new RegExp(`\\s*<${tag}[^>]*>([\\s\\S]*?)\\s*</${tag}>`, 'i');
  const match = xml.match(regex);
  return match ? (match[1] || '').trim() : '';
}

// Extract all class names from within <classes>...</classes>
function parseClasses(xml) {
  // Find the classes block
  const classesBlockRegex = /\s*<classes>([\s\S]*?)<\/classes>/i;
  const classesMatch = xml.match(classesBlockRegex);
  if (!classesMatch) return [];

  const classesContent = classesMatch[1];
  const classNames = [];
  // Each child element (like <id-00001>) may contain a <name> tag with the class name
  const elements = [...classesContent.matchAll(/<[^/][^>]*>([\s\S]*?)<\/([^>]*)>/g)];
  
  for (const elMatch of elements) {
    // Check if this element contains a nested <name type="string">...</name>
    const innerText = elMatch[1];
    const nameRegex = /\s*<name[^>]*>([\s\S]*?)<\/name>/i;
    const nameMatch = innerText.match(nameRegex);
    if (nameMatch && nameMatch[1] && nameMatch[1].trim()) {
      classNames.push(nameMatch[1].trim());
    }
  }

  return classNames;
}

const index = [];
for (const file of files) {
  const xml = readFileSync(join(charsDir, file), 'utf-8');

  // Character name and race are direct children of <character>
  const charXml = /\s*<character>([\s\S]*?)<\/character>/i;
  const charMatch = xml.match(charXml);
  
  let name = '';
  let race = '';
  if (charMatch) {
    const charContent = charMatch[1];
    // Name is a direct child of character
    const nameRegex = /\s*<name[^>]*>([\s\S]*?)<\/name>/i;
    const nameMatch = charContent.match(nameRegex);
    if (nameMatch && nameMatch[1]) {
      name = nameMatch[1].trim();
    }
    // Race is a direct child of character  
    const raceRegex = /\s*<race[^>]*>([\s\S]*?)<\/race>/i;
    const raceMatch = charContent.match(raceRegex);
    if (raceMatch && raceMatch[1]) {
      race = raceMatch[1].trim();
    }
  }

  // Extract class names from the classes block within character
  const classes = parseClasses(xml);

  index.push({ filename: file.replace('.xml', ''), name, race, classes });
}

writeFileSync('./static/fg/chars/index.json', JSON.stringify(index, null, 2));
console.log(`Indexed ${index.length} characters to static/fg/chars/index.json`);
