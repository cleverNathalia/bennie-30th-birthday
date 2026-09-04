# UI kit — Cabinet No. 30

The full experience, in one file: `ui_kits/cabinet/index.html`.

**Flow.** Lands on the **attract screen** — Bennie's portrait at half opacity, a Michroma title, a blinking "press any key". Any click or keypress enters the **rack**: marquee, three status readouts, eight cartridge slots staggering in at 60ms each, the control deck, and the attract-mode photo reel below it. Clicking an unlocked slot (or the first deck button) powers the **whole page** into that day — no modal. The second deck button opens the **archive**, which is the high-score board over every day. Escape, the pink ✕, or "◀ Back to the rack" all return.

**Day types shown.** Video (framed CRT well), list (the "thirty true things" scoreboard), and the day-eight state, which pairs the final video with the completion board.

**Fidelity notes.** Video wells are labelled placeholders — the real page embeds Google Drive `/preview` iframes. All three photo positions use the one supplied portrait; swap in the real album. Unlock state is hardcoded to four; the shipped page derives it from Dublin time.

**Files.** `index.html` mounts `CabinetApp.jsx`, which composes only bundle components — no primitive is re-implemented here.
