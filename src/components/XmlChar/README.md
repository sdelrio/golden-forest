# XmlChar Component

D&D character sheet renderer from Fantasy Grounds XML files.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `filename` | string | required | XML file name (with or without `.xml` extension) |
| `display` | string | `'medium'` | Display mode: `'small'`, `'medium'`, or `'large'` |
| `image` | string | auto-detected | Avatar image filename (large mode only) |

## Display Modes

- **small**: Compact 350px card with vitality, level, and abilities grid
- **medium**: 480px card with skills, languages, and proficiency bonus
- **large**: 710px card with portrait and feats

## Usage

```jsx
import XmlChar from '@site/src/components/XmlChar/XmlChar';

<XmlChar filename="character.xml" display="medium" />
```

## Centering Multiple Small Containers

Small display mode uses `inline-block`, allowing multiple cards to flow side-by-side. To center them, wrap in a parent div:

```jsx
<div style={{ textAlign: 'center' }}>
  <XmlChar filename="char1.xml" display="small" />
  <XmlChar filename="char2.xml" display="small" />
  <XmlChar filename="char3.xml" display="small" />
</div>
```

## File Locations

- XML files: `static/fg/chars/`
- Avatar images: `static/fg/avatar/`

## Features

- Responsive display modes
- Dark mode support with amber accent
- Automatic image detection or fallback to faceless icon
- Error handling for missing/unparseable files
