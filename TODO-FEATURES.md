# TODO: Feature Ideas

Potential features for The Golden Forest (lorien.cloud).

---

## 1. Campaign Journal / Session Log

A structured session log backed by JSON data files. Each entry tracks:
- Date, session title, DM
- Party members present
- Narrative summary
- XP awarded, loot gained
- Notable RP moments
- Character deaths

Rendered as a chronological timeline with card-based entries. Character names link to the existing `XmlChar` component for live stat viewing.

**Data:** `static/fg/campaign/sessions.json`
**Component:** `src/components/CampaignJournal/`

---

## 2. Party Composition Dashboard

A dedicated page showing the current active party — which characters are alive, their roles (tank, healer, DPS, support), combined stats (total HP, average AC, party level), and visual roster with avatars. Pulls from the existing 111 character XML files and a party config. Highlights synergies or weaknesses (e.g., "No healer in party").

**Data:** `static/fg/chars/` XML + `static/fg/party.json`
**Component:** `src/components/PartyDashboard/`

---

## 3. Character Achievement / Milestone Tracker

An achievement system for each character — milestones like:
- "First Kill", "Survived a TPK", "Reached Level 5"
- "Killed a Dragon", "Crit Failed a Death Save 3 Times"
- "Spoke to a God", "Found a Legendary Item"

Stored as structured data per character. Rendered as a badge/shield grid with unlock status, dates, and descriptions. Ties into the journal feature for auto-unlocking based on session logs.

**Data:** `static/fg/chars/achievements.json`
**Component:** `src/components/AchievementTracker/`

---

## 4. Encounter Battle Log

A log of memorable battles — encounter name, monsters faced, difficulty rating (Easy/Medium/Hard/Deadly), party composition, who went down, who got the killing blow, total damage dealt, and XP split. Could include a simple "replay" visualization showing round-by-round highlights. Great for looking back at clutch moments.

**Data:** `static/fg/campaign/encounters.json`
**Component:** `src/components/BattleLog/`

---

## 5. Character Death Certificate Generator

A fun, morbid feature. When a character dies (logged in the journal), generate a stylized "death certificate":
- Cause of death
- Last words
- Final stats
- Level at death
- How many sessions they survived
- A eulogy section

Rendered with a vintage/parchment CSS style. Could also track a "death pool" with a leaderboard of which player has killed the most characters.

**Data:** `static/fg/campaign/deaths.json` + existing character data
**Component:** `src/components/DeathCertificate/`

---

## Feature Interconnections

These features share a common data layer (`static/fg/campaign/`) and can cross-reference each other:
- **Journal** entries reference characters and unlock **Achievements**
- **Party Dashboard** shows who's alive vs. **Death Certificates**
- **Battle Logs** feed into the **Journal** and track XP for **Party Dashboard**
