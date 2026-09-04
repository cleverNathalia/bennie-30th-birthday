Square hairline control for a single glyph — closing a day, stepping a carousel.

```jsx
<GlyphButton tone="pink" onClick={close}>✕</GlyphButton>
<GlyphButton onClick={prev}>❮</GlyphButton>
```

- Zero radius, 1px border, near-black fill. Hover resolves to cyan regardless of tone and doubles the glow.
- Distinct from `ArcadeButton`, which is a physical round sphere on the deck. Screen controls are square; hardware controls are round.
