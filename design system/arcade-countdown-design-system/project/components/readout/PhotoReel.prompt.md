The attract-mode photo carousel — a framed CRT screen that cross-fades through the album.

```jsx
<PhotoReel photos={[{url, caption: 'High school · 2013'}]} height={340} />
```

- Cross-fade, never slide. 4s dwell, pauses on hover.
- Segment bar underneath doubles as the position indicator and as jump targets — no dots.
- Photos are pushed to `saturate(.85) contrast(1.05)` so they sit in the cabinet's colour world without being fake-duotoned.
