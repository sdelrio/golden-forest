---
title: "Campaign Design Tools"
description: "A curated collection of procedural generators and mapping tools for D&D 5e worldbuilding and campaign design."
tags: [dnd, worldbuilding, tools, maps, generator]
sidebar_position: 25
---

import Card from '@site/src/components/Card/Card';
import CardGroup from '@site/src/components/Card/CardGroup';
import Accordion from '@site/src/components/Accordion/Accordion';
import AccordionGroup from '@site/src/components/Accordion/AccordionGroup';

# Campaign Design & Mapping Tools

A successful D&D campaign often hinges on the setting. Visually rich cities, unpredictable dungeons, and cohesive regional maps draw players deeper into the fiction and alleviate the mechanical burden of running the game. However, hand-drawing every alleyway, chamber, and mountain range is incredibly time-consuming.

Modern procedural generators allow Dungeon Masters (DMs) to skip the tedious grid-plotting and jump straight to the creative details—populating locations with stories, NPCs, and encounters. This guide compiles the best open-source and browser-based tools to accelerate your tabletop preparation.

## Watabou's Procedural Suite

Creator **Watabou** (consolidated under the **[Procgen Arcana](https://watabou.github.io/)** catalog) has revolutionized tabletop worldbuilding. These tools generate instant, highly customizable vector maps with organic-feeling layouts. By right-clicking any generator, you can access an extensive menu of style settings, color palettes, layouts, and export options.

<CardGroup cols={2}>
  <Card title="Medieval Fantasy City Generator" icon="game-icons:castle" href="https://watabou.itch.io/medieval-fantasy-city-generator">
    Instantly generate complete cities, towns, or hamlets with realistic roads, defensive walls, water features, and distinct neighborhood wards.
  </Card>
  <Card title="One Page Dungeon" icon="game-icons:dungeon-gate" href="https://watabou.itch.io/one-page-dungeon">
    Generate complete dungeon maps in a classic hand-hatched blueprint aesthetic, complete with pre-filled room descriptions and encounter suggestions.
  </Card>
  <Card title="Fantasy Region Generator (Realm)" icon="game-icons:hexes" href="https://watabou.itch.io/fantasy-region-generator">
    Produce regional hex-like maps depicting geographic points of interest, political boundaries, roads, rivers, and local kingdoms.
  </Card>
  <Card title="Village & Toy Town" icon="game-icons:village" href="https://watabou.itch.io/village-generator">
    Generate small rural settlements or isometric stylized towns, perfect for local quest hubs and homesteads.
  </Card>
</CardGroup>

### Settlement Generators

#### Medieval Fantasy City Generator
This is the gold standard for city mapping. It generates cohesive municipal layouts featuring:
- **Wards & Neighborhoods**: Separation between castle districts, docks, slums, craft quarters, and markets.
- **Customizable Layouts**: Scale the city size, toggle sea walls, adjust river paths, and dictate the placement of keep structures.
- **Color Palettes**: Switch between clean blueprints, sepia parchments, high-contrast dark modes, and full-color prints.

:::tip Styling Tip
For campaign customization, right-click the generator and choose **Export > SVG**. You can load this directly into **Inkscape** or **Adobe Illustrator** to manually change colors, move walls, or isolate individual buildings for detailed street fights.
:::

#### Village Generator
Geared toward small-scale outposts, this generator creates natural rural paths, localized clusters of farmsteads, and simple surrounding forests. It is ideal for starting towns (like *Phandalin*) where players need a home base.

#### Toy Town
This tool provides a beautiful **isometric (3D)** layout of small medieval towns. It is highly stylized, offering an immersive visual aid to show players exactly what their destination looks like from a bird's-eye view.

### Exploration Generators

#### One Page Dungeon
The One Page Dungeon generator implements a Dyson-style cross-hatching look. It outputs clean layouts including:
- **Narrative Seeds**: Right-click to generate automated room legends, listing key monsters, traps, and secrets.
- **Classic Visuals**: Beautiful hand-drawn retro grids that print cleanly onto physical paper.
- **Custom Grids**: Choose between rectangular, circular, and cave-like layouts.

#### Fantasy Region Generator
When your party decides to travel overland, this tool generates a cohesive wilderness map. It marks:
- Rivers, coastlines, and mountain ranges.
- Roads connecting settlements, castles, and ruins.
- Territorial borders, allowing you to establish political regions, safe zones, and hostile frontiers.

## Technical Integration & VTT Export

To translate these procedural maps into a playable format (whether online or in person), follow these integration steps:

<AccordionGroup>
  <Accordion title="Exporting for Virtual Tabletops (VTT)" icon="game-icons:virtual-marker">
    The premier platform for campaign hosting and automation is **Fantasy Grounds Unity (FGU)**. Its robust image, lighting, and line-of-sight engines make it highly effective for running interactive sessions using procedurally generated maps.

    1. **Format & Resolution**: Export maps as high-resolution PNG or SVG. For **Fantasy Grounds**, it is highly recommended to convert files to the **WebP format** before importing. This dramatically minimizes campaign memory footprint and player load times.
    2. **Grid Alignment in Fantasy Grounds**: Always disable the grid overlay *inside* the generator prior to exporting. In FGU, use the Map Image Control panel, enable the **Grid** layer, set your desired square size (e.g., 50px or 100px), and use FGU's native grid alignment tool to draw and lock the grid lines cleanly.
    3. **Line-of-Sight (LoS) & Walls**: Trace FGU's vector wall layers (Walls, Terrain, Doors, Windows) directly over the generated paths from Watabou's *One Page Dungeon* or *City Generator* to implement dynamic exploration limits, dynamic lighting, and fog of war.
  </Accordion>
  <Accordion title="Customizing and Vector Editing" icon="game-icons:brush">
    Because Watabou's tools support **SVG (Scalable Vector Graphics)** export, you can modify maps losslessly:

    - **Re-label Wards**: Use Inkscape to delete generated text labels and replace them with your custom campaign names.
    - **Add Battlemaps**: Isolate individual building shapes in your city vector file, then enlarge them to standard 1-inch grids for tactical skirmishes.
    - **Color Mapping**: Change neighborhood colors to represent factions (e.g., green for the Druid Quarter, crimson for the Royal Guard territory).
  </Accordion>
</AccordionGroup>

## Other Essential Campaign Tools

While Watabou's generators excel at procedural maps, a complete campaign design toolkit includes macro-level generators and combat planning aids:

<CardGroup cols={3}>
  <Card title="Azgaar's Fantasy Map" icon="game-icons:world" href="https://azgaar.github.io/Fantasy-Map-Generator/">
    Create massive, interactive world maps featuring full tectonic plates, weather patterns, military units, and trade routes.
  </Card>
  <Card title="Donjon RPG Tools" icon="game-icons:scroll" href="https://donjon.bin.sh/">
    A legendary resource offering calculators, random loot tables, NPC name generators, fantasy calendars, and quest seeds.
  </Card>
  <Card title="Dungeon Scrawl" icon="game-icons:pencil" href="https://www.dungeonscrawl.com/">
    A super-fast, vector-based blueprint sketchpad to draw custom retro battlemaps in your browser within minutes.
  </Card>
</CardGroup>

## References

- [Watabou's Itch.io Hub](https://watabou.itch.io/) — Official landing page for all of Watabou's playable releases.
- [Procgen Arcana Catalog](https://watabou.github.io/) — Consolidated web interface for direct browser execution.
- [Azgaar's World Generator](https://azgaar.github.io/Fantasy-Map-Generator/) — High-fidelity worldbuilder.
- [Donjon RPG Resources](https://donjon.bin.sh/) — Core tabletop math and content generation site.
- [Dungeon Scrawl Designer](https://www.dungeonscrawl.com/) — Fast classic blueprint drawing.
