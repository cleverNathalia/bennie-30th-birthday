import React from 'react';
import { GlyphButton } from '../controls/GlyphButton.jsx';

/* Framed photo carousel — a screen in a bezel, with a counter and caption. */
export function PhotoReel({ photos = [], autoplay = true, interval = 4000, height = 340 }) {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (!autoplay || paused || photos.length <= 1) return;
    const id = setInterval(() => setI((p) => (p + 1) % photos.length), interval);
    return () => clearInterval(id);
  }, [autoplay, paused, interval, photos.length]);
  if (!photos.length) return null;
  const go = (n) => setI((p) => (p + n + photos.length) % photos.length);
  const cur = photos[i];
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} style={{ border: '1px solid var(--edge)', background: 'var(--surface-marquee)', boxShadow: 'var(--mat-deck)', padding: 'var(--s-3)' }}>
      <div style={{ position: 'relative', height, background: 'var(--surface-screen)', overflow: 'hidden', boxShadow: 'var(--mat-screen)' }}>
        {photos.map((p, n) => (
          <img key={n} src={p.url} alt={p.caption || ''} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: n === i ? 1 : 0, transition: 'opacity var(--dur-base) var(--ease-out)', filter: 'saturate(.85) contrast(1.05)' }} />
        ))}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--crt-scanlines-fine)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 55%,rgba(3,6,12,.9))', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--s-4)', padding: 'var(--s-4)' }}>
          <div>
            {cur.caption ? <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-caption)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--phos-bright)' }}>{cur.caption}</div> : null}
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--cyan-55)', marginTop: 5, fontVariantNumeric: 'tabular-nums' }}>{String(i + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</div>
          </div>
          <div style={{ display: 'flex', gap: 'var(--s-2)' }}>
            <GlyphButton size={30} onClick={() => go(-1)} aria-label="Previous photo">❮</GlyphButton>
            <GlyphButton size={30} onClick={() => go(1)} aria-label="Next photo">❯</GlyphButton>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 3, marginTop: 'var(--s-3)' }}>
        {photos.map((_, n) => <div key={n} onClick={() => setI(n)} style={{ flex: 1, height: 3, cursor: 'pointer', background: n === i ? 'var(--cyan)' : 'var(--cyan-14)', boxShadow: n === i ? 'var(--glow-sm)' : 'none', transition: 'background var(--dur-quick)' }} />)}
      </div>
    </div>
  );
}
