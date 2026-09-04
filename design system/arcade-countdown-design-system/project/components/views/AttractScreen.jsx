import React from 'react';

/* The arrival moment. A full-bleed still, an insert-coin prompt, one keypress
   or click to enter the rack. Shown once per session. */
export function AttractScreen({ image, title, subtitle, prompt = 'Press any key to begin', onStart }) {
  React.useEffect(() => {
    const h = () => onStart && onStart();
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onStart]);
  return (
    <div onClick={onStart} style={{ position: 'fixed', inset: 0, zIndex: 90, background: 'var(--ink)', cursor: 'pointer', overflow: 'hidden' }}>
      {image ? <img src={image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .5, filter: 'saturate(.7) contrast(1.05)' }} /> : null}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 55% at 50% 45%,rgba(4,5,10,.35),rgba(4,5,10,.94) 78%)' }} />
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, height: '18%', background: 'linear-gradient(180deg,transparent,var(--cyan-08),transparent)', animation: 'sweep 5.5s linear infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'var(--s-7)', gap: 'var(--s-5)' }}>
        {subtitle ? <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label-lg)', letterSpacing: 'var(--ls-widest)', textTransform: 'uppercase', color: 'var(--cyan-55)' }}>{subtitle}</div> : null}
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,6vw,66px)', lineHeight: 'var(--lh-display)', letterSpacing: 'var(--ls-display)', color: 'var(--phos-bright)', textShadow: 'var(--glow-text)' }}>{title}</h1>
        <div style={{ marginTop: 'var(--s-6)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-body-sm)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--pink)', textShadow: 'var(--glow-text-pink)', animation: 'tick 1.4s steps(1,end) infinite' }}>{prompt}</div>
      </div>
    </div>
  );
}
