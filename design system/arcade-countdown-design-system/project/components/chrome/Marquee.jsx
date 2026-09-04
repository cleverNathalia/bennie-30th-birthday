import React from 'react';

/* The backlit sign at the top of the cabinet. One per page, always first. */
export function Marquee({ kickerLeft, kickerRight, title, subtitle, children }) {
  return (
    <div style={{ position: 'relative', border: '1px solid var(--edge)', background: 'var(--surface-marquee)', boxShadow: 'var(--mat-marquee)', padding: 'var(--marquee-pad)', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 110, background: 'var(--marquee-backlight)' }} />
      <div aria-hidden="true" style={{ position: 'absolute', left: '8%', right: '8%', bottom: -1, height: 2, background: 'var(--marquee-underline)', filter: 'blur(1px)' }} />
      {(kickerLeft || kickerRight) && (
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--s-4)', font: 'var(--type-label)', fontSize: 'var(--fs-label-lg)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--cyan-55)' }}>
          <span>{kickerLeft}</span><span>{kickerRight}</span>
        </div>
      )}
      {title && <h1 style={{ position: 'relative', margin: 'var(--s-5) 0 var(--s-3)', fontFamily: 'var(--font-display)', fontSize: 'var(--fs-marquee)', letterSpacing: 'var(--ls-display)', lineHeight: 'var(--lh-display)', color: 'var(--phos-bright)', textShadow: 'var(--glow-text)', animation: 'marqueeBuzz 5.5s steps(1,end) infinite' }}>{title}</h1>}
      {subtitle && <div style={{ position: 'relative', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-body-sm)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--pink)', textShadow: 'var(--glow-text-pink)' }}>{subtitle}</div>}
      {children}
    </div>
  );
}
