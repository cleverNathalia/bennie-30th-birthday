The base surface of the whole system: a moulded plastic frame with a recessed CRT screen inside it. Every card is one of these.

```jsx
<Bezel interactive lit ratio="3/4" footer={<SlotFooter …/>}>
  <img … />
</Bezel>
```

- The material is a stack, not a shadow: `inset 0 1px 0` sheen on the moulding, a 34px cast shadow beneath, and only on hover a cyan bloom.
- Screen contents are bottom-aligned and always get a fine scanline layer on top.
- Hover lifts 6px and press settles to 2px — heavy, no bounce.
