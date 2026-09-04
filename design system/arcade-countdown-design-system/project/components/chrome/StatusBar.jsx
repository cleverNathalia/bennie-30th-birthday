import React from 'react';

/* A row of readouts in a hairline-divided strip. Two to four cells. */
export function StatusBar({ children, columns }) {
  const n = columns || React.Children.count(children) || 3;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${n},1fr)`, gap: 1, background: 'var(--edge)', border: '1px solid var(--edge)' }}>{children}</div>
  );
}

/* One readout. Label above, Michroma value below. */
export function StatCell({ label, value, tone = 'cyan' }) {
  return (
    <div style={{ background: 'var(--surface-recess)', padding: 'var(--s-4) var(--s-5)' }}>
      <div style={{ font: 'var(--type-label)', fontSize: '9.5px', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--phos-dim)' }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '19px', marginTop: 'var(--s-2)', fontVariantNumeric: 'tabular-nums', color: tone === 'pink' ? 'var(--pink)' : 'var(--cyan)', textShadow: tone === 'pink' ? 'var(--glow-text-pink)' : 'var(--glow-text-sm)' }}>{value}</div>
    </div>
  );
}
