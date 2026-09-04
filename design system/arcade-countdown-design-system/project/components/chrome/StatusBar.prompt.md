The readout strip under the marquee — credits, next unlock, time to the birthday.

```jsx
<StatusBar>
  <StatCell label="Credits unlocked" value="04 / 08" />
  <StatCell label="Next cartridge" value="06:41:12" />
  <StatCell label="Time to birthday" value="6D 04:12:33" tone="pink" />
</StatusBar>
```

- Cells are separated by a 1px cyan hairline showing through a grid gap, not by borders.
- Exactly one cell should be pink — the one that matters most.
