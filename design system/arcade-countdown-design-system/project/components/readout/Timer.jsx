import React from 'react';

/* Tabular countdown. Segmented so the digits sit in fixed cells and never jitter. */
export function Timer({ target, value, size = 'md', tone = 'cyan', segmented = false }) {
  const [txt, setTxt] = React.useState(value || '');
  React.useEffect(() => {
    if (value !== undefined || !target) return;
    const tick = () => {
      const diff = new Date(target) - new Date();
      if (diff <= 0) return setTxt('00:00:00');
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      const p = (n) => String(n).padStart(2, '0');
      setTxt(d > 0 ? `${d}D ${p(h)}:${p(m)}:${p(s)}` : `${p(h)}:${p(m)}:${p(s)}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target, value]);
  const out = value !== undefined ? value : txt;
  const fs = size === 'lg' ? 34 : size === 'sm' ? 11 : 19;
  const col = tone === 'pink' ? 'var(--pink)' : 'var(--cyan)';
  const base = { fontFamily: size === 'sm' ? 'var(--font-mono)' : 'var(--font-display)', fontSize: fs, fontVariantNumeric: 'tabular-nums', color: col, letterSpacing: size === 'sm' ? '.16em' : 'var(--ls-display)', textShadow: tone === 'pink' ? 'var(--glow-text-pink)' : 'var(--glow-text-sm)' };
  if (!segmented) return <span style={base}>{out}</span>;
  return (
    <span style={{ display: 'inline-flex', gap: 3 }}>
      {out.split('').map((ch, i) => /[0-9]/.test(ch)
        ? <span key={i} style={{ ...base, display: 'inline-grid', placeItems: 'center', minWidth: fs * 0.72, padding: '4px 2px', background: 'rgba(0,0,0,.45)', border: '1px solid var(--edge)' }}>{ch}</span>
        : <span key={i} style={{ ...base, display: 'inline-grid', placeItems: 'center', opacity: .55, animation: ch === ':' ? 'tick 1s steps(1,end) infinite' : 'none' }}>{ch}</span>)}
    </span>
  );
}
