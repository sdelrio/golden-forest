---
sidebar_position: 2
---

# XmlChar Component

The XmlChar component displays Dungeons & Dragons character sheets on your website. It reads character data from Fantasy Grounds XML files and renders beautiful, styled character cards.

## What You Need

Before using XmlChar, you need:

1. **A Fantasy Grounds XML file** - Export your character from Fantasy Grounds
2. **An optional portrait image** - A JPG or PNG image of your character

These files must be placed in specific folders:

| File Type | Location |
|-----------|----------|
| XML character files | `static/fg/chars/` |
| Portrait images | `static/fg/avatar/` |

## Display Modes

XmlChar supports three display sizes:

### Small
A compact card showing essential information: name, class, race, armor class, hit points, speed, and ability scores. Perfect for displaying multiple characters side by side.

### Medium
A standard-sized card that includes everything from small mode, plus proficient skills, languages, and proficiency bonus.

### Large
A full-sized character sheet with all features, including a character portrait and feats list.

## Basic Usage

### Display a Character

To show a character on your page, use the following code:

```mdx
<XmlChar filename="tanadirian" display="medium" />
```

This displays the character from `tanadirian.xml` in medium size.

:::tip
You can omit the `.xml` extension. Both `filename="tanadirian"` and `filename="tanadirian.xml"` work the same way.
:::

### Choosing a Display Size

Use the `display` prop to control the size:

```mdx
<XmlChar filename="tanadirian" display="small" />
```

```mdx
<XmlChar filename="tanadirian" display="medium" />
```

```mdx
<XmlChar filename="tanadirian" display="large" />
```

If you don't specify a display size, it defaults to medium.

### Adding a Character Portrait

For large display mode, you can add a character portrait:

```mdx
<XmlChar 
    filename="alioth" 
    display="large" 
    image="alioth.jpg" 
/>
```

If no image is specified, XmlChar automatically looks for an image file matching the character's name (e.g., `alioth.jpg` for `alioth.xml`). If no image is found, a placeholder icon is displayed.

## Advanced Usage

### Display Multiple Characters Side by Side

Small cards automatically flow side by side. To center them on the page, wrap them in a container:

```mdx
<div style={{ textAlign: 'center' }}>
  <XmlChar filename="delizan" display="small" />
  <XmlChar filename="dorian" display="small" />
  <XmlChar filename="dougal" display="small" />
</div>
```

### Error Handling

XmlChar displays helpful error messages when something goes wrong:

- **File not found**: Shown when the XML file doesn't exist
- **Could not parse**: Shown when the XML file is invalid or corrupted
- **Missing filename**: Shown when no filename is provided

## Styling

XmlChar automatically adapts to your site's color scheme:

- **Light mode**: Parchment-style background with red accents
- **Dark mode**: Dark background with amber accents

No additional configuration is needed—the component detects the `[data-theme='dark']` attribute on the HTML element and responds to theme changes automatically.

## Troubleshooting

### My character doesn't appear

1. Verify the XML file is in `static/fg/chars/`
2. Check the filename matches exactly (case-sensitive)
3. Ensure the XML file is valid Fantasy Grounds format

### The portrait doesn't show

1. Verify the image is in `static/fg/avatar/`
2. Supported formats: JPG, PNG, SVG
3. Check the filename matches (without the extension in the `image` prop)

### Cards aren't centering

Make sure you're using the wrapper div with `textAlign: 'center'` as shown in the examples above.

## Live Examples

For working code samples with rendered output, see the [XmlChar Test Page](../XmlTest) which demonstrates all display modes and configuration options.
