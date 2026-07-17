# DnD Feature Ideas

D&D-specific features for The Golden Forest. All currently **NOT STARTED**.

---

## 1. Campaign Journal / Session Log — NOT STARTED

Structured session log backed by JSON. Each entry: date, title, DM, party, narrative summary, XP, loot, RP moments, character deaths.

- **Data:** `static/fg/campaign/sessions.json`
- **Component:** `src/components/CampaignJournal/`
- **Pattern:** Card-based chronological timeline, character names link to `XmlChar`
- **Complexity:** Medium

## 2. Party Composition Dashboard — NOT STARTED

Current party roster — alive/dead status, roles (tank/healer/DPS), combined stats, visual roster with avatars. Pulls from 111 XML chars + party config.

- **Data:** `static/fg/chars/` XML + `static/fg/party.json`
- **Component:** `src/components/PartyDashboard/`
- **Pattern:** Extends `CharSearch` card grid pattern
- **Complexity:** Medium

## 3. Character Achievement / Milestone Tracker — NOT STARTED

Achievement badges per character ("First Kill", "Survived a TPK", "Reached Level 5"). Stored as structured data, rendered as badge grid with unlock status.

- **Data:** `static/fg/chars/achievements.json`
- **Component:** `src/components/AchievementTracker/`
- **Pattern:** Ties into Journal for auto-unlocking
- **Complexity:** Medium

## 4. Encounter Battle Log — NOT STARTED

Battle records — encounter name, monsters, difficulty rating, party composition, killing blows, damage totals, XP split.

- **Data:** `static/fg/campaign/encounters.json`
- **Component:** `src/components/BattleLog/`
- **Pattern:** Could include round-by-round replay visualization
- **Complexity:** Medium-High

## 5. Character Death Certificate Generator — NOT STARTED

Stylized "death certificate" on character death — cause, last words, final stats, level, sessions survived, eulogy. Vintage/parchment CSS.

- **Data:** `static/fg/campaign/deaths.json` + existing char data
- **Component:** `src/components/DeathCertificate/`
- **Pattern:** Could include death pool leaderboard
- **Complexity:** Low-Medium

---

## Feature Interconnections

All share `static/fg/campaign/` data layer:
- **Journal** references chars, unlocks **Achievements**
- **Party Dashboard** shows alive vs **Death Certificates**
- **Battle Logs** feed into **Journal**, track XP for **Party Dashboard**
