import React from 'react';
import { GlyphButton } from '../controls/GlyphButton.jsx';

/* A day, opened. NOT a modal — the whole page becomes this. Enters with a
   CRT power-up: a horizontal line that snaps open vertically. */
export function DayView({ day, eyebrow, title, onClose, children }) {
  React.useEffect(() => {
    const h = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'var(--ink)', overflowY: 'auto', animation: 'pageIn var(--dur-page) var(--ease-out) both' }}>
      <div style={{ position: 'absolute', inset: 0, animation: 'powerUp var(--dur-page) var(--ease-out) both', transformOrigin: '50% 45%', background: 'radial-gradient(ellipse 70% 60% at 50% 40%,var(--cyan-04),transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 940, margin: '0 auto', padding: 'var(--s-8) var(--s-6) var(--s-10)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--s-6)', borderBottom: '1px solid var(--edge)', paddingBottom: 'var(--s-5)' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label-lg)', letterSpacing: 'var(--ls-widest)', textTransform: 'uppercase', color: 'var(--cyan-55)' }}>{eyebrow || `Cartridge ${String(day).padStart(2, '0')}`}</div>
            {title ? <h2 style={{ margin: 'var(--s-4) 0 0', fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-lg)', lineHeight: 'var(--lh-heading)', letterSpacing: 'var(--ls-display)', color: 'var(--phos-bright)', textShadow: 'var(--glow-text)' }}>{title}</h2> : null}
          </div>
          {onClose ? <GlyphButton tone="pink" onClick={onClose} aria-label="Back to the rack">✕</GlyphButton> : null}
        </div>
        <div style={{ marginTop: 'var(--s-8)' }}>{children}</div>
        {onClose ? (
          <button type="button" onClick={onClose} style={{ marginTop: 'var(--s-9)', background: 'none', border: '1px solid var(--edge)', color: 'var(--cyan-55)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label-lg)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', padding: 'var(--s-4) var(--s-6)', cursor: 'pointer' }}>◀ Back to the rack</button>
        ) : null}
      </div>
    </div>
  );
}

/* Body copy inside a DayView. Wide measure, generous leading, no glow. */
export function DayText({ children }) {
  return <p style={{ margin: '0 0 var(--s-6)', maxWidth: '62ch', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-body)', color: 'var(--phos)' }}>{children}</p>;
}

/* Numbered list — the "thirty true things" pattern, as a scoreboard. */
export function DayList({ items = [] }) {
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 1, background: 'var(--edge)', border: '1px solid var(--edge)' }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'grid', gridTemplateColumns: '58px 1fr', background: 'var(--surface-recess)' }}>
          <span style={{ padding: 'var(--s-4)', fontFamily: 'var(--font-display)', fontSize: 'var(--fs-body-sm)', color: 'var(--pink)', borderRight: '1px solid var(--edge)', fontVariantNumeric: 'tabular-nums' }}>{String(i + 1).padStart(2, '0')}</span>
          <span style={{ padding: 'var(--s-4) var(--s-5)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-body)', lineHeight: 1.6, color: 'var(--phos)' }}>{item}</span>
        </li>
      ))}
    </ol>
  );
}

/* A framed media well — video embed or a single image. */
export function DayScreen({ children, height = 480, caption }) {
  return (
    <div style={{ border: '1px solid var(--edge)', background: 'var(--surface-marquee)', boxShadow: 'var(--mat-deck)', padding: 'var(--s-3)', marginBottom: 'var(--s-6)' }}>
      <div style={{ position: 'relative', height, background: 'var(--surface-screen)', overflow: 'hidden', boxShadow: 'var(--mat-screen-on)' }}>
        {children}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--crt-scanlines-fine)', pointerEvents: 'none' }} />
      </div>
      {caption ? <div style={{ padding: 'var(--s-3) 2px 2px', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--cyan-55)' }}>{caption}</div> : null}
    </div>
  );
}
