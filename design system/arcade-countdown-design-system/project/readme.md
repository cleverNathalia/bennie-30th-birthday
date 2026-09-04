# Cabinet No. 30 — Design System

An original design system for **Bennie's 30th birthday countdown**: a private, unlisted page his wife Danielle sends him from Cape Town while he is in Dublin. Eight cartridges, one unlocking each evening at 18:00 Dublin time from 3 to 10 September 2026, each holding that day's gift — a video, a letter, a photo album, a list of thirty true things.

The system is a **1980s arcade cabinet, built with modern craft**. Moulded plastic bezels with real material stacks. Recessed CRT screens behind scanlines and a vignette. A backlit marquee with a fluorescent buzz. A pink ball-top joystick. Two lit colours and a phosphor-grey text palette. Opening a day does not open a modal — the whole page powers up into that day.

It is a game console that happens to be a love letter, and the tension is deliberate: the *chrome* is cold and mechanical, the *content* is unguarded and warm. Neither ever leaks into the other.

## What this replaces

An earlier version of this project reproduced the existing site's styling verbatim (flat cyan-on-navy, Courier New, glow-as-shadow). Danielle asked for something new: *"it currently feels cheap, but I want it to look like an expensive game that works flawlessly and that's fun to use and open."* Everything here is designed from scratch to answer that. Nothing is carried over from the old implementation except the eight-door concept, the dark ground, and the cyan/pink pair.

## Sources

- **Codebase (attached locally):** `bennie-30th-birthday/` — Vite + React 18. Read for **behaviour and content only** (unlock timing, content shape, the eight-day plan). Its visual styling is deliberately not reproduced.
- **GitHub:** https://github.com/cleverNathalia/bennie-30th-birthday — explore this repository for the current implementation and the content model behind each day.
- **Project brief:** `bennie-30th-birthday/BENNIE-30-CONTEXT.md` — the full personal context: the eight-day plan, the constraints that shaped it, and the design principles ("Never apologise for a small day. Never explain a gesture.").

Assume the reader may not have access to any of these; everything needed is reproduced below.

---

## Index

| Path | What |
|---|---|
| `styles.css` | Root entry — `@import` list only. Link this one file. |
| `tokens/fonts.css` | Michroma + IBM Plex Mono, loaded from Google Fonts |
| `tokens/colors.css` | Chassis greys, two signal colours, phosphor text, alpha ramps |
| `tokens/typography.css` | Two faces, the scale, and the tracking inversion |
| `tokens/spacing.css` | 4px rhythm with honest moulding values, layout rules |
| `tokens/materials.css` | The material stacks — bezel, marquee, CRT, buttons, glow |
| `tokens/motion.css` | Mechanical curves, keyframes, reduced-motion overrides |
| `components/chrome/` | `CRTOverlay`, `Marquee`, `StatusBar` + `StatCell` |
| `components/cabinet/` | `Bezel`, `CartridgeSlot` + `SlotRack` |
| `components/controls/` | `ControlDeck`, `ArcadeButton`, `Joystick`, `GlyphButton` |
| `components/readout/` | `Timer`, `PhotoReel` |
| `components/views/` | `AttractScreen`, `DayView` (+`DayText`/`DayList`/`DayScreen`), `HighScore` |
| `ui_kits/cabinet/` | The full interactive countdown — attract, rack, day, archive |
| `templates/cabinet-page/` | Copyable starting point for consuming projects |
| `guidelines/*.card.html` | 20 foundation specimen cards |
| `assets/bennie-portrait.png` | The attract-mode still |
| `explorations/` | The four directions explored before this one was chosen |
| `SKILL.md` | Agent Skills wrapper |

---

## CONTENT FUNDAMENTALS

**Two registers, never mixed in one line.** The cabinet chrome is cold, mechanical and abbreviated: `CABINET NO. 30`, `CREDITS UNLOCKED · 04 / 08`, `NEXT CARTRIDGE`, `SEALED`, `PRESS ANY KEY TO BEGIN`. The content inside a cartridge is warm and plain: *"You make every room warmer than you found it."* *"We never picked a song. This one is ours now."* Chrome never gets sentimental; content never gets technical. That gap is the whole idea, and collapsing it in either direction kills the design.

**Person.** Second person, one reader. "Player one." "You do not have to do anything except show up." No plural audience, no brand voice, no "we the product".

**Casing.** Uppercase for hardware — marquee, field labels, status words, glyph captions. Sentence case for anything a human wrote. Nothing is title case. Nothing is lowercase-as-a-style.

**Naming.** The metaphor is consistent and load-bearing. Days are **cartridges**. The grid is the **rack**. The intro is **attract mode**. Opened days are **cleared**; today's is **ready**; future ones are **sealed**. The photo carousel is attract mode too. Do not mix in door/box/window language — it was deliberately dropped.

**Length.** Chrome is two to four words. Body copy is one to three sentences. The day-eight board is a list, not a speech. Nothing explains itself, per the brief's own rule: never apologise for a small day, never explain a gesture.

**Numbers.** Days are two-digit (`01`…`08`), always tabular. Credits read as a fraction (`04 / 08`). Countdowns run to the second (`6D 04:12:33`) — unlike the old version, the timer here is meant to be watched.

**Emoji: none.** The old system used 🔒 ✨ 💌; they are gone. The icon vocabulary is six unicode geometric characters. If something needs an emoji to land, the copy is wrong.

**Placeholders.** Square brackets, matching the content model: `[Your message for day two]`. Never lorem ipsum.

---

## VISUAL FOUNDATIONS

**The room.** `#04050A` — a black arcade, not a navy page. Over the whole viewport, two fixed layers: a **scanline multiply** (2px on, 1px off, `rgba(0,0,0,.32)`) and a **corner vignette** (`radial-gradient` from transparent at 40% to `rgba(0,0,0,.75)`). Those two layers are what make a flat page read as curved glass, and they are non-negotiable. There is no page grid, no starfield, no particle canvas — the old system's decorative background layers were all removed. The cabinet itself provides the interest.

**Colour.** Three families, and the discipline between them is what makes it look expensive.
- **Chassis** — six greys from `#1A2033` (top of a moulding) to `#080B14` (a recessed channel). Everything structural is built from these, never from a tint of the accent.
- **Signal** — cyan `#00F0FF` and pink `#FF2E88`, each with a `-lit` highlight and a `-deep` shadow so a lit part can be modelled as a real object. Cyan means available; pink means waiting. Exactly one thing on a screen should be pink.
- **Phosphor** — `#CFE9EF` and its dim/faint steps. **Body text is phosphor grey, not cyan.** This is the single biggest departure from the old system, where every word glowed; here only genuinely lit UI is coloured.

**Type.** Two faces. **Michroma** — wide, mechanical, one weight — is the display face, used at most four times a page: the marquee, a day title, stat values, the slot number. **IBM Plex Mono** does all the work: labels, timers, body, data. Both load from Google Fonts.

The **tracking is inverted** from the obvious choice: labels track far out (`.20em` to `.40em`) while the display face stays nearly normal (`.04em`), because Michroma is already wide and letter-spacing it turns it into a cliché. Line-height is 1 on display, 1.7 on body — generous, because the day's content is meant to be read slowly.

**Materials, not shadows.** Nothing in this system is a flat `box-shadow`. Every surface is a stack, in this order: a moulding sheen (`inset 0 1px 0 rgba(255,255,255,.09)`), a cast shadow (`0 14px 34px rgba(0,0,0,.65)`), and only then, if the thing is genuinely lit, a coloured bloom. The marquee adds a black moulding ring (`0 0 0 6px #0A0D18, 0 0 0 7px #1D2439`) so it reads as a lightbox screwed to a cabinet. Screens use inset occlusion (`inset 0 0 46px rgba(0,0,0,.9)`) plus a 1px cyan rim. Arcade buttons are radial gradients lit from 34%/30% with an inner bottom shadow — spheres, not circles.

**Cards.** A card is a **Bezel**: moulded plastic frame, 11px padding (13px at the bottom, because a real moulding is deeper there), containing a recessed 3:4 CRT screen. Unlocked slots show a desaturated still under a bottom scrim with a play bar; locked slots show a dead screen with a pink standby square and a countdown. The difference between the two states is *luminance first, hue second* — which is why it reads instantly at a glance.

**Corners.** `border-radius: 0` on every rectangle. The only radius in the system is `50%`, on the joystick ball and the two deck buttons. **Round means physical hardware; square means a control on a screen.** Never mix them.

**Glow.** Rationed. Three text glows exist — the marquee's `0 0 18px cyan / 0 0 46px pink`, a `0 0 14px` cyan for stat values, and a `0 0 14px` pink for countdowns. **Body copy never glows.** Box glow appears only on hover and on lit screen rims.

**Animation.** Mechanical and damped — a cabinet is heavy, so nothing bounces or overshoots. The house curve is `cubic-bezier(.2,.9,.25,1)`; long page transitions use `cubic-bezier(.19,1,.22,1)`. Durations: 140ms tap, 280ms hover, 420ms cross-fade, 620ms page, 1.1s boot. Slots stagger in at 60ms. The marquee carries a 5.5s fluorescent *buzz* (not a pulse); the attract screen has a 5.5s cyan refresh band; a colon blinks once a second. That is the entire motion inventory.

**Hover.** Slots lift 6px, the cast shadow deepens from 34px to 46px, and a cyan bloom fades in. **Press.** Slots settle to `translateY(-2px) scale(.995)`; deck buttons push 2px down and shrink to 0.94 in 140ms. Nothing ever darkens or fades on interaction.

**Focus.** A 3px cyan ring with a 1px ink gap, so it reads on both plastic and screen. Locked slots are removed from the tab order.

**Transparency & blur.** There is no backdrop blur anywhere. The old system leaned on it for its modal; this one has no modal — a day takes over the page instead, so nothing needs to be seen through.

**Layout.** One shell, 1180px, padded `34px 24px 80px`. The rack is `repeat(auto-fit, minmax(190px, 1fr))` with an 18px gap — four across on desktop, two on tablet, one on a phone, **with no media queries at all**. A day view caps at 940px with a 62ch measure on body copy.

**Imagery.** Photographs are pushed to `saturate(.85) contrast(1.05)` (`.5`/`1.1` for slot stills) so they sit inside the cabinet's colour world without being fake-duotoned. Every photo lives inside a bezel behind scanlines. The attract still runs at 50% opacity under heavy radial darkening — it sets mood, it is not the subject. No full-bleed photography anywhere else.

---

## ICONOGRAPHY

**No icon library, no icon font, no SVG sprite, and no emoji.** The complete vocabulary is six unicode geometric characters, each with one job:

| Glyph | Role | Colour |
|---|---|---|
| `▶` | play — on an unlocked cartridge | cyan |
| `◼` | standby — on a sealed cartridge | pink |
| `✕` | close a day | pink |
| `❮` `❯` | step the photo reel | cyan |
| `◀` | back to the rack | dim cyan |

They are styled as text — sized, tracked, glowing — never as images. Everything else that reads as an icon is **material**: the joystick ball, the deck buttons, the segmented timer cells, the marquee's filament line. Those are CSS gradients and borders, not glyphs.

**When extending:** do not import Lucide, Heroicons, or any other set — a stroked outline icon would immediately break the illusion of moulded hardware. Add new marks either as another unicode geometric character, or as a physical CSS object with a proper material stack.

## Assets

`assets/bennie-portrait.png` — the attract-mode still, supplied by Danielle. It is the only image the system ships with and it is used in three places: the attract screen, the cartridge stills, and the photo reel.

**There is no logo or wordmark.** None exists and none has been invented. Where a mark would go, the marquee sets the title in Michroma with the standard glow — `thumbnail.html` does the same. Do not draw one.

## Fonts

Two Google Fonts, loaded via `@import` in `tokens/fonts.css`:

- **Michroma** (400) — display
- **IBM Plex Mono** (400/500/600) — everything else

No local binaries ship with this system. **This is a substitution to flag:** the source product used only `Courier New`, and this pairing is a new choice made for this direction, not a recovery of anything. If you would rather self-host, or want a licensed display face instead of Michroma, say so.

## Intentional additions

Because this is an original direction rather than a recreation, the inventory is designed rather than extracted. Every component maps to something the experience genuinely needs:

- `AttractScreen` — the arrival moment Danielle asked for.
- `HighScore` — the day-eight completion state, and the archive's body.
- `PhotoReel` — the "carousel of pictures of us".
- `Timer` — a second-resolution countdown to the birthday.
- `CRTOverlay`, `Marquee`, `ControlDeck`, `Joystick` — cabinet chrome.
- `Bezel` is the shared substrate under `CartridgeSlot`, `PhotoReel` and `DayScreen`.

There is no Input, Select, Tabs, Toast, Tooltip or Avatar. This is one page for one person; a general-purpose UI kit would be dead weight.
