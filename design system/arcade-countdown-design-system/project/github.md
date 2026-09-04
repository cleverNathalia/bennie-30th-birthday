repo: cleverNathalia/bennie-30th-birthday
branch: main

## Last sync

date: 2026-09-03T22:40:00Z

### Updated in this project

- Replaced the verbatim recreation with an original "arcade cabinet" design direction, chosen from four built candidates
- New token system: chassis greys, two signal colours, phosphor text, and a materials layer (bezel / marquee / CRT / buttons)
- New component set — Marquee, CartridgeSlot, Bezel, ControlDeck, Timer, PhotoReel, AttractScreen, DayView, HighScore
- New UI kit with attract screen, rack, full-page day transition, archive and the day-eight board

## Screen map

| Screen | Source files |
|---|---|
| `ui_kits/cabinet/index.html` | `src/App.jsx`, `content.json` (behaviour + content model only) |
| `components/cabinet/*` | `src/components/Door.jsx` (state model only) |
| `components/views/DayView.jsx` | `src/components/DoorModal.jsx` (content types only) |
| `components/readout/PhotoReel.jsx` | `src/components/Gallery.jsx` (behaviour only) |
| `tokens/*` | none — designed from scratch |

Note: the codebase was read from a locally attached folder (`bennie-30th-birthday/`), not fetched from GitHub, so no commit sha is recorded. Only behaviour, content shape and unlock timing were taken from the repository; the visual language is original.

## Sync history

- 2026-09-03 — initial import; verbatim recreation of the existing site's styling (superseded).
