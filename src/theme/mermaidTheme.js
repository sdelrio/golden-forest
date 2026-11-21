/**
 * Mermaid "Ink Plate" theme - see DESIGN.md, "Signature: Ink Plate".
 *
 * A diagram is a plate in the field manual: paper field, ink labels, gold
 * hairline structure, and amber only on the one node that carries the point.
 * Every colour a diagram may use lives here; articles never write hex, they
 * opt into one of three hooks: `plain`, `external`, `highlight`.
 *
 * Diagram types without explicit tokens below (gantt, gitGraph, timeline)
 * inherit Mermaid's base values. Add their tokens here when such an article
 * lands, never in the article itself.
 */

const FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif';

// Twelve-series scale for radar, mindmap and friends: amber ramp, oxblood and
// the warm neutrals. Never a fourth hue, never the freshness greens.
const scale = (colors) =>
  Object.fromEntries(colors.map((color, i) => [`cScale${i}`, color]));
const scaleLabels = (color) =>
  Object.fromEntries(Array.from({ length: 12 }, (_, i) => [`cScaleLabel${i}`, color]));

// Amber ramp + oxblood: no fourth hue, and never the freshness greens.
const CHART_RAMP = {
  pie1: '#e99700',
  pie2: '#c9ad6a',
  pie3: '#a36a00',
  pie4: '#9c2b1b',
  pie5: '#58180d',
  pie6: '#d28800',
};

const LIGHT_SCALE = [
  '#e99700',
  '#a36a00',
  '#58180d',
  '#c9ad6a',
  '#766649',
  '#9c2b1b',
  '#ffb630',
  '#2b2b2b',
  '#7a4f00',
  '#c68000',
  '#8b6d52',
  '#f8e9c8',
];

// Every step must clear the sepia field: no oxblood or bark darks here,
// because Mermaid also paints subgraph edges and legends from this scale.
const DARK_SCALE = [
  '#ffb630',
  '#c68000',
  '#c9ad6a',
  '#d4c4a8',
  '#e99700',
  '#ffa601',
  '#d28800',
  '#f8e9c8',
  '#a36a00',
  '#8b6d52',
  '#766649',
  '#ffaa0d',
];

const light = {
  background: '#fffaeb', // parchment-page
  primaryColor: '#f8e9c8', // parchment-shade
  primaryBorderColor: '#a36a00', // amber-darkest
  primaryTextColor: '#2a2010', // ink
  secondaryColor: '#fcefd4', // parchment-edge
  secondaryBorderColor: '#a36a00',
  secondaryTextColor: '#2a2010',
  tertiaryColor: '#fffaeb',
  tertiaryBorderColor: '#c9ad6a', // gold-rule
  tertiaryTextColor: '#2a2010',
  mainBkg: '#f8e9c8',
  nodeBorder: '#a36a00',
  nodeTextColor: '#2a2010',
  textColor: '#2a2010',
  lineColor: '#a36a00',
  defaultLinkColor: '#a36a00',
  arrowheadColor: '#a36a00',
  clusterBkg: 'transparent',
  clusterBorder: '#c9ad6a',
  titleColor: '#58180d', // oxblood: subgraph titles are headings
  edgeLabelBackground: '#fffaeb',
  labelBackground: '#fffaeb',
  noteBkgColor: '#fcefd4',
  noteBorderColor: '#c9ad6a',
  noteTextColor: '#2a2010',
  errorBkgColor: 'rgba(180, 60, 40, 0.1)',
  errorTextColor: '#8b2520',
  actorBkg: '#f8e9c8',
  actorBorder: '#a36a00',
  actorTextColor: '#2a2010',
  actorLineColor: '#c9ad6a',
  signalColor: '#a36a00',
  signalTextColor: '#2a2010',
  labelBoxBkgColor: '#fcefd4',
  labelBoxBorderColor: '#c9ad6a',
  labelTextColor: '#2a2010',
  loopTextColor: '#2a2010',
  activationBkgColor: '#fae5b6',
  activationBorderColor: '#a36a00',
  sequenceNumberColor: '#fffaeb',
  ...scale(LIGHT_SCALE),
  ...scaleLabels('#2a2010'),
  // Radar style options are read from themeVariables, not from config.radar.
  radar: { axisColor: '#a36a00', graticuleColor: '#c9ad6a', curveOpacity: 0.35 },
};

const dark = {
  background: '#170f00', // sepia dusk
  primaryColor: '#241a0a', // dusk lifted by ink warmth
  primaryBorderColor: '#c68000', // heading amber
  primaryTextColor: '#d4c4a8', // night parchment
  secondaryColor: '#2a2010',
  secondaryBorderColor: '#a36a00',
  secondaryTextColor: '#d4c4a8',
  tertiaryColor: '#1e1508',
  tertiaryBorderColor: '#5a4a2a',
  tertiaryTextColor: '#d4c4a8',
  mainBkg: '#241a0a',
  nodeBorder: '#c68000',
  nodeTextColor: '#d4c4a8',
  textColor: '#d4c4a8',
  lineColor: '#c68000',
  defaultLinkColor: '#c68000',
  arrowheadColor: '#c68000',
  clusterBkg: 'transparent',
  clusterBorder: '#5a4a2a',
  titleColor: '#c68000',
  edgeLabelBackground: '#170f00',
  labelBackground: '#170f00',
  noteBkgColor: '#2a2010',
  noteBorderColor: '#7a5c30',
  noteTextColor: '#d4c4a8',
  errorBkgColor: 'rgba(120, 40, 30, 0.3)',
  errorTextColor: '#e0a090',
  actorBkg: '#241a0a',
  actorBorder: '#c68000',
  actorTextColor: '#d4c4a8',
  actorLineColor: '#7a5c30',
  signalColor: '#c68000',
  signalTextColor: '#d4c4a8',
  labelBoxBkgColor: '#2a2010',
  labelBoxBorderColor: '#7a5c30',
  labelTextColor: '#d4c4a8',
  loopTextColor: '#d4c4a8',
  activationBkgColor: '#2a2010',
  activationBorderColor: '#c68000',
  sequenceNumberColor: '#170f00',
  ...scale(DARK_SCALE),
  ...scaleLabels('#d4c4a8'),
  radar: { axisColor: '#c68000', graticuleColor: '#5a4a2a', curveOpacity: 0.35 },
};

export function mermaidConfig(colorMode) {
  const themeVariables = colorMode === 'dark' ? dark : light;
  return {
    startOnLoad: false,
    theme: 'base',
    fontFamily: FONT_FAMILY,
    themeVariables: { ...themeVariables, ...CHART_RAMP, fontFamily: FONT_FAMILY, fontSize: '14px' },
    flowchart: {
      useMaxWidth: true,
      curve: 'basis',
      padding: 12,
      nodeSpacing: 40,
      rankSpacing: 45,
      htmlLabels: true,
    },
    sequence: { useMaxWidth: true, mirrorActors: false, messageAlign: 'center' },
    architecture: { useMaxWidth: true },
    mindmap: { useMaxWidth: true },
    pie: { useMaxWidth: true },
    radar: { useMaxWidth: true },
  };
}

const DIAGRAM_TYPES = [
  'flowchart',
  'sequence',
  'class',
  'state',
  'er',
  'gantt',
  'pie',
  'mindmap',
  'architecture',
  'gitGraph',
  'xychart',
  'radar',
  'treeView',
];

/**
 * Docusaurus fits diagrams to the content column. The editor preview pane and
 * the tech radar need the intrinsic size instead.
 */
export function withoutMaxWidth(config) {
  return Object.fromEntries(
    DIAGRAM_TYPES.map((type) => [type, { ...config[type], useMaxWidth: false }])
  );
}
