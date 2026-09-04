One day in the rack — a cartridge in its slot. Three states, one shape.

```jsx
<SlotRack>
  <CartridgeSlot day={1} state="cleared" still={url} onOpen={open} />
  <CartridgeSlot day={4} state="ready"   still={url} onOpen={open} />
  <CartridgeSlot day={5} state="locked"  countdown="06:41:12" />
</SlotRack>
```

- Unlocked slots read as a lit screen showing a still; locked slots are a dead screen with a pink standby square. The difference is luminance, not just hue.
- `ready` differs from `cleared` by one word ("New" vs "Play") — deliberately quiet.
- The rack is `auto-fit minmax(190px,1fr)`: four across on desktop, two on tablet, one on a phone, with no media queries.
