Page-level CRT glass: scanline multiply plus a corner vignette. Mount once, at the root of every screen.

```jsx
<CRTOverlay />
<CRTOverlay flicker />   // for the boot screen only
```

- Fixed and `pointer-events: none` — it never intercepts clicks.
- The vignette is what makes the layout feel like it's behind curved glass; don't drop it to "clean things up".
