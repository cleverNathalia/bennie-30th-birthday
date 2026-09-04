import React from 'react';

/* Day eight. The rack is complete — this replaces the status bar with a
   high-score board. Pink-dominant; the only screen where pink leads. */
export function HighScore({ title = 'ALL CARTRIDGES CLEARED', rows = [], footnote }) {
  return (
    <div style={{ position: 'relative', border: '1px solid var(--edge-alert)', background: 'linear-gradient(180deg,rgba(30,12,24,.85),rgba(11,8,15,.85))', boxShadow: '0 0 48px var(--pink-10),inset 0 1px 0 var(--sheen-1)', padding: 'var(--s-8) var(--s-7)', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 1, background: 'var(--marquee-underline)' }} />
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display)', letterSpacing: 'var(--ls-display)', color: '#FFE6EF', textShadow: 'var(--glow-text-pink)', textAlign: 'center' }}>{title}</div>
      <div style={{ marginTop: 'var(--s-8)', display: 'grid', gap: 1, background: 'var(--edge-alert)', border: '1px solid var(--edge-alert)' }}>
        {rows.map((r, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '58px 1fr auto', background: 'rgba(11,8,15,.9)', alignItems: 'center' }}>
            <span style={{ padding: 'var(--s-4)', fontFamily: 'var(--font-display)', fontSize: 'var(--fs-body-sm)', color: 'var(--pink)', fontVariantNumeric: 'tabular-nums' }}>{String(i + 1).padStart(2, '0')}</span>
            <span style={{ padding: 'var(--s-4) 0', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-body)', color: 'var(--phos)' }}>{r.label}</span>
            <span style={{ padding: 'var(--s-4) var(--s-5)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--cyan-55)' }}>{r.value}</span>
          </div>
        ))}
      </div>
      {footnote ? <div style={{ marginTop: 'var(--s-7)', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-body-sm)', letterSpacing: 'var(--ls-label)', lineHeight: 1.8, color: 'var(--phos-dim)' }}>{footnote}</div> : null}
    </div>
  );
}
