---
description: House rules for D&D weapon master property fixes.
tags: [weapon, weapon-master, weapon-mastery, weapon-masteries, dnd]
---
# Weapon Master Property fixes

Due to the current difficult of remember weapon master properties in PHB2024, it's best to group weapons by type and balance effects.

:::warning
Weapons are grouped for convenience. Remember that masteries apply ONLY to a specific weapon of your choice.
:::

## Weapon Master table

import { Icon } from '@iconify/react';

<!-- search for icons names in https://icon-sets.iconify.design/ -->

|#| Weapon Group | Weapons in Group |Weapon&nbsp;Mastery |
|-|:-----------:|:--------------:|:--------------:|
| <Icon icon="game-icons:flat-hammer" width="1.5em" />️ | Blunted&nbsp;weapons | Club, Greatclub, Light Hammer, Mace, Flail, Morningstar, Warhammer, War Pick, Maul | [Sap](#sap)          |
| <Icon icon="game-icons:broadsword" width="1.5em" />️ | Bladed&nbsp;weapons | Dagger, Sickle, Greatsword, Longsword, Shortsword, Scimitar, Rapier     | [Parry](#parry)        |
| <Icon icon="game-icons:battle-axe" width="1.5em" />️ | Axes | Handaxe, Battleaxe, Greataxe |[Keen](#keen)|
| <Icon icon="game-icons:spears" width="1.5em" />️ | Pole&nbsp;arms | Spear, Quarterstaff, Glaive, Halberd, Lance, Pike, Trident   | [Cleave](#cleave)         |
| <Icon icon="game-icons:bowman" width="1.5em" /> | Bows | Shortbow, Longbow     | [Vex](#vex)            |
| <Icon icon="game-icons:crossbow" width="1.5em" />️ | Crossbows | Hand Crossbow, Light Crossbow, Heavy Crossbow | [Fast Reload](#fast-reload) |
| <Icon icon="game-icons:ninja-star" width="1.5em" /> | Exotic | Javelin, Sling, Dart, Blowgun, Whip, Shuriken |[Graze](#graze)|
| <Icon icon="game-icons:blunderbuss" width="1.5em" /> | Firearms | Pistol, Blunderbuss, Musket   | [Powerful](#powerful) |


## Weapon masteries

export const iconSize = "3em";

### Graze

<Icon icon="game-icons:thrown-spear" width={iconSize} />
<Icon icon="game-icons:sling" width={iconSize} />
<Icon icon="game-icons:dart" width={iconSize}/>
<Icon icon="game-icons:whip" width={iconSize}/>
<Icon icon="game-icons:shuriken" width={iconSize}/>

If your attack roll with this weapon misses a creature and its not an automatic miss, you can deal damage to that creature equal to the ability modifier you used to make the attack roll. 
This damage is the same type dealt by the weapon, and the damage can be increased only by increasing the ability modifier.  

### Cleave

<Icon icon="game-icons:wizard-staff" width={iconSize} />
<Icon icon="game-icons:glaive" width={iconSize} />
<Icon icon="game-icons:sharp-halberd" width={iconSize}/>
<Icon icon="game-icons:stone-spear" width={iconSize}/>
<Icon icon="game-icons:pikeman" width={iconSize}/>
<Icon icon="game-icons:trident" width={iconSize}/>

If you hit a creature with a melee attack roll using this weapon, you can make a melee attack roll with the weapon against a second creature within 5 feet of the first that is also within your reach. On a hit, the second creature takes the weapon's damage, but don't add your ability modifier to that damage unless that modifier is negative. You can make this extra attack only once per turn.

### Vex

<Icon icon="game-icons:bow-arrow" width={iconSize} />
<Icon icon="game-icons:bowman" width={iconSize} />

If you hit a creature with this weapon and deal damage to the creature, you have Advantage on your next attack roll against that creature before the end of your next turn. 

### Keen

<Icon icon="game-icons:axe-in-log" width={iconSize} />
<Icon icon="game-icons:battle-axe" width={iconSize} />
<Icon icon="game-icons:sharp-axe" width={iconSize} />

Critical range is increased by 1

### Parry

<Icon icon="game-icons:plain-dagger" width={iconSize} />
<Icon icon="game-icons:sickle" width={iconSize} />
<Icon icon="game-icons:two-handed-sword" width={iconSize}/>
<Icon icon="game-icons:broadsword" width={iconSize}/>
<Icon icon="game-icons:sword-array" width={iconSize}/>
<Icon icon="game-icons:dervish-swords" width={iconSize}/>
<Icon icon="game-icons:sword-hilt" width={iconSize}/>

As a reaction after being hit by a melee attack, you can add +2 to your AC, potentially causing the attack to miss.

### Fast Reload

<Icon icon="game-icons:crossbow" width={iconSize} />

When you take the attack action using a reload weapon, you can reload the weapon as a bonus action and make a second attack as part of the attack action if you are able (e.g. extra attack feature, haste, etc.)

### Sap

<Icon icon="game-icons:wood-club" width={iconSize} />
<Icon icon="game-icons:claw-hammer" width={iconSize} />
<Icon icon="game-icons:flanged-mace" width={iconSize} />
<Icon icon="game-icons:flail" width={iconSize} />
<Icon icon="game-icons:morningstar" width={iconSize} />
<Icon icon="game-icons:warhammer" width={iconSize} />
<Icon icon="game-icons:war-pick" width={iconSize} />
<Icon icon="game-icons:maul" width={iconSize} />

When you hit an enemy with an attack, this mastery property inflicts Disadvantage on your target’s next attack roll before the start of your next turn.

### Powerful

<Icon icon="game-icons:gunshot" width={iconSize} />
<Icon icon="game-icons:crossed-pistols" width={iconSize} />
<Icon icon="game-icons:blunderbuss" width={iconSize} />
<Icon icon="game-icons:musket" width={iconSize} />

This mastery is exclusively for firearms.  
You roll exploding damage dice (if you roll maximum damage, roll another damage dice) and critical damage dice always do maximum damage

## Changing Weapon Masteries  

A character can change its weapon masteries when it gains a level.  

