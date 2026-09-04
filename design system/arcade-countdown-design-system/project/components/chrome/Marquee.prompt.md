The backlit sign across the top of the cabinet — the only place the display face appears at full size.

```jsx
<Marquee kickerLeft="Cabinet No. 30" kickerRight="Dublin · 18:00 daily"
         title={<>PLAYER ONE<br/>TURNS THIRTY</>}
         subtitle="Eight cartridges · one unlocks a day" />
```

- Three fixed layers: a black moulding ring (`0 0 0 6px`), a cyan backlight bleed from the top, and a pink filament line along the bottom edge.
- The title carries a slow 5.5s buzz — a fluorescent tube, not a pulse. Never speed it up.
- One per page. A second marquee kills the illusion.
