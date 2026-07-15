export const ABILITIES = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

export const calculateModifier = (score) => Math.floor((score - 10) / 2);
