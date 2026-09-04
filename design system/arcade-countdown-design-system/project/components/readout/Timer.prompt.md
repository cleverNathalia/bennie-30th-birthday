The countdown readout. Ticks to the second — unlike the old system, this one is meant to be watched.

```jsx
<Timer target="2026-09-10T18:00:00+01:00" size="lg" tone="pink" segmented />
<Timer value="06:41:12" size="sm" />
```

- Always tabular. `segmented` puts each digit in a recessed cell with a 1s blinking colon — use it for the hero countdown only, once per page.
- `sm` switches to IBM Plex Mono; `md`/`lg` are Michroma.
